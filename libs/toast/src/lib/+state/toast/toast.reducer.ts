import { Toast } from '../../+state/toast/toast.models'
import * as ToastActions from '../../+state/toast/toast.actions'

export interface AppState {
  readonly toast: Toast[];
}

export function reducer(state: Toast[] = [], action: ToastActions.Actions) {
    switch(action.type) {
        case ToastActions.ADD_TOAST:
            return [...state, action.payload];

        case ToastActions.REMOVE_TOAST:
            state = [...state];
            return state.filter(Toast => Toast.id !== action.payload);

        case ToastActions.GROUP_TOAST:
            return [...state, action.payload];
         
        default:
            return state;
    }
}


  




