import { Card } from '@pages/registration/components/Card';
import { Team } from '@pages/registration/contexts/registrationWizardContext';
import { FounderIcon } from '@shared/components/icons/FounderIcon';
import { MarketingIcon } from '@shared/components/icons/MarketingIcon';
import { OtherIcon } from '@shared/components/icons/OtherIcon';
import { SalesIcon } from '@shared/components/icons/SalesIcon';
import { BaseComponentProps } from '@shared/types';

const teamRendererMap = {
  [Team.SALES]: ({ className }: BaseComponentProps) => <Card className={className} icon={SalesIcon} title="Sales" />,
  [Team.MARKETING]: ({ className }: BaseComponentProps) => (
    <Card className={className} icon={MarketingIcon} title="Marketing" />
  ),
  [Team.FOUNDER]: ({ className }: BaseComponentProps) => (
    <Card className={className} icon={FounderIcon} title="Founder/Executive" />
  ),
  [Team.OTHER]: ({ className }: BaseComponentProps) => <Card className={className} icon={OtherIcon} title="Other" />,
};

type Props = BaseComponentProps & {
  team: Team;
};

export const TeamRenderer = ({ team, className }: Props) => teamRendererMap[team]({ className });
