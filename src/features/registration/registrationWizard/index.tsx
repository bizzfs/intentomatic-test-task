import { memo } from 'react';

import { IntentomaticLogo } from '@shared/components/IntentomaticLogo';

import { MemoizedConfirmationModal } from '../components/ConfirmationModal';
import { Step, useRegistrationWizardDispatch, useRegistrationWizardState } from '../contexts/registrationWizardContext';
import styles from './common.module.scss';
import { MemoizedStepOne } from './stepOne';
import { MemoizedStepTwo } from './stepTwo';

export const RegistrationWizard = () => {
  const { step, confirmationModalIsOpen, data } = useRegistrationWizardState();
  const { acceptConfirmationModal, cancelConfirmationModal } = useRegistrationWizardDispatch();
  return (
    <>
      <div className={styles.borderBar} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <IntentomaticLogo className={styles.logo} />
          </div>
          {step === Step.ONE && <MemoizedStepOne className={styles.form} />}
          {step === Step.TWO && <MemoizedStepTwo className={styles.form} />}
        </div>
      </div>
      <MemoizedConfirmationModal
        isOpen={confirmationModalIsOpen}
        registrationData={data}
        confirm={acceptConfirmationModal}
        cancel={cancelConfirmationModal}
      />
    </>
  );
};

export const MemoizedRegistrationWizard = memo(RegistrationWizard);
