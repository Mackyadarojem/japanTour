<?php
// Your API key
$apiKey = 'c317bf5614e263baa00587bc64331528';

// Latitude and longitude
$lat = 35.011665;
$lon = 135.768326;

// API URL
$url = "https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}&appid={$apiKey}";

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
  die('Error: ' . curl_error($ch));
}

// Close cURL resource
curl_close($ch);

// Decode the JSON response
$data = json_decode($response, true);

// Check if the decoding was successful
if (json_last_error() !== JSON_ERROR_NONE) {
  die('Error decoding JSON response.');
}

echo json_encode($data);

?>
