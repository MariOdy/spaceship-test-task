"use client";

import { Provider, defaultTheme } from "@adobe/react-spectrum";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <Provider theme={defaultTheme}>{children}</Provider>
);

export default Providers;
