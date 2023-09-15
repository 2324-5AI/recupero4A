<?php

$request = $_SERVER['REQUEST_URI'];
echo $request."<br>";

switch ($request) {
    case '/' :
    case '' :
        include("index.html");
        break;
    default:
        echo "Nessuna risorsa trovata";
        break;
}