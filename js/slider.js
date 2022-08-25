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
		interval: ''
	},
	methods: {
		setAlt() {
			return 'Immagine ' + (this.active + 1);
		},
		prevSlide() {
			this.active = this.isStart() ? this.slides.length - 1 : this.active - 1;
		},
		nextSlide() {
			this.active = this.isEnd() ? 0 : this.active + 1;
		},
		isEnd() {
			const lastIndex = this.slides.length - 1;
			return this.active === lastIndex;
		},
		isStart() {
			return !this.active;
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