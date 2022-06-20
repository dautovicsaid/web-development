<?php
session_start();
include "../navbar.php";
include "../connectDB.php";
include "../databaseFunctions.php";

if (!$_SESSION['loggedIn']) {
    header("location:login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Country</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>


    <div class="container">
        <div class="col-8 offset-2 mt-5">
            <h3>Dodavanje nove države</h3>
            <form action="save.php" method="POST">
                <input type="text" required class="mt-3 form-control" name="name" placeholder="Unesite ime države...">
                <button class="btn float-end mt-3 btn-primary">Dodaj državu</button>
            </form>
        </div>
    </div>
</body>

</html>