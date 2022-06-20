<?php
include("fileFunctions.php");


$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

$contacts = getContactsFromFile();
$newContact = ["first_name" => $first_name, "last_name" => $last_name, "email" => $email];

//array_push($contacts, $newContact);
$contacts[] = $newContact;
saveContactsToFile($contacts);

header("location:./index.php");
