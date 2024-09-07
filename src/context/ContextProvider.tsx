import React, { createContext, useContext, useState } from "react";

interface StateContextType {
  activeMenu: boolean;
  isClicked: TinitialState;
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCliked: React.Dispatch<React.SetStateAction<TinitialState>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  screenSize: number;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
  handleClick: (clicked: keyof TinitialState) => void;
  setMode: (e: any) => void;
  setColor: (color: string) => void;
}

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

type TinitialState = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

const GetThemeModeFromLocalStorage = () => {
  const themeMode = JSON.parse(localStorage.getItem("themeMode")!);

  if (
    themeMode &&
    themeMode !== undefined &&
    themeMode !== null &&
    themeMode !== typeof null
  ) {
    return themeMode;
  } else {
    return "Dark";
  }
};

const GetColorModeFromLocalStorage = () => {
  const colorMode = JSON.parse(localStorage.getItem("colorMode")!);
  console.log(colorMode);

  if (
    colorMode !== undefined ||
    colorMode !== null ||
    colorMode !== typeof null
  ) {
    return colorMode;
  } else {
    return "#03C9D7";
  }
};

const StateContext = createContext<StateContextType>({
  activeMenu: true,
  isClicked: initialState,
  currentColor: GetColorModeFromLocalStorage(),
  currentMode: GetThemeModeFromLocalStorage(),
  themeSettings: false,
  setActiveMenu: () => {},
  setIsCliked: () => {},
  setCurrentColor: () => {},
  setCurrentMode: () => {},
  setThemeSettings: () => {},
  screenSize: 0,
  setScreenSize: () => {},
  handleClick: () => {},
  setMode: () => {},
  setColor: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsCliked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState(
    GetColorModeFromLocalStorage(),
  );
  const [currentMode, setCurrentMode] = useState(
    GetThemeModeFromLocalStorage(),
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const handleClick = (clicked: keyof TinitialState) => {
    setIsCliked({ ...initialState, [clicked]: !isClicked[clicked] });
  };

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", JSON.stringify(e.target.value));
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", JSON.stringify(color));
    setThemeSettings(false);
  };

  const [screenSize, setScreenSize] = useState(0);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsCliked,
        handleClick,
        screenSize,
        setCurrentColor,
        setScreenSize,
        setCurrentMode,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
