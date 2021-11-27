import { BaseComponentsProps } from 'shared/types';

export const SalesforceIcon = ({ className }: BaseComponentsProps) => (
  <svg className={className} width="45" height="45" viewBox="0 0 45 45">
    <image
      id="image0_10_112"
      width="45"
      height="45"
      xlinkHref="data:image/png;base64,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"
    />
  </svg>
);