taskkill /im cmd.exe /fi "WindowTitle eq Administrator:  _NODE_"
title _NODE_
nodemon _server.js
exit
