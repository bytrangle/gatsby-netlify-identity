import React from "react";
import { ThemeProvider } from "theme-ui";
import { swiss } from "@theme-ui/presets";

const tokens = {
  ...swiss,
  sizes: { container: 1024 },
};
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={tokens}>{element}</ThemeProvider>
);
