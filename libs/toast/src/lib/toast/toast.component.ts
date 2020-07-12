import { Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as ToastModels from '../+state/toast/toast.models';
import * as ToastReducer from '../+state/toast/toast.reducer';
import * as ToastActions from '../+state/toast/toast.actions';
import { MODAL_CONFIG_DEFAULTS } from './toast.config';

@Component({
  selector: 'sameen-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit {
  @Input() limit = MODAL_CONFIG_DEFAULTS.limit;
  @Input() duration = MODAL_CONFIG_DEFAULTS.duration;
  @Input() message = MODAL_CONFIG_DEFAULTS.message;
  @Input() position = MODAL_CONFIG_DEFAULTS.position;

  groupToasts: ToastModels.Toast[] = [];
  toastType = ToastModels.ToastType;
  toasts: Observable<ToastModels.Toast[]>;
  private toastCount:number;

  constructor(private store: Store<ToastReducer.AppState>) {
    this.toasts = store.select('toast');
   }

   ngOnInit() {
    this.toasts.subscribe(result => {
      this.toastCount = result.length;
    });
  }

  /**
   * Dispatch toast notification
   * 
   * @param type 
   * @param heading 
   * @param id 
   */
  dispatchToast(type:ToastModels.ToastType,heading:ToastModels.HeaderMessage,id:number) {
    let toast:ToastModels.Toast = {
      id: id,
      type: type,
      heading: heading,
      message: this.message,
      position: this.position
  };

    if(this.toastCount >= this.limit)
    {
      this.groupToasts.push(toast);
      this.removeGroupToast(toast);
    }
    else{
      this.store.dispatch(new ToastActions.AddToast(toast));
      this.removeSingleToast(toast.id);
    }
  }

  /**
   * Remove group toast
   * @param toast 
   */
  removeGroupToast(toast:ToastModels.Toast) {
    if (this.groupToasts.length>0) {
      setTimeout(() => {
        this.groupToasts = this.groupToasts.filter((x) => x !== toast);
      }, this.duration);
    }
  }

  /**
   * Remove toast by ID
   * 
   * @param id 
   */
  removeSingleToast(id:number) {
    setTimeout(() => {
      this.store.dispatch(new ToastActions.RemoveToast(id));
    }, this.duration);
  }

  /**
   * Show success toast
   */
  showSuccess() {
    this.dispatchToast(
      ToastModels.ToastType.SUCCESS,
      ToastModels.HeaderMessage.SUCCESS,
      this.randomInt()
    );
  }

  /**
   * Show error toast
   */
  showError() {
    this.dispatchToast(
      ToastModels.ToastType.ERROR,
      ToastModels.HeaderMessage.ERROR,
      this.randomInt()
    );
  }

  /**
   * Show warning toast
   */
  showWarning(){
    this.dispatchToast(
      ToastModels.ToastType.WARNING,
      ToastModels.HeaderMessage.WARNING,
      this.randomInt()
    );
  }

  /**
   * Get random number for toast ID
   */
  randomInt(){
    let max = 10000;
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

}
