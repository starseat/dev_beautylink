var MySurgeryList = (function () {
    function load() {
        $.ajax(
                {url: "../data/mypage/my_surgery_list.json", type: "GET", dataType: "json"}
            )
            .done(function (json) {
                var data = json;
                var list = "";
                for (var i = 0; i < data.length; i++) {
                    var date = data[i].date;
                    var title = data[i].title;
                    var info = data[i].info;
                    var price = data[i].price;
                    var hospitalName = data[i].hospitalName;
                    var logo = data[i].logo;
                    var btnType = data[i].btnType;
                    list += '<div class="swiper-slide">'
                    list += '<div class="surgery-item">'
                    list += '<div class="surgery-item__top">'
                    list += '<span class="surgery-item__icon"></span>'
                    list += '<span class="surgery-item__title">' + title + '</span>'
                    list += '<span class="surgery-item__date">' + date + '</span>'
                    list += '</div>'
                    list += '<div class="surgery-item__bottom">'
                    list += '<div class="surgery-item__info">' + info + '</div>'
                    list += '<p class="surgery-item__price">' + price + '원</p>'
                    list += '<div class="surgery-item__hospital">'
                    list += '<img class="surgery-hospital__logo" src="' + logo + '" alt="logo">'
                    list += '<span class="surgery-hospital__name">' + hospitalName + '</span>'
                    list += '</div>'
                    list += '</div>'
                    list += '<div class="surgery-item__write">'
                    if (btnType === "write") {
                        list += '<a href="javascript:;" class="surgery-write__btn"><span class="icon-write"></s' +
                                'pan>Write Review</a>'
                    } else {
                        list += '<a href="javascript:;" class="view-review__btn">View My Review</a>'
                    }
                    list += '</div></div></div>'
                }
                $(".surgery-item__list .swiper-wrapper").append(list);

                var surgeryItem = new CreateSliderPlayer(".surgery-item__list", 1);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }

    return {load: load}
})();
