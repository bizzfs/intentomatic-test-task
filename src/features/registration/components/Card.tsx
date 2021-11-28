import { MouseEventHandler } from 'react';

import classNames from 'classnames';

import { BaseComponentProps } from '@shared/types';

import styles from './Card.module.scss';

type Props = BaseComponentProps & {
  icon: (props: BaseComponentProps) => JSX.Element;
  title: string;
  onClick?: MouseEventHandler;
};

export const Card = ({ icon: Icon, title, className, onClick }: Props) => (
  <button type="button" className={classNames(styles.card, className)} onClick={onClick}>
    <Icon />
    <div>{title}</div>
  </button>
);
