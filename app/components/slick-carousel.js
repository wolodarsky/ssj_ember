import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['slick-carousel'],
  setupSlick: function() {
    Ember.$('.slick-carousel').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
      // adaptiveHeight: true,
      pauseOnHover: false,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       // fade: false,
      //       // speed: 750,
      //       autoplaySpeed: 3000,
      //       // touchMove: false
      //     }
      //   }
      // ]
    });
  }.on('didInsertElement')
});
