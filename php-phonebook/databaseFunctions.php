<?php

// CRUD Methods from Phonebook

function getContactsFromDatabase($searchTerm = "")
{
    global $db_connection;
    $sql = "SELECT * FROM contacts";
    if ($searchTerm != "") {
        $term = strtolower($searchTerm);
        $sql .= " WHERE lower(first_name) like '%$term%' OR lower(last_name) like '%$term%' ";
    }
    $res = mysqli_query($db_connection, $sql);

    $contacts = [];
    while ($contact = mysqli_fetch_assoc($res)) {
        $contacts[] = $contact;
    };

    return $contacts;
};

function saveContactsToDatabase($first_name, $last_name, $email, $user_id)
{
    global $db_connection;

    $sql = "INSERT INTO 
    contacts (first_name,last_name,email,user_id) 
    VALUES ('$first_name','$last_name','$email',$user_id)";

    return $res = mysqli_query($db_connection, $sql);
};

function findContactById($id)
{
    global $db_connection;
    $sql = "SELECT * FROM contacts WHERE id = $id";
    $res = mysqli_query($db_connection, $sql);

    return mysqli_fetch_assoc($res);
}

function updateContact($first_name, $last_name, $email, $id)
{
    global $db_connection;

    $sql = "UPDATE contacts 
    SET first_name = '$first_name', last_name = '$last_name', email = '$email' 
    WHERE id = $id ";

    return mysqli_query($db_connection, $sql);
}

function deleteContact($id)
{
    global $db_connection;

    $sql = "DELETE FROM contacts WHERE id = $id";

    return mysqli_query($db_connection, $sql);
}
