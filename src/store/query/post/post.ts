import { HttpMethod, QueryTags, ApiPath } from '../../../common/enums';
import { PostType } from '../../../common/types';
import { api } from '../api';

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Array<PostType>, void>({
      query: () => ApiPath.POSTS,
      providesTags: [QueryTags.POST],
    }),
    getPostDetail: builder.query<PostType, number>({
      query: (id) => ({
        url: `${ApiPath.POSTS}/${id}`,
        params: { _embed: 'comments' },
      }),
      providesTags: [QueryTags.COMMENT],
    }),
    addPost: builder.mutation<PostType, Omit<PostType, 'id'>>({
      query: (post) => ({
        url: ApiPath.POSTS,
        method: HttpMethod.POST,
        body: post,
      }),
      invalidatesTags: [QueryTags.POST],
    }),
    updatePost: builder.mutation<PostType, PostType>({
      query: ({ id, ...post }) => ({
        url: `${ApiPath.POSTS}/${id}`,
        method: HttpMethod.PUT,
        body: post,
      }),
      invalidatesTags: [QueryTags.POST],
    }),
    deletePost: builder.mutation<PostType, number>({
      query: (id) => ({
        url: `${ApiPath.POSTS}/${id}`,
        method: HttpMethod.DELETE,
      }),
      invalidatesTags: [QueryTags.POST],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPostsQuery,
  useGetPostDetailQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postApi;
