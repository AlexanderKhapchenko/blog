import React from 'react';

import { Box } from '@mui/material';

import { CommentType } from '../../../common/types';
import { CommentItem } from '../comment-item/comment-item';
import styles from './styles.module.scss';

interface CommentListProps {
  comments: Array<CommentType>;
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <Box className={styles.box}>
      {comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </Box>
  );
};

export { CommentList };
