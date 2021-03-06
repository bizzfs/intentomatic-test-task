import { memo, useReducer } from 'react';

import classNames from 'classnames';

import { BaseComponentProps } from '@shared/types';

import { SubmitButton } from '../../components/SubmitButton';
import { ToolRenderer } from '../../components/ToolRenderer';
import { useRegistrationWizardDispatch } from '../../contexts/registrationWizardContext';
import commonStyles from '../common.module.scss';
import styles from './index.module.scss';
import { setSearchTermAction, toolsInitialState, toolsReducer, toggleToolAction } from './toolsReducer';

export const StepTwo = ({ className }: BaseComponentProps) => {
  const [toolsState, toolsDispatch] = useReducer(toolsReducer, toolsInitialState);
  const { setData, openConfirmationModal } = useRegistrationWizardDispatch();
  const handleSaveClick = () => {
    setData({ tools: [...toolsState.selected] });
    openConfirmationModal();
  };
  return (
    <form className={classNames(className, styles.form)}>
      <div className={styles.header}>What marketing and sales tools do you use?</div>
      <fieldset className={classNames(commonStyles.formGroup, styles.searchInputFormGroup)}>
        <input placeholder="Search" onChange={(event) => toolsDispatch(setSearchTermAction(event.target.value))} />
      </fieldset>
      <div className={styles.toolsFormGroup}>
        <div className={styles.toolsLabel}>Selected</div>
        <div className={styles.tools}>
          {toolsState.selected.map((tool) => (
            <ToolRenderer
              key={tool}
              className={classNames(styles.tool, styles.toolSelected)}
              tool={tool}
              onClick={() => toolsDispatch(toggleToolAction(tool))}
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
              onClick={() => toolsDispatch(toggleToolAction(tool))}
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
