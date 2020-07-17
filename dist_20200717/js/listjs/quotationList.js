var QuotationList = (function () {
    function load(num) {
        $.ajax({
                url: "../data/mypage/quotation_list.json",
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
                    var state = data[i].state;
                    var date = data[i].date;
                    var title = data[i].title;
                    var info = data[i].info;
                    list += '<li>'
                    list += '<div class="quotation-item ' + state + '">'
                    list += '<div class="quotation-item__top">'
                    list += '<span class="quotation-top__icon"></span>'
                    list += '<span class="quotation-top__date">' + date + '</span>'
                    list += '</div>'
                    list += '<div class="quotation-item__bottom">'
                    list += '<div class="quotation-bottom__part">' + title + '</div>'
                    list += '<div class="quotation-bottom__info">' + info + '</div>'
                    list += '</div></div></li>'                    
                }
                $(".quotation-list__bottom ul")
                    .empty()
                    .append(list);
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }
    return {load: load}
})();
