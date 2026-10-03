<?php
include "koneksi.php";
$user = $_POST['user'];
$pw = $_POST["pw"]
$DataUser = "select * from data";
$DataDb = mysqli_query($koneksi,$DataUser);
$UserDb = $cek['NIK'];
$PwDb = $cek['pw'];
$cek = strcmp($user,$pw);
?>