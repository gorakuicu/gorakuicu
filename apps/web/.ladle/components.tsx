import React from 'react';
import type { GlobalProvider } from "@ladle/react";
import { NextUIProvider } from '@nextui-org/react';
import '../app/application/styles/normalize.css';
import '../app/application/styles/index.css';

export const Provider: GlobalProvider = ({
  children,
}) => (
  <div className="dark">
    <NextUIProvider>
      {children}
    </NextUIProvider>
  </div>
);

export const argTypes = {
  background: {
    control: { type: "background" },
    options: ["#000", "white", "purple", "red", "blue", "green"],
    defaultValue: "#000",
  },
};
