var EventList = (function () {
    function load() {
        $.ajax({
                url: "../data/mypage/event_list.json",
                type: "GET",
                dataType: "json"
            })
            .done(function (json) {
                var data = json;
                var list = "";
                for (var i = 0; i < data.length; i++) {
                    var hospitalName = data[i].hospitalName;
                    var date = data[i].date;
                    var price = data[i].price;
                    var like = data[i].like;
                    var logoUrl = data[i].logoUrl;
                    var bannerUrl = data[i].bannerUrl;
                  
                    list += '<li class="event-items__item">'
                    list += '<div class="event-items__banner">'
                    list += '<div class="item-like round-box">'
                    list += '<span class="item-like__icon on"></span>'
                    list += '<span class="item-like__num">' + like + '</span>'
                    list += '</div>'
                    list += '<img src="' + bannerUrl + '" alt="banner">'
                    list += '<div class="event-items__name">'
                    list += '<img src="' + logoUrl + '" alt="icon">' + hospitalName + '</div>'
                    list +='<div class="event-items__info">'
                    list += '<span class="event-date">' + date + '</span>'
                    list += '<span class="event-price">' + price + '</span>'
                    list +='</div></div></li>'
                }
                $(".event-items ul").empty().append(list);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }
    return {
        load:load
    }
})();

