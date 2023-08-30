import React from 'react';
import type { GlobalProvider } from "@ladle/react";
import { NextUIProvider } from '@nextui-org/react';
import '../app/index.css';

export const Provider: GlobalProvider = ({
  children,
}) => (
  <div className="dark">
    <NextUIProvider>
      {children}
    </NextUIProvider>
  </div>
);
