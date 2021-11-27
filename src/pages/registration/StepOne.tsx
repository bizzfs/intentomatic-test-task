import commonStyles from 'pages/registration/common.module.scss';
import styles from 'pages/registration/StepOne.module.scss';
import { SalesIcon } from 'shared/components/icons/SalesIcon';
import { MarketingIcon } from 'shared/components/icons/MarketingIcon';
import { FounderIcon } from 'shared/components/icons/FounderIcon';
import { OtherIcon } from 'shared/components/icons/OtherIcon';
import { BaseComponentsProps } from 'shared/types';
import classNames from 'classnames';

export const StepOne = ({ className }: BaseComponentsProps) => (
  <form className={classNames(className, styles.form)}>
    <div className={styles.header}>Sign Up</div>
    <div className={styles.desc}>Please fill out the form below to continue</div>
    <div className={commonStyles.formGroup}>
      <legend>Name</legend>
      <input />
    </div>
    <div className={commonStyles.formGroup}>
      <legend>Email</legend>
      <input />
    </div>
    <div className={commonStyles.formGroup}>
      <legend>Company</legend>
      <input />
    </div>
    <div className={commonStyles.formGroup}>
      <div className={styles.team}>
        <SalesIcon className={styles.teamIcon} />
        <div className={styles.teamDesc}>Sales</div>
      </div>
      <div className={styles.team}>
        <MarketingIcon className={styles.teamIcon} />
        <div className={styles.teamDesc}>Marketing</div>
      </div>
      <div className={styles.team}>
        <FounderIcon className={styles.teamIcon} />
        <div className={styles.teamDesc}>Founder/Executive</div>
      </div>
      <div className={styles.team}>
        <OtherIcon className={styles.teamIcon} />
        <div className={styles.teamDesc}>Other</div>
      </div>
    </div>
    <button className={commonStyles.submitButton} type="button">
      CONFIRM
    </button>
  </form>
);
