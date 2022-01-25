import { Component } from '@angular/core';

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

    constructor() { }

    onSendGreeting(): void {
        // TODO: 3. Dispatch action
    }

}
