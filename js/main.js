$('.navbar_gnb,.sub_shadow').on('mouseenter mouseleave', function(aa) {
    
    if($(window).width() > 1169){
        if( aa.type == 'mouseenter') {
            $('.sub').stop().slideDown();
            $('.sub_shadow').stop().fadeIn();
        } else {
            $('.sub').stop().slideUp(200,function(){
                $('.sub').removeAttr('style');
            });
            $('.sub_shadow').stop().fadeOut(200, function(){
                $(this).removeAttr('style');
            });
            
        }
    }
    
    
});


/*
    mouseenter / mouseleave - 자식요소가 있다면 해당 자식요소 영역은 제외
    mouseover / mouseout - 자식요소가 있으면 해당 자식요소까지 포함
*/ 


// 모바일- 메인메뉴 클릭시 서브메뉴
const $mainBtn = $('.navbar_gnb > li > a');

$mainBtn.click(function(){
    // 모바일 상태일때만
    if($(window).width() < 1170 ){
        if($(this).parents('li').hasClass('on')) {
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideUp(500);
        } else {
            $('.sub').slideUp(200);
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown(500);
            $(this).parents('li').addClass('on');
        }

        
    }
    
});

// 모바일 상태에서 햄버거버튼 누르면 사이드바 열리고 닫힘
$('.trigger').click(function(){
    if($(window).width() < 1170 ){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0}, 400);
        $('.trigger').animate({left:-250}, 400);
        $('header h1').addClass('none');
    } else {
        $('.gnb').animate({right:-250}, 400);
        $('.trigger').animate({left:0}, 400);
        $('header h1').removeClass('none');
    }
    } 
});

$(window).resize(function(){
    if($(window).width() < 1170 ){
        $('.sub').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});