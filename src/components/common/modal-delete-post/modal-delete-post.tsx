import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface ModalDeletePostProps {
  isOpen: boolean;
  handleCloseDialog: () => void;
  handleDeleteProfile: () => Promise<void>;
}

export const ModalDeletePost: React.FC<ModalDeletePostProps> = ({
  isOpen,
  handleDeleteProfile,
  handleCloseDialog,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Are you sure you want to delete that post?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          The post cannot be restored after deletion
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleCloseDialog} autoFocus>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleDeleteProfile}>
          Delete Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};
