// Section 1
import { Action } from '@ngrx/store'
import { Toast } from '../../+state/toast/toast.models';

// Section 2
export const ADD_TOAST       = '[TOAST] Add'
export const REMOVE_TOAST    = '[TOAST] Remove'
export const GROUP_TOAST       = '[TOAST] Group'


// Section 3
export class AddToast implements Action {
    readonly type = ADD_TOAST

    constructor(public payload: Toast) {}
}

export class RemoveToast implements Action {
    readonly type = REMOVE_TOAST

    constructor(public payload: number) {}
}

export class GroupToast implements Action {
    readonly type = GROUP_TOAST

    constructor(public payload: Toast) {}
}


// Section 4
export type Actions = AddToast | RemoveToast | GroupToast

