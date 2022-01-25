import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GreetingState } from './state/greeting.state';

@Component({
    selector: 'an-receiver',
    template: `
    <span [textContent]="message$ | async">Wating for greeting...</span>
  `,
    styles: [
    ]
})
export class ReceiverComponent {
    @Select(GreetingState.receiveGreeting) message$!: Observable<string>;
}
