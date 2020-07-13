var ReviewList = (function () {
    function load() {
        $.ajax({
                url: "../data/mypage/review_list.json",
                type: "GET",
                dataType: "json"
            })
            .done(function (json) {
                var data = json;
                var list = "";
                for (var i = 0; i < data.length; i++) {
                    var name = data[i].name;
                    var photoUrl = data[i].photoUrl;
                    list += '<li>'
                    list += '<img src="' + photoUrl +'" alt="photo">'
                    list += '<div class="pick-photo__info">'
                    list += '<p class="pick-photo__info--name">'+ name +'</p>'
                    list += '</div>'
                    list +='</li>'
                }
                $(".clean-review__bottom ul").empty().append(list);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }
    return {
        load:load
    }
})();

