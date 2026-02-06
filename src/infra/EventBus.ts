export const eventTypes = {
    outsideClick: 'outsideClick',
    cellClick: 'cellClick',
    figureClick: 'figureClick',
    chagePlayer: 'changePlayer',
	figureMove: 'figureMove',
	revertFigureMove: 'revertFigureMove',
	nextStepRequest: 'nextStepRequest',
	nextStepResponse: 'nextStepResponse',
	helpRequest: 'helpRequest',
	botInited: 'botInited',
	pawnTransformRequest: 'pawnTransformRequest',
	pawnTransformResponse: 'pawnTransformResponse',
	gameModeSelect: 'gameModeSelect',
} as const;

export type EventTypes = keyof typeof eventTypes;

export interface IEventBus {
    dispatchEvent: (eventType: EventTypes, message: unknown) => void,
    subscribe: (eventType: EventTypes, cb: (args: unknown) => void) => void,
}

class EventBus implements IEventBus {
    dispatchEvent(eventType: EventTypes, message?: unknown) {
        window.dispatchEvent(new CustomEvent(eventType, { 
            detail: message, 
        }))
    }

    subscribe(eventType: EventTypes, cb: (args: unknown) => void) {
        window.addEventListener(eventType, cb)
    }
}

export const eventBus = new EventBus();