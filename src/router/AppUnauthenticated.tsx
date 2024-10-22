
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../pages/login";
import Blank from "../pages/beta/blank";

const AppUnauthenticatedPage = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="*" element={<Blank text="404" />} />
          <Route path="" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppUnauthenticatedPage;
