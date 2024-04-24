// Ensure the user is logged in before routing to meal plans and such authorised pages.
import * as React from "react";
import { getCurrentPerson, updatePersonTerms } from "./state/state";
import TermsAndConditionsModal from './pages/TermsAndConditionsModal';
import { useState } from 'react';

export const AcceptedTerms = ({ children }: { children: React.ReactNode }) => {
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState(false);

  const handleTermsAndConditions = (accepted: boolean): void => {
    updatePersonTerms(accepted);
    setAcceptedTermsAndConditions(accepted);
  };

  const [personTerms, setPersonTerms] = useState(getCurrentPerson().personTerms); 
  console.log(personTerms);
  return (
    !personTerms ? ( 
      <>
        <TermsAndConditionsModal
          acceptedTermsAndConditions={acceptedTermsAndConditions}
          handleTermsAndConditions={handleTermsAndConditions}
        />
        {children}
      </>
    ) : (
      <>
        {children}
      </>
    )
  );
};

