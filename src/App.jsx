import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { WorkPlace } from "./Pages/WorkPlace/WorkPlace";
import { Layout } from "./Components/Layout/Layout";
import { OTPCode } from "./Pages/OTPCode/OTPCode";
import { useAuth } from "./hooks/useAuth";
import { PrivetRoute } from "./Components/CustomRoute/PrivetRoute";
import { RestrictedRoute } from "./Components/CustomRoute/RestrictedRoute";
import { RestrictedOTPRoute } from "./Components/CustomRoute/RestrictedOTPRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { curentUser } from "./redux/auth/authOperation";
import { SuperAdminPage } from "./Pages/SuperAdminPage/SuperAdminPage";
import { RestrictedSuperAdmin } from "./Components/CustomRoute/RestrictedSuperAdmin";

export const App = () => {
  const { isRefreshUser } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(curentUser());
  }, [dispatch]);

  return isRefreshUser ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute reDirectTo={"/OTP"} component={<Login />} />
          }
        />
        <Route
          path="/superAdmin"
          element={
            <RestrictedSuperAdmin
              reDirectTo={"/workPlace"}
              component={<SuperAdminPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute reDirectTo={"/OTP"} component={<Register />} />
          }
        />
        <Route
          path="/OTP"
          element={
            <RestrictedOTPRoute
              reDirectTo={"/workPlace"}
              component={<OTPCode />}
            />
          }
        />
        <Route
          path="/workPlace"
          element={<PrivetRoute reDirectTo={"/"} component={<WorkPlace />} />}
        />
      </Route>
    </Routes>
  );
};
