$(document).ready(function() {

    var glonalIndex = 1 ;

     $('.slider-control').click(function(){
        sliderGo($(this).index());
     });

     function sliderGo(index){
        var nextIndex = index + 1 ;
        if( nextIndex >= 5 ){ nextIndex = 0 };
        $('.picture-wrapper').eq(index).css('z-index','10').animate({
                    left:    '58%'
                    },1000,'swing',function(){
                        $('.visiblejq').css('display','none');
                        $('.visiblejq').eq(index).css('display','block');
                        $('.picture-wrapper').not($('.picture-wrapper').eq(index)).css('left','0')
                        $('.picture-wrapper img').removeClass('opac');
                        $('.picture-wrapper:eq('+index+') img').addClass('opac');
                    }
                ).addClass('anim');

                $('.slider-control').removeClass('screenshot__controls_item_big');
                $('.slider-control').eq(index).addClass('screenshot__controls_item_big');
                $('.picture-wrapper').not($('.picture-wrapper').eq(index)).css('z-index','1').removeClass('anim');
                $('.picture-wrapper').eq(nextIndex).css('z-index','5');
     };

    var timeSlider = setInterval(function(){

        sliderGo(glonalIndex);
        glonalIndex++;
        if( glonalIndex >= 5 ){glonalIndex = 0 };
    },3000);


    $('.screenshot__controls').mouseover(function(){
        clearInterval(timeSlider);
    }).mouseout(function(){
        timeSlider = setInterval(function(){
            sliderGo(glonalIndex);
            glonalIndex++;
            if( glonalIndex >= 5 ){glonalIndex = 0 };
        },3000);
    })

       

})