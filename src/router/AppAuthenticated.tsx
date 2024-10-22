import { Route, Routes } from "react-router-dom";
import React from "react";
import Blank from "../pages/beta/blank";
import Login from "../pages/login";

const AppAuthenticatedPage = () => {
  return (
    <Routes>
      <Route path="*" element={<Blank text="404" />} />
      <Route path="" element={<Login />} />
    </Routes>
  );
};

export default AppAuthenticatedPage;
