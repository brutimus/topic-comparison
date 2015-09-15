//@codekit-prepend "../bower_components/d3/d3.js"
//@codekit-prepend "../bower_components/slick.js/slick/slick.js"

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

function comparator() {
    var a='';

    function my(selection) {

        function draw_ui(){
            jQuery(document).ready(function($) {
                setTimeout(function(){
                    $('.slideshow').slick({
                        arrows: false,
                        lazyLoad: 'ondemand',
                        respondTo: 'slider'

                    })
                }, 500);
                jQuery('.navigation a').click(function(e){

                    jQuery('.navigation a.active').removeClass('active');
                    jQuery(e.target).addClass('active');

                    setTimeout(function(){
                        jQuery('.slideshow').slick('setPosition');
                    }, 0);
                });
            });
        }

        /* ========== VARIABLES & FUNCTIONS ========== */
        var spreadsheet_url = '';


        /* ========== SETUP SVG ========== */

        container = selection;

        /* ============================= */
        /* ========== RUNTIME ========== */
        /* ============================= */

        draw_ui();
        // d3.xml('../img/stadium.svg', load_image);

        /* ========== DEBUG ========== */

        if (document.URL.indexOf('stadiumdebug') > 0) {
            // ECHO MOUSE POSITION
            svg.on('mousemove.position', function(){
                var coord = d3.mouse(this);
                console.log(coord[0], coord[1]);
            });
        }
    }

    return my;
}
