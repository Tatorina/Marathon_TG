const board = document.querySelector('#board')
const colors = ['#ff1178', '#fe0000', '#fff205', '#01fff4', '#7cff01', '#8c1bab', '#f55555']
const SCUARES_NUMBER = 600


for (let i = 0; i < SCUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => {
		setColor(square)
	})

	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})


	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
