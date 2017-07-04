$(document).ready(function() {
	$(".articleimg").on("click", function() {
		var bigImgPath = $(this).attr("src").replace('_small','');

		$("#modal").append("<img id='imageToRemove' src='"+bigImgPath+"' />");
		$(".background").css("visibility","visible");

	});

});