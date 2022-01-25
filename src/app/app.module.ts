import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceiverComponent } from './receiver.component';
import { SenderComponent } from './sender.component';

// TODO: 5. Create action and state

@NgModule({
    declarations: [
        AppComponent,
        SenderComponent,
        ReceiverComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // TODO: 1. Install NGXS Store
        // TODO: 2. Import NGXS Module
        // TODO: 6. Configure NGXS Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
