<?php

header("content-type: application/json");

if(isset($_GET['id'])){
  $json->id = $_GET['id'];
  $json->name = "Alex Schulman";
  $json->img = "http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg";
  $json->thoughts = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit sapien vitae libero vehicula vel vehicula lectus malesuada. Aenean at.";
  $json->collected = "12.045";
} else {
  $json = array(
    '1' => array( // Detta är bloggarens id
      'name'      => 'Alex Schulman',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '12.045',
      'position'  => '1'
    ),
    '2' => array(
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    ),
    '3' => array(
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    ),
    '4' => array(
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    ),
    '5' => array(
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    ),
    '6' => array(
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    ),
    '7' => array(
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    )
  ); 
}

echo json_encode($json);