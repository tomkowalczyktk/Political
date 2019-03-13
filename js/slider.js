(function($) {



  $.fn.slider = function(options = {}) {
    const $container = $(this);
    const $leftArrow = $('<div class="slider__arrow-left"><</div>');
    const $rightArrow = $('<div class="slider__arrow-right">></div>');
    const $banerBg = $('.section__main');

    const { onSlide, data } = options;

    const $slides = data.map(item => {
      const baner = `
      <div class="row row-slider">

        <div class='col col-xs-12'>
          <div class="name name1">${item.name}</div>
          <div class="name name2">${item.surename}</div>
          <div class="descr">${item.description}</div>
          <div class=" btn button" type="submit">BECOME A VOULONTIER</div>
        </div>
        <div class="col col-xs-12">
          <img class="pic" src="${item.photo}"></img>
        </div>

      </div>
      `;
      return $(baner);
    });
    let index = 0;
    let $activeSlide = $slides[index];
    $activeSlide.addClass('row-slider--active');

    function next() {
      const $next = $activeSlide.next(".row-slider");
      if ($next.length) {
        $activeSlide.removeClass('row-slider--active');
        $next.addClass('row-slider--active');
        $activeSlide = $next;
        index = $activeSlide.index();
        onSlide && onSlide(data[index]);
      }
    }

    function prev() {
      const $prev = $activeSlide.prev(".row-slider");
      
      $activeSlide.removeClass('row-slider--active');
      $prev.addClass('row-slider--active');
      $activeSlide = $prev;
      index = $activeSlide.index();
      onSlide && onSlide(data[index]);

    }

    $leftArrow.on('click', function() {
      prev();
    });

    $rightArrow.on('click', function() {
      next();
    });

    $container.html($slides);
    $leftArrow.appendTo($banerBg);
    $rightArrow.appendTo($banerBg);

    return this;
  };
}(jQuery));
