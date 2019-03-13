$(function() {
  const content = [{
    name: 'Steve',
    surename: 'Prommising',
    description: 'Cosmic Politician',
    photo: "images/white_guy.png",
    image: "../images/bg_top_photo1.jpg",
    technology: {
      js: true,
      html: true,
      react: true
    }

  }, {
    name: 'Andy',
    surename: 'Rightman',
    description: 'Extraterrestrial Politician',
    photo: "images/black_guy.png",
    image: "../images/bg_top_photo2.jpg",
    technology: {
      js: true,
      html: true,
      react: true
    }
  }];
  $(".container-slider").slider({
    data: content,
    onSlide: (item) => {
       $('.section.section__main').css('background-image', `url(${item.image})`);
    }
  });
})
