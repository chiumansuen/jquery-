$(function(){
		$(".role-container li[class^=p]").mouseover(function() {
			/* Act on the event */
			var index = $(this).index();
			$(".role-container li:last").attr('class', '');
			$(".role-container li:last").addClass('cur'+' p'+(index+1)+'_'+(index+1));
			$(".role-container .cotpart" ).eq( index ).show().siblings( ".cotpart" ).hide();
			$(".role-container li[class^=p]:gt(" + index + ")").each(function(i) {
				$(this).css({"left" : 559 + (index+i) * 63 + "px" })
			});
			$(".role-container li[class^=p]:lt(" + index + ")").each(function(i) {
				$(this).css('left', i*63+'px');
			});
		});
})