<?

class sql {
	
	public $db;

	public function __construct() {
		$this->connection();

	}
	public function connection() {
		$mysql_server = "127.0.0.1";
		$mysql_user = "root";
		$mysql_password = "";
		$mysql_database = "ihelp";

		
		$this->db = mysql_connect($mysql_server, $mysql_user, $mysql_password);
		mysql_select_db($mysql_database, $this->db);
	}
	public function _query($query) {
		$this->connection();
		$q = mysql_query($query, $this->db) or die(mysql_error());
		return $q;
		mysql_close($this->db);

	}
	public function _id() {
		$this->connection();
		$q = mysql_insert_id();	
		return $q;
		mysql_close($this->db);
	}

	public function injection($string) {
		$string = htmlentities($string, ENT_QUOTES);
		return $string;
	}
	public function _fetch_assoc($q){
		$this->connection();
		if(!$q = mysql_fetch_assoc($q)){
			return false;
		}else{
			return $q;
		}
		mysql_close($this->db);
	}
	public function _fetch_row($q){
		$this->connection();
		if(!$g = mysql_fetch_row($q)){
			return false;
		}else{
			
			return $g;
		}
		mysql_close($this->db);
	}
	public function _cell($q){
		$this->connection();
		list($cell) = $this->_fetch_row($this->_query($q));
		return !is_null($cell) ? $cell : false;
		mysql_close($this->db);
	}
	public function _array($query){
		$this->connection();
		$arr = array();
		$q = $this->_query($query);
		while($g = $this->_fetch_assoc($q)){
				$arr[] = $g; 
		}
		return $arr;
		mysql_close($this->db);
	}
	public function _numRows($q) {
		$this->connection();
		$q = $this->_query($q);
		return mysql_num_rows($q);
		mysql_close($this->db);

	}


	
	
}


?>