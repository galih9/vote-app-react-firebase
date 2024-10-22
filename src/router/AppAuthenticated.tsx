import { Route, Routes } from "react-router-dom";
import React from "react";
import Blank from "../pages/beta/blank";
import Login from "../pages/login";
import VotePage from "../pages/vote";

const AppAuthenticatedPage = () => {
  return (
    <Routes>
      <Route path="*" element={<Blank text="404" />} />
      <Route path="" element={<Login />} />
      <Route path="/vote" element={<VotePage />} />
    </Routes>
  );
};

export default AppAuthenticatedPage;
