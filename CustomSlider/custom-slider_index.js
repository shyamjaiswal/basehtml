(function($){
    $.fn.customSlider = function(){
      return this.each(function(){
        let prevBtn             =   $(this).find('.slider_prev');
        let nextBtn             =   $(this).find('.slider_next');
        let slideItemWrap       =   $(this).outerWidth();
        let slideLength         =   $(this).find('.slides_wrap li').length;
        let visibleSlide        =   2;
        let slidingNo        =   2;
        //let slideWidth          =   $(this).find('.slides_wrap li').outerWidth();
        let sliderWrapWidth     =   $('.slides_wrap').outerWidth();
        let slideWidth          =   sliderWrapWidth/visibleSlide;

        console.log('slideWidth', slideWidth);
        let sliderWidth         =   slideWidth * slideLength;


        //Set th width for slider elements
        console.log('slideItemWrap', slideItemWrap);
        $(".custom_slider .slides_wrap li").outerWidth(slideWidth);
        $(".custom_slider .slides_wrap").outerWidth(sliderWidth);
       



        let animateTill         =   sliderWidth - (slideWidth * visibleSlide) - (+slideWidth);
        console.log('animate value', slideWidth)
        let animateToNext       =   '+=' + '-' + slideWidth * slidingNo + 'px';
        let animateToPrev       =   '+=' + slideWidth * slidingNo + 'px';
        let animationObjNext    =   {'left': animateToNext}
        let animationObjPrev    =   {'left': animateToPrev}
        

        

        $(this).click(slideItems());
        
        function slideItems(){
            var counter     = 1;
          $(nextBtn).click(function next(){
                var sliderIndex = visibleSlide;
                
                sliderIndex += counter++ ;

                console.log('slideLength', slideLength);
                console.log('sliderIndex', sliderIndex);
                if((slideLength - sliderIndex) == 0) {
                    $(nextBtn).addClass('disable');
                    return false;
                }else{
                    $(nextBtn).removeClass('disable');
                    $('.slides_wrap').animate(animationObjNext); 
                }
          });
          $(prevBtn).click(function prev(){

            if((slideLength - sliderIndex) < 0) {
                $(nextBtn).removeClass('disable');
                $('.slides_wrap').animate(animationObjNext); 
            }else{
                $(nextBtn).addClass('disable');
                return false;
            }
          });
        }
      });
    }
  }(jQuery));