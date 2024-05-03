var portfolioClicked = false;
var folderOpen = false;

$(function () {
  var hasSwipe = false;
  $(".slider-for-catalog, .slider-for-dm, .slider-for-shop").on(
    "swipe",
    function (event, slick, currentSlide) {
      var nowSlick = $(slick.$slider[0]).attr("class");
      var slickClass = nowSlick.split(" ")[0];
      $(`.${slickClass} .slick-current img`).blowup({
        background: "#101010",
        round: false,
        border: "2px solid #333333",
        cursor: false,
        scale: 0.5,
      });
      hasSwipe = true;
    }
  );
  $(".slider-for-catalog, .slider-for-dm, .slider-for-shop").on(
    "afterChange",
    function (event, slick, currentSlide) {
      var nowSlick = $(slick.$slider[0]).attr("class");
      var slickClass = nowSlick.split(" ")[0];
      if (!hasSwipe) {
        $(`.${slickClass} .slick-current img`).blowup({
          background: "#101010",
          round: false,
          border: "2px solid #333333",
          cursor: false,
          scale: 0.5,
        });
        hasSwipe = false;
      }
      hasSwipe = false;
    }
  );

  $(".portfolio-photo").on("click", function () {
    if (!portfolioClicked) {
      //移動
      $(".cover-bg").show().animate(
        {
          opacity: 0.5,
        },
        400
      );
      $(".left-box, .bg").animate(
        {
          // transform: "translateX(-40%)",
          left: "-40%",
        },
        800,
        $.bez([0.34, 1.56, 0.64, 1])
      );

      $(".computer-g, .character-pic").animate(
        {
          left: "+=300",
        },
        800,
        $.bez([0.34, 1.56, 0.64, 1])
      );

      $(".right-box").animate(
        {
          width: "60vw",
        },
        1000,
        $.bez([0.34, 1.56, 0.64, 1])
      );

      portfolioClicked = true;
    }
  });

  $(".close-portfolio").on("click", function () {
    if (portfolioClicked) {
      $(".cover-bg").animate(
        {
          opacity: 0,
        },
        800,
        function () {
          $(".cover-bg").hide();
          $(".close-portfolio").css("opacity", 1);
        }
      );
      $(".left-box, .bg").animate(
        {
          // transform: "translateX(-40%)",
          left: 0,
        },
        800,
        $.bez([0.16, 1, 0.3, 1])
      );

      $(".computer-g, .character-pic").animate(
        {
          left: "-=300",
        },
        800,
        $.bez([0.16, 1, 0.3, 1])
      );

      $(".right-box").animate(
        {
          width: "0vw",
        },
        1000,
        $.bez([0.16, 1, 0.3, 1])
      );
      $(".close-portfolio").animate(
        {
          opacity: 0,
        },
        100
      );
      portfolioClicked = false;
    }
  });

  // var folderOpen = false;
  // $(".folder").on("click", function () {
  //   if (!folderOpen && !portfolioClicked) {
  //     $(".cover-bg").show().animate(
  //       {
  //         opacity: 0.5,
  //       },
  //       400
  //     );
  //     $(".pb-website").removeClass("p-box-show").removeClass("p-box-close");
  //     $(".pb-website").show().addClass("p-box-show");
  //     folderOpen = true;
  //   }
  // });

  $(".close-p-box").on("click", function () {
    if (folderOpen) {
      $(".cover-bg").animate(
        {
          opacity: 0,
        },
        800,
        function () {
          $(".cover-bg").hide();
          $(".close-portfolio").css("opacity", 1);
        }
      );
      $(".portfolio-box").addClass("p-box-close");
      //每頁第一項
      $(".p-website").css("opacity", 0);
      $(".p-gift").css("opacity", 0);
      $(".p-catalog").css("opacity", 0);
      $(".p-close").hide();
      folderOpen = false;
    }
  });

  //email
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      $(".email-a").text("寄送中……");
      // these IDs from the previous steps
      emailjs.sendForm("cunzhang0117_Gmail", "template_6l4mvim", this).then(
        () => {
          $(".email-a").animate(
            {
              opacity: 0,
            },
            200,
            function () {
              $(this)
                .text("已寄出！")
                .animate(
                  {
                    opacity: 1,
                  },
                  300,
                  function () {
                    $(this).animate(
                      {
                        opacity: 0,
                      },
                      1000,
                      function () {
                        $(
                          'input[type="text"], input[type="email"], textarea'
                        ).val("");
                        $(this).text("cunzhang0117@gmail.com").animate(
                          {
                            opacity: 1,
                          },
                          500
                        );
                      }
                    );
                  }
                );
            }
          );
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
          $(".email-a").text("寄送失敗").css("color", "#818181");
          setTimeout(() => {
            $(".email-a").text("cunzhang0117@gmail.com");
          }, 1000);
        }
      );
    });

  $(".fa-envelope").on("click", function () {
    var emailAddress = "cunzhang0117@gmail.com";
    $(this).addClass("copied-text");
    $(".fa-envelope").on("animationend", function () {
      $(this).removeClass("copied-text");
    });
    navigator.clipboard.writeText(emailAddress);
  });

  //照片
  $(".game-g-slick,.game-m-slick").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:
      '<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
    dotsClass: "slick-dots-style",
    adaptiveHeight: true,
  });

  $(".slider-for-shop").slick({
    slidesToShow: 1,
    autoplay: true,

    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-shop",
    prevArrow:
      '<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
    // variableWidth: true,
  });
  $(".slider-nav-shop").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".slider-for-shop",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    // variableWidth: true,
  });

  $(".slider-for-catalog").slick({
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-catalog",
    prevArrow:
      '<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
  });
  $(".slider-nav-catalog").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for-catalog",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });

  $(".slider-for-dm").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-dm",
    prevArrow:
      '<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
  });
  $(".slider-nav-dm").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for-dm",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });

  $(".slider-for-pic").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-pic",
    prevArrow:
      '<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
  });
  $(".slider-nav-pic").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for-pic",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });
  $(".slider-for-ani").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-ani",
    prevArrow:
      '<button type="button" data-role="none" class="slick-prev"><i class="fa-solid fa-caret-left"></i></button>',
    nextArrow:
      '<button type="button" data-role="none" class="slick-next"><i class="fa-solid fa-caret-right"></i></button>',
  });
  $(".slider-nav-ani").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for-ani",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  });
}); //加載網頁的

var nowPage;
function folderClicked(folderName) {
  if (!folderOpen) {
    $(".cover-bg").show().animate(
      {
        opacity: 0.5,
      },
      400
    );
    switch (folderName) {
      case "web": {
        $(".pb-website").removeClass("p-box-show").removeClass("p-box-close");
        $(".pb-website").show().addClass("p-box-show");
        $(".p-website").show().animate(
          {
            opacity: 1,
          },
          500
        );
        nowPage = "p-website";
        // var workList = $(".select-a-list li");
        $(".select-a-list-l").removeClass("LiSelected");
        $(".web-list li:first").addClass("LiSelected");

        folderOpen = true;
        break;
      }

      case "game": {
        $(".pb-game").removeClass("p-box-show").removeClass("p-box-close");
        $(".pb-game").show().addClass("p-box-show");
        $(".p-gift").show().animate(
          {
            opacity: 1,
          },
          500
        );
        nowPage = "p-gift";
        // var workList = $(".select-a-list li");
        $(".select-b-list-l").removeClass("LiSelected");
        $(".game-list li:first").addClass("LiSelected");
        $(".game-g-slick").slick("slickGoTo", 0);
        folderOpen = true;
        break;
      }

      case "graphic": {
        $(".pb-graphic").removeClass("p-box-show").removeClass("p-box-close");
        $(".pb-graphic").show().addClass("p-box-show");
        $(".p-catalog")
          .show()
          .css({
            height: "100%",
            "overflow-y": "visible",
          })
          .animate(
            {
              opacity: 1,
            },
            500
          );
        nowPage = "p-catalog";
        // var workList = $(".select-a-list li");
        $(".select-c-list-l").removeClass("LiSelected");
        $(".graphic-list li:first").addClass("LiSelected");
        folderOpen = true;
        $(`.slider-for-catalog .slick-current img`).blowup({
          background: "#101010",
          round: false,
          border: "2px solid #333333",
          cursor: false,
          scale: 0.5,
        });
        break;
      }

      case "draw": {
        $(".pb-draw").removeClass("p-box-show").removeClass("p-box-close");
        $(".pb-draw").show().addClass("p-box-show");
        $(".p-pic")
          .show()
          .css({
            height: "100%",
            "overflow-y": "visible",
          })
          .animate(
            {
              opacity: 1,
            },
            500
          );
        nowPage = "p-pic";
        // var workList = $(".select-a-list li");
        $(".select-d-list-l").removeClass("LiSelected");
        $(".draw-list li:first").addClass("LiSelected");
        folderOpen = true;
        break;
      }
    }
  }
}
function changePageWeb(page, listName) {
  switch (page) {
    case "p-website": {
      if (nowPage != "p-website") {
        $(".select-a-list-l").removeClass("LiSelected");
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage}`).hide();
            nowPage = "p-website";
            $(".p-website")
              .show()
              .animate(
                {
                  opacity: 1,
                },
                250,
                function () {}
              );
          }
        );
      }
      break;
    }

    case "p-SP": {
      if (nowPage != "p-SP") {
        $(".select-a-list-l").removeClass("LiSelected");
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage}`).hide();
            nowPage = "p-SP";
            $(".p-SP")
              .show()
              .animate(
                {
                  opacity: 1,
                },
                250,
                function () {}
              );
          }
        );
      }
      break;
    }
  }
}

function changePageGame(page, listName) {
  switch (page) {
    case "p-gift": {
      if (nowPage != "p-gift") {
        $(".game-g-slick").slick("slickGoTo", 0);
        $(".select-b-list-l").removeClass("LiSelected");
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage}`).hide();
            nowPage = "p-gift";
            $(".p-gift")
              .show()
              .animate(
                {
                  opacity: 1,
                },
                250,
                function () {}
              );
          }
        );
      }
      break;
    }

    case "p-majo": {
      if (nowPage != "p-majo") {
        $(".game-m-slick").slick("slickGoTo", 0);
        $(".select-b-list-l").removeClass("LiSelected");
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage}`).hide();
            nowPage = "p-majo";
            $(".p-majo")
              .show()
              .animate(
                {
                  opacity: 1,
                },
                250,
                function () {}
              );
          }
        );
      }
      break;
    }
  }
}

function changePageGD(page, listName) {
  switch (page) {
    case "p-shop": {
      if (nowPage != "p-shop") {
        $(".select-c-list-l").removeClass("LiSelected");
        $(".slider-for-shop").slick("slickGoTo", 0);
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage}`).hide();
            $(`.${nowPage} .loading-gif`).show();
            nowPage = "p-shop";
            $(".p-shop")
              .show()
              .animate(
                {
                  height: "100%",
                  "overflow-y": "visible",
                  opacity: 1,
                },
                250,
                function () {
                  $(`.${nowPage} .loading-gif`).hide();
                  $(`.slider-for-shop .slick-current img`).blowup({
                    background: "#101010",
                    round: false,
                    border: "2px solid #333333",
                    cursor: false,
                    scale: 0.5,
                  });
                }
              );
          }
        );
      }
      break;
    }

    case "p-dm": {
      if (nowPage != "p-dm") {
        $(".select-c-list-l").removeClass("LiSelected");
        $(".slider-for-dm").slick("slickGoTo", 0);
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage} .loading-gif`).show();
            $(`.${nowPage}`).hide();
            nowPage = "p-dm";
            $(".p-dm")
              .show()
              .animate(
                {
                  height: "100%",
                  "overflow-y": "visible",
                  opacity: 1,
                },
                250,
                function () {
                  $(`.${nowPage} .loading-gif`).hide();
                  $(`.slider-for-dm .slick-current img`).blowup({
                    background: "#101010",
                    round: false,
                    border: "2px solid #333333",
                    cursor: false,
                    scale: 0.5,
                  });
                }
              );
          }
        );
      }
      break;
    }

    case "p-catalog": {
      if (nowPage != "p-catalog") {
        $(".slider-for-catalog").slick("slickGoTo", 0);
        $(".select-c-list-l").removeClass("LiSelected");
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage} .loading-gif`).show();
            $(`.${nowPage}`).hide();
            nowPage = "p-catalog";
            $(".p-catalog")
              .show()
              .animate(
                {
                  height: "100%",
                  "overflow-y": "visible",
                  opacity: 1,
                },
                250,
                function () {
                  $(`.${nowPage} .loading-gif`).hide();
                  $(`.slider-for-catalog .slick-current img`).blowup({
                    background: "#101010",
                    round: false,
                    border: "2px solid #333333",
                    cursor: false,
                    scale: 0.5,
                  });
                }
              );
          }
        );
      }
      break;
    }
  }
}

function changePageDraw(page, listName) {
  // console.log(nowPage);
  switch (page) {
    case "p-pic": {
      if (nowPage != "p-pic") {
        $(".slider-for-pic").slick("slickGoTo", 0);
        $(".select-d-list-l").removeClass("LiSelected");
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage} .loading-gif`).show();
            $(`.${nowPage}`).hide();
            nowPage = "p-pic";
            $(".p-pic")
              .show()
              .animate(
                {
                  height: "100%",
                  "overflow-y": "visible",
                  opacity: 1,
                },
                250,
                function () {
                  $(`.${nowPage} .loading-gif`).hide();
                }
              );
          }
        );
      }
      break;
    }
    case "p-ani": {
      if (nowPage != "p-ani") {
        $(".select-d-list-l").removeClass("LiSelected");
        $(".slider-for-ani").slick("slickGoTo", 0);
        $(listName).addClass("LiSelected");
        $(`.${nowPage}`).animate(
          //關掉當前頁
          {
            opacity: 0,
          },
          250,
          function () {
            $(`.${nowPage}`).hide();
            $(`.${nowPage} .loading-gif`).show();
            nowPage = "p-ani";
            $(".p-ani")
              .show()
              .animate(
                {
                  height: "100%",
                  "overflow-y": "visible",
                  opacity: 1,
                },
                250,
                function () {
                  $(`.${nowPage} .loading-gif`).hide();
                }
              );
          }
        );
      }
      break;
    }
  }
}
