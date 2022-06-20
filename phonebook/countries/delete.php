<?php
include "../connectDB.php";
include "../databaseFunctions.php";

if (isset($_GET['id'])) {
    $id = $_GET['id'];
} else {
    header("location:index.php");
}

if (deleteCountry($id) == false) {
?>
    <script>
        window.location.replace("index.php");
        alert('Nije moguće obrisati državu - postoje zavisni podaci.');
    </script>
<?php
} else {
    header("location:index.php");
}
