import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ToastEffects } from './toast.effects';
import * as ToastActions from './toast.actions';

describe('ToastEffects', () => {
  let actions: Observable<any>;
  let effects: ToastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ToastEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ToastEffects);
  });

  describe('loadToast$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ToastActions.loadToast() });

      const expected = hot('-a-|', {
        a: ToastActions.loadToastSuccess({ toast: [] }),
      });

      expect(effects.loadToast$).toBeObservable(expected);
    });
  });
});
