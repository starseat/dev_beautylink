var ReservationList = (function () {
    function load(num) {
        $.ajax({
                url: "../data/mypage/reservation_list.json",
                type: "GET",
                dataType: "json"
            })
            .done(function (json) {
                var data = json;
                var list = "";
                for (var i = 0; i < data.length; i++) {
                    var date = data[i].date;
                    var num = data[i].num;
                    var hospitalName = data[i].hospitalName;
                    var info = data[i].info;
                    var state = data[i].state;                    
                    list += '<li class="reservation-list__item ' + state + '">'
                    list += '<span class="reservation-list__logo"></span>'
                    list += '<div class="reservation-list__date"><strong class="date-s">' + date + '</strong><span class="divide-line">|</span><strong class="date-e">' + num + '</strong></div>'
                    list += '<div class="reservation-list__title">' + hospitalName + '</div>'
                    list += '<div class="reservation-list__info">' + info + '</div>'
                    list += '<a href="javascript:;" class="detail-arrow__icon btn-reservation__detail">Link</a>'
                    list +='</li>'
                }
                $(".reservation-list ul")
                    .empty()
                    .append(list);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }
    return {load: load}
})();
