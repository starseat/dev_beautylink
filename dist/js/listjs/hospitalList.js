var HospitalList = (function () {
    function load(num) {
        $
            .ajax({
                url: "../data/hospital/hospital_list.json",
                data: {
                    query: num
                },
                type: "GET",
                dataType: "json"
            })
            .done(function (json) {
                var data = json;
                var list = "";
                for (var i = 0; i < data.length; i++) {
                    var score = data[i].score;
                    var like = data[i].like;
                    var likeCheck = data[i].likeCheck;
                    var hospitalName = data[i].hospitalName;
                    var info = data[i].info;
                    var logo = data[i].logo;
                    var likeState = likeCheck
                        ? "on"
                        : "";
                    list += '<li class="hospital-list--item">'
                    list += '<span class="hospital-list__logo">'
                    list += '<img src="' + logo + '" alt="logo">'
                    list += '</span>'
                    list += '<div class="hospital-list__score">'
                    list += '<span class="hospital-list__score--num">' + score + '.0</span>'
                    list += '<span class="hospital-list__score--star star-num' + score + '"></span>'
                    list += '</div>'
                    list += '<div class="hospital-list__title">' + hospitalName + '</div>'
                    list += '<div class="hospital-list__info">' + info + '</div>'
                    list += '<div class="hospital-list__favor" onClick="HospitalList.checkLike(this)">'
                    list += '<span class="hospital-list__favor--icon ' + likeState + '"></span>'
                    list += '<span class="hospital-list__favor--num">18</span>'
                    list += '</div>'
                    list += '</li>'

                }
                $(".hospital-list ul")
                    .empty()
                    .append(list);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }

    //Like Check
    function checkLike(target) {
        var selector = $(target);
        var likeIcon = selector.find(".hospital-list__favor--icon");
        var likeNum = selector.find(".hospital-list__favor--num");
        var currentNum = likeNum.text();
        if (likeIcon.hasClass("on")) {
            likeIcon.removeClass("on");
            currentNum--;
            //like 상태값 false, currentNum 값 POST 처리
        } else {
            likeIcon.addClass("on");
            currentNum++;
            //like 상태값 true, currentNum 값 POST 처리
        }
        likeNum.text(currentNum);
    }

    return {
        load:load,
        checkLike:checkLike
    }
})();

