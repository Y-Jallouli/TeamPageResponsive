new Vue({
    el: '#carousel',
    data: {
      slides: [{
        title: 'J.YASSINE',
         mainSrc: './yassine.jpg',
       
        desc: '19 ans',
        tag: 'developper',
        resize: false
      }, {
        title: 'M.NABIL',
        mainSrc: './13332826_974742989307058_4360102806491644296_n (1).jpg',
        desc: '19 ans',
        tag: 'developper',
        resize: true
      }, {
        title: 'B.AMINE',
        mainSrc: './amine.jpg',
        desc: '19 ans',
        tag: '7amel',
        resize: false,
        resizeMed: true
      }]
    },
    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    }
  })