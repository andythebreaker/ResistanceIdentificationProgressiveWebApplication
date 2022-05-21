var swipeadd = function () {
    var defaults = {
        pagination: '.swiper-pagination',
        slidesPerView: 3, freeMode: true,
        freeModeSticky: true,
        freeModeMomentumRatio: 0.25,
        freeModeVelocityRatio: 0.25,
        freeModeMinimumVelocity: 0.1,
        mousewheelControl: true,
        mousewheelSensitivity: 0.5,
        loop: true,
        loopAdditionalSlides: 0,
        direction: 'vertical',
        slideToClickedSlide: true,
        centeredSlides: true,
        on: {
            slideChange: function () {
                console.log('swiper slideChange');
            },
        },
    };
    var swiper1 = new Swiper('.swiper-container.hours', Object.assign({}, defaults, { initialSlide: 13 }));
    var swiper2 = new Swiper('.swiper-container.minutes', Object.assign({}, defaults, { initialSlide: 37 }));
    var swiper3 = new Swiper('.swiper-container.seconds', defaults);
    console.log('into swipe');
}