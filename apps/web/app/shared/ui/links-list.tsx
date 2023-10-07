import type { TooltipProps } from '@nextui-org/react';

import { Button } from '@nextui-org/react';
import { Link } from '@remix-run/react';
import { memo } from 'react';

import type { LinksListProperties } from '~/shared/types/platform-links';

import { WithTooltip } from '~/shared/ui/with-tooltip';

const getTooltipObject = (tooltip: TooltipProps = {}): TooltipProps => tooltip;

export const LinksList = memo(
  ({ className = '', label, list }: LinksListProperties) => {
    return (
      <figure className={className}>
        <figcaption className="mb-2 text-center text-lg font-bold text-white">
          {label}
        </figcaption>
        <ul className="flex flex-col gap-2">
          {list.map((link) => {
            return (
              <li key={link.url}>
                <WithTooltip
                  tooltip={getTooltipObject({
                    color: 'primary',
                    content: link.tooltip,
                    showArrow: true,
                  })}
                >
                  <Button
                    className="pointer-events-auto w-full text-sm"
                    isDisabled={link.disabled}
                    radius="full"
                    size="sm"
                    variant="light"
                  >
                    {link.disabled ? (
                      link.label
                    ) : (
                      <Link to={link.url}>{link.label}</Link>
                    )}
                  </Button>
                </WithTooltip>
              </li>
            );
          })}
        </ul>
      </figure>
    );
  },
);

LinksList.displayName = 'LinksList';
