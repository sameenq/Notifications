import { ModalConfig } from '../+state/toast/toast.models';

export const MODAL_CONFIG_DEFAULTS: ModalConfig =
{
    duration: 5000,
    fade: true,
    limit: 5,
    message: 'General Message',
    position: 'top-right'
}