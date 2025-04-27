import React, { createContext, useContext } from "react";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SnackbarContext = createContext(null);

export const useAppSnackbar = () => {
  return useContext(SnackbarContext);
};

export const AppSnackbarProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = (message, variant = "default") => {
    enqueueSnackbar(message || "Something went wrong!", {
      variant,
      action: (key) => (
        <IconButton
          onClick={() => closeSnackbar(key)}
          style={{ color: "white" }}
          size="small"
          aria-label="close"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      ),
    });
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
    </SnackbarContext.Provider>
  );
};
