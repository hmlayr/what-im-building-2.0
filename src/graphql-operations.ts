import * as Types from './types';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const GetProjectsDocument = gql`
    query getProjects($projectId: ObjectId) {
  project(query: {_id: $projectId}) {
    _id
    title
    description
    collaborators {
      _id
      name
    }
    tags {
      _id
      title
    }
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>(GetProjectsDocument, baseOptions);
      }
export function useGetProjectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>(GetProjectsDocument, baseOptions);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = ApolloReactCommon.QueryResult<Types.GetProjectsQuery, Types.GetProjectsQueryVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($projectId: ObjectId!, $updates: ProjectUpdateInput!) {
  project: updateOneProject(query: {_id: $projectId}, set: $updates) {
    _id
    title
    description
  }
}
    `;
export type UpdateProjectMutationFn = ApolloReactCommon.MutationFunction<Types.UpdateProjectMutation, Types.UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.UpdateProjectMutation, Types.UpdateProjectMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.UpdateProjectMutation, Types.UpdateProjectMutationVariables>(UpdateProjectDocument, baseOptions);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = ApolloReactCommon.MutationResult<Types.UpdateProjectMutation>;
export type UpdateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.UpdateProjectMutation, Types.UpdateProjectMutationVariables>;