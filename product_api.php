<?php

/* 
 * minimalistic dummy api to provide data for product tabs
*/

$response = array(array(), array(), array());
$response[0]["product_name"] = "1 month";
$response[0]["interest_per_day"] = "0.8";
$response[1]["product_name"] = "2 months";
$response[1]["interest_per_day"] = "0.9";
$response[2]["product_name"] = "3 months";
$response[2]["interest_per_day"] = "1.0";

header('Content-type: application/json');
echo json_encode($response);
?>
