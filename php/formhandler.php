<?php

  header("content-type: application/json");

  if(isset($_POST)){
    
    $json->url  = "http://www.ihelp.se/?p=insamling&id=1337205";
    $json->name = $_POST['name'];
    
  }
  
  echo(json_encode($json));

?>