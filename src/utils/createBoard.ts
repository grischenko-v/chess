import { Group } from "three";
import BorderLarge from "../ui/board/BorderLarge";
import BorderSmall from "../ui/board/BorderSmall";
import Plane from "../ui/board/Plane";

export const createBoard = () => {
    const group = new Group();
    group.add(new Plane().getMesh());

    group.add(new BorderLarge(({x: 0, z: 4.25})).getMesh());
    group.add(new BorderLarge(({x: 0, z: -4.25})).getMesh());

    group.add(new BorderSmall(({x: 4.25, z: 0})).getMesh());
    group.add(new BorderSmall(({x: -4.25, z: 0})).getMesh());

    return group;
}