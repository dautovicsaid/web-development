<?php
session_start();

include "../connectDB.php";
include "../databaseFunctions.php";

$name = $_POST['name'];

saveCountryToDatabase($name);

header("location:index.php");
