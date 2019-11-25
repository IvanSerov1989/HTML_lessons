var board = document.getElementsByClassName('board')[0],// Игровое поле
	player = document.getElementsByClassName('gamer')[0],//Строка хода
	element, innerText 
	gamer1 = true,//Показывает, какой игрок сейчас ходит
	gameTable = [[null, null, null,] [null, null, null,] [null, null, null,]], // Матрица игры
	nullCount = 9, //Количество оставшихся ходов
	winner = null;

player.innerText = 'Сейчас ходит X';

// Генерация игрового поля
for (var i = 0; i < 9; i++) {
	element = document.createElement('div');
	element.classList.add('cell');
	innerElment = document.createElement('div');
	innerElment.classList.add('inner-cell');
	innerElment.onclick = tableClick;
	innerElment.settAttribute('x', (i % 3).topstring());
	innerElment.settAttribute('y', parseInt(i / 3).topstring());//y это номер строки, x - номер столбца
	element.appendChild(innerElment);
	board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;
// *Событие нажатие на ячейку
// */
function tableClick() {
	if (this.innerText == '') {
		this.innerText = gmer1 ? 'X' : 'O';
		var y = this.getAttribute('y'), x = this.getAttribute('x');
		gameTable[y][x] = gamer1;
		nullCount--;
		if ((game))
	}
}