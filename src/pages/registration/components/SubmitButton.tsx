import { MouseEventHandler } from 'react';

import classNames from 'classnames';

import { BaseComponentProps } from '@shared/types';

import styles from './SubmitButton.module.scss';

type Props = BaseComponentProps & {
  title: string;
  onClick?: MouseEventHandler;
  type?: 'submit' | 'reset' | 'button';
};

export const SubmitButton = ({ title, onClick, type, className }: Props) => (
  <button className={classNames(styles.submitButton, className)} type={type} onClick={onClick}>
    {title}
  </button>
);
