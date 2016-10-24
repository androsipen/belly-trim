$(document).ready(function() {

	$(".menu-item").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});


	$(".mobile-menu ul li a").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});

	$(".up").animated("fadeInDown");
	$(".left").animated("fadeInLeft");
	$(".right").animated("fadeInRight");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.mobile-menu-button').click(function(){
		$('.mobile-menu').slideToggle( "slow", function() {
 		 });
	});

	$('.mobile-menu ul li a').click(function(){
		$('.mobile-menu').slideToggle( "slow", function() {
 		 });
	});

});
