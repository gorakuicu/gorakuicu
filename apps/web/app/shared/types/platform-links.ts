export interface IPlatformLink {
  disabled?: boolean;
  icon?: string;
  isExternal?: boolean;
  label: string;
  tooltip?: string;
  url: string;
}

export type LinksListProperties = {
  className?: string;
  label: string;
  list: IPlatformLink[];
};
