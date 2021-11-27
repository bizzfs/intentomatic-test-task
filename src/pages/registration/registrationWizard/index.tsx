import { memo } from 'react';

import { MemoizedConfirmationModal } from '@pages/registration/components/ConfirmationModal';
import {
  Step,
  useRegistrationWizardDispatch,
  useRegistrationWizardState,
} from '@pages/registration/contexts/registrationWizardContext';
import { MemoizedStepOne } from '@pages/registration/registrationWizard/stepOne';
import { MemoizedStepTwo } from '@pages/registration/registrationWizard/stepTwo';
import { IntentomaticLogo } from '@shared/components/IntentomaticLogo';

import styles from './common.module.scss';

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
