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
    <a href="javascript:;" class="header__btn-back">Back</a><h1 class="header__title">Member Registration 3/4</h1>
  </div>
</header>

            <div class="wrap__content--tb">
                <div class="content">
                    <div class="join">
                        <form id="inputNameForm" name="inputNameForm" action="join_step4.php" method="post">
                            <div class="join-input">
                                <div class="join-input__row">
                                    <div class="input-title">
                                        <label class="join-title">Name</label>
                                    </div>
                                    <div class="text-input__wrapper mb5">
                                        <input
                                            type="text"
                                            name="step3_surname"
                                            class="join-input surname clearInput"
                                            placeholder="Surname">
                                    </div>
                                    <div class="text-input__wrapper">
                                        <input
                                            type="text"
                                            name="step3_name"
                                            class="join-input name clearInput"
                                            placeholder="Name">
                                    </div>
                                </div>
                                <div class="join-input__row mt10">
                                    <div class="input-title">
                                        <label class="join-title">Mobile(contact)</label>
                                    </div>
                                    <div class="text-input__wrapper">
                                        <input
                                            type="number"
                                            name="step3_phone"
                                            maxlength="10"
                                            oninput="maxLengthCheck(this)"
                                            class="join-input phone clearInput"
                                            placeholder="-없이 휴대폰 번호 숫자만 입력하세요.">
                                        <div class="input-message"></div>
                                    </div>
                                </div>

                                <input type="hidden" name="step3_email" value="<?php echo $_POST['step2_email'] ?>" >
                                <input type="hidden" name="step3_pwd" value="<?php echo $_POST['step2_pwd'] ?>" >
                            </div>
                        </form>
                    </div>
                </div>
                <!-- S:Bottom Btn -->
                <div class="btns-bottom bottom-fixed">
                    <button class="btn-consult--blue btn-next" disabled="disabled" onclick="onNextStep()">Next</button>
                </div>
                <!-- E:Bottom Btn -->
            </div>

        </div>
        <script>

            $(".clearInput").clearInput({value: ""});

            $(".join-input.surname, .join-input.name").keyup(function (evt) {
                validate();
            });

            //번호입력 Max 체크
            function maxLengthCheck(object) {
                if (object.value.length > object.maxLength) {
                    object.value = object
                        .value
                        .slice(0, object.maxLength);
                }
                validate();
            }

            function validate(){
                var surname = $(".join-input.surname");
                var name = $(".join-input.name");
                var phone = $(".join-input.phone");

                if( surname.val().length > 0 && name.val().length > 0 && phone.val().length > 0 ){
                    $(".btn-next").removeAttr("disabled");
                }else{
                    $(".btn-next").attr("disabled", "disabled");
                }
            }

            function onNextStep() {
                var surName = $(".join-input.surname").val();
                var name = $(".join-input.name").val();
                var phone = $(".join-input.phone").val();
                console.log(surName, " / ", name, " / ", phone);
                
                //location.href = 'join_step4.html'

                document.inputNameForm.submit();
            }
        </script>
    </body>

</html>