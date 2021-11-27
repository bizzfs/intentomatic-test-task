import type { NextPage } from 'next';
import styles from './common.module.scss';
import { IntentomaticLogo } from 'shared/components/IntentomaticLogo';
import { StepOne } from 'pages/registration/StepOne';
import { StepTwo } from 'pages/registration/StepTwo';
import { useState } from 'react';

const Index: NextPage = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <div className={styles.borderBar} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div onClick={() => setState((state) => !state)}>
            <IntentomaticLogo className={styles.logo} />
          </div>
          {state && <StepOne className={styles.form} />}
          {!state && <StepTwo className={styles.form} />}
        </div>
      </div>
      {!state && <div className={styles.footer}>Step of</div>}
    </>
  );
};

export default Index;
