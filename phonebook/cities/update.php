<?php
include "../connectDB.php";
include "../databaseFunctions.php";

$city_name = $_POST['city_name'];
$country_id = $_POST['country_id'];
$id = $_POST['id'];

updateCity($city_name, $country_id, $id);

header('location:index.php');
