export const eventTypes = {
    outsideClick: 'outsideClick',
    cellClick: 'cellClick',
    figureClick: 'figureClick',
    chagePlayer: 'changePlayer',
    checked: 'checked',
    gameFinished: 'gameFinished',
    figureCaptured: 'figureCaptured',
	figureMove: 'figureMove',
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