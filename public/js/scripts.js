$(document).ready(function() {
	
	$("#breadcrumb a").on("click", function(e) {
		var $link = $(e.target);
		var id = $link.data("target");
		$('html, body').animate({
	        scrollTop: $(id).offset().top
	    }, 500);

	    $("#breadcrumb li.selected").removeClass("selected");
	    $("a[data-target='" + id + "']").closest("li").addClass("selected");
	});
});