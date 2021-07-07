function closeTopBar() {
  document.getElementById("topbar").style.height = "0";
}
function showMwnu() {
  document.getElementById("headerNav").style.height = "auto";
  document.getElementById("headerNav").style.padding = "5px";
  document.getElementById("menuBtn").style.display = "none";
  document.getElementById("menuClose").style.display = "block";
}
function closeMenu() {
  document.getElementById("headerNav").style.height = "0px";
  document.getElementById("headerNav").style.padding = "0px";
  document.getElementById("menuBtn").style.display = "block";
  document.getElementById("menuClose").style.display = "none";
}

function resetDesign(x) {
  if (x.matches) {
    document.getElementById("headerNav").style.height = "0px";
    document.getElementById("headerNav").style.padding = "0px";
    document.getElementById("menuBtn").style.display = "block";
    document.getElementById("menuClose").style.display = "none";
  } else {
    document.getElementById("headerNav").style.height = "67px";
    document.getElementById("menuBtn").style.display = "none";
    document.getElementById("menuClose").style.display = "none";
  }
}

$(document).ready(function () {
  $(".hero-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    prevArrow: $(".leftarrow"),
    nextArrow: $(".rightarrow"),
    responsive: [
      {
        breakpoint: 1086,
        settings: {
          arrows: false,
          prevArrow: '',
          nextArrow: '',
        },
      },
    ],
  });
  $(".footbal-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $(".leftarrowf"),
    nextArrow: $(".rightarrowf"),
    responsive: [
      {
        breakpoint: 1343,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("a.play-btn").fancybox({
    width: "70%",
    height: "auto",
    autoSize: false,
    closeClick: true,
  });
});

function aalert() {
  alert("");
}
var x = window.matchMedia("(max-width: 818px)");
resetDesign(x);
x.addListener(resetDesign);
