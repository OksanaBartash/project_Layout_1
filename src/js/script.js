$(function () {

});

let swiper = new Swiper(".servicesSwiper", {
	//effect: 'coverflow',
	//coverflowEffect: {
	//  rotate: 0,
	//  slideShadows: false,
	//},
	//pagination: {
	//	el: ".swiper-pagination",
	//	dynamicBullets: true,
	//},

	autoplay: {
		delay: 10000,
	},

	breakpoints: {
		1024: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1440: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
});