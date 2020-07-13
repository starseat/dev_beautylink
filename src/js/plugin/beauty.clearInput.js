/**
 * beauty.clearInput.js
 * Input Clear 기능
 * Copyright 2020, Noh ki won
 */


function ClearInput( selector, value){	
    this.selector = $(selector);
    this.btnClear = null;
    this.value = value;           
	this.init();		
}

(function($){
	$.setClearInputOptions = {
        value : ""
	}
	$.fn.clearInput = function( options ){
		options = $.extend( null, $.setClearInputOptions, options );
		this.each( function(index){			
            var clearInput = new ClearInput(this, options.value);

            clearInput.selector.on("inputKeyup", function(e) {	
                if (options.onKeyup !== undefined) {	
                    e.value = clearInput.value;
                    options.onKeyup(e);					
                }
            });

            clearInput.selector.on("clearText", function (e) {
              if (options.onClear !== undefined) {   
                e.selector = clearInput.selector;             
                options.onClear(e);
              }
            });

		});		
		return this;
	}	
})(jQuery);

$.extend(ClearInput.prototype, {
    init: function(){
        this.drawInput();
        this.addEvent();
    },
    drawInput: function(){        
      var inputWrap = this.selector.closest(".text-input__wrapper");
      var clearDom = '<span title="Clear" class="text-input__clear-btn"></span>';
      inputWrap.append(clearDom);
      this.btnClear = inputWrap.find(".text-input__clear-btn");

      this.selector.val(this.value);

      if( this.value.length ){
          this.btnClear.show();  
      }
    },
    addEvent: function(){
        var _this = this;

        this.selector.on("keyup", function(){
            if($(this).val().length ){
                _this.btnClear.show();                
            }else{
                _this.btnClear.hide();
            }
            _this.value = $(this).val();
            _this.selector.trigger("inputKeyup");
        });


        this.btnClear.on("click", function(){
            $(this).hide();
            _this.selector.val("");
            _this.selector.trigger("clearText");
        })
    }
    
})

