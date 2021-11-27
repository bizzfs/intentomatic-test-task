import * as Yup from 'yup';

import { Team } from '@pages/registration/contexts/registrationWizardContext';

export type FormValue = {
  name: string;
  email: string;
  company: string;
  team: Team | undefined;
};

export const formInitialValue: FormValue = {
  name: '',
  email: '',
  company: '',
  team: undefined,
};

export const formValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  company: Yup.string().required(),
  team: Yup.mixed().oneOf([Team.SALES, Team.MARKETING, Team.FOUNDER, Team.OTHER]).required(),
});
