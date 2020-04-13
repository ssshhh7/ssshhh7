
$(function() {
    // 按下GoTop按鈕時的事件
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    // // 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現
    // $(window).scroll(function() {
    //     if ( $(this).scrollTop() > 400){
    //         $('#gotop').fadeIn();
    //     } else {
    //         $('#gotop').fadeOut();
    //     }
    // });
    

    // test
    $(window).scroll(function(){
        // スクロール量を設定
        var TargetPos = 400;
        // 現在のスクロール位置を取得
        var ScrollPos = $(window).scrollTop();
        var sc = $(this).scrollTop();
        // console.log(sc); 
        // 現在位置が目的の位置か判断
        if( ScrollPos >= TargetPos){  
        // 達していれば表示
        $("#gotop").fadeIn();
        }
        // 達していなければ非表示
        else {
            $("#gotop").fadeOut();
        }
    });
  
});


// 整體淡入淡出
$(function(){  // $(document).ready shorthand
    $('html').fadeIn('slow');
});
  
$(function(){ 
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('body').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});

$(function(){ 
    $('.animate').on('inview', function() {
        $(this).addClass('fadeIn');
    });
});