import type { NextPage } from 'next';

import { RegistrationWizardProvider } from '@pages/registration/contexts/registrationWizardContext';
import { MemoizedRegistrationWizard } from '@pages/registration/registrationWizard';

const Index: NextPage = () => {
  return (
    <RegistrationWizardProvider>
      <MemoizedRegistrationWizard />
    </RegistrationWizardProvider>
  );
};

export default Index;
