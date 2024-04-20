// Ensure the user is logged in before routing to meal plans and such authorised pages.
import * as React from "react";
import { Navigate } from "react-router";
import { getCurrentPerson } from "./state/state";
import { useLocation } from "react-router-dom";

export const LoggedIn = ({ children }: { children: React.ReactNode }) => {
  console.log(`current Person ID in LoggedIn ${getCurrentPerson()}`);
  const location = useLocation();
  const isLogoutPage = location.pathname === '/';
  const isTermsPage = location.pathname === '/terms';

  if (getCurrentPerson().personID === "") return <Navigate to="/" />;
    if (!isLogoutPage && !isTermsPage && !getCurrentPerson().personTerms) {
      return <Navigate to = "/terms" replace/>;
    }
  return <React.Fragment>{children}</React.Fragment>;
};
