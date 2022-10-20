import React from 'react';

import { Avatar, Box } from '@mui/material';

import { CommentType } from '../../../common/types';
import styles from './styles.module.scss';

interface CommentItemProps {
  comment: CommentType;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <Box className={styles.box}>
      <Avatar />
      <p className={styles.comment}>{comment.body}</p>
    </Box>
  );
};

export { CommentItem };
