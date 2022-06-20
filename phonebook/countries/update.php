<?php
include "../connectDB.php";
include "../databaseFunctions.php";

$name = $_POST['name'];
$id = $_POST['id'];

updateCountry($name, $id);

header('location:index.php');
