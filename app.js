// Header fixed

$(function () {
  let header = $("#header");
  let intro = $("#intro");
  let IntroH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll  resize", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > IntroH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});

// Menu mobile
let nav = $("#nav");
let navToggle = $("#navToggle");

$(navToggle).on("click", function (event) {
  nav.toggleClass("show");
});
