(function($){
    $.fn.customSlider = function(){
      return this.each(function(i,v){
        console.log($(this));
        let prevBtn             =   $(this).find('.slider_prev');
        let nextBtn             =   $(this).find('.slider_next');
        let slideLength         =   $(this).find('.slides_wrap li').length;
        let visibleSlide        =   2;
        let slideWidth          =   $(this).find('.slides_wrap li').outerWidth();
        let sliderWidth         =   slideWidth * slideLength;
        let animateTill         =   sliderWidth - (slideWidth * visibleSlide) - (+slideWidth);
        let animateToNext       =   '+=' + '-' + slideWidth + 'px';
        let animateToPrev       =   '+=' + slideWidth + 'px';
        let animationObjNext    =   {'left': animateToNext}
        let animationObjPrev    =   {'left': animateToPrev}
        $(this).click(slideItems());
        
        function slideItems(){
          $(nextBtn).click(function(){
            let animateFrom = $('.slides_wrap').position().left;
            var slider_pos = Math.abs((+animateFrom) - (+animateTill)); 
            
            console.log('slider_pos', slider_pos);
            console.log('sliderWidth', sliderWidth);
            if(slider_pos == sliderWidth){
                return false;
               }else {
                $('.slides_wrap').animate(animationObjNext); 
               }
          });
          $(prevBtn).click(function(){
            let animateFrom = $('.slides_wrap').position().left;
              if(animateFrom < 0 ) {
                $('.slides_wrap').animate(animationObjPrev);
              }else {
                  return false;
              }
          });
        }
      });
    }
  }(jQuery));