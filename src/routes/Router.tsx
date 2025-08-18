import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import AuthLayout from "../shared/layouts/AuthLayout";
import MainLayout from "../shared/layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import Main from "../features/main/components/templates/Main";

const Router = () => {
    return (
      <Routes>
        {/* auth layout */}
        <Route element={<AuthLayout />}>
          <Route path={routes.default} element={<LoginPage/>} />
          <Route path={routes.login} element={<div>login</div>} />
          <Route path={routes.signup} element={<div>signup</div>} />
        </Route>
  
        {/* main layout */}
        <Route element={<MainLayout />}>
          <Route path={routes.main} element={<div><Main/></div>} />
        </Route>
  
      </Routes>
    );
  };
  
  export default Router;