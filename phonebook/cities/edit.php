<?php
include "../navbar.php";
include "../connectDB.php";
include "../databaseFunctions.php";

if (isset($_GET['id'])) {
    $city = findCityById($_GET['id']);
} else {
    header("location:index.php");
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Edit City</title>
</head>

<body>

    <div class="container">

        <div class="row mt-5">
            <div class="col-8 offset-2">
                <h3>Izmjena detalja grada</h3>
                <form action="update.php" method="POST">
                    <input type="hidden" name="id" value="<?= $city['id'] ?>">
                    <input type="text" required class="mt-3 form-control" name="city_name" placeholder="Unesite ime grada..." value="<?= $city['name'] ?>">
                    <select name="country_id" id="country_id" class="form-control mt-3" onchange="displayCities()">
                        <option value="" selected disabled>- odaberite državu -</option>
                        <?php
                        $countries = getCountries();
                        while ($country = mysqli_fetch_assoc($countries)) {
                            $countryId = $country['id'];
                            $countryName = $country['name'];
                            $selected = "";
                            if ($countryId == $city['country_id']) {
                                $selected = "selected";
                            }
                            echo "<option value=\"$countryId\" $selected >$countryName</option>";
                        }
                        ?>
                    </select>
                    <button class="btn float-end mt-3 btn-primary">Izmijeni grad</button>
                </form>
            </div>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>