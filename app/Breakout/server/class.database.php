<?php

class DB
{
	private $_dbh;
	private $_affectedRows = 0;
	private $_insertID = 0;

	public function __construct($host, $username, $password, $database)
	{
		$this->_dbh = new mysqli($host, $username, $password, $database);
		
		if(!$this->_dbh || $this->_dbh->connect_error) {
			throw new Exception('Failed to connect to database.');
		}
	}

	public function getAffectedRows()
	{
		return $this->_affectedRows;
	}
	
	public function getInsertID()
	{
		return $this->_insertID;
	}
	
	public function lock()
	{
		$args = func_get_args();
		$nArgs = func_num_args();
	
		if($nArgs < 1 || $nArgs & 1)
			throw new Exception('DB::lock params are invalid.');

		$locks = array();
		for($i=0; $i<$nArgs; $i+=2){
			$locks[] = $args[$i] . ' ' . $args[$i+1];
		}
		$this->_dbh->query('LOCK TABLES ' . join(', ', $locks));
	}
	
	public function unlock()
	{
		$this->_dbh->query('UNLOCK TABLES');
	}
	
	public function escapeString($str)
	{
		return $this->_dbh->real_escape_string($str);
	}
	
	public function query()
	{
		$args = func_get_args();
		$nArgs = func_num_args();
		
		// QUERY MUST CONTAIN AT LEAST A SQL STATEMENT
		if($nArgs==0){
			throw new Exception('Query requires at least one parameter.');
		}
		
		// PREPARE THE STATEMENT
		$sql = $args[0];
		$stmt = $this->_dbh->prepare($sql);
		if(!$stmt){
			throw new Exception('Problem preparing query. ' . $this->_dbh->error);
		}
		
		// GET BIND PARAMS
		$bindParams = array();
		if($nArgs > 1){
			if($nArgs == 2 && is_array($args[1])){
				// ARRAY WAS PASSED IN AS PARAMS
				$bindParams = $args[1];
			} else {
				// EACH ARG IS A PARAM
				$bindParams = array_slice($args, 1);
			}
		}

		// BIND PARAMS IF NOT EMPTY
		$numParams = count($bindParams);
		if($numParams !== 0){
			$params = array('');
			
			for($i=0; $i<$numParams; ++$i){
			
				// GET THE VALUE OF THE PARAM
				$value = $bindParams[$i];

				// FIRST ELEMENT IS THE TYPE STRING
				$params[0] .= self::_determineType($value);
				
				// PASS PARAMETER BY REFERENCE
				$params[] = &$bindParams[$i];

				// SANITIZE THE PARAM BEFORE IT'S INSERTED INTO DATABASE
				$bindParams[$i] = $this->_dbh->real_escape_string($value);		
			}
			
			call_user_func_array(
				array($stmt, 'bind_param'),
				$params
			);
		}

		// EXECUTE QUERY
		$stmt->execute();
		
		// STORE AFFECTED ROWS AND INSERT ID
		$this->_affectedRows = $stmt->affected_rows;
		$this->_insertID = $stmt->insert_id;
		
		// RETURN RESULTS AS AN ASSOC ARRAY
		$results = self::_dynamicBindResults($stmt);
		return $results;
	}

	private static function _determineType($item) 
	{
		switch (gettype($item)) {
			case 'integer':
				return 'i';
			case 'blob':
				return 'b';
			case 'double':
				return 'd';
			case 'NULL':
			case 'string':
			default:
				return 's';
		}
	}
	
	private static function _dynamicBindResults($stmt) 
	{
		$parameters = array();
		$results = array();

		$meta = $stmt->result_metadata();

		if($meta == NULL || $meta->field_count <= 0)
			return NULL;
		
		while ($field = $meta->fetch_field()) {
			$parameters[] = &$row[$field->name];
		}

		call_user_func_array(array($stmt, 'bind_result'), $parameters);

		while ($stmt->fetch()) {
			$x = array();
			foreach ($row as $key => $val) {
				if(gettype($val) == 'string')
					$val = stripcslashes($val);
				$x[$key] = $val;
			}
			array_push($results, $x);
		}
		return $results;
	}
}