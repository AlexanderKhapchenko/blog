import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, TextField } from '@mui/material';

import { useAddCommentMutation } from '../../../store/query/comment/comment';
import styles from './styles.module.scss';

interface AddCommentProps {
  id: number;
}

const AddComment: React.FC<AddCommentProps> = ({ id }) => {
  const [addComment] = useAddCommentMutation();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const onCancel = (): void => {
    setText('');
    navigate(-1);
  };

  const onComment = async (): Promise<void> => {
    if (!text.trim()) {
      alert('Comment cannot be empty');
      return;
    }

    await addComment({
      postId: id,
      body: text,
    });

    setText('');
  };

  return (
    <Box className={styles.box}>
      <TextField
        id="filled-textarea"
        label="Add a comment"
        placeholder="Add a comment..."
        multiline
        variant="filled"
        onChange={handleChange}
        value={text}
      />
      <Box className={styles.buttons}>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onComment} variant="contained">
          Comment
        </Button>
      </Box>
    </Box>
  );
};

export { AddComment };
