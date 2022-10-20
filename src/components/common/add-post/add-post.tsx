import React, { useState } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';

import { useAddPostMutation } from '../../../store/query/post/post';
import styles from './styles.module.scss';
const AddPost: React.FC = () => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

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

  const [addPost] = useAddPostMutation();

  const onAddPost = async (): Promise<void> => {
    if (!body.trim() || !title.trim()) {
      alert('Body and title cannot be empty');
      return;
    }

    await addPost({
      body,
      title,
    });

    setBody('');
    setTitle('');
  };

  return (
    <Box className={styles.container}>
      <Typography
        sx={{ fontWeight: 700 }}
        gutterBottom
        variant="h5"
        component="div"
      >
        NEW POST
      </Typography>
      <TextField
        id="filled-textarea"
        label="Add a title"
        placeholder="Add a title..."
        multiline
        variant="filled"
        onChange={handleChangeBody}
        value={body}
      />
      <TextField
        id="filled-textarea"
        label="Add a body"
        placeholder="Add a body..."
        multiline
        variant="filled"
        onChange={handleChangeTitle}
        value={title}
      />
      <Button
        className={styles.addButton}
        onClick={onAddPost}
        variant="contained"
      >
        Add
      </Button>
    </Box>
  );
};

export { AddPost };
