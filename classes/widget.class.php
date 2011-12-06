<?php
	include "sql.class.php";
	class widget {
	
		public $sql;
		
		public function __construct() {
			$this->sql = new sql;	 
		}
		public function getInfo($id) {
			$info = $this->sql->_array("SELECT * FROM bloggare WHERE id = '$id'");
			$json = '{"id":"' . $info[0]['id'] . '","namn":"' . $info[0]['namn'] . '","bild":"' . $info[0]['bild'] . '","insamling":"' . $info[0]['insamling'] . '","url":"' . $info[0]['url'] . '"}';
			return $json;
		}
				
	}
	if(isset($_GET['id']) && !empty($_GET['id'])) {
		//Nycklar
		// id - namn - bild - insamling - url
		//!!!! OBS, INSAMLING kommer bytas ut mot SALDO när jag fått tag på min lokaladatabasdump
		$widget = new widget;
		$widgetInfo = $widget->getInfo($_GET['id']);	
	} else {
		$widgetInfo = '{"error":"No id"}';
	}
	//echo "<img src=\"../images/bloggare/" . $widgetInfo[0]['bild'] . "\" />";
	echo $widgetInfo;

?>