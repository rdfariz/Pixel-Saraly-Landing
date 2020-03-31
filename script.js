$('.btn_play').click(function(){
    $('.modal_vid').toggleClass('active');
    $('.modal_content').toggleClass('active');
    $('body').toggleClass('fixed');
});

$('.modal_close').click(function(){
    $('.modal_vid').toggleClass('active');
    $('.modal_content').toggleClass('active');
    $('body').toggleClass('fixed');
});

$('.modal_vid').click(function(){
    $('.modal_vid').removeClass('active');
    $('.modal_content').removeClass('active');
    $('body').removeClass('fixed');
});


$('.btn_play2').click(function(){
    $('.modal_vid2').toggleClass('active');
    $('.modal_content2').toggleClass('active');
    $('body').toggleClass('fixed');
});

$('.modal_close2').click(function(){
    $('.modal_vid2').toggleClass('active');
    $('.modal_content2').toggleClass('active');
    $('body').toggleClass('fixed');
});

$('.modal_vid2').click(function(){
    $('.modal_vid2').removeClass('active');
    $('.modal_content2').removeClass('active');
    $('body').removeClass('fixed');
});


$('body').toggleClass('fixed');
//LOADING//
setTimeout(() => {
    $('.preloader').fadeOut("500");
    setTimeout(() => {
        $('.preloader').css("dislay", "none");
        $('body').removeClass('fixed');
    }, 2001);
    const view = document.getElementById('home');
    view.scrollIntoView();
}, 2000);

setTimeout(() => {
    $('.header_right').addClass('active');
    $('.data_header_left .kaji').addClass('active');
    $('.data_header_left .semua').addClass('active');
    $('.data_header_left p').addClass('active');
    $('.data_header_left .btn_login_large').addClass('active');
}, 1990);


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll < 30){
        $('nav').removeClass('scrolled');
    }else if(wScroll > 100){
        $('nav').addClass('scrolled');
    }

    $('.header_right').css({
		'transform' : 'translate(0px, '+ wScroll/-4 +'px)'
	})

	$('.header_left').css({
		'transform' : 'translate(0px, '+ wScroll/3 +'px)'
	})
});  

// SCROLL INTO
$('.toHome').click(function(){
    const view = document.getElementById('home');
    view.scrollIntoView({block: 'start', behavior: 'smooth'});
});

$('.toAbout').click(function(){
    const view = document.getElementById('about');
    view.scrollIntoView({block: 'start', behavior: 'smooth'});
});

$('.toServices').click(function(){
    const view = document.getElementById('services');
    view.scrollIntoView({block: 'start', behavior: 'smooth'});
});

$('.toContact').click(function(){
    const view = document.getElementById('contact');
    view.scrollIntoView({block: 'start', behavior: 'smooth'});
});



