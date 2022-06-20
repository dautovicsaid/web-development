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
    <title>Create City</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>


    <div class="container">
        <div class="col-8 offset-2 mt-5">
            <h3>Dodavanje novog grada</h3>
            <form action="save.php" method="POST">
                <input type="text" required class="mt-3 form-control" name="city_name" placeholder="Unesite ime grada...">
                <select name="country_id" id="country_id" class="form-control mt-3">
                    <option value="" selected disabled>- odaberite državu -</option>
                    <?php
                    $countries = getCountries();
                    while ($country = mysqli_fetch_assoc($countries)) {
                        $countryId = $country['id'];
                        $countryName = $country['name'];
                        echo "<option value=\"$countryId\" >$countryName</option>";
                    }
                    ?>
                </select>

                <button class="btn float-end mt-3 btn-primary">Dodaj grad</button>
            </form>
        </div>
    </div>
</body>

</html>