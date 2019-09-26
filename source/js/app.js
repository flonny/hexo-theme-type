$(document).ready(function() {
  "use strict";

  // =================
  // Responsive videos
  // =================

  // $(".o-wrapper").fitVids({
  //   customSelector: ['iframe[src*="ted.com"]']
  // });

  // =================
  // Off Canvas menu
  // =================
$(".c-off-canvas-content").click(function(e) {
  e.stopPropagation();
})
  $(".js-off-canvas-toggle").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".js-off-canvas-toggle").toggleClass("is-active");
    $(".js-off-canvas-container").toggleClass("is-active");
    $(".js-off-canvas-container.is-active").click(function(e) {
      if ($(this).hasClass("is-active")) {
        $(".js-off-canvas-toggle").toggleClass("is-active");
        $(".js-off-canvas-container").toggleClass("is-active");
      }else{
        $(this).unbind('click')
      }
    });
  });
});
