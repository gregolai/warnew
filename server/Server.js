var fs = require('fs');
var https = require('https');
var app = require('express')();

var SocketIO = require("socket.io");
var MongoDB = require("mongodb");
var Util = require("./Util");

var httpsOpts = {
    key: fs.readFileSync('/etc/letsencrypt/live/gregoryland.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/gregoryland.com/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/gregoryland.com/chain.pem')
};
var server = https.createServer(httpsOpts, app);


exports.db;
exports.io = SocketIO.listen(server);

server.listen(1337); // server port

MongoDB.MongoClient.connect("mongodb://127.0.0.1:27017/WarNew", function (err, dbObj) {
    if (err)
        throw err;
    exports.db = dbObj;
    console.log("DATABASE CONNECTED".yellow);
});
exports.io.configure(function () {
    exports.io.set("log level", 2);
    exports.io.set("authorization", function (handshake, callback) {
        _waitForDb(function () {
            var q = handshake.query;
            if (q) {
                var clientAddr = handshake.address.address;
                var clientAuth = Util.Sanitize.toString(q["auth"]);
                var clientId = clientAddr + "_" + clientAuth;
                var client = _clients[clientId];
                console.log("Auth:", clientAuth);
                if (client) {
                    if (client.socket) {
                        client.socket.disconnect();
                    }
                }
                else {
                    clientAuth = Util.makeGuid(16);
                    clientId = clientAddr + "_" + clientAuth;
                    client = _clients[clientId] = { id: clientId, addr: clientAddr, auth: clientAuth, socket: null, user: { username: "User_" + (++_prevUserNumber) } };
                    console.log("NEW CLIENT CREATED:", client.id);
                }
                handshake.clientId = clientId;
                callback(null, true);
            }
            else {
                callback(null, false);
            }
        });
    });
});
function getClient(socket) {
    return _clients[socket.handshake.clientId] || null;
}
exports.getClient = getClient;
var _clients = {};
var _clientsByUsername = {};
var _disconnectTimers = {};
var _prevUserNumber = 0;
function _waitForDb(callback) {
    if (exports.db) {
        callback();
        return;
    }
    console.log("DB NOT READY YET");
    setTimeout(function () { _waitForDb(callback); }, 40);
}
