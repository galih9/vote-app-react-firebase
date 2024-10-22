import { Route, Routes } from "react-router-dom";
import React from "react";
import Blank from "../pages/beta/blank";
import Login from "../pages/login";
import VotePage from "../pages/vote";
import RegistrationPage from "../pages/registration";
import Layout from "../components/layout/toolbar";
import VoterStatusPage from "../pages/voter";

const AppAuthenticatedPage = () => {
  return (
    <Routes>
      <Route path="*" element={<Blank text="404" />} />
      <Route path="" element={<Login />} />
      <Route
        path="/vote"
        element={
          <Layout>
            <VotePage />
          </Layout>
        }
      />
      <Route
        path="/voter"
        element={
          <Layout>
            <VoterStatusPage />
          </Layout>
        }
      />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default AppAuthenticatedPage;
