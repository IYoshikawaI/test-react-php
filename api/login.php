<?php

header("Access-Control-Allow-Origin: https://iyoshikawai.github.io/test-react-php/");
header("Access-Control-Allow-Headers: Content-Type");

$request = file_get_contents("php://input");
$data = json_decode($request);

$conn = new mysqli("localhost", "root", "", "login_react_php");

$sql = "SELECT * from users WHERE email = ? AND password = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ss", $data->email, $data->password);
mysqli_stmt_execute($stmt);
$res = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($res) == 1) {
    $row = mysqli_fetch_assoc($res);
    $userData = array(
        'id' => $row['id'],
        'username' => $row['username'],
        'email' => $row['email'],
        'password' => $row['password']
    );
    echo json_encode([
        'success' => true,
        'data' => $userData
    ]);
} else {
    echo json_encode([
        'success' => false,
        'error' => 'Incorrect email or password!'
    ]);
}
mysqli_stmt_close($stmt);
$conn->close();
?>