import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromToast from './+state/toast/toast.reducer';
import { ToastEffects } from './+state/toast/toast.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // StoreModule.forFeature(fromToast.TOAST_FEATURE_KEY, fromToast.reducer),
    // EffectsModule.forFeature([ToastEffects]),
    StoreModule.forRoot({
      toast: fromToast.reducer
    })
  ],
  declarations: [ToastComponent],
  exports: [ToastComponent],
})
export class ToastModule {}
