import {Group, Vector3} from 'three';
import {createPawn} from './createPawn';
import { gsap } from 'gsap';
import type { FigureColor, FigureType } from '../../domain/Figure';
import { createRook } from './createRook';
import { createBishop } from './createBishop';
import { createKight } from './createKnight';
import { createQueen } from './createQueen';
import { FIGURE_COLOR } from '../../constants';
import { createKing } from './createKing';

type TFigureParams = {
	position: Vector3,
	color: FigureColor,
	name: string
}

export const figureUIFactory: Record<FigureType, (params: TFigureParams) => FigureUI> = {
	'Pawn': (params: TFigureParams) => {
		const pawn = createPawn(params.color, params.name);
		return new FigureUI(pawn, params.position, params.color);
	},
	'Rook': (params: TFigureParams) => {
		const rook = createRook(params.color, params.name);
		return new FigureUI(rook, params.position, params.color);
	},
	'Bishop': (params: TFigureParams) => {
		const rook = createBishop(params.color, params.name);
		return new FigureUI(rook, params.position, params.color);
	},
	'Knight': (params: TFigureParams) => {
		const rook = createKight(params.color, params.name);
		return new FigureUI(rook, params.position, params.color);
	},
	'Queen': (params: TFigureParams) => {
		const rook = createQueen(params.color, params.name);
		return new FigureUI(rook, params.position, params.color);
	},
	'King': (params: TFigureParams) => {
		const rook = createKing(params.color, params.name);
		return new FigureUI(rook, params.position, params.color);
	}
};

export class FigureUI {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	mesh: any;
	color: FigureColor;

	constructor(group: Group, position: Vector3, color: FigureColor) {
		this.mesh = group;
		this.mesh.position.set(position.x, 0.5, position.z);
		this.color = color;
	}

	getMesh() {
		return this.mesh;
	}

	getPosition() {
		return this.mesh.position;
	}

	unselect() {
		const defualtColor = FIGURE_COLOR[this.color];
		this.changeFigureColor(defualtColor);
	}

	select() {
		this.changeFigureColor(FIGURE_COLOR.selected);
	}

	private changeFigureColor(color: number) {
		for ( let i = 0; i < this.mesh.children.length; i ++ ) {
			this.mesh.children[i]?.material.color.setHex(color)
		  }
	}

	move = (position: Vector3) => {
		gsap.to(this.mesh.position, {
			duration: 1,
			x: position.x,
			z: position.z,
			onComplete: () => this.mesh.position.set(position.x, 0.5, position.z),
		});
	};
}