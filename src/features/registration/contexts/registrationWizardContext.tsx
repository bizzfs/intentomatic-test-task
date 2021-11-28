import { createContext, useMemo, useState } from 'react';

import { BaseProviderProps } from '@shared/types';
import { useStrictContext } from '@shared/utils/hooks/useStrictContext';

export enum Team {
  SALES,
  MARKETING,
  FOUNDER,
  OTHER,
}

export enum Tool {
  GMAIL = 'gmail',
  HUBSPOT = 'hubspot',
  MARKETO = 'marketo',
  OUTREACH = 'outreach',
  SALESFORCE = 'salesforce',
}

export type RegistrationData = {
  name: string;
  email: string;
  company: string;
  team: Team | null;
  tools: Tool[];
};

export enum Step {
  ONE = 1,
  TWO,
}

type RegistrationWizardState = {
  data: RegistrationData;
  step: Step;
  confirmationModalIsOpen: boolean;
};

const initialRegistrationWizardState: RegistrationWizardState = {
  data: {
    company: '',
    email: '',
    name: '',
    team: null,
    tools: [],
  },
  step: Step.ONE,
  confirmationModalIsOpen: false,
};

type RegistrationWizardDispatch = {
  setData: (data: Partial<RegistrationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  openConfirmationModal: () => void;
  acceptConfirmationModal: () => void;
  cancelConfirmationModal: () => void;
};

const stateContext = createContext<RegistrationWizardState | null>(null);
stateContext.displayName = 'RegistrationWizardState';
export const useRegistrationWizardState = () => useStrictContext(stateContext);

const dispatchContext = createContext<RegistrationWizardDispatch | null>(null);
dispatchContext.displayName = 'RegistrationWizardDispatch';
export const useRegistrationWizardDispatch = () => useStrictContext(dispatchContext);

export const RegistrationWizardProvider = ({ children }: BaseProviderProps) => {
  const [state, setState] = useState(() => initialRegistrationWizardState);

  const dispatchValue = useMemo(
    () => ({
      setData: (data: Partial<RegistrationData>) =>
        setState((state) => ({ ...state, data: { ...state.data, ...data } })),
      nextStep: () => setState((state) => (state.step === Step.ONE ? { ...state, step: Step.TWO } : state)),
      prevStep: () => setState((state) => (state.step === Step.TWO ? { ...state, step: Step.ONE } : state)),
      openConfirmationModal: () => setState((state) => ({ ...state, confirmationModalIsOpen: true })),
      acceptConfirmationModal: () =>
        setState((state) => ({ ...state, step: Step.ONE, confirmationModalIsOpen: false })),
      cancelConfirmationModal: () => setState((state) => ({ ...state, confirmationModalIsOpen: false })),
    }),
    []
  );

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatchValue}>{children}</dispatchContext.Provider>
    </stateContext.Provider>
  );
};
