import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ReceiverComponent } from './receiver.component';
import { SenderComponent } from './sender.component';
import { GreetingState } from './state/greeting.state';

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
        NgxsModule.forRoot([GreetingState])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
