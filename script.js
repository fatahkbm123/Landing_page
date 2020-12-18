$("span").on("click", function () {
  $(".icons").toggleClass("fas fa-bars far fa-window-minimize active");
  $(".nav-responsive").toggleClass("active");
  $("body").toggleClass("active");
});

$(".scroll").on("click", function (e) {
  e.preventDefault();

  var href = $(this).attr("href");
  var Tujuan = $(href);

  $("body, html").animate(
    {
      scrollTop: Tujuan.offset().top - 85,
    },
    600
  );
});

$(".scroll2").on("click", function (e) {
  e.preventDefault();

  var href = $(this).attr("href");
  var Tujuan = $(href);

  $("body, html").animate(
    {
      scrollTop: Tujuan.offset().top - 85,
    },
    600
  );

  $(".icons").toggleClass("fas fa-bars far fa-window-minimize active");
  $(".nav-responsive").removeClass("active");
  $("body").removeClass("active");
});
