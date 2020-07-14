<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="utf-8">
<title>Beauty Link Korea</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<meta name="title" content="Beauty Link Korea">
<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
<link rel="canonical" href="http://www.beautylinkkorea.com/">

<meta name="keywords" content="Beauty Link Korea">
<meta name="description" content="Beauty Link Korea">

<meta name="twitter:card" content="Summary">
<meta name="twitter:site" content="@BeautyLinkKorea">
<meta name="twitter:creator" content="@BeautyLinkKorea">
<meta name="twitter:url" content="http://www.beautylinkkorea.com/">
<meta name="twitter:title" content="Beauty Link Korea">
<meta name="twitter:description" content="Beauty Link Korea">
<meta name="twitter:image" content="http://www.beautylinkkorea.com/image/logo-image-letter.png">
<meta property="og:url" content="http://www.beautylinkkorea.com/">
<meta property="og:image" content="http://www.beautylinkkorea.com/image/logo-image-letter.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Beauty Link Korea">
<meta property="og:locale" content="ko">
<meta property="og:title" content="Beauty Link Korea">
<meta property="og:description" content="Beauty Link Korea">
<meta property="og:country-name" content="sec">

<meta itemprop="name" content="Beauty Link Kore">
<meta itemprop="image" content="http://www.beautylinkkorea.com/image/logo-image-letter.png">
<meta itemprop="url" content="http://www.beautylinkkorea.com/">
<meta itemprop="description" content="Beauty Link Korea">
<meta itemprop="keywords" content="Beauty Link Korea">

<link rel="stylesheet" href=../css/beauty.min.css>

<script type="text/javascript" src=../js/plugin/jquery-3.4.1.min.js></script>
<script type="text/javascript" src=../js/plugin/swiper.min.js></script>
<script type="text/javascript" src=../js/plugin/beauty.clearInput.js></script>
<script type="text/javascript" src=../js/plugin/moment-with-locales.js></script>
<script type="text/javascript" src=../js/plugin/daterangepicker.js></script>
<script type="text/javascript" src=../js/uiControl.common.js></script>

</head>

<body>
  <div class="wrap">
    
<header class="header">
  <div class="header__title-wrap--back header-border">
    <a href="javascript:;" class="header__btn-back">Back</a><h1 class="header__title">Member Registration 1/4</h1>
  </div>
</header>

    <div class="wrap__content--tb">
      <div class="content">
        <div class="join">
          <div class="join-input">            
            <div class="join-input__row">
              <div class="input-title">
                <label class="join-title">e-mail</label>
                <span class="join-info">availability</span>
              </div>
              <form id="loginForm" name="loginForm" action="email_login_action.php" method="post">
                <div class="text-input__wrapper">
                  <input type="email" name="login_email" class="join-input email clearInput" placeholder="이메일을 입력하세요.">
                  <div class="input-message"></div>
                </div>
                <div class="input-title">
                    <label class="join-title">Password</label>
                </div>
                <div class="text-input__wrapper">
                    <input id="login_password"
                        type="password"
                        name="login_pwd"
                        class="join-input password clearInput"
                        placeholder="영문 숫자 특수문자 포함 8~16자로 조합해 주세요.">
                    <div class="input-message password"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- S:Bottom Btn -->
      <div class="btns-bottom bottom-fixed">
        <button class="btn-consult--blue btn-next" disabled onclick="doLogin()">로그인</button>
      </div>
      <!-- E:Bottom Btn -->
    </div>

  </div>
  <script>


    $(".clearInput").clearInput({
      value: "",
      onClear: function(e){        
        var selector = e.selector;
        var result = selector.next(".input-message");
        resetInput(selector, result);       
      }      
    });

    $(".join-input.email").keyup(function (evt) {
      var selector = $(evt.target);
      var value = selector.val();
      validate(selector, value);      
    });

    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    function validate(selector, value) {
      var result = $(".input-message");
      var email = value;      
      if( email.length === 0 ){
        resetInput(selector, result)
        return
      }

      if (validateEmail(email)) {
        result.text("사용가능한 이메일 입니다.");
        selector.closest(".text-input__wrapper").removeClass("warning").addClass("complete");
         $(".btn-next").removeAttr("disabled");
      } else {
        result.text("올바른 형식으로 입력해 주세요.");
        selector.closest(".text-input__wrapper").removeClass("complete").addClass("warning");
        $(".btn-next").attr("disabled", "disabled");
      }
      return false;
    }

    function resetInput(selector, result){
      result.text("");
      selector.closest(".text-input__wrapper").removeClass("warning complete");
      $(".btn-next").attr("disabled", "disabled");
    }

    function doLogin() {
      var email = $(".join-input.email").val();
      var pwd = $('#login_password').val();
      document.loginForm.submit();
    }


  </script>
</body>

</html>

