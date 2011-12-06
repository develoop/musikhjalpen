<?php
	include "sql.class.php";
	class widget {
	
		public $sql;
		
		public function __construct() {
			$this->sql = new sql;	 
		}
		public function getInfo($id) {
			$info = $this->sql->_array("SELECT * FROM bloggare WHERE id = '$id'");
			return $info;
		}
				
	}
	$widget = new widget;
	$widgetInfo = $widget->getInfo($_GET['id']);
	//Nycklar
	// id - namn - bild - insamling - url
	//!!!! OBS, INSAMLING kommer bytas ut mot SALDO när jag fått tag på min lokaladatabasdump
	//echo "<img src=\"../images/bloggare/" . $widgetInfo[0]['bild'] . "\" />";
	return $widgetInfo;

?>