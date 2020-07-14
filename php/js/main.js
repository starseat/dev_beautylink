var BeautyMain = (function () {
    /* Main Banner */
    $.ajax({
        url: "./data/main_banner.json", 
        data: {}, 
        type: "GET",
        dataType: "json"
    })
    .done(function (json) {
        var data = json;
        var bannerList = "";
        for( var i=0; i<data.length; i++){
            var imgUrl = data[i].url;
            bannerList += '<div class="swiper-slide"><img src="' + imgUrl +'" alt="banner"></div>'
        }
        $(".banner__swiper .swiper-wrapper").append(bannerList);

        var bannerSwiper = new Swiper('.banner__swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.banner-pagination',
                clickable: true
            }
        });
    })
    .fail(function (xhr, status, errorThrown) {
      console.log(errorThrown, ":", status);
    });    

    /* Pick List */
    $.ajax({
        url: "./data/pick_review.json",
        data: {},
        type: "GET",
        dataType: "json"
    })
    .done(function (json) {
        var data = json;
        var list = "";
        for (var i = 0; i < data.length; i++) {
            var userName = data[i].userName;
            var imgUrl = data[i].url;
            var info = data[i].info;
            list += '<div class="swiper-slide">'
            list += '<img src = "' + imgUrl+'" alt = "photo" width = "100%" height = "auto">'
            list += '<div class="pick-photo__info">'
            list += '<p class="pick-photo__info--name">' + userName +'</p>'
            list += '<p class="pick-photo__info--info">' + info +'</p>'
            list += '</div>'
            list += '</div >'
        }
        $(".pick-preview__list .swiper-wrapper").append(list);
        var pickSwiper = new CreateSliderPlayer(".pick-preview__list", 3);
    })
    .fail(function (xhr, status, errorThrown) {
        console.log(errorThrown, ":", status);
    });     
    
    
})();