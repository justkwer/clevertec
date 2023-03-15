import { FC } from 'react';
import { EyeClose, EyeOpen } from '@assets';
import { ButtonEyeProp } from '@core/types/types';

export const ButtonEye: FC<ButtonEyeProp> = ({ hidden, onClick }) => (
  <button type='button' onClick={onClick}>
    {hidden ? <EyeClose data-test-id='eye-closed' /> : <EyeOpen data-test-id='eye-opened' />}
  </button>
);
