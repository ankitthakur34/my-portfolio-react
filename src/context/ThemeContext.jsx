/* eslint-disable react/prop-types */
import { useState } from "react";
import { Theme } from "./Context";
const ThemeContext = ({ children }) => {
  const [light, setLight] = useState(false);
  return (
    <Theme.Provider value={{ light, setLight }}>{children}</Theme.Provider>
  );
};

export default ThemeContext;
