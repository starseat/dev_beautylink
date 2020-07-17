function DialogWindow(t,n,i,s,e,o,c){this.selector=$(t),this.window="",this.confirmBtn="",this.cancelBtn="",this.closeBtn="",this.type=n,this.message=i,this.customBtnName=s,this.customBtn=e,this.effect=o,this.state=c,this.id="",this.init()}!function(t){t.setDialogWindowOptions={type:"normal",message:"Message",customBtnName:{confirm:"확인",cancel:"취소"},customBtn:[],effect:"",state:""},t.fn.dialogWindow=function(i){return i=t.extend(null,t.setDialogWindowOptions,i),this.each(function(t){var n=new DialogWindow(this,i.type,i.message,i.customBtnName,i.customBtn,i.effect,i.state);n.window.on("confirmClickEvent",function(t){void 0!==i.onConfirm&&(t.id=n.id,i.onConfirm(t))}),n.window.on("cancelClickEvent",function(t){void 0!==i.onCancel&&i.onCancel(t)})}),this}}(jQuery),$.extend(DialogWindow.prototype,{init:function(){this.drawLayout(),this.addEvent()},drawLayout:function(){var t='<div class="message-openWindow'+(0<this.customBtn.length?" customBtn":"")+" "+this.effect+'">';if(t+='<div class="message-wrap">',t+='<span class="btn-close-gray btn-dialogClose">Close</span>',t+='<div class="message-area '+this.state+'">'+this.message+"</div>",t+='<div class="btn-area">',("confirm"===this.type||0<this.customBtn.length)&&(t+='<span class="btn-cancel">'+this.customBtnName.cancel+"</span>"),0<this.customBtn.length)for(var n=0;n<this.customBtn.length;n++)t+='<span class="btn-confirm" data-id="'+this.customBtn[n].id+'">'+this.customBtn[n].name+"</span>";else t+='<span class="btn-confirm">'+this.customBtnName.confirm+"</span>";t+="</div></div></div>",this.selector.append(t),this.window=this.selector.find(".message-openWindow"),this.closeBtn=this.selector.find(".btn-dialogClose"),this.confirmBtn=this.selector.find(".btn-confirm"),("confirm"===this.type||0<this.customBtn.length)&&(this.cancelBtn=this.selector.find(".btn-cancel"))},addEvent:function(){var t=this;this.confirmBtn.on("click",function(){t.id=$(this).attr("data-id"),t.window.trigger("confirmClickEvent"),t.window.remove()}),("confirm"===this.type||0<this.customBtn.length)&&this.cancelBtn.on("click",function(){t.window.trigger("cancelClickEvent"),t.window.remove()}),this.closeBtn.on("click",function(){t.window.remove()})}});