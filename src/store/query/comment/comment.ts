import { HttpMethod, QueryTags, ApiPath } from '../../../common/enums';
import { CommentType } from '../../../common/types';
import { api } from '../api';

const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation<CommentType, Omit<CommentType, 'id'>>({
      query: (comment) => ({
        url: ApiPath.COMMENTS,
        method: HttpMethod.POST,
        body: comment,
      }),
      invalidatesTags: [QueryTags.COMMENT],
    }),
  }),
  overrideExisting: false,
});

export const { useAddCommentMutation } = commentApi;
