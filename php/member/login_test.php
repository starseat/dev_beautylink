<?php

session_start();
$loginEmail = $_SESSION['login_email'];
echo '$loginEmail: '. $loginEmail;
echo '<br>';

sleep(5);

$loginUser = unserialize($_SESSION['login_user_info']);
// echo '$loginUser->email: '. $loginUser->email;
// echo '<br>';
// echo '$loginUser->password: '. $loginUser->password;
// echo '<br>';
// echo '$loginUser->hashed_password: '. $loginUser->hashed_password;
// echo '<br>';

echo '$loginUser->email: '. $loginUser['email'];
echo '<br>';
echo '$loginUser->password: '. $loginUser['password'];
echo '<br>';
echo '$loginUser->hashed_password: '. $loginUser['hashed_password'];
echo '<br>';


if( empty($loginUser['email'])) {
    echo ("<script>alert('로그인 X');</script>");
}
else {
    echo ("<script>alert('로그인 O - " . $loginUser . "');</script>");
}
?>
