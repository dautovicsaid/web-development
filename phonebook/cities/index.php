<?php
session_start();
include "../navbar.php";
include "../connectDB.php";
include "../databaseFunctions.php";

if (!$_SESSION['loggedIn']) {
    header("location:login.php");
    exit;
}

$searchTerm = "";
if (isset($_GET['searchTerm']) && $_GET['searchTerm'] != "") {
    $searchTerm = $_GET['searchTerm'];
    $cities = getCitiesFromDatabase($_GET['searchTerm']);
} else {
    $cities = getCitiesFromDatabase();
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Phonebook Cities</title>
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Tabela gradova</h3>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-8">

                <form action="index.php" method="GET">
                    <input type="text" value="<?= $searchTerm ?>" name="searchTerm" placeholder="Pretraga" class="form-control ">
                </form>

                <table class="table table-hover">

                    <thead>
                        <tr>
                            <th>Naziv</th>
                            <th>Drzava</th>
                            <th>Izmjena</th>
                            <th>Brisanje</th>
                        </tr>
                    </thead>

                    <?php

                    foreach ($cities as $city) {

                        $city_name = $city['name'];
                        $country_name = $city['country_name'];
                        $id = $city['id'];

                    ?>
                        <tr>
                            <td><?php echo $city_name; ?></td>
                            <td><?php echo $country_name; ?></td>
                            <td>
                                <a href='edit.php?id=<?php echo $id; ?>'>izmjena</a>
                            </td>
                            <td>
                                <a href="#" data-bs-city-id="<?php echo $id; ?>" data-bs-toggle='modal' data-bs-target='#deleteCityModal'>brisanje</a>
                            </td>
                        </tr>

                    <?php
                    }

                    ?>
                </table>
            </div>


            <div class="col-2 offset-2">
                <a href="create.php" class="btn btn-primary btn-block">Dodajte novi grad</a>
            </div>
        </div>

    </div>


    <div class="modal fade" id="deleteCityModal" tabindex="-1" aria-labelledby="deleteCityModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Jeste li sigurni da želite obrisati grad?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Otkaži</button>
                    <a class="btn btn-primary">Obriši</a>
                </div>
            </div>
        </div>
    </div>

    <script src="myapp.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>