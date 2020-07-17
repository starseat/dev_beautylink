
//Paging Slider
function CreateSliderPlayer( selector, num, between ){
  this.swiper = null;
  this.selector = selector;
  this.pickTimer = null;
  this.sliderNum = num;
  this.between = between || 8;
  if( num === 'auto'){
    this.groupNum = 1;
  }else{
    this.groupNum = this.sliderNum;
  }
  this.init();
}

$.extend(CreateSliderPlayer.prototype, {
  init: function(){
    this.swiper =   new Swiper(this.selector, {
        slidesPerView: this.sliderNum,
        slidesPerGroup: this.groupNum,
        spaceBetween: this.between,
        loop: true,
        pagination: {
          el: '.pick-preview__pagination',
          type: 'fraction',
          clickable: true
        },
        autoplay: {
          delay: 3000,
        },
      });
    // this.swiper.autoplay.stop();
      this.addEvent();
  },
  addEvent: function(){
    var _this = this;
    this.swiper.on('touchStart', function () {
      if ($(".pick-preview__player--btn").hasClass("on")) {
        clearTimeout(_this.pickTimer);
        _this.swiper.autoplay.stop();
      }
    });

    
    this.swiper.on('touchEnd', function () {
      _this.pickTimer = setTimeout(function () {
        if ($(".pick-preview__player--btn").hasClass("on")) {
          _this.swiper.autoplay.start();
        }
      }, 500);

    });

    //play버튼 on/off
    $(".pick-preview__player--btn").on("click", function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        _this.swiper.autoplay.stop();
      } else {
        $(this).addClass("on");

        _this.swiper.autoplay.start();
      }
    });
  }
}) 


//Sticky
function StickyBar(selector, y) {
  this.selector = $(selector);  
  this.stickyY = 0;
  this.posY = y;
  this.addEvent();
}

$.extend(StickyBar.prototype, {
  addEvent: function(){
    var _this = this;
    setTimeout(function(){
      _this.stickyY = _this.selector.offset().top;      
    }, 100)    
    window.onscroll = function () {      
      if (window.pageYOffset + _this.posY > _this.stickyY) {  
        _this.posY === 40 ? _this.selector.addClass("sticky40") : _this.selector.addClass("sticky126"); 
      } else {        
        _this.stickyY = _this.selector.offset().top;     
        _this.selector.removeClass("sticky40 sticky126");
      }
    };
  }
});

$(function(){
  var GnbControl = (function(){
    //Bottom GNB 활성화
    function gnbActiveCheck() {
      var url = location.href;
      if (url.indexOf("index") != -1) {
        $(".nav__link--home").addClass("on");
        return false;
      }
      if (url.indexOf("priceList") != -1) {
        $(".nav__link--price").addClass("on");
        return false;
      }
      if (url.indexOf("review") != -1) {
        $(".nav__link--review").addClass("on");
        return false;
      }
      if (url.indexOf("event") != -1) {
        $(".nav__link--event").addClass("on");
        return false;
      }
      if (url.indexOf("quotation") != -1) {
        $(".nav__link--estimate").addClass("on");
        return false;
      }
    }

    gnbActiveCheck();

    //Bottom GNB
    // $(".nav__list a").on("click", function () {
    //   $(".nav__list a").removeClass("on")
    //   $(this).addClass("on");
    // });
  })();  

})

var HeaderPopMenu = function(){
  function add(){
    $(".context__btn").on("click", function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on")
      } else {
        $(this).addClass("on")
      }
    });
  }  
  return{
    add: add
  }
}
