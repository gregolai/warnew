<?php

include('common.php');

try {

	// INSERT OR UPDATE LEVEL IN DATABASE
	$db = new DB('127.0.0.1', 'root', '', 'breakout');
	$db->lock('level', 'READ');
	{
		$sql = 'SELECT * FROM level ORDER BY id ASC';
		$results = $db->query($sql);
	}
	$db->unlock();

	success(json_encode($results));
	
} catch(Exception $ex){

	$str = 	"Cannot retreive level list. Exception thrown:\n";
	$str .=	"  Code: " 		. $ex->getCode() 	. "\n";
	$str .=	"  Message: " 	. $ex->getMessage()	. "\n";
	$str .=	"  File: " 		. $ex->getFile() 	. "\n";
	$str .=	"  Line: " 		. $ex->getLine() 	. "\n";
	failure($str);
}
