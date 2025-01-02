import React, { createContext, useContext, useState } from "react";

const RouteStatus = createContext(null);

export default function RouteStatusprovider({ children }) {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isMedifacialPage, setIsMedifacialPage] = useState(false);
  return (
    <RouteStatus.Provider
      value={{
        isHomePage,
        setIsHomePage,
        isMedifacialPage,
        setIsMedifacialPage,
      }}
    >
      {children}
    </RouteStatus.Provider>
  );
}

export const useRouteStatus = () => {
  const context = useContext(RouteStatus);
  if (!context) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return context;
};
