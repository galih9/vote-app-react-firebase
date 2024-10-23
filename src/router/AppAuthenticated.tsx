import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/toolbar";
// pages
import Blank from "@pages/beta/blank";
import Login from "@pages/login";
import VotePage from "@pages/vote";
import RegistrationPage from "@pages/registration";
import VoterStatusPage from "@pages/voter";
import CandidatesPage from "@pages/candidates";
import SettingsPage from "@pages/admin/settings";

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
      <Route
        path="/candidates"
        element={
          <Layout>
            <CandidatesPage />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <SettingsPage />
          </Layout>
        }
      />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default AppAuthenticatedPage;
