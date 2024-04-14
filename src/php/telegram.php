<?php

/* https://api.telegram.org/bot7157699716:AAEMFTv84NdvGvv-s9HVjyGF95dnjVB4NqI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "7157699716:AAEMFTv84NdvGvv-s9HVjyGF95dnjVB4NqI";
$chat_id = "-4178279588";
$arr = array(
  'Что делаем: ' => $treed,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>