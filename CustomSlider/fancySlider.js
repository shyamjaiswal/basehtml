(function($, window, document, undefined) {
  function FancySlider(element, options) {
    /**
     * Options
     */
    this.options = $.extend({}, FancySlider.Defaults, options);

    /**
     * Element
     */
    this.$element = $(element);

    this.prev = null;
    this.next = null;

    this.sliderOrdinates = {
      width: this.$element.outerWidth()
    };

    this.init();
    this.onEvent();
  }

  FancySlider.Defaults = {
    items: 3
  };

  FancySlider.prototype.init = function() {
    this.$element.addClass("fancy-slider");
    this.constructSlider();
    console.log(this.sliderOrdinates);
  };

  FancySlider.prototype.constructSlider = function() {
    if (!this.prev && !this.next) {
      this.$element.append(
        '<span class="slider-nav"><span class="slider_prev slider-btn">prev</span><span class="slider_next slider-btn">next</span></span>'
      );

      this.prev = this.$element.find(".slider-nav .slider_prev");
      this.next = this.$element.find(".slider-nav .slider_next");

      $(this.prev).on("click", this.onPrevClick);
      $(this.next).on("click", this.onNextClick);
    }

    var itemWidth = this.sliderOrdinates.width / this.options.items;

    this.$element.find(".slide-item").width(itemWidth);
  };

  FancySlider.prototype.resize = function() {
    console.log(this.$element);
    this.sliderOrdinates = {
      width: this.$element.outerWidth()
    };
    this.constructSlider();
  };

  FancySlider.prototype.onPrevClick = function(e) {
    console.log("prev clicked", e);
  };

  FancySlider.prototype.onNextClick = function(e) {
    console.log("next clicked", e);
  };

  FancySlider.prototype.onEvent = function() {
    //this.on(window, "resize", this.resize);
    $(window).resize(() => this.resize());
  };

  $.fn.fancySlider = function(option) {
    return this.each(function() {
      var $this = $(this);
      var slider = new FancySlider($this, option);
    });
  };

  $.fn.fancySlider.Constructor = FancySlider;
})(window.jQuery, window, document);
