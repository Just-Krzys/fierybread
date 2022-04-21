const mobileNav = document.querySelector('ul')
const burgerBtn = document.querySelector('.burger')
const listItemsOpen = document.querySelectorAll('.list-open')

const scrollDown = document.querySelector('nav')
let previousScrollTop
let isScrolling

const hasScrolled = () => {
	const scrollTop = window.scrollY
	if (scrollTop > previousScrollTop) {
		scrollDown.classList.add('up')
	} else {
		scrollDown.classList.remove('up')
	}

	previousScrollTop = scrollTop
}
document.addEventListener('scroll', () => (isScrolling = true))

setInterval(() => {
	if (isScrolling) {
		hasScrolled()
		isScrolling = false
	}
}, 100)

for (const listItemOpen of listItemsOpen) {
	listItemOpen.addEventListener('click', () => {
		mobileNav.classList.remove('active')
	})
}

burgerBtn.addEventListener('click', function () {
	// mobileNav.classList.add('active')
	mobileNav.classList.toggle('active')
	burgerBtn.classList.toggle('active')
})
