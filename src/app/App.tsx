import { AppRoutes } from "./routes";
import { ThemeProvider } from "styled-components";
import { ThemeContext, ToggleThemeContext } from "./shared";
import { darkMode, GlobalStyle, lightMode } from "./styles";
import { useContext, useEffect } from "react";

export const App = () => {
  const { toggle } = useContext(ThemeContext);
  const { handleToggle } = useContext(ThemeContext);

  useEffect(() => {
    console.log(toggle, "App.tsx");
  }, [toggle]);

  return (
    <ToggleThemeContext>
      <ThemeProvider theme={toggle === false ? darkMode : lightMode}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </ToggleThemeContext>
  );
};

// import { createContext } from "react";

// interface AppContextInterface {
//   name: string;
//   author: string;
//   url: string;
// }

// const AppCtx = createContext<AppContextInterface>({} as AppContextInterface);

// export const App = () => (

// // Provider in your app
// const sampleAppContext: AppContextInterface = {
//   name: "Using React Context in a Typescript App",
//   author: "thehappybug",
//   url: "http://www.example.com",
// };

//   <AppCtx.Provider value={sampleAppContext}>
//     <PostInfo />
//   </AppCtx.Provider>
// );

// export const PostInfo = ({ name, author, url }: any) => {
//   const appContext = useContext(AppCtx);
//   return (
//     <div>
//       Name: {appContext?.name}, Author: {appContext?.author}, Url:{" "}
//       {appContext?.url}
//     </div>
//   );
// };
