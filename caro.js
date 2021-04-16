let row = prompt('nhap so hang');
let col = prompt('nhap so cot');

let turn = 1;

function greatBoard() {
    let str = '';
    for (let i = 0; i < row; i++) {
        str += '<tr>';
        for ( let j = 0 ; j < col ; j++){
            str += `<td id='cell-${i}-${j}' onclick="clickCell(${i},${j})"></td>`;
        }
        str += '</tr>';
    }
    document.getElementById('demo').innerHTML = str;

}
greatBoard();
function clickCell(x,y) {
    let cell = document.getElementById(`cell-${x}-${y}`);
    if (cell.innerHTML === ''){
        if (turn === 1){
            cell.innerHTML = 'X';
            turn = 2;
        }else {
            cell.innerHTML = 'O';
            turn = 1;
        }
    }
}
