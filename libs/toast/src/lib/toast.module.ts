import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { StoreModule } from '@ngrx/store';
import * as fromToast from './+state/toast/toast.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({
      toast: fromToast.reducer
    })
  ],
  declarations: [ToastComponent],
  exports: [ToastComponent],
})
export class ToastModule {}
