var HospitalBannerList = (function () {  
    /* Price List */
    function load(path){
      $
        .ajax(
          { url: path, data: {}, type: "GET", dataType: "json" }
        )
        .done(function (json) {
          var data = json;
          console.log(data)
          var list = "";
          for (var i = 0; i < data.length; i++) {
            var hospitalName = data[i].hospitalName;
            var title = data[i].title;
            var info = data[i].info;
            var price = data[i].price;
            var score = data[i].score;
            var like = data[i].like;
            var likeCheck = data[i].likeCheck;
            var favorCheck = data[i].favorCheck;
            var imgUrl = data[i].url;
            var likeState = likeCheck
              ? "on"
              : "";
            var favorState = favorCheck
              ? "on"
              : "";
            var url = data[i].url;
            list += '<li class="price-list__item">'
            list += '    <div class="price-banner">'
            list += '        <img src="' + imgUrl + '" alt="banner">'
            list += '            <div class="price-banner__content">'
            list += '                <div class="price-banner__box">'
            list += '                    <p class="price-banner__box--hospital-name">' +
              hospitalName + '</p>'
            list += '                    <div class="price-banner__box--title">' + title +
              '</div>'
            list += '                    <div class="price-banner__box--info">' + info + '</div>'
            list += '                    <div class="price-banner__box--price">' + price +
              '</div>'
            list += '                    <div class="price-banner__btns">'
            list += '                        <ul>'
            list += '                            <li>'
            list += '                                <p class="price-banner__btn btn-score">'
            list += '                                    <span class="price-banner__icon icon-score' +
              '"></span>'
            list += '                                    <span class="num">' + score +
              '.0</span>'
            list += '                                </p>'
            list += '                            </li>'
            list += '                            <li>'
            list += '                                <p class="price-banner__btn btn-like ' +
              likeState + '" onClick="HospitalBannerList.checkLike(this)">'
            list += '                                    <span class="price-banner__icon icon-like"' +
              '></span>'
            list += '                                    <span class="num">' + like + '</span>'
            list += '                                </p>'
            list += '                            </li>'
            list += '                            <li>'
            list += '                                <p class="price-banner__btn btn-favor ' +
              favorState + '" onClick="HospitalBannerList.checkFavor(this)">'
            list += '                                    <span class="price-banner__icon icon-favor' +
              '"></span>'
            list += '                                </p>'
            list += '                            </li>'
            list += '                        </ul>'
            list += '                     </div></div></div></div></li>'
          }
          $(".price-list__list").append(list);
        })
        .fail(function (xhr, status, errorThrown) {
          console.log(errorThrown, ":", status);
        });
    }

    function checkLike(target) {
        var selector = $(target);
        var currentNum = selector
            .find(".num")
            .text();
        if (selector.hasClass("on")) {
            selector.removeClass("on");
            currentNum--;
            //like 상태값 false, currentNum 값 POST 처리
        } else {
            selector.addClass("on");
            currentNum++;
            //like 상태값 true, currentNum 값 POST 처리
        }
        selector
            .find(".num")
            .text(currentNum);

    }

    function checkFavor(target) {
        var selector = $(target);
        if (selector.hasClass("on")) {
            selector.removeClass("on");
            //Favor 상태값 false POST 처리
        } else {
            selector.addClass("on");
            //Favor 상태값 true POST 처리
        }
    }

  return { load: load, checkLike: checkLike, checkFavor: checkFavor}
})()