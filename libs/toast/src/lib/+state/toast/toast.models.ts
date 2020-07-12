/**
 * Interface for the 'Toast' data
 */
export class Toast {
  id: number;
  type: ToastType;
  heading: string;
  message: string;
  position: string;

}

/**
 * Interface for the 'Toast Modal Configuration' data
 */
export interface ModalConfig{
    duration: number;
    fade: boolean;
    limit: number,
    message: string, 
    position: string;
}

/**
 * Interface for the 'Toast Type' 
 */
export enum ToastType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

/**
 * Interface for the 'Toast Message Header' 
 */
export enum HeaderMessage {
    SUCCESS = 'Success :)',
    ERROR = 'Error :(',
    WARNING = 'Warning!',
  }

