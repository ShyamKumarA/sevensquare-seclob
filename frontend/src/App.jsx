import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Packages from "./pages/Packages";
import Users from "./pages/Users";
import Signin from "./pages/Signin";
import UserDetails from "./pages/UserDetails";

import PackageForm from "./components/PackageForm";
import VerifyUsersPage from "./pages/VerifyUsersPage";
import VerifiedUserPage from "./pages/VerifiedUsersPage";
import Referral from "./pages/Referral";
import Transactions from "./pages/Transactions";
import WalletDetails from "./pages/WalletDetails";
import InnerUsers from "./pages/InnerUsers";
import FranchiseUsers from "./pages/FranchiseUsers";
import UserPins from "./pages/UserPins";
import Wallet from "./pages/Wallet";
import Salary from "./pages/Salary";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/dash" element={<Dashboard />} />
        <Route exact path="/" element={<Signin />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/dashboard" element={<Packages />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userpins" element={<UserPins />} />
        <Route path="/add-new" element={<PackageForm />} />
        <Route path="/franchise-users" element={<FranchiseUsers />} />
        <Route path="/user-details/:userId" element={<UserDetails />} />
        <Route path="/verify-users" element={<VerifyUsersPage />} />
        <Route path="/verified-users" element={<VerifiedUserPage />} />
        <Route path="/referral/:sponser" element={<Referral />} />
        <Route path="/withdrawal" element={<Transactions />} />
        <Route path="/wallet-details" element={<WalletDetails />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/users-list/:userId" element={<InnerUsers />} />
        <Route path="/salary" element={<Salary />} />
      </Routes>
    </>
  );
}

export default App;
