import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Button, TextField, Typography } from '@mui/material';

import { AppRoute } from '../../../common/enums';
import { useUpdatePostMutation } from '../../../store/query/post/post';
import { Notification, Spinner } from '../../common';
import styles from './styles.module.scss';

interface LocationParams {
  state: {
    oldBody: string;
    oldTitle: string;
    id: number;
  };
}

const EditPost: React.FC = () => {
  const { state } = useLocation() as LocationParams;
  const navigate = useNavigate();
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!state) {
      navigate(AppRoute.ROOT);
      return;
    }

    setBody(state.oldBody);
    setTitle(state.oldTitle);
  }, []);

  const handleChangeBody = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setBody(event.target.value);
  };

  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setTitle(event.target.value);
  };

  const [updatePost, { isLoading, isSuccess, isError }] =
    useUpdatePostMutation();

  const onAddPost = async (): Promise<void> => {
    if (!body.trim() || !title.trim()) {
      alert('Body and title cannot be empty');
      return;
    }
    await updatePost({
      body,
      title,
      id: state.id,
    });
  };

  const onCancel = (): void => {
    navigate(-1);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.box}>
        <Typography variant="body2" color="text.secondary">
          RECORD EDITING
        </Typography>
        <TextField
          id="filled-textarea"
          label="Change a title"
          placeholder="Change a title..."
          multiline
          variant="filled"
          onChange={handleChangeTitle}
          value={title}
        />
        <TextField
          id="filled-textarea"
          label="Change a body"
          placeholder="Change a body..."
          multiline
          variant="filled"
          onChange={handleChangeBody}
          value={body}
        />

        {!isLoading ? (
          <Box className={styles.buttons}>
            <Button onClick={onCancel} variant="outlined">
              Cancel
            </Button>
            <Button onClick={onAddPost} variant="contained">
              Save
            </Button>
          </Box>
        ) : (
          <Spinner />
        )}
      </Box>
      <Notification
        isSuccess={isSuccess}
        isError={isError}
        successMessage="Message updated"
        errorMessage="Something's wrong, try again later"
      />
    </Box>
  );
};

export { EditPost };
