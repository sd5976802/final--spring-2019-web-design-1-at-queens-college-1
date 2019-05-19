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
		} else if (index == 1){
			$("#homepageMenuName").css("visibility", "hidden");
			$("#portfolioMenuName").css("visibility", "visible");
			$("#aboutMeMenuName").css("visibility", "hidden");
			$("#contactMemenuName").css("visibility", "hidden");
			$("#homepageMenuLine").css("border-bottom", "1px solid white");
			$("#portfolioMenuLine").css("border-bottom", "3px solid white");
			$("#aboutMeMenuLine").css("border-bottom", "1px solid white");
			$("#contactMemenuLine").css("border-bottom", "1px solid white");
			$("#pageNumberText").text("2 / 4");
		} else if (index == 2) {
			$("#homepageMenuName").css("visibility", "hidden");
			$("#portfolioMenuName").css("visibility", "hidden");
			$("#aboutMeMenuName").css("visibility", "visible");
			$("#contactMemenuName").css("visibility", "hidden");
			$("#homepageMenuLine").css("border-bottom", "1px solid white");
			$("#portfolioMenuLine").css("border-bottom", "1px solid white");
			$("#aboutMeMenuLine").css("border-bottom", "3px solid white");
			$("#contactMemenuLine").css("border-bottom", "1px solid white");
			$("#pageNumberText").text("3 / 4");
		} else if (index == 3) {
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