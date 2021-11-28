import { memo, useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import classNames from 'classnames';
import { Controller, useForm } from 'react-hook-form';

import { FounderIcon } from '@shared/components/icons/FounderIcon';
import { MarketingIcon } from '@shared/components/icons/MarketingIcon';
import { OtherIcon } from '@shared/components/icons/OtherIcon';
import { SalesIcon } from '@shared/components/icons/SalesIcon';
import { BaseComponentProps } from '@shared/types';

import { SubmitButton } from '../../components/SubmitButton';
import { Team, useRegistrationWizardDispatch } from '../../contexts/registrationWizardContext';
import commonStyles from '../common.module.scss';
import { formInitialValue, formValidationSchema, FormValue } from './form';
import styles from './index.module.scss';

export const StepOne = ({ className }: BaseComponentProps) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: formInitialValue,
    resolver: yupResolver(formValidationSchema),
  });

  const { setData, nextStep } = useRegistrationWizardDispatch();

  const onFormSubmit = useCallback(
    (value: FormValue) => {
      setData(value);
      nextStep();
    },
    [setData, nextStep]
  );

  return (
    <form className={classNames(className, styles.form)} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.header}>Sign Up</div>
      <div className={styles.desc}>Please fill out the form below to continue</div>
      <fieldset className={classNames(commonStyles.formGroup, errors.name && commonStyles.invalid)}>
        <legend>Name</legend>
        <input tabIndex={0} id="name" {...register('name')} />
      </fieldset>

      <fieldset className={classNames(commonStyles.formGroup, errors.email && commonStyles.invalid)}>
        <legend>Email</legend>
        <input id="email" type="e" {...register('email')} />
      </fieldset>
      <fieldset className={classNames(commonStyles.formGroup, errors.company && commonStyles.invalid)}>
        <legend>Company</legend>
        <input id="company" {...register('company')} />
      </fieldset>
      {/*This is an example of how easy to add custom inputs if using react-hook-form */}
      <Controller
        control={control}
        name="team"
        render={({ field: { value, onChange, onBlur } }) => (
          <fieldset className={classNames(commonStyles.formGroup, errors.team && commonStyles.invalid)}>
            <legend>Team</legend>
            <button
              className={classNames(styles.team, value === Team.SALES && styles.selected)}
              type="button"
              onClick={() => onChange(Team.SALES)}
            >
              <SalesIcon className={styles.teamIcon} />
              <div className={styles.teamDesc}>Sales</div>
            </button>
            <button
              className={classNames(styles.team, value === Team.MARKETING && styles.selected)}
              type="button"
              onClick={() => onChange(Team.MARKETING)}
            >
              <MarketingIcon className={styles.teamIcon} />
              <div className={styles.teamDesc}>Marketing</div>
            </button>
            <button
              className={classNames(styles.team, value === Team.FOUNDER && styles.selected)}
              type="button"
              onClick={() => onChange(Team.FOUNDER)}
            >
              <FounderIcon className={styles.teamIcon} />
              <div className={styles.teamDesc}>Founder/Executive</div>
            </button>
            <button
              className={classNames(styles.team, value === Team.OTHER && styles.selected)}
              type="button"
              onClick={() => onChange(Team.OTHER)}
            >
              <OtherIcon className={styles.teamIcon} />
              <div className={styles.teamDesc}>Other</div>
            </button>
          </fieldset>
        )}
      />
      <SubmitButton title="CONFIRM" type="submit" />
    </form>
  );
};

export const MemoizedStepOne = memo(StepOne);
