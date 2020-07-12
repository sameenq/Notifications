import { ToastEntity } from './toast.models';
import * as ToastActions from './toast.actions';
import { State, initialState, reducer } from './toast.reducer';

describe('Toast Reducer', () => {
  const createToastEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ToastEntity);

  beforeEach(() => {});

  describe('valid Toast actions', () => {
    it('loadToastSuccess should return set the list of known Toast', () => {
      const toast = [
        createToastEntity('PRODUCT-AAA'),
        createToastEntity('PRODUCT-zzz'),
      ];
      const action = ToastActions.loadToastSuccess({ toast });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
