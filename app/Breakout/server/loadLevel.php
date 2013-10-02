<?php

include('common.php');

try {
	if(empty($_POST))
		throw new Exception('Post data is empty.');
	
	$post = $_POST;
	if(!array_key_exists('id', $post))
		throw new Exception('Level id not specified.');
		
	$id = filter_var($post['id'], FILTER_SANITIZE_NUMBER_INT);
	
	// QUERY WORLD FROM DATABASE
	$db = new DB('127.0.0.1', 'root', '', 'breakout');
	$db->lock('level', 'READ');
	{
		$sql = 'SELECT data FROM level WHERE id=? LIMIT 1';
		$results = $db->query($sql, array($id));
	}
	$db->unlock();
	
	// THROW EXCEPTION IF NO LEVEL RETURNED
	if(count($results) !== 1)
		throw new Exception('Unable to load that level.');

	// ECHO JSON LEVEL STRING
	success($results[0]['data']);
	
} catch(Exception $ex){

	$str = 	"Cannot load level. Exception thrown:\n";
	$str .=	"  Code: " 		. $ex->getCode() 	. "\n";
	$str .=	"  Message: " 	. $ex->getMessage()	. "\n";
	$str .=	"  File: " 		. $ex->getFile() 	. "\n";
	$str .=	"  Line: " 		. $ex->getLine() 	. "\n";
	failure($str);
}
