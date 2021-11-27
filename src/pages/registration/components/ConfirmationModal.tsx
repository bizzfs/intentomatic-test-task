import { memo } from 'react';

import classNames from 'classnames';
import Modal from 'react-modal';

import { CancelButton } from '@pages/registration/components/CancelButton';
import { SubmitButton } from '@pages/registration/components/SubmitButton';
import { TeamRenderer } from '@pages/registration/components/TeamRenderer';
import { ToolRenderer } from '@pages/registration/components/ToolRenderer';
import { RegistrationData } from '@pages/registration/contexts/registrationWizardContext';
import { BaseComponentProps } from '@shared/types';

import styles from './ConfirmationModal.module.scss';

type Props = BaseComponentProps & {
  isOpen: boolean;
  registrationData: RegistrationData;
  confirm: () => void;
  cancel: () => void;
};

export const ConfirmationModal = ({
  className,
  isOpen,
  confirm,
  cancel,
  registrationData: { company, team, tools },
}: Props) => (
  <Modal isOpen={isOpen} className={classNames(styles.modal, className)} overlayClassName={styles.overlay}>
    <div className={styles.modalHeader}>Confirm your information</div>
    <div className={styles.modalBody}>
      <div className={styles.dataGroup}>
        <div className={styles.label}>Company name</div>
        <div className={styles.stringValue}>{company}</div>
      </div>
      <div className={styles.dataGroup}>
        <div className={styles.label}>Team</div>
        <div className={styles.listValue}>
          {team != null && <TeamRenderer team={team} className={styles.listValueItem} />}
          <div className={styles.listValueItemPlaceholder} />
          <div className={styles.listValueItemPlaceholder} />
        </div>
      </div>
      <div className={styles.dataGroup}>
        <div className={styles.label}>Tools used</div>
        <div className={styles.listValue}>
          {tools.map((tool) => (
            <ToolRenderer key={tool} className={styles.listValueItem} tool={tool} />
          ))}
          <div className={styles.listValueItemPlaceholder} />
          <div className={styles.listValueItemPlaceholder} />
        </div>
      </div>
    </div>
    <div className={styles.modalFooter}>
      <SubmitButton className={styles.button} title="CONFIRM" onClick={confirm} />
      <CancelButton className={styles.button} title="Cancel" onClick={cancel} />
    </div>
  </Modal>
);

export const MemoizedConfirmationModal = memo(ConfirmationModal);
