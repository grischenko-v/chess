import Board from './board/Board';
import { createFigureFactory } from './figures/FiguresFactory';
import Scene from './global/Scene';

const scene = new Scene();
scene.animate();
const board = new Board();

scene.addObj({mesh: board.group})


const positiona2 = board.getCellByName('a2');
const pawna2 = createFigureFactory({type: 'pawn' , position: positiona2});
scene.addObj(pawna2);

const positionb2 = board.getCellByName('b2');
const pawnb2 = createFigureFactory({type: 'pawn' , position: positionb2});
scene.addObj(pawnb2);

const positionf7 = board.getCellByName('f7');
const pawnf7 = createFigureFactory({type: 'pawn' , position: positionf7});
scene.addObj(pawnf7);


const animate = () => {
    setTimeout(() => pawnf7.move(board.getCellByName('f6')), 1000);
    setTimeout(() => pawnb2.move(board.getCellByName('b4')), 2000);

    setTimeout(() => pawnf7.move(board.getCellByName('f7')), 4000);
    setTimeout(() => pawnb2.move(board.getCellByName('b2')), 5000);
}

declare global {
    interface Window {
        animate:any;
    }
}

setInterval(animate, 6000)

window.animate = animate;
