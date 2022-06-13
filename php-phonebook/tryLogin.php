<?php 

    session_start();
    include "fileFunctions.php";
    $users = getUsersFromFile("users.json");

    $username = $_POST['username'];
    $password = $_POST['password'];

    foreach($users as $user){
        if($user['username'] == $username && $user['password'] == $password){
            $_SESSION['user'] = $user;
            $_SESSION['loggedIn'] = true;
            header("location:index.php");
            exit;
        }
    }

    header("location:login.php?msg=wrongCredentials");
    exit;
?>