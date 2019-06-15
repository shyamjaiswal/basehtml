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

    /**
     * Proxied event handlers.
     * @protected
     */
    this._handlers = {};

    this.prev = null;
    this.next = null;

    this.currentAnimate = 0;
    this.totalChildItems = this.$element.children().length;

    this.setOrdinates();
    this.init();
  }

  FancySlider.Defaults = {
    items: 3,
    classes: {
      slider: "fancy-slider",
      stage: "fancy-slider__stage",
      item: "fancy-slider__item",
      nav: {
        class: "fancy-slider__nav",
        prev: "fancy-slider__nav-prev",
        next: "fancy-slider__nav-next",
        disabled: "disabled"
      }
    }
  };

  FancySlider.prototype.setOrdinates = function() {
    var width = this.$element.outerWidth();
    var itemWidth = width / this.options.items;
    var totalWidth = itemWidth * this.totalChildItems;
    var maxAllowedTransform = totalWidth - itemWidth * this.options.items;

    this.sliderOrdinates = {
      width: width,
      itemWidth: itemWidth,
      totalWidth: totalWidth,
      maxAllowedTransform: maxAllowedTransform
    };
  };

  FancySlider.prototype.init = function() {
    this.$element.addClass(this.options.classes.slider);
    this.$element
      .find(".".concat(this.options.classes.item))
      .wrapAll("<div class='" + this.options.classes.stage + "' />");

    /**
      Bind Events once slider is created
     */
    this.constructSlider($.proxy(this.bindEvents, this));
  };

  FancySlider.prototype.constructSlider = function(callback) {
    if (!this.prev && !this.next) {
      this.$element.append(
        '<div class="' +
          this.options.classes.nav.class +
          '"><span class="' +
          this.options.classes.nav.prev +
          '">Prev</span><span class="' +
          this.options.classes.nav.next +
          '">Next</span></div>'
      );

      this.prev = this.$element.find(".".concat(this.options.classes.nav.prev));
      this.next = this.$element.find(".".concat(this.options.classes.nav.next));
    }

    this.$element
      .find(".".concat(this.options.classes.item))
      .outerWidth(this.sliderOrdinates.itemWidth);
    if (callback) {
      callback();
    }
    this.checkNavigation();
  };

  FancySlider.prototype.resize = function() {
    this.currentAnimate = 0;
    this.constructSlider();
    this.setOrdinates();
    this.animateSlider();
  };

  FancySlider.prototype.onPrevClick = function(e) {
    if (this.currentAnimate >= this.sliderOrdinates.itemWidth) {
      this.currentAnimate -= this.sliderOrdinates.itemWidth;
    }

    this.checkNavigation();
    this.animateSlider();
  };

  FancySlider.prototype.onNextClick = function(e) {
    if (this.currentAnimate < this.sliderOrdinates.maxAllowedTransform) {
      this.currentAnimate += this.sliderOrdinates.itemWidth;
    }
    this.checkNavigation();
    this.animateSlider();
  };

  FancySlider.prototype.animateSlider = function() {
    this.$element
      .find(".".concat(this.options.classes.stage))
      .animate({ "margin-left": -this.currentAnimate }, "linear");
  };

  FancySlider.prototype.checkNavigation = function() {
    if (this.currentAnimate <= this.sliderOrdinates.itemWidth) {
      this.$element
        .find(".".concat(this.options.classes.nav.prev))
        .addClass("disabled");
    } else {
      this.$element
        .find(".".concat(this.options.classes.nav.prev))
        .removeClass("disabled");
    }

    if (this.currentAnimate >= this.sliderOrdinates.maxAllowedTransform) {
      this.$element
        .find(".".concat(this.options.classes.nav.next))
        .addClass("disabled");
    } else {
      this.$element
        .find(".".concat(this.options.classes.nav.next))
        .removeClass("disabled");
    }
  };

  FancySlider.prototype.bindEvents = function() {
    $(window).resize($.proxy(this.resize, this));
    $(this.prev).on("click", $.proxy(this.onPrevClick, this));
    $(this.next).on("click", $.proxy(this.onNextClick, this));
  };

  $.fn.fancySlider = function(option) {
    return this.each(function() {
      var $this = $(this);
      var slider = new FancySlider($this, option);
    });
  };

  $.fn.fancySlider.Constructor = FancySlider;
})(window.jQuery, window, document);
