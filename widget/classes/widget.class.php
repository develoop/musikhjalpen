<?php
	include "sql.class.php";
	class widget {
	
		public $sql;
		
		public function __construct() {
			$this->sql = new sql;	 
		}
		public function getInfo($id, $callback) {
			$info = $this->sql->_array("SELECT * FROM bloggare WHERE id = '$id'");
			if(!empty($info)) {
			$url = "http://www.ihelp.se/musik/index.php?open=" . $info[0]['id'];
			$position = $this->getPosition($info[0]['insamling']);
			$saldo = $this->sql->_cell("SELECT saldo FROM insamlingar WHERE id = '" . $info[0]['insamling'] . "'");
			$json = $callback . '({"id":"' . $info[0]['id'] . '","namn":"' . $info[0]['namn'] . '","position":"' . $position . '", "saldo":"' . $saldo . '","insamling":"' . $info[0]['insamling'] . '","url":"' . $url . '"})';
			} else {
				$json = $callback . '({"error":"Unvalid id"})';
			}
			return $json;
		}
		private function getPosition($id) {
			$insamlingar = $this->sql->_array("SELECT * FROM insamlingar JOIN bloggare ON insamlingar.id = bloggare.insamling ORDER BY insamlingar.saldo DESC");
			for($i = 0; $i<count($insamlingar); $i++) {
				if($insamlingar[$i]['insamling'] == $id) {
					$position = $i+1;	
				}
			}
			return $position;
		}
				
	}
	if(isset($_GET['id']) && !empty($_GET['id'])) {
		//Nycklar
		// id - namn - position - saldo - insamling - url
		$widget = new widget;
		$widgetInfo = $widget->getInfo($_GET['id'], $_GET['callback']);	
	} else {
		$widgetInfo = $_GET['callback'] . '({"error":"No id"})';
	}
	echo $widgetInfo;

?>