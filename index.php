<?php

$request = $_SERVER['REQUEST_URI'];
echo $request."<br>";

switch ($request) {
    case '/' :
    case '' :
        include("index.html");
        break;

    case '/test' :
        include("server/test.php");
        break;
    
    case '/getStanze' :
        include("server/stanze.php");
        break;

    default:
        echo "Nessuna risorsa trovata";
        break;
}