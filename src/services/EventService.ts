import mitt, { Emitter, Handler as h } from 'mitt';

let instance: EventService | null = null;

class EventService {

  public emitter: Emitter<Record<string, unknown>> = mitt()

  constructor() {
    if (!instance) {
      console.log('loaderService created')
      instance = this;
    }
    return this;
}

  public on(event: string, fnc: h<unknown>) {
    this.emitter.on(event, fnc)
  }

  public off(event: string, fnc: h<unknown>) {
    this.emitter.off(event, fnc)
  }

  public emit(type: string, arg: unknown = null) {
    this.emitter.emit(type, arg)
  }
}

export type Handler<T = unknown> = h
export const eventService = new EventService()
