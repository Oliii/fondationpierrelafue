$(document).ready(function () {
    $("#navbar-menu a[href='/fondation']").closest("li").addClass("active");

    $(document).on("scroll", onScroll);
    
    $("#breadcrumbs a").on("click", function(e) {
        e.preventDefault();
        $(document).off("scroll");

        var $link = $(e.target);
        var id = $link.data("target");
        $('html, body').animate({
            scrollTop: id == 'pierreLafueIntro' ? 0 : $('#' + id).offset().top
        }, 500, 'swing', function () {
            $("#breadcrumbs li.selected").removeClass("selected");
            $("a[data-target='" + id + "']").closest("li").addClass("selected");
            $(document).on("scroll", onScroll);
        });

    });

});

var currentMenu = 'pierreLafueIntro';

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    //top ofthe page
    if(scrollPos == 0) {
        $("#breadcrumbs li.selected").removeClass("selected");
        $("#breadcrumbs a[data-target='pierreLafueIntro']").closest("li").addClass("selected");
        return;
    }

    //bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $("#breadcrumbs li.selected").removeClass("selected");
        $("#breadcrumbs a[data-target='manifestations']").closest("li").addClass("selected");
        return;
    }

    $('.page-section').each(function () {
        var currLink = $(this);
        var refId = currLink.attr("id");
        if (currLink.position().top <= scrollPos && currLink.position().top + currLink.height() > scrollPos) {
            if(refId == currentMenu)
                return;

            $("#breadcrumbs li.selected").removeClass("selected");
            $("#breadcrumbs a[data-target='" + refId + "']").closest("li").addClass("selected");
        }
    });
}

(function(module) {

    var prix = {
        2013: {
            intro: "Le 37ème prix de la Fondation Pierre LAFUE a récompensé Thierry Lentz, pour son ouvrage <emphasis>\"Le congrès de Vienne. Une refondation de l'Europe 1814-1815\"</emphasis> paru aux éditions PERRIN.",
            photos: [
                "/images/prix/2013/Livre_prix_2013_321.jpg",
                "/images/prix/2013/photo_Thierry_Lentz-321.jpeg"
            ],
            ceremonie: {
                text: "",
                photos: []
            }
        },
        2012: {
            intro: "Le 36ème prix de la Fondation Pierre LAFUE a récompensé Alexandre MARAL, pour son ouvrage <emphasis>\"le Roi-Soleil et Dieu\"</emphasis> paru aux éditions PERRIN.",
            photos: [
                "/images/prix/2012/Couverture_Prix_2012_Maral.jpg",
                "/images/prix/2012/maral.jpg"
            ],
            ceremonie: {
                text: "Le prix a été remis officiellement le 10 octobre 2012.",
                photos: [
                "/images/prix/2012/P_Thuillier.jpg",
                "/images/prix/2012/Photo1.jpg",
                "/images/prix/2012/Remise_Prix_P_Lafue_2012.jpg"
                ]
            }
        },
        2011: {
            intro: "Le 35ème prix de la Fondation Pierre LAFUE a récompensé Alexandre DUVAL-STALLA, pour son ouvrage <emphasis>\"Claude Monet - Georges Clemenceau: une histoire, deux caractères\"</emphasis>.",
            photos: [
                "/images/prix/2011/Duval-Stalla.jpg",
                "/images/prix/2011/Couverture-35emePrix2011.jpg"
            ],
            ceremonie: {
                text: "",
                photos: [  ]
            }
        },
        2010: {
            intro: "Le 34ème prix de la Fondation Pierre LAFUE a récompensé Mr Alain DECAUX, pour l'ensemble de son oeuvre.",
            photos: [
                "/images/prix/2010/401.jpg"
            ],
            ceremonie: {
                text: "Le prix a été remis officiellement le 1er juin 2010 à L'UNESCO.",
                photos: [
                "/images/prix/2010/dsc_5603.jpg",
                "/images/prix/2010/dsc_5608.jpg",
                "/images/prix/2010/dsc_5631.jpg",
                "/images/prix/2010/dsc_5652.jpg",
                "/images/prix/2010/dsc_5660.jpg",
                "/images/prix/2010/dsc_5687.jpg"
                ]
            }
        }
    };

    module.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
      });

    module.controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout) {

        this.prix = prix[2013];
        //reloadGallery();

        this.changeYear = function(annee) {
            this.prix = prix[annee];
            //reloadGallery();
        };

        function reloadGallery() {
            $timeout(function() {
                $(".prixGallerie").justifiedGallery({
                    rowHeight : 250,
                    lastRow : 'nojustify',
                    margins : 40
                });
            }, 5000);     
        }

    }]);

})(angular.module('prixanterieurs', ['ngSanitize']));