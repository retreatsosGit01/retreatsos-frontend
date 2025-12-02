<?php
header("Content-Type: application/json");

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data || empty($data["email"])) {
    echo json_encode(["status" => "error", "message" => "Missing email"]);
    http_response_code(400);
    exit;
}

$email = trim($data["email"]);

$secrets = parse_ini_file("/opt/retreatsos/vault/env/retreatsos-secrets.env");

$apiKey = $secrets["BREVO_API_KEY"] ?? null;
$toEmail = $secrets["BREVO_TO_EMAIL"] ?? null;
$fromEmail = $secrets["BREVO_FROM_EMAIL"] ?? null;

if (!$apiKey || !$toEmail || !$fromEmail) {
    echo json_encode(["status" => "error", "message" => "Missing secrets"]);
    http_response_code(500);
    exit;
}

$payload = [
    "sender" => ["email" => $fromEmail, "name" => "RetreatsOS"],
    "to" => [["email" => $toEmail]],
    "subject" => "New Lead from RetreatsOS Landing Page",
    "htmlContent" => "<p>New lead email captured:</p><p><strong>$email</strong></p>"
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.brevo.com/v3/smtp/email");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "accept: application/json",
    "api-key: $apiKey",
    "content-type: application/json"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpcode >= 200 && $httpcode < 300) {
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "error", "message" => "Mail send failed", "code" => $httpcode]);
    http_response_code(500);
}
