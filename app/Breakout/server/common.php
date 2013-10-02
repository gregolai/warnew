<?php

include('class.database.php');

// CONVERT ERRORS TO EXCEPTIONS
class ErrorOrWarningException extends Exception
{
    public function __construct( $code, $message, $file, $line) {
    	parent::__construct( $message, $code );
    	$this->file = $file;
    	$this->line = $line;
    }
}
function errorToException($code, $message, $file, $line, $context){
	throw new ErrorOrWarningException($code, $message, $file, $line);
}
set_error_handler('errorToException');

function success($payload){
	echo json_encode(array(
		'success' => true,
		'payload' => $payload
	));
}

function failure($payload){
	echo json_encode(array(
		'success' => false,
		'payload' => $payload
	));
}