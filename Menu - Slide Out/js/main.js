$(document).ready(function() {
	$("#menuIcon").click(function() {
		$("#mainMenu").css("left", "0px");
		function showMenu() {
			$("#mainMenu").css("-webkit-clip-path", "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
			$("#menuIcon").animate({right:'-100'}, 300);
		}
		setTimeout(showMenu, 100);
	});

	$("#close").click(function() {
		$("#mainMenu").css("-webkit-clip-path", "polygon(0 0, 0% 0, 100% 100%, 0% 100%)");
		function hideMenu() {
			$("#mainMenu").css("left", "-300px");
			$("#menuIcon").animate({right: '50'}, 300);
		}

		setTimeout(hideMenu, 300);

		function originalLayout() {
			$("#mainMenu").css("-webkit-clip-path", "polygon(0 0, 100% 0, 0% 100%, 0% 100%)");
		}

		setTimeout(originalMenu);
		
	});

});