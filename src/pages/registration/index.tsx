import type { NextPage } from 'next';

import { RegistrationWizardProvider } from '@features/registration/contexts/registrationWizardContext';
import { MemoizedRegistrationWizard } from '@features/registration/registrationWizard';

const Index: NextPage = () => {
  return (
    <RegistrationWizardProvider>
      <MemoizedRegistrationWizard />
    </RegistrationWizardProvider>
  );
};

export default Index;
