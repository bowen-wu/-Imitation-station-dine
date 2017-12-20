$(document).ready(function () {
    //    vegas背景轮播
    $("#container-first-carousel").vegas({
        slides: [
            { src: './image/slide_img01.jpg' },
            { src: './image/slide_img02.jpg' }
        ],
        transition: 'fade'
    });
    //    vegas背景轮播结束

    //    owl三列轮播
    $('.three-col-owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                margin: 20
            }
        }
    });
    //    owl三列轮播结束

    //    owl四列轮播
    $('.four-col-owl-carousel').owlCarousel({
        loop: true,
        rtl: false,
        margin: 10,
        responsiveClass: true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                margin: 20
            }
        }
    });
    //    owl四列轮播结束

    //    background轮播
    $('.background-owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //    background轮播


    // 导航变量
    var $nav=$("#navigator").children().children().children(".nav");

    var $navHome=$nav.find("[href='#home']");
    var $navAbout=$nav.find("[href='#about']");
    var $navHowToDine=$nav.find("[href='#howToDine']");
    var $navTestimonials=$nav.find("[href='#testimonials']");
    var $navInsideDine=$nav.find("[href='#insideDine']");
    var $navDownload=$nav.find("[href='#download']");


    $(window).scroll(function(){

        var scrollHeight=$(document).scrollTop();

        var $about=$("#about");
        var aboutHeight=$about.height();
        var aboutOffsetTop=$about.offset().top;
        if(scrollHeight>aboutOffsetTop-300 && scrollHeight<aboutOffsetTop+aboutHeight-280){
            $navAbout.addClass("nav-active");
        }else{
            $navAbout.removeClass("nav-active");
        }

        var $aboutFirst=$("#about-first");
        var aboutFirstHeight=$aboutFirst.height();
        var aboutFirstOffsetTop=$aboutFirst.offset().top;
        var aboutFirstImg=$aboutFirst.children(".about-first-img");
        var aboutFirstText=$aboutFirst.children(".about-first-text");
        if(scrollHeight>aboutFirstOffsetTop-300){
            $("#navigator").css('display','block');
        }else{
            $("#navigator").css('display','none');
        }

        if(scrollHeight>aboutFirstOffsetTop-250 && scrollHeight<aboutFirstOffsetTop+aboutFirstHeight-150){
            aboutFirstImg.addClass("animated bounceInLeft");
            aboutFirstText.addClass("animated bounceInRight");
        }else{
            aboutFirstImg.removeClass("animated bounceInLeft");
            aboutFirstText.removeClass("animated bounceInRight");
        }
        var $aboutSecond=$("#about-second");
        var aboutSecondHeight=$aboutSecond.height();
        var aboutSecondOffsetTop=$aboutSecond.offset().top;
        var aboutSecondImg=$aboutSecond.children(".about-second-img");
        var aboutSecondText=$aboutSecond.children(".about-second-text");
        if(scrollHeight>aboutSecondOffsetTop-300 && scrollHeight<aboutSecondOffsetTop+aboutSecondHeight-150){
            aboutSecondImg.addClass("animated rotateInDownRight");
            aboutSecondText.addClass("animated rotateInDownLeft");
        }else{
            aboutSecondImg.removeClass("animated rotateInDownRight");
            aboutSecondText.removeClass("animated rotateInDownLeft");
        }
        var $howToDine=$("#howToDine");
        var howToDineHeight=$howToDine.height();
        var howToDineOffsetTop=$howToDine.offset().top;
        var howToDineImg=$howToDine.find(".how-to-dine-img");
        var howToDineText=$howToDine.find(".how-to-dine-text");
        if(scrollHeight>howToDineOffsetTop-300 && scrollHeight<howToDineOffsetTop+howToDineHeight-200){
            howToDineImg.addClass("animated flip");
            howToDineText.addClass("animated flipInY");
            $navHowToDine.addClass("nav-active");
        }else{
            howToDineImg.removeClass("animated flip");
            howToDineText.removeClass("animated flipInY");
            $navHowToDine.removeClass("nav-active");
        }

        var $testimonials=$("#testimonials");
        var testimonialsHeight=$testimonials.height();
        var testimonialsOffsetTop=$testimonials.offset().top;
        if(scrollHeight>testimonialsOffsetTop-200 && scrollHeight<testimonialsHeight+testimonialsOffsetTop-200){
            $navTestimonials.addClass("nav-active");
        }else{
            $navTestimonials.removeClass("nav-active");
        }


        var $insideDine=$("#insideDine");
        var insideDineHeight=$insideDine.height();
        var insideDineOffsetTop=$insideDine.offset().top;
        if(scrollHeight>insideDineOffsetTop-200 && scrollHeight<insideDineOffsetTop+insideDineHeight-200){
            $navInsideDine.addClass("nav-active");
        }else{
            $navInsideDine.removeClass("nav-active");
        }


        var $appScreenshots=$insideDine.children(".app-screenshots");
        var appScreenshotsHeight=$appScreenshots.height();
        var appScreenshotsOffsetTop=$appScreenshots.offset().top;
        if(scrollHeight>appScreenshotsOffsetTop-300 && scrollHeight<appScreenshotsHeight+appScreenshotsOffsetTop-50){
            $appScreenshots.addClass("animated bounce");
        }else{
            $appScreenshots.removeClass("animated bounce");
        }

        var $download=$("#download");
        var downloadHeight=$download.height();
        var downloadOffsetTop=$download.offset().top;
        if(scrollHeight>downloadOffsetTop-200 && scrollHeight<downloadOffsetTop+downloadHeight){
            $navDownload.addClass("nav-active");
        }else{
            $navDownload.removeClass("nav-active");
        }



        var $downloadText=$download.find(".download-text");
        var downloadTextHeight=$downloadText.height();
        var downloadTextOffsetTop=$downloadText.offset().top;
        if(scrollHeight>downloadTextOffsetTop-300 && scrollHeight<downloadTextOffsetTop+downloadTextHeight-50){
            $downloadText.addClass("animated wobble");
        }else{
            $downloadText.removeClass("animated wobble");
        }

        var $downloadImage=$download.children().children(".download-image");
        var downloadImageHeight=$downloadImage.height();
        var downloadImageOffsetTop=$downloadImage.offset().top;
        var downloadLeftImg=$downloadImage.find(".download-left-img");
        var downloadRightImg=$downloadImage.find(".download-right-img");
        var downloadImg=$downloadImage.find(".download-img");
        if(scrollHeight>downloadImageOffsetTop-250 && scrollHeight<downloadImageOffsetTop+downloadImageHeight-300){
            downloadLeftImg.addClass("animated zoomInLeft");
            downloadRightImg.addClass("animated zoomInRight");
            downloadImg.addClass("animated zoomIn");
        }else{
            downloadLeftImg.removeClass("animated zoomInLeft");
            downloadRightImg.removeClass("animated zoomInRight");
            downloadImg.removeClass("animated zoomIn");
        }

        var $aboutUs=$download.find(".about-us");
        var aboutUsHeight=$aboutUs.height();
        var aboutUsOffsetTop=$aboutUs.offset().top;
        if(scrollHeight>aboutUsOffsetTop-300 && scrollHeight<aboutUsOffsetTop+aboutUsHeight-100){
            $aboutUs.addClass("animated swing");
        }else{
            $aboutUs.removeClass("animated swing");
        }

        var $aboutTheTeam=$download.find(".about-the-team");
        var aboutTheTeamHeight=$aboutTheTeam.height();
        var aboutTheTeamOffsetTop=$aboutTheTeam.offset().top;
        if(scrollHeight>aboutTheTeamOffsetTop-300 && scrollHeight<aboutTheTeamOffsetTop+aboutTheTeamHeight-150){
            $aboutTheTeam.addClass("animated swing");
        }else{
            $aboutTheTeam.removeClass("animated swing");
        }

        var $explain=$download.find(".explain");
        var explainHeight=$explain.height();
        var explainOffsetTop=$explain.offset().top;
        if(scrollHeight>explainOffsetTop-100 && scrollHeight<explainOffsetTop+explainHeight-100){
            $explain.addClass("animated shake");
        }else{
            $explain.removeClass("animated shake");
        }
    });
});
