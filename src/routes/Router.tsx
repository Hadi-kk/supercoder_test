import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import AuthLayout from "../shared/layouts/AuthLayout";
import MainLayout from "../shared/layouts/MainLayout";
import LoginSignup from "../pages/LoginSignup";

const Router = () => {
  return (
    <Routes>
      {/* auth layout */}
      <Route element={<AuthLayout />}>
        <Route path={routes.default} element={<div>default</div>} />
        <Route path={routes.login} element={<LoginSignup />} />
        <Route path={routes.signup} element={<div>signup</div>} />
      </Route>

      {/* main layout */}
      <Route element={<MainLayout />}>
        <Route path={routes.main} element={<div>home</div>} />
      </Route>
    </Routes>
  );
};

export default Router;
