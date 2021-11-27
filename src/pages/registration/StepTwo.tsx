import { BaseComponentsProps } from 'shared/types';
import commonStyles from 'pages/registration/common.module.scss';
import styles from 'pages/registration/StepTwo.module.scss';
import classNames from 'classnames';
import { SalesforceIcon } from 'shared/components/icons/SalesforceIcon';

export const StepTwo = ({ className }: BaseComponentsProps) => (
  <form className={classNames(className, styles.form)}>
    <div className={styles.header}>What marketing and sales tools do you use?</div>
    <fieldset className={classNames(commonStyles.formGroup, styles.searchInputFormGroup)}>
      <input placeholder="Search" />
    </fieldset>
    <div className={styles.toolsFormGroup}>
      <div className={styles.toolsLabel}>Selected</div>
      <div className={styles.tools}>
        <div className={classNames(styles.tool, styles.toolSelected)}>
          <SalesforceIcon />
        </div>
        <div className={classNames(styles.tool, styles.toolSelected)}>
          <SalesforceIcon />
        </div>
        <div className={classNames(styles.tool, styles.toolSelected)}>
          <SalesforceIcon />
        </div>
        <div className={styles.toolPlaceholder} />
        <div className={styles.toolPlaceholder} />
        <div className={styles.toolPlaceholder} />
      </div>
    </div>
    <div className={styles.toolsFormGroup}>
      <div className={styles.toolsLabel}>All</div>
      <div className={styles.tools}>
        <div className={styles.tool}>
          <SalesforceIcon />
        </div>
        <div className={styles.tool}>
          <SalesforceIcon />
        </div>
        <div className={styles.tool}>
          <SalesforceIcon />
        </div>
        <div className={styles.toolPlaceholder} />
        <div className={styles.toolPlaceholder} />
        <div className={styles.toolPlaceholder} />
      </div>
    </div>
  </form>
);
