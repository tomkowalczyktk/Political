
(function ($) {



  $.fn.slider = function (options) {
    const $container = $(this);
    const $leftArrow = $('<div class="slider__arrow-left"><</div>');
    const $rightArrow = $('<div class="slider__arrow-right">></div>');
    const $banerBg = $('.section__main');


    const $slides = options.data.map(item => {
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
      <script>
        $('.section .section__main').css('background-image', 'url(${item.image})');
      </script>
      `;
      return $(baner);
    });
    let $activeSlide = $slides[0];
    $activeSlide.addClass('row-slider--active');

    function next() {
      console.log('slides', $slides);
      const $next = $activeSlide.next(".row-slider");
      console.log('active', $activeSlide);
      console.log('next', $next);
      if ($next.length) {
        $activeSlide.removeClass('row-slider--active');
        $next.addClass('row-slider--active');
        $activeSlide = $next;
      }
    }

    function prev() {
      console.log('slides', $slides);
      const $prev = $activeSlide.prev(".row-slider");
      console.log('active', $activeSlide);
      console.log('prev', $prev);
      console.log('prev length', $prev.length)
      // if ($prev.length) {
      console.log('test');
      $activeSlide.removeClass('row-slider--active');
      $prev.addClass('row-slider--active');
      $activeSlide = $prev;
      // }
    }

    $leftArrow.on('click', function () {
      prev();
    });

    $rightArrow.on('click', function () {
      next();
    });

    $container.html($slides);
    $leftArrow.appendTo($banerBg);
    $rightArrow.appendTo($banerBg);

    return this;
  };
}(jQuery));