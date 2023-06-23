import React, { createContext, useEffect, useMemo, useReducer } from 'react';

import theme from '~/styles/theme';
import { checkHasWindow } from '~/utils/checkEnv';

export const MediaQueryContext = createContext(null);

const mediaQueryReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return { ...state, [action.key]: action.value };
    default:
      throw new Error();
  }
};

export const MediaQueryProvider = ({ children }) => {
  const [breakpoints, dispatch] = useReducer(mediaQueryReducer, {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  const dispatchSet = (key, value) => dispatch({ type: 'SET', key, value });

  useEffect(() => {
    if (!checkHasWindow()) {
      Object.keys(breakpoints).forEach((key) => dispatch({ type: 'SET', key, value: false }));
    }

    const listeners = {};

    Object.entries(theme.screens).forEach(([key, value]) => {
      const mediaQuery = window.matchMedia(`(max-width: ${value})`);

      const listener = (e) => dispatchSet(key, e.matches);

      listeners[key] = listener;

      mediaQuery.addEventListener('change', listener);

      dispatchSet(key, mediaQuery.matches);
    });

    return () => {
      Object.entries(theme.screens).forEach(([key, value]) => {
        const mediaQuery = window.matchMedia(`(max-width: ${value})`);

        mediaQuery.removeEventListener('change', listeners[key]);
      });
    };
  }, []);

  const value = useMemo(() => breakpoints, [breakpoints]);

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>;
};
