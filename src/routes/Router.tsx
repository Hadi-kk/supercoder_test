import MainLayout from "@/shared/layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./routes";
import LoginSignup from "@/pages/LoginSignup";
import LandingPage from "@/pages/LandingPage/LandingPage";
import NotFound from "@/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTE_PATH.MAIN} element={<LandingPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginSignup />} />
    </Routes>
  );
};

export default Router;
