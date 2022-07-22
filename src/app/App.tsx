import { GlobalContext } from "./shared";
import { AssemblyApp } from "./AssemblyApp/AssemblyApp";

export const App = () => {
  return (
    <GlobalContext>
      <AssemblyApp />
    </GlobalContext>
  );
};
