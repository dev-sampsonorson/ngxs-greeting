import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';

import { SendGreeting } from './greeting.action';


const GREETING_STATE_TOKEN = new StateToken<string>("greeting");

@State<string>({
    name: GREETING_STATE_TOKEN,
    defaults: "Wating for greeting..."
})
export class GreetingState {

    @Action(SendGreeting)
    sendGreeting(context: StateContext<string>, action: SendGreeting) {
        context.setState(action.payload);
    }

    @Selector()
    static receiveGreeting(state: string) {
        return state;
    }
}
