$(document).ready(function() {
	
	$("#breadcrumb").css('top', $(window).height()/2);

	

	$("#foyerGallery").justifiedGallery({
    rowHeight : 200,
    lastRow : 'nojustify',
    margins : 3
	});
});