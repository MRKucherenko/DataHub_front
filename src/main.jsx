import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n.js";
import { ThemeComponent } from "./Components/ThemeComponent/ThemeComponent.jsx";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <ThemeComponent>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
            <ToastContainer autoClose={3000}/>
          </BrowserRouter>
        </PersistGate>
      </ThemeComponent>
    </Provider>
  /* </StrictMode> */
);
