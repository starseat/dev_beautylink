<?php

header("Access-Control-Allow-Headers: X-Requested-With, X-Prototype-Version"); 

// include('db_conn.php');
// mysql_select_db("howmuchdoc");

// $email = $_POST['step4_email'];
// $pwd = $_POST['step4_pwd'];  // ??
// $surname = $_POST['step4_surname'];
// $name = $_POST['step4_name'];
// $phone = $_POST['step4_phone'];
// $gender = $_POST['step4_gender'];
// $birthday = $_POST['selectDate'];
// $nickname = $_POST['step4_nickname'];  // ??
// $gubun = $_POST['step4_gubun'];  // ??
// // auth 가 수술 희망월 ???


// echo '$email: ' . $email;
// echo '$pwd: ' . $pwd;
// echo '$surname: ' . $surname;
// echo '$name: ' . $name;
// echo '$phone: ' . $phone;
// echo '$gender: ' . $gender;
// echo '$birthday: ' . $birthday;
// echo '$nickname: ' . $nickname;

// // 비밀번호 암호화  // https://cnpnote.tistory.com/entry/passwordhash-%EC%82%AC%EC%9A%A9%EB%B2%95
// // $options = [
// //     'salt' => 'beauty_link', 
// //     'cost' => 12 // the default cost is 10
// // ];
// $hashed_password = password_hash($pwd, PASSWORD_DEFAULT /*, $option */);

// // // 비밀번호 검증 참고용
// // if (password_verify($pwd, $hashed_password /*, options */)) {
// //     // Success!
// //     echo 'Password Matches';
// // }else {
// //     // Invalid credentials
// //     echo 'Password Mismatch';
// // }


// $sql  = "INSERT INTO DOC_USER (";
// $sql .= "user_login_email, user_gubun, user_sns_fg, user_name, user_nick_name, user_birth, user_email, user_mobile, user_reg_date ";
// $sql .= " ) VALUES ( ";
// $sql .= "'" . $email . "', ";
// $sql .=       $gubun . ", ";
// $sql .=       "0, ";
// $sql .= "'" . $name . "', ";
// $sql .= "'" . $nickname . "', ";
// $sql .= "'" . $birthday . "', ";
// $sql .= "'" . $email . "', ";
// $sql .= "'" . $phone . "', ";
// $sql .=       "NOW()" . ")";

// $result = mysqli_query($conn, $sql) or exit(mysql_error());

// mysqli_close($conn);

// flush();

echo ("<script>alert('회원가입 되었습니다.');</script>");

?>

<meta http-equiv='refresh' content='0 url=login.php' />