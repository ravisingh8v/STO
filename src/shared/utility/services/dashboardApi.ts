import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Dashboard, Verbatim, UploadedFile, Message } from '../../../core/components/utility/models/Models';
import { environment } from '../../../environments/environment';

const baseQuery = fetchBaseQuery({
  baseUrl: environment.apiBaseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery,
  tagTypes: ['Dashboard', 'Verbatims', 'UploadedFiles', 'Chat'],
  endpoints: (builder) => ({
    // Get dashboard overview data
    getDashboard: builder.query<Dashboard, void>({
      query: () => ({
        url: '/dashboard',
        method: 'GET',
      }),
      tags: ['Dashboard'],
    }),

    // Get verbatims with filters
    getVerbatims: builder.query<
      {
        items: Verbatim[];
        total: number;
        page: number;
        pageSize: number;
      },
      {
        module?: string;
        page?: number;
        pageSize?: number;
        filters?: Record<string, any>;
      }
    >({
      query: (params) => ({
        url: '/verbatims',
        method: 'GET',
        params,
      }),
      tags: ['Verbatims'],
    }),

    // Update verbatim flag
    updateVerbatimFlag: builder.mutation<
      Verbatim,
      {
        id: number;
        sentiment: string | null;
      }
    >({
      query: ({ id, sentiment }) => ({
        url: `/verbatims/${id}/flag`,
        method: 'PUT',
        body: { sentiment },
      }),
      invalidatesTags: ['Verbatims'],
    }),

    // Get uploaded files
    getUploadedFiles: builder.query<UploadedFile[], void>({
      query: () => ({
        url: '/uploaded-files',
        method: 'GET',
      }),
      tags: ['UploadedFiles'],
    }),

    // Upload files
    uploadFiles: builder.mutation<
      { uploadId: string; files: UploadedFile[] },
      {
        questionFile?: File;
        responseFile?: File;
        batchName?: string;
      }
    >({
      query: (data) => {
        const formData = new FormData();
        if (data.questionFile) {
          formData.append('questionFile', data.questionFile);
        }
        if (data.responseFile) {
          formData.append('responseFile', data.responseFile);
        }
        if (data.batchName) {
          formData.append('batchName', data.batchName);
        }
        return {
          url: '/upload',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['UploadedFiles'],
    }),

    // Delete uploaded file
    deleteUploadedFile: builder.mutation<
      { success: boolean },
      string
    >({
      query: (id) => ({
        url: `/uploaded-files/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UploadedFiles'],
    }),

    // Get chat messages
    getChatMessages: builder.query<Message[], void>({
      query: () => ({
        url: '/chat/messages',
        method: 'GET',
      }),
      tags: ['Chat'],
    }),

    // Send chat message
    sendChatMessage: builder.mutation<Message, { content: string; context?: any }>(
      {
        query: (body) => ({
          url: '/chat/send',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Chat'],
      }
    ),
  }),
});

export const {
  useGetDashboardQuery,
  useGetVerbatimsQuery,
  useUpdateVerbatimFlagMutation,
  useGetUploadedFilesQuery,
  useUploadFilesMutation,
  useDeleteUploadedFileMutation,
  useGetChatMessagesQuery,
  useSendChatMessageMutation,
} = dashboardApi;
