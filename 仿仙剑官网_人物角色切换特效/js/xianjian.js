$(function(){
	var imgList = [ "big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg", "big5.jpg", "big6.jpg" ];
	$(".role-body li").click(function() {
		/* Act on the event */
		var i = $(this).index();
		$(".role-body li").each(function(index) {
			if (index==i) {
				$(this).children('a').addClass('r'+(index+1)+'_'+(index+1));
				$(".role-img img").fadeOut().attr('src', './img/'+imgList[index]).fadeIn();
			}else {
				$(this).children('a').removeClass( "r" + (index+1) + '_' + (index+1) );
			}
		});
	});
		

})