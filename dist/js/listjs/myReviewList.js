var MyReviewList = (function () {
    function load() {
        $.ajax(
                {url: "../data/mypage/myReview_list.json", type: "GET", dataType: "json"}
            )
            .done(function (json) {
                var data = json;
                var list = "";
                for (var i = 0; i < data.length; i++) {
                    var title = data[i].title;
                    var date = data[i].date;
                    var info = data[i].info;
                    var surgeryStar = data[i].surgeryStar;
                    var hospitalStar = data[i].hospitalStar;
                    var memo = data[i].memo;
                    var photo = data[i].photo;

                    list += '<li>'
                    list += '<div class="myReview-items">'
                    list += '<div class="myReview-item__top">'
                    list += '<span class="myReview-item__icon"></span>'
                    list += '<span class="myReview-item__title">'+ title +''
                    list += '<span class="myReview-item__date">'+ date +'</span>'
                    list += '</span>'
                    list += '<div class="review-context__menu">'
                    list += '<p class="context__btn"><span class="context-icon"></span></p>'
                    list += '<div class="context-list">'
                    list += '<ul>'
                    list += '<li class="context-list__item">'
                    list += '<a href="javascript:;" class="context-list__btn edit-btn">Edit</a>'
                    list += '<a href="javascript:;" class="context-list__btn delete-btn">Delete</a>'
                    list += '</li>'
                    list += '</ul>'
                    list += '</div>'
                    list += '</div>'
                    list += '</div>'
                    list += '<div class="myReview-item__info">' + info +'</div>'
                    list += '<div class="review-gallery__list">'
                    list += '<ul>'
                    for(var a=0; a<photo.length; a++ ){
                        list += '<li class="review-gallery__photo">'
                        list += '<img src="' + photo[a].url + '" alt="photo">'
                        list += '<span class="photo-state">' + photo[a].state + '</span>'
                        list += '</li>'
                    }
                    list += '</ul>'
                    list += '</div>'
                    list += '<div class="review-gallery__bottom">'
                    list += '<div class="surgical-info">'
                    list += '<span class="surgical-info__name"><img src="../images/icon_surgeryItem.png" al' +
                            't="icon">절개눈매교정</span>'
                    list += '<div class="surgical-info__score">'
                    list += '<span class="hospital-list__score--num">' + surgeryStar +'.0</span>'
                    list += '<span class="hospital-list__score--star star-num' + surgeryStar +'"></span>'
                    list += '</div>'
                    list += '</div>'
                    list += '<div class="hospital-info">'
                    list += '<span class="hospital-info__name"><img src="../images/logo/icon_hospital.png" ' +
                            'alt="icon">코리아 성형외과의원</span>'
                    list += '<div class="hospital-info__score">'
                    list += '<span class="hospital-list__score--num">' + hospitalStar +'.0</span>'
                    list += '<span class="hospital-list__score--star star-num' + hospitalStar +'"></span>'
                    list += '</div>'
                    list += '</div>'
                    list += '</div>'
                    list += '<div class="review-text">'+ memo +''
                    list += '<div class="review-text__btn">'
                    list += '<span class="btn-more__plug--btn">MORE</span>'
                    list += '</div>'
                    list += '</div>'
                    list += '</div>'
                    list += '</li>'
                }
                $(".myReview-list ul").append(list);

                $(".myReview-items .context__btn").on("click", function () {
                    if ($(this).hasClass("on")) {
                        $(this).removeClass("on")
                    } else {
                        $(this).addClass("on")
                    }
                })

            })
            .fail(function (xhr, status, errorThrown) {
                console.log(errorThrown, ":", status);
            });
    }

    return {load: load}
})();
