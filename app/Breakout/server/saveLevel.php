<?php

include('common.php');

try {

	if(empty($_POST))
		throw new Exception('Post data is empty.');
	
	$post = $_POST;
	if(!array_key_exists('id', $post))
		throw new Exception('Level id not specified.');

	if(!array_key_exists('data', $post))
		throw new Exception('Data not specified.');
		
	$id = filter_var($post['id'], FILTER_SANITIZE_NUMBER_INT);
	$data = json_encode(json_decode($post['data']));
	
	// INSERT OR UPDATE LEVEL IN DATABASE
	$db = new DB('127.0.0.1', 'root', '', 'breakout');
	$db->lock('level', 'WRITE');
	{
		// INSERT OR UPDATE WORLD
		$sql = 'INSERT INTO level(id, data)';
		$sql .= ' VALUES(?, ?)';
		$sql .= ' ON DUPLICATE KEY UPDATE data=VALUES(data)';
		$db->query($sql, array($id, $data));
	}
	$db->unlock();

	success('');
	
} catch(Exception $ex){

	$str = 	"Cannot save level. Exception thrown:\n";
	$str .=	"  Code: " 		. $ex->getCode() 	. "\n";
	$str .=	"  Message: " 	. $ex->getMessage()	. "\n";
	$str .=	"  File: " 		. $ex->getFile() 	. "\n";
	$str .=	"  Line: " 		. $ex->getLine() 	. "\n";
	failure($str);
}
