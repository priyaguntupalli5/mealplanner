import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { logout } from "../state/state";
import { useNavigate } from 'react-router';

interface TermsAndConditionsProps {
  acceptedTermsAndConditions: boolean;
  handleTermsAndConditions:  (accepted: boolean) => void;
}

export default function TermsAndConditions({acceptedTermsAndConditions, handleTermsAndConditions}: TermsAndConditionsProps) {
  const [open, setOpen] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleReject = async () => {
    setOpen(false);
    await logout();
    navigate("/");
  };
  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };
  const handleAccept = () => {
    isAccepted && (
      //logic to store the state in the database goes here
      handleTermsAndConditions(true)
    )     
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Dialog
        open={open}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        disableEscapeKeyDown
      >
        <DialogTitle id="scroll-dialog-title">Terms and Conditions</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(20)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText>
        <Checkbox onChange={handleCheckboxChange} />
        <span>I agree with the Terms and Conditions</span>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleReject}>Reject</Button>
          <Button disabled={!isAccepted} onClick={handleAccept}>Accept</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}