$(document).ready(function() {
  $(".menu").click(function() {
    $("header").toggleClass("hide");
    $("section").toggleClass("hide");
    $(".navigation").toggleClass("opened");
  });
});
