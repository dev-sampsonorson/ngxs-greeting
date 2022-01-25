import { Component } from '@angular/core';

@Component({
    selector: 'an-root',
    template: `
        <an-sender class="left"></an-sender>
        <an-receiver class="right"></an-receiver>
    `,
    styles: [`
        :host {
            display: flex;
            flex-wrap: wrap;
            column-gap: 8px;
            row-gap: 8px;
        }

        .left, .right {
            flex: 1 1 300px;
            padding: 24px;
            border: 4px dashed #ddd;
        }
    `]
})
export class AppComponent {

}
