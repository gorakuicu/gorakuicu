import type { FC, ReactElement, ReactNode } from 'react';

import { Children, cloneElement, isValidElement, memo } from 'react';

interface VariableWrapProperties {
  children: ReactElement | ReactElement[];
  wrap: boolean;
}

interface ContentProperties {
  children: ReactElement;
}

interface WrapperProperties {
  children: (children: ReactNode) => ReactElement;
}

const findWrapperAndContent = (children: ReactNode) => {
  let wrapper: ReactElement | null | undefined;
  let content: ReactElement | null | undefined;

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === VariableWrap.Wrapper) {
        wrapper = child;
      } else if (child.type === VariableWrap.Content) {
        content = child;
      }
    }
  });

  return { content, wrapper };
};

const VariableWrapComponent: FC<VariableWrapProperties> = ({
  children,
  wrap,
}) => {
  const { content, wrapper } = findWrapperAndContent(children);

  if (!content) return;

  return wrap && wrapper && content
    ? cloneElement(wrapper, {
        children: wrapper.props.children(content.props.children),
      })
    : content;
};

export const VariableWrap: typeof VariableWrapComponent & {
  Content: FC<ContentProperties>;
  Wrapper: FC<WrapperProperties>;
} = memo(VariableWrapComponent) as any;

const Wrapper: FC<{ children: (children: ReactNode) => ReactElement }> = ({
  children,
}) => <>{children}</>;

const Content: FC<{ children: ReactElement }> = ({ children }) => (
  <>{children}</>
);

VariableWrap.Wrapper = Wrapper;
VariableWrap.Content = Content;

VariableWrap.displayName = 'VariableWrap';
VariableWrap.Wrapper.displayName = 'VariableWrap.Wrapper';
VariableWrap.Content.displayName = 'VariableWrap.Content';
