import {Injectable, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Ng2TreeService {
  private menuEvents$: EventEmitter<any> = new EventEmitter();

  constructor() {
    window.addEventListener('keyup', (event: any) => {
      if (event.keyCode === 27) {
        this.emitMenuEvent({sender: null, action: 'close'});
      }
    });

    window.addEventListener('click', () => {
      this.emitMenuEvent({sender: null, action: 'close'});
    });
  }

  menuEventStream(): Observable<any> {
    return this.menuEvents$;
  }

  emitMenuEvent(event: any): void {
    this.menuEvents$.emit(event);
  }
}