<?php

session_start();
include "connectDB.php";
include "databaseFunctions.php";

// superglobals, $_POST, $_GET, $_SERVER
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
//$user_id = $_SESSION['user']['id'];
//TO DO: Refactor to real user id from DB
$user_id = 1;

saveContactsToDatabase($first_name, $last_name, $email, $user_id);

header("location:./index.php");
