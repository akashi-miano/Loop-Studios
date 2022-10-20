const bar = document.querySelector('.mobile-nav')
const list = document.querySelector('.hero__list')

let openButton = false

bar.addEventListener('click', () => {
	openButton = !openButton
	if (openButton) {
		bar.classList.add('open')
		list.style = 'transform: translateX(0%)'
	} else {
		bar.classList.remove('open')
		list.style = `
		@media (max-width: 48em) {
		transform: translateX(100%)
		}
		`
	}
})
