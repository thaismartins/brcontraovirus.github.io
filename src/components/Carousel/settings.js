const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  lazyLoad: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToScroll: 1,
        centerMode: true,
        className: 'center',
        slidesToShow: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        centerMode: true,
        className: 'center',
        slidesToShow: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToScroll: 1,
        centerMode: true,
        className: 'center',
        slidesToShow: 1,
        swipeToSlide: true,
      },
    },
  ],
}

export default settings
