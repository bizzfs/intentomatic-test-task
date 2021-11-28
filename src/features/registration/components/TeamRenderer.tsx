import { FounderIcon } from '@shared/components/icons/FounderIcon';
import { MarketingIcon } from '@shared/components/icons/MarketingIcon';
import { OtherIcon } from '@shared/components/icons/OtherIcon';
import { SalesIcon } from '@shared/components/icons/SalesIcon';
import { BaseComponentProps } from '@shared/types';

import { Team } from '../contexts/registrationWizardContext';
import { Card } from './Card';

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
