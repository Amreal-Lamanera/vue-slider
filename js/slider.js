// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const app = new Vue({
	el: '#app',
	data: {
		slides,
		active: 0,
		alt: 'Immagine ' + this.active,
		interval: ''
	},
	methods: {
		prevSlide() {
			if (!this.active) this.active = this.slides.length - 1;
			else this.active--;
		},
		nextSlide() {
			if (this.active === this.slides.length - 1) this.active = 0;
			else this.active++;
		},
		nextSlideTiming() {
			this.interval = setInterval(this.nextSlide, 3000);
		},
		stopInterval() {
			clearInterval(this.interval);
		}
	},
	mounted: function () {
		this.nextSlideTiming();
	}
})