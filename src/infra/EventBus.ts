export type EventTypes = 'intercect';

interface IEventBus {
    dispatchEvent: (eventType: EventTypes, message: any) => void,
    subscribe: (eventType: EventTypes, cb: (args: any) => void) => void,
}

class EventBus implements IEventBus {
    dispatchEvent(eventType: EventTypes, message: any) {
        window.dispatchEvent(new CustomEvent(eventType, { 
            detail: message, 
        }))
    }

    subscribe(eventType: EventTypes, cb: (args: any) => void) {
        window.addEventListener(eventType, cb)
    }
}

export const eventBus = new EventBus();