$(document).ready(function () {
    $("#navbar-menu a[href='/foyeryolandelafue']").closest("li").addClass("active");

    $(document).on("scroll", onScroll);
    
    $("#breadcrumbs a").on("click", function(e) {
        e.preventDefault();
        $(document).off("scroll");

        var $link = $(e.target);
        var id = $link.data("target");
        $('html, body').animate({
            scrollTop: id == 'presentationFoyer' ? 0 : $('#' + id).offset().top
        }, 500, 'swing', function () {
            $("#breadcrumbs li.selected").removeClass("selected");
            $("a[data-target='" + id + "']").closest("li").addClass("selected");
            $(document).on("scroll", onScroll);
        });

    });

    $("#foyerGallery").justifiedGallery({
        rowHeight : 200,
        lastRow : 'nojustify',
        margins : 3
    });

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

        //top ofthe page
    if(scrollPos == 0) {
        $("#breadcrumbs li.selected").removeClass("selected");
        $("#breadcrumbs a[data-target='presentationFoyer']").closest("li").addClass("selected");
        return;
    }

    //bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $("#breadcrumbs li.selected").removeClass("selected");
        $("#breadcrumbs a[data-target='temoignages']").closest("li").addClass("selected");
        return;
    }

    $('.page-section').each(function () {
        var currLink = $(this);
        var refId = currLink.attr("id");
        if (currLink.position().top <= scrollPos && currLink.position().top + currLink.height() > scrollPos) {
            $("#breadcrumbs li.selected").removeClass("selected");
            $("#breadcrumbs a[data-target='" + refId + "']").closest("li").addClass("selected");
        }

    });
}