import * as React from 'react';
import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { logout, updatePersonTerms } from "../state/state";
import { useNavigate } from 'react-router';

export const TermsAndConditions = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleReject = async () => {
    await logout();
    navigate("/");
  };
  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };
  const handleAccept = () => {
    updatePersonTerms(true);
    navigate("/mealplans");
  };

  return (
     <div style={{ margin: '50px', textAlign: 'center' }}>
      <h1>Terms and Conditions</h1>
      <div>
        {[...new Array(20)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </div>
      <Checkbox onChange={handleCheckboxChange} />
      <span>I agree with the Terms and Conditions</span>
      <div>
        <Button onClick={handleReject}>Reject</Button>
        <Button disabled={!isAccepted} onClick={handleAccept}>Accept</Button>
      </div>
    </div>
    );
}