$(function() {
  $.scrollify({
	section : ".section",

	before: function(index, section){
		if(index == 0){
			$("#homepageMenuName").css("visibility", "visible");
			$("#portfolioMenuName").css("visibility", "hidden");
			$("#aboutMeMenuName").css("visibility", "hidden");
			$("#contactMemenuName").css("visibility", "hidden");
			$("#homepageMenuLine").css("border-bottom", "3px solid white");
			$("#portfolioMenuLine").css("border-bottom", "1px solid white");
			$("#aboutMeMenuLine").css("border-bottom", "1px solid white");
			$("#contactMemenuLine").css("border-bottom", "1px solid white");
			$("#pageNumberText").text("1 / 4");
			$(".xwingFighterCont").removeClass("fadeInDown");
			$(".spaceContainer").removeClass("fadeInDown");
			$(".barneyContainer").removeClass("fadeInDown");
			$(".squareContainer").removeClass("fadeInUp");
			$(".lamboContainer").removeClass("fadeInUp");
			$(".parrotContainer").removeClass("fadeInUp");
			$(".helloContainer").addClass("fadeInLeft");
		} else if (index == 1){
			$(".helloContainer").removeClass("fadeInLeft");
			$("#homepageMenuName").css("visibility", "hidden");
			$("#portfolioMenuName").css("visibility", "visible");
			$("#aboutMeMenuName").css("visibility", "hidden");
			$("#contactMemenuName").css("visibility", "hidden");
			$("#homepageMenuLine").css("border-bottom", "1px solid white");
			$("#portfolioMenuLine").css("border-bottom", "3px solid white");
			$("#aboutMeMenuLine").css("border-bottom", "1px solid white");
			$("#contactMemenuLine").css("border-bottom", "1px solid white");
			$("#pageNumberText").text("2 / 4");
			$(".xwingFighterCont").addClass("fadeInDown");
			$(".spaceContainer").addClass("fadeInDown");
			$(".barneyContainer").addClass("fadeInDown");
			$(".squareContainer").addClass("fadeInUp");
			$(".lamboContainer").addClass("fadeInUp");
			$(".parrotContainer").addClass("fadeInUp");
			$(".aboutMeSection").removeClass("fadeInLeft");
			$(".languageSection").removeClass("fadeInLeft");
			$(".awardsSection").removeClass("fadeInRight");
			$(".hobbiesSection").removeClass("fadeInRight");
		} else if (index == 2) {
			$(".xwingFighterCont").removeClass("fadeInDown");
			$(".spaceContainer").removeClass("fadeInDown");
			$(".barneyContainer").removeClass("fadeInDown");
			$(".squareContainer").removeClass("fadeInUp");
			$(".lamboContainer").removeClass("fadeInUp");
			$(".parrotContainer").removeClass("fadeInUp");
			$(".aboutMeSection").addClass("fadeInLeft");
			$(".languageSection").addClass("fadeInLeft");
			$(".awardsSection").addClass("fadeInRight");
			$(".hobbiesSection").addClass("fadeInRight");
			$("#homepageMenuName").css("visibility", "hidden");
			$("#portfolioMenuName").css("visibility", "hidden");
			$("#aboutMeMenuName").css("visibility", "visible");
			$("#contactMemenuName").css("visibility", "hidden");
			$("#homepageMenuLine").css("border-bottom", "1px solid white");
			$("#portfolioMenuLine").css("border-bottom", "1px solid white");
			$("#aboutMeMenuLine").css("border-bottom", "3px solid white");
			$("#contactMemenuLine").css("border-bottom", "1px solid white");
			$("#pageNumberText").text("3 / 4");
				if($(window).width() < 481) {
					$("#hobbiesImg").each(function() {
						$(this).attr("src", "img/bikeAndRacquetCell.png");
					});
			   } else if ($(window).width() >= 481) {
					$("#hobbiesImg").each(function() {
					$(this).attr("src","img/bikeAndRacquet.png");
					});                        
			   }  
		} else if (index == 3) {
			$(".aboutMeSection").removeClass("fadeInLeft");
			$(".languageSection").removeClass("fadeInLeft");
			$(".awardsSection").removeClass("fadeInRight");
			$(".hobbiesSection").removeClass("fadeInRight");
			$("#homepageMenuName").css("visibility", "hidden");
			$("#portfolioMenuName").css("visibility", "hidden");
			$("#aboutMeMenuName").css("visibility", "hidden");
			$("#contactMemenuName").css("visibility", "visible");
			$("#homepageMenuLine").css("border-bottom", "1px solid white");
			$("#portfolioMenuLine").css("border-bottom", "1px solid white");
			$("#aboutMeMenuLine").css("border-bottom", "1px solid white");
			$("#contactMemenuLine").css("border-bottom", "3px solid white");
			$("#pageNumberText").text("4 / 4");
			
		}
		

	}  
  });
});


$(window).resize(function(e){
   if($(window).width() < 481) {
    	$("#hobbiesImg").each(function() {
      		$(this).attr("src", "img/bikeAndRacquetCell.png");
    	});
   } else if ($(window).width() >= 481) {
		$("#hobbiesImg").each(function() {
		$(this).attr("src","img/bikeAndRacquet.png");
		});                        
   }         
});