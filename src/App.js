/* eslint-disable import/no-unresolved */
import RouteStatusprovider from "./config/Context/RouteContext";
import { AppSnackbarProvider } from "./config/Context/SnackbarContext";
import Theme from "./config/Theme";
import Router from "./utils/Router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div>
      <Theme>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          autoHideDuration={3000}
        >
          <AppSnackbarProvider>
            <RouteStatusprovider>
              <Router />
            </RouteStatusprovider>
          </AppSnackbarProvider>
        </SnackbarProvider>
      </Theme>
    </div>
  );
}

export default App;
