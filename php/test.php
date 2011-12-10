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
    '2' => array(
      'id'        => '1',
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '7'
    ),
    '3' => array(
      'id'        => '2',
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '6'
    ),
    '4' => array(
      'id'        => '3',
      'name'      => 'Per',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '1'
    ),
    '5' => array(
      'id'        => '4',
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '4'
    ),
    '6' => array(
      'id'        => '5',
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '3'
    ),
    '7' => array(
      'id'        => '6',
      'name'      => 'Jason',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '10.987',
      'position'  => '2'
    ),
    '1' => array( // Detta är bloggarens id
      'id'        => '7',
      'name'      => 'Alex Schulman',
      'img'       => 'http://4.bp.blogspot.com/_L6zQ-ugpWic/TQFLWbdzl6I/AAAAAAAAACI/InMyQ9RXD48/s1600/alex.jpg',
      'collected' => '12.045',
      'position'  => '5'
    )
  ); 
}

echo json_encode($json);