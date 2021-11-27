import { BaseComponentProps } from '@shared/types';

export const MarketingIcon = ({ className }: BaseComponentProps) => (
  <svg className={className} width="25" height="25">
    <path
      opacity=".65"
      d="M22.333 7.233h-13.1a2.255 2.255 0 0 0-2.252 2.252v9.119a2.25 2.25 0 0 0 2.256 2.248h7.494c.169.002.33.07.449.189l3.719 3.431c.207.2.55.118.55-.171v-2.99c0-.355.225-.467.579-.467h.059a2.46 2.46 0 0 0 2.488-2.246V9.485a2.242 2.242 0 0 0-2.242-2.252Z"
      fill="#000"
    />
    <path
      opacity=".65"
      d="M7.47 5.786h10.484V1.925A1.93 1.93 0 0 0 16.025 0h-14.1A1.927 1.927 0 0 0 0 1.925v9.763a1.927 1.927 0 0 0 1.925 1.928h3.612v-5.9a1.936 1.936 0 0 1 1.933-1.93Z"
      fill="#000"
    />
  </svg>
);
