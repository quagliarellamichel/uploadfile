<?php
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++)
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    return $randomString;
}

$sourcePath = $_FILES['file']['tmp_name'];
echo $targetPath = "img/".$_POST['path']."/".generateRandomString();
move_uploaded_file($sourcePath, $targetPath);