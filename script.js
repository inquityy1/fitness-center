$(document).ready(function(){
	
	//toggle button
	$('.btn').click(function(){
		$('.nav-links').slideToggle(500);
		$('.btn').toggleClass('change');
	})
	//transparent background
	
	$(window).scroll(function(){
		
		let position = $(window).scrollTop();
		
		if(position >= 100){
			$('nav, nav-container').addClass('navBackground')
		}
		else{
			$('nav, nav-container').removeClass('navBackground')
			
		}
		
	})
})
