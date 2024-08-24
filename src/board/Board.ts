import {Group} from 'three';
import Cell from './Cell';
import BorderSmall from './BorderSmall'
import BorderLarge from './BorderLarge'
import Plane from './Plane'

const cellNumbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const cellLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

class Board {
    group: Group;
    cells: any = {};

    constructor() {
        this.group = new Group();
        // this.group.position.x = -3.5;
        // this.group.position.z = -3.5;
        // this.group.add(new Plane().getMesh());

        let counter = 0;
        const half = (cellLetters.length - 1)/ 2;
        console.log(half);
        cellLetters.forEach((letter, x) => {
            cellNumbers.forEach((number, z) => {
                const color = (counter + x % 2) % 2 ? 0x231F20 : 0xEFE6DD;
                const cellName = letter + number;

                this.cells[cellName] = {
                    mesh: new Cell({x: x - 3.5, z: z - 3.5}, color, cellName),
                    name: cellName,
                }
                this.group.add(this.cells[cellName].mesh.getMesh());

                counter++;
            })
        })

        // this.group.add(new BorderLarge(({x: 0, z: 3.75})).getMesh());
        // this.group.add(new BorderLarge(({x: 0, z: -3.75})).getMesh());

        // this.group.add(new BorderSmall(({x: 3.75, z: 0})).getMesh());
        // this.group.add(new BorderSmall(({x: -3.75, z: 0})).getMesh());

        this.group.receiveShadow = true;
    }

    getCellByName(name: string) {
        console.log(this.cells);
        return this.cells[name].mesh.getPosition()
    }
}

export default Board