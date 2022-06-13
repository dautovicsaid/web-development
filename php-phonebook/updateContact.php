<?php
include 'connectDB.php';
include 'databaseFunctions.php';

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$id = $_POST['id'];

updateContact($first_name, $last_name, $email, $id);

header('location:index.php');
