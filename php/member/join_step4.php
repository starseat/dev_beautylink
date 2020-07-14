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
    <a href="javascript:;" class="header__btn-back">Back</a><h1 class="header__title">Member Registration 4/4</h1>
  </div>
</header>

            <div class="wrap__content--tb">
                <div class="content">
                    <div class="join">
                        <form id="inputOtherForm" name="inputOtherForm" action="join_step_end.php" method="post">
                            <div class="join-input">
                                <div class="join-input__row">
                                    <div class="input-title">
                                        <label class="join-title">Gender</label>
                                    </div>
                                    <div class="gender-select">
                                        <ul class="data-area">
                                            <li><input type="radio" id="radio_woman" name="step4_gender" value="woman" checked="checked">
                                                <label for="radio_woman">여성</label>
                                            </li>
                                            <li><input type="radio" id="man" name="step4_gender" value="man">
                                                <label for="man">남성</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="join-input__row">
                                    <div class="input-title">
                                        <label class="join-title">Birth</label>
                                    </div>
                                    <input
                                        type="text"
                                        class="join-input date-picker"
                                        placeholder="연락 가능한 일자를 선택하세요."
                                        readonly="readonly"
                                        name="selectDate">
                                </div>
                                <div class="join-input__row mt10">
                                    <div class="input-title">
                                        <label class="join-title">Nickname</label>
                                        <span class="join-info">availability</span>
                                    </div>
                                    <div class="text-input__wrapper">
                                        <input
                                            type="text"
                                            name="step4_nickname"
                                            class="join-input nickname clearInput"
                                            placeholder="닉네임을 입력해주세요.">
                                        <div class="input-message"></div>
                                    </div>
                                </div>
                                <div class="join-input__row mt10">
                                    <div class="input-title">
                                        <div class="join-title">Terms and Conditions</div>
                                        <span class="check-connection check-all">
                                            <input type="checkbox" id="check-all" name="check-all">
                                            <label for="check-all">전체 동의</label>
                                        </span>
                                    </div>
                                    <div class="check-terms">
                                        <ul>
                                            <li>
                                                <span class="check-connection">
                                                    <input type="checkbox" id="check-terms" name="check-terms">
                                                    <label for="check-terms">뷰티링크코리아 이용약관동의(필수)</label>
                                                </span>
                                                <span class="btn-more__plug--btn">MORE</span>
                                            </li>
                                            <li>
                                                <span class="check-connection">
                                                    <input type="checkbox" id="check-conditions" name="check-conditions">
                                                    <label for="check-conditions">개인정보 취급방침 동의(필수)</label>
                                                </span>
                                                <span class="btn-more__plug--btn">MORE</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> <!-- .join-input -->

                            <input type="hidden" name="step4_email" value="<?php echo $_POST['step3_email'] ?>" >
                            <input type="hidden" name="step4_pwd" value="<?php echo $_POST['step3_pwd'] ?>" >
                            <input type="hidden" name="step4_surname" value="<?php echo $_POST['step3_surname'] ?>" >
                            <input type="hidden" name="step4_name" value="<?php echo $_POST['step3_name'] ?>" >
                            <input type="hidden" name="step4_phone" value="<?php echo $_POST['step3_phone'] ?>" >
                            <input type="hidden" name="step4_gubun" id="step4_gubun" value="" >
                        </form>
                    </div> <!-- .join -->
                    
                </div> <!-- .content -->
                <!-- S:Bottom Btn -->
                <div class="btns-bottom bottom-fixed">
                    <button class="btn-consult--blue btn-submit" disabled="disabled" onclick="onSubmit()">Submit</button>
                </div>
                <!-- E:Bottom Btn -->
            </div> <!-- .wrap__content--tb -->

        </div>
        <script>

            $(".clearInput").clearInput({
                value: "",
                onClear: function (e) {
                    validate();
                }
            });

            //전체 동의
            $("#check-all").click(function () {
                var chk = $(this).is(":checked");
                if (chk) {
                    $(".check-terms input").prop('checked', true);
                } else {
                    $(".check-terms input").prop('checked', false);
                }
                validate();
            });

            //이용약관동의, 개인정보 동의
            $("#check-terms, #check-conditions").click(function () {
                checkedState();
                validate();
            });


            $(".join-input.nickname").keyup(function (evt) {
                validate();
            });

            function checkedState() {
                if ($('input:checkbox[id="check-terms"]').is(":checked") && $('input:checkbox[id="check-conditions"]').is(":checked")) {
                    $("#check-all").prop('checked', true);
                } else {
                    $("#check-all").prop('checked', false);
                }
            }

            function validate() {
                var dateInput = $(".join-input.date-picker");
                var nicknameInput = $(".join-input.nickname")
                var checkAll = $('input:checkbox[id="check-all"]');
                console.log(dateInput.val(), dateInput.val().length)
                if (dateInput.val().length > 0 && nicknameInput.val().length > 0 && checkAll.is(":checked")) {
                    $(".btn-submit").removeAttr("disabled");
                } else {
                    $(".btn-submit").attr("disabled", "disabled");
                }
            }

            //생일
            var localeFormat = {
                format: 'YYYY-MM-DD',
                "daysOfWeek": [
                    "일",
                    "월",
                    "화",
                    "수",
                    "목",
                    "금",
                    "토"
                ],
                "monthNames": [
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월"
                ]
            }
            $('input[name="selectDate"]').daterangepicker({
                autoApply: true,
                autoUpdateInput: true,
                singleDatePicker: true,
                locale: localeFormat                
            }, function (start) {
                console.log(start.format('YYYY-MM-DD'));
                setTimeout(function(){
                    validate();                
                },100)
                
            });
            $('input[name="selectDate"]').val('');

            function onSubmit(){
                var genderRadio = $('input[name="step4_gender"]:checked').val();
                var birthDay = $('input[name="selectDate"]').val();
                var nickName = $(".join-input.nickname").val();
                console.log(genderRadio, " / " ,birthDay, " / " ,nickName)

                var checkTerm = $('#check-terms').val();
                var checkCondition = $('#check-conditions').val();
                var gubun = 0;
                if(checkTerm == 'on' && checkCondition == 'on') {
                    gubun = 1;
                }
                $('#step4_gubun').val(gubun);

                document.inputOtherForm.submit();
                
            }
        </script>
    </body>

</html>