<?php
header("Access-Control-Allow-Headers: X-Requested-With, X-Prototype-Version"); 

echo '현재 PHP 버전: ' . phpversion();
echo '<br>';

// include('db_conn.php');
// mysql_select_db("howmuchdoc");

$email = $_POST['login_email'];
$pwd = $_POST['login_pwd'];  // ??

echo '$email: ' . $email;
echo '<br>';
echo '$pwd: ' . $pwd;
echo '<br>';

// 비밀번호 암호화  // https://cnpnote.tistory.com/entry/passwordhash-%EC%82%AC%EC%9A%A9%EB%B2%95
$options = [
    'salt' => 'beauty_link', 
    'cost' => 12 // the default cost is 10
];
$hashed_password = password_hash($pwd, PASSWORD_DEFAULT/*, $option*/);
echo '$hashed_password: '. $hashed_password;
echo '<br>';

// // 비밀번호 검증 참고용
if (password_verify($pwd, $hashed_password/*, $options*/)) {
    // Success!
    echo 'Password Matches !!! ';
}else {
    // Invalid credentials
    echo 'Password Mismatch T.T';
}
echo '<br>';


// $sql  = "SELECT ";
// $sql .= "user_login_email, user_sns_fg, user_name, user_nick_name, user_birth, user_email, user_mobile, user_reg_date";
// $sql .= " FROM DOC_USER WHERE ";
// $sql .= "email = '" . $email + "', password = '" . $hashed_password + "'";

// $result = mysqli_query($conn, $sql) or exit(mysql_error());
// test
// class Test {
//     public $email;
//     public $password;
//     public $hashed_password;

//     function __construct($email, $password, $hashed_password) {
//         $this->email = $email;
//         $this->password = $password;
//         $this->hashed_password = $hashed_password;
//     }
// }
// $result = new Test($email, $pwd, $hashed_password);
// echo 'result-email: ' . $result->email;
// echo '<br>';
// echo 'result-password: ' . $result->password;
// echo '<br>';
// echo 'result-hashed_password: ' . $result->hashed_password;
// echo '<br>';

$result = [
    'email' => $email, 
    'password' => $pwd, 
    'hashed_password' => $hashed_password
];
echo 'result-email: ' . $result['email'];
echo '<br>';
echo 'result-password: ' . $result['password'];
echo '<br>';
echo 'result-hashed_password: ' . $result['hashed_password'];
echo '<br>';

//echo $result;

// mysqli_close($conn);

// flush();

sleep(2);

if(!empty($result['email'])) {
    echo '로그인 성공';
    // email, 비밀번호 일치
    session_start();
    $_SESSION['login_email'] = $email;
    $_SESSION['login_user_info'] = serialize($result);
    echo "<br>";
    echo "session data: " . $_SESSION['login_user_info'];
    echo "<br>";
    sleep(2);
}
else {
    echo '로그인 실패 ㅠㅠ';
    echo ("<script>alert('email 또는 비밀번호가 잘못되었습니다.');</script>");
    exit;
}

// 로그아웃 시
// session_start();
// session_unset();
// session_destroy();

echo "<meta http-equiv='refresh' content='0 url=login_test.php' />";

?>
