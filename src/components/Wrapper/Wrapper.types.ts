import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
  noPadding?: boolean;
  noHeader?: boolean;
  KeyboardHide?: boolean;
}

export interface WithoutTouchableFeedbackProps {
  children: ReactNode;
}