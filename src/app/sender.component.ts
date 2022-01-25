import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { SendGreeting } from './state/greeting.action';

@Component({
    selector: 'an-sender',
    template: `
    <form #greetingForm="ngForm">
        <input [(ngModel)]="message" type="text" name="message" id="message" />
        <button type="button" (click)="onSendGreeting()">Send Greeting</button>
    </form>
  `,
    styles: [
    ]
})
export class SenderComponent {

    message = "";

    constructor(
        private _store: Store
    ) { }

    onSendGreeting(): void {
        this._store.dispatch(new SendGreeting(this.message));
    }

}
