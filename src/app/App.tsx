import { ToggleThemeContext } from "./shared";
import { AssemblyApp } from "./AssemblyApp/AssemblyApp";

export const App = () => {
  return (
    <ToggleThemeContext>
      <AssemblyApp />
    </ToggleThemeContext>
  );
};
