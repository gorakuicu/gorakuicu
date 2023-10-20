import { Button, Tooltip } from '@nextui-org/react';
import { NavLink } from '@remix-run/react';
import { memo } from 'react';

import type { LinksListProperties } from '~/shared/types/platform-links';

import { VariableWrap } from '~/shared/ui/common/variable-wrap';

export const LinksList = memo(
  ({ className = '', label, list }: LinksListProperties) => {
    return (
      <figure className={className}>
        <figcaption className="mb-2 text-center font-serif text-lg font-bold text-white">
          {label}
        </figcaption>
        <ul className="flex flex-col gap-2">
          {list.map((link) => {
            return (
              <li key={link.url}>
                <VariableWrap wrap={!!link?.tooltip}>
                  <VariableWrap.Wrapper>
                    {(children) => (
                      <Tooltip color="primary" content={link.tooltip} showArrow>
                        {children}
                      </Tooltip>
                    )}
                  </VariableWrap.Wrapper>
                  <VariableWrap.Content>
                    <span>
                      <VariableWrap wrap={!link.disabled}>
                        <VariableWrap.Wrapper>
                          {(children) => {
                            if (link?.isExternal) {
                              return (
                                <a
                                  href={link.url}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {children}
                                </a>
                              );
                            }
                            return <NavLink to={link.url}>{children}</NavLink>;
                          }}
                        </VariableWrap.Wrapper>
                        <VariableWrap.Content>
                          <Button
                            className="pointer-events-auto w-full font-serif text-sm"
                            isDisabled={link.disabled}
                            radius="full"
                            size="sm"
                            variant="light"
                          >
                            {link.label}
                          </Button>
                        </VariableWrap.Content>
                      </VariableWrap>
                    </span>
                  </VariableWrap.Content>
                </VariableWrap>
              </li>
            );
          })}
        </ul>
      </figure>
    );
  },
);

LinksList.displayName = 'LinksList';
