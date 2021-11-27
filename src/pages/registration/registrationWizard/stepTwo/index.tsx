import { memo, useReducer } from 'react';

import classNames from 'classnames';

import { SubmitButton } from '@pages/registration/components/SubmitButton';
import { ToolRenderer } from '@pages/registration/components/ToolRenderer';
import { useRegistrationWizardDispatch } from '@pages/registration/contexts/registrationWizardContext';
import { toolsInitialState, toolsReducer } from '@pages/registration/registrationWizard/stepTwo/toolsReducer';
import { BaseComponentProps } from '@shared/types';

import commonStyles from '../common.module.scss';
import styles from './index.module.scss';

export const StepTwo = ({ className }: BaseComponentProps) => {
  const [toolsState, toggleTool] = useReducer(toolsReducer, toolsInitialState);
  const { setData, openConfirmationModal } = useRegistrationWizardDispatch();
  const handleSaveClick = () => {
    setData({ tools: [...toolsState.selected] });
    openConfirmationModal();
  };
  return (
    <form className={classNames(className, styles.form)}>
      <div className={styles.header}>What marketing and sales tools do you use?</div>
      <fieldset className={classNames(commonStyles.formGroup, styles.searchInputFormGroup)}>
        <input
          placeholder="Search"
          onChange={(event) => toggleTool({ type: 'setSearchTerm', term: event.target.value })}
        />
      </fieldset>
      <div className={styles.toolsFormGroup}>
        <div className={styles.toolsLabel}>Selected</div>
        <div className={styles.tools}>
          {toolsState.selected.map((tool) => (
            <ToolRenderer
              key={tool}
              className={classNames(styles.tool, styles.toolSelected)}
              tool={tool}
              onClick={() => toggleTool({ type: 'toggleTool', tool })}
            />
          ))}
          <div className={styles.toolPlaceholder} />
          <div className={styles.toolPlaceholder} />
          <div className={styles.toolPlaceholder} />
        </div>
      </div>
      <div className={styles.toolsFormGroup}>
        <div className={styles.toolsLabel}>All</div>
        <div className={styles.tools}>
          {toolsState.allFiltered.map((tool) => (
            <ToolRenderer
              key={tool}
              className={styles.tool}
              tool={tool}
              onClick={() => toggleTool({ type: 'toggleTool', tool })}
            />
          ))}
          <div className={styles.toolPlaceholder} />
          <div className={styles.toolPlaceholder} />
          <div className={styles.toolPlaceholder} />
        </div>
      </div>

      <div className={styles.footer}>
        <div>Step 2 of 2 </div>
        <SubmitButton className={styles.submitButton} title="SAVE" type="button" onClick={handleSaveClick} />
      </div>
    </form>
  );
};

export const MemoizedStepTwo = memo(StepTwo);
