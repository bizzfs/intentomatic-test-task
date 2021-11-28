import { MouseEventHandler } from 'react';

import { GmailIcon } from '@shared/components/icons/GmailIcon';
import { HubspotIcon } from '@shared/components/icons/HubspotIcon';
import { MarketoIcon } from '@shared/components/icons/MarketoIcon';
import { OutreachIcon } from '@shared/components/icons/OutreachIcon';
import { SalesforceIcon } from '@shared/components/icons/SalesforceIcon';
import { BaseComponentProps } from '@shared/types';

import { Tool } from '../contexts/registrationWizardContext';
import { Card } from './Card';

type ToolRendererMapProps = BaseComponentProps & {
  onClick?: MouseEventHandler;
};

const toolRendererMap = {
  [Tool.SALESFORCE]: ({ className, onClick }: ToolRendererMapProps) => (
    <Card className={className} icon={SalesforceIcon} onClick={onClick} title="Salesforce" />
  ),
  [Tool.MARKETO]: ({ className, onClick }: ToolRendererMapProps) => (
    <Card className={className} icon={MarketoIcon} onClick={onClick} title="Marketo" />
  ),
  [Tool.OUTREACH]: ({ className, onClick }: ToolRendererMapProps) => (
    <Card className={className} icon={OutreachIcon} onClick={onClick} title="Outreach" />
  ),
  [Tool.HUBSPOT]: ({ className, onClick }: ToolRendererMapProps) => (
    <Card className={className} icon={HubspotIcon} onClick={onClick} title="Hubspot" />
  ),
  [Tool.GMAIL]: ({ className, onClick }: ToolRendererMapProps) => (
    <Card className={className} icon={GmailIcon} onClick={onClick} title="Gmail" />
  ),
};

type Props = BaseComponentProps & {
  tool: Tool;
  onClick?: MouseEventHandler;
};

export const ToolRenderer = ({ tool, className, onClick }: Props) => toolRendererMap[tool]({ className, onClick });
