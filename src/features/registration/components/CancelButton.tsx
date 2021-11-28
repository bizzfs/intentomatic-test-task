import { MouseEventHandler } from 'react';

import classNames from 'classnames';

import { BaseComponentProps } from '@shared/types';

import styles from './CancelButton.module.scss';

type Props = BaseComponentProps & {
  title: string;
  onClick?: MouseEventHandler;
  type?: 'submit' | 'reset' | 'button';
};

export const CancelButton = ({ title, onClick, type, className }: Props) => (
  <button className={classNames(styles.cancelButton, className)} type={type} onClick={onClick}>
    {title}
  </button>
);
