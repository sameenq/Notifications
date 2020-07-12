import { Action } from '@ngrx/store'
import { Toast } from '../../+state/toast/toast.models';

export const ADD_TOAST       = '[TOAST] Add'
export const REMOVE_TOAST    = '[TOAST] Remove'

export class AddToast implements Action {
    readonly type = ADD_TOAST

    constructor(public payload: Toast) {}
}

export class RemoveToast implements Action {
    readonly type = REMOVE_TOAST

    constructor(public payload: number) {}
}

export type Actions = AddToast | RemoveToast 

