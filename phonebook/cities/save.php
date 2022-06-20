<?php
session_start();

include "../connectDB.php";
include "../databaseFunctions.php";

$name = $_POST['city_name'];
$country_id = $_POST['country_id'];

saveCityToDatabase($name, $country_id);

header("location:index.php");
