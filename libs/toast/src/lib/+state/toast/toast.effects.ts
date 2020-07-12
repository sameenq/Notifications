import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromToast from './toast.reducer';
import * as ToastActions from './toast.actions';

@Injectable()
export class ToastEffects {
  // loadToast$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ToastActions.loadToast),
  //     fetch({
  //       run: (action) => {
  //         // Your custom service 'load' logic goes here. For now just return a success action...
  //         return ToastActions.loadToastSuccess({ toast: [] });
  //       },

  //       onError: (action, error) => {
  //         console.error('Error', error);
  //         return ToastActions.loadToastFailure({ error });
  //       },
  //     })
  //   )
  // );

  constructor(private actions$: Actions) {}
}
