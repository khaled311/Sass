$(function() {

  $(".icon").click(function () {
    $(this).toggleClass("active")
  });

  // Search
  $(".srch").on("click", function() {
    $(".xtr form").toggleClass("open");
  });

  $(".xtr form, .xtr form > i").on("click", function() {
    $(this).removeClass("open");
  });

  $(".xtr form .cont").on("click", function(e) {
    e.stopPropagation();
  });

  // Sticky Navbar
  $(window).on("scroll", function() {
    if($(window).scrollTop() >= $(".navBar").innerHeight() / 2){
        $(".navBar").addClass("scroll")
    }else{
        $(".navBar").removeClass("scroll")
    }
  });

  // Firts Slider
  var swiper = new Swiper('.headerSlider .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.headerSlider .swiper-pagination',
      clickable: true
    },
  });

  // Services Slider
  var swiper = new Swiper('.services .swiper-container', {
    loop: true,
    // autoplay: true,
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: '.services .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });

  // Clients Slider
  var swiper = new Swiper('.clients .swiper-container', {
    loop: true,
    autoplay: true,
    slidesPerView: 6,
    // spaceBetween: 10,
    pagination: {
      el: '.clients .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });


  // Map
  var x = 0;
  var locations = [
      ['قصر السرايا الرياض', 24.6764335,46.6721885, ++x]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(24.75,46.68),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  var marker, i;

  for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          icon: '../images/pin.png',
          map: map
      });
  }

  // Toggle open
  $(".drop").on("click", function(e) {
      $(this).find(".subMenu").slideToggle();
      $(this).siblings().find(".subMenu").slideUp();
      $(this).find(".ar").toggleClass("open");
      $(this).siblings().find(".ar").removeClass("open");
      e.stopPropagation();
  });


  // Toggle open
  $(".subMenu > li").on("click", function() {
      $(this).find(".arr-left").toggleClass("open");
  });


  // Toggle open
  $(".subMenu > li").on("click", function() {
      $(this).find(".sub").slideToggle();
      $(this).siblings().find(".sub").slideUp();
      $(this).siblings().find(".arr-left").removeClass("open");
  });


  // open Side Nav
  $(".icon").on("click", function() {
      $(this).fadeOut();
      $(".sideNav").toggleClass("open");
      $(".navover").toggleClass("open");
      $("body").css("overflow", "hidden");
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
      if($(".sideNav").hasClass("open")){
          $(".icon").fadeIn().removeClass("active");
          $(".navover").removeClass("open");
          $(".sideNav").toggleClass("open");
          $("body").css("overflow", "auto");
      }
  });

  // Side Nav Search
  // Search
  // $(".sideNav .srch").on("click", function() {
  //   $(".sideNav .xtr form").toggleClass("open");
  // });

  // $(".sideNav .xtr form").on("click", function() {
  //   $(this).removeClass("open");
  // });

  // $(".sideNav .xtr form .cont").on("click", function(e) {
  //   e.stopPropagation();
  // });

})