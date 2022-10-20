import React, { ReactElement, useEffect } from 'react';

import { Alert, Snackbar } from '@mui/material';

interface NotificationProps {
  isSuccess: boolean;
  isError: boolean;
  successMessage: string;
  errorMessage: string;
}

const Notification: React.FC<NotificationProps> = ({
  isSuccess = false,
  isError = false,
  successMessage = '',
  errorMessage = '',
}) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(isSuccess || isError);
  }, [isSuccess, isError]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const renderAlert = (): ReactElement | undefined => {
    if (isSuccess) {
      return (
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      );
    }

    if (isError) {
      return (
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      );
    }
  };

  if (!isError && !isSuccess) return <></>;

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      {renderAlert()}
    </Snackbar>
  );
};

export { Notification };
