export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyProjects?: Maybe<DeleteManyPayload>;
  deleteManySections?: Maybe<DeleteManyPayload>;
  deleteManyTags?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteOneProject?: Maybe<Project>;
  deleteOneSection?: Maybe<Section>;
  deleteOneTag?: Maybe<Tag>;
  deleteOneUser?: Maybe<User>;
  insertManyProjects?: Maybe<InsertManyPayload>;
  insertManySections?: Maybe<InsertManyPayload>;
  insertManyTags?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertOneProject?: Maybe<Project>;
  insertOneSection?: Maybe<Section>;
  insertOneTag?: Maybe<Tag>;
  insertOneUser?: Maybe<User>;
  replaceOneProject?: Maybe<Project>;
  replaceOneSection?: Maybe<Section>;
  replaceOneTag?: Maybe<Tag>;
  replaceOneUser?: Maybe<User>;
  updateManyProjects?: Maybe<UpdateManyPayload>;
  updateManySections?: Maybe<UpdateManyPayload>;
  updateManyTags?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateOneProject?: Maybe<Project>;
  updateOneSection?: Maybe<Section>;
  updateOneTag?: Maybe<Tag>;
  updateOneUser?: Maybe<User>;
  upsertOneProject?: Maybe<Project>;
  upsertOneSection?: Maybe<Section>;
  upsertOneTag?: Maybe<Tag>;
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyProjectsArgs = {
  query?: Maybe<ProjectQueryInput>;
};


export type MutationDeleteManySectionsArgs = {
  query?: Maybe<SectionQueryInput>;
};


export type MutationDeleteManyTagsArgs = {
  query?: Maybe<TagQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteOneProjectArgs = {
  query: ProjectQueryInput;
};


export type MutationDeleteOneSectionArgs = {
  query: SectionQueryInput;
};


export type MutationDeleteOneTagArgs = {
  query: TagQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyProjectsArgs = {
  data: Array<ProjectInsertInput>;
};


export type MutationInsertManySectionsArgs = {
  data: Array<SectionInsertInput>;
};


export type MutationInsertManyTagsArgs = {
  data: Array<TagInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneProjectArgs = {
  data: ProjectInsertInput;
};


export type MutationInsertOneSectionArgs = {
  data: SectionInsertInput;
};


export type MutationInsertOneTagArgs = {
  data: TagInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
  data: ProjectInsertInput;
};


export type MutationReplaceOneSectionArgs = {
  query?: Maybe<SectionQueryInput>;
  data: SectionInsertInput;
};


export type MutationReplaceOneTagArgs = {
  query?: Maybe<TagQueryInput>;
  data: TagInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpdateManyProjectsArgs = {
  query?: Maybe<ProjectQueryInput>;
  set: ProjectUpdateInput;
};


export type MutationUpdateManySectionsArgs = {
  query?: Maybe<SectionQueryInput>;
  set: SectionUpdateInput;
};


export type MutationUpdateManyTagsArgs = {
  query?: Maybe<TagQueryInput>;
  set: TagUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  set: UserUpdateInput;
  query?: Maybe<UserQueryInput>;
};


export type MutationUpdateOneProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
  set: ProjectUpdateInput;
};


export type MutationUpdateOneSectionArgs = {
  query?: Maybe<SectionQueryInput>;
  set: SectionUpdateInput;
};


export type MutationUpdateOneTagArgs = {
  query?: Maybe<TagQueryInput>;
  set: TagUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
  data: ProjectInsertInput;
};


export type MutationUpsertOneSectionArgs = {
  query?: Maybe<SectionQueryInput>;
  data: SectionInsertInput;
};


export type MutationUpsertOneTagArgs = {
  query?: Maybe<TagQueryInput>;
  data: TagInsertInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type Project = {
  __typename?: 'Project';
  _id: Scalars['ObjectId'];
  category?: Maybe<Tag>;
  collaborators: Array<Maybe<User>>;
  description?: Maybe<Scalars['String']>;
  subcategory?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars['String'];
};

export type ProjectCategoryRelationInput = {
  create?: Maybe<TagInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type ProjectCollaboratorsRelationInput = {
  link?: Maybe<Array<Maybe<Scalars['String']>>>;
  create?: Maybe<Array<Maybe<UserInsertInput>>>;
};

export type ProjectInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  category?: Maybe<ProjectCategoryRelationInput>;
  description?: Maybe<Scalars['String']>;
  subcategory?: Maybe<ProjectSubcategoryRelationInput>;
  tags?: Maybe<ProjectTagsRelationInput>;
  title: Scalars['String'];
  collaborators: ProjectCollaboratorsRelationInput;
};

export type ProjectQueryInput = {
  title_ne?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  description_lte?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tags_in?: Maybe<Array<Maybe<TagQueryInput>>>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  description_gt?: Maybe<Scalars['String']>;
  subcategory_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  collaborators_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<ProjectQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  subcategory?: Maybe<TagQueryInput>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  title_gt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  collaborators?: Maybe<Array<Maybe<UserQueryInput>>>;
  title_lt?: Maybe<Scalars['String']>;
  category?: Maybe<TagQueryInput>;
  tags_nin?: Maybe<Array<Maybe<TagQueryInput>>>;
  tags?: Maybe<Array<Maybe<TagQueryInput>>>;
  collaborators_in?: Maybe<Array<Maybe<UserQueryInput>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  title_gte?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  tags_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  description_gte?: Maybe<Scalars['String']>;
  description_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<ProjectQueryInput>>;
  collaborators_nin?: Maybe<Array<Maybe<UserQueryInput>>>;
};

export enum ProjectSortByInput {
  SubcategoryAsc = 'SUBCATEGORY_ASC',
  TitleAsc = 'TITLE_ASC',
  CategoryAsc = 'CATEGORY_ASC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  SubcategoryDesc = 'SUBCATEGORY_DESC',
  TitleDesc = 'TITLE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CategoryDesc = 'CATEGORY_DESC'
}

export type ProjectSubcategoryRelationInput = {
  create?: Maybe<TagInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type ProjectTagsRelationInput = {
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  create?: Maybe<Array<Maybe<TagInsertInput>>>;
};

export type ProjectUpdateInput = {
  collaborators_unset?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProjectTagsRelationInput>;
  subcategory?: Maybe<ProjectSubcategoryRelationInput>;
  title_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  collaborators?: Maybe<ProjectCollaboratorsRelationInput>;
  subcategory_unset?: Maybe<Scalars['Boolean']>;
  tags_unset?: Maybe<Scalars['Boolean']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  category_unset?: Maybe<Scalars['Boolean']>;
  category?: Maybe<ProjectCategoryRelationInput>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  project?: Maybe<Project>;
  projects: Array<Maybe<Project>>;
  section?: Maybe<Section>;
  sections: Array<Maybe<Section>>;
  tag?: Maybe<Tag>;
  tags: Array<Maybe<Tag>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
};


export type QueryProjectsArgs = {
  query?: Maybe<ProjectQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ProjectSortByInput>;
};


export type QuerySectionArgs = {
  query?: Maybe<SectionQueryInput>;
};


export type QuerySectionsArgs = {
  query?: Maybe<SectionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SectionSortByInput>;
};


export type QueryTagArgs = {
  query?: Maybe<TagQueryInput>;
};


export type QueryTagsArgs = {
  query?: Maybe<TagQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TagSortByInput>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export type Section = {
  __typename?: 'Section';
  _id?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type SectionInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type SectionQueryInput = {
  OR?: Maybe<Array<SectionQueryInput>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  files?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<SectionQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  files_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  files_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  files_exists?: Maybe<Scalars['Boolean']>;
};

export enum SectionSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type SectionUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  files?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  files_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id?: Maybe<Scalars['ObjectId']>;
  title?: Maybe<Scalars['String']>;
};

export type TagInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  title?: Maybe<Scalars['String']>;
};

export type TagQueryInput = {
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  title_gte?: Maybe<Scalars['String']>;
  title_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<TagQueryInput>>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_lte?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  title_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<TagQueryInput>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_ne?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
};

export enum TagSortByInput {
  TitleDesc = 'TITLE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  TitleAsc = 'TITLE_ASC'
}

export type TagUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_unset?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
  _id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
  _id_exists?: Maybe<Scalars['Boolean']>;
  email_ne?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['String']>;
  profileImage_lt?: Maybe<Scalars['String']>;
  profileImage_exists?: Maybe<Scalars['Boolean']>;
  email_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  profileImage_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImage_gt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImage_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lte?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserQueryInput>>;
  email_lt?: Maybe<Scalars['String']>;
  profileImage?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  profileImage_gte?: Maybe<Scalars['String']>;
  profileImage_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id_gt?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImage_ne?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  NameDesc = 'NAME_DESC',
  ProfileimageAsc = 'PROFILEIMAGE_ASC',
  ProfileimageDesc = 'PROFILEIMAGE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  NameAsc = 'NAME_ASC'
}

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  profileImage?: Maybe<Scalars['String']>;
  profileImage_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
};

export type GetProjectsQueryVariables = Exact<{
  projectId?: Maybe<Scalars['ObjectId']>;
}>;


export type GetProjectsQuery = (
  { __typename?: 'Query' }
  & { project?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, '_id' | 'title' | 'description'>
    & { collaborators: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, '_id' | 'name'>
    )>>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, '_id' | 'title'>
    )>>> }
  )> }
);

export type UpdateProjectMutationVariables = Exact<{
  projectId: Scalars['ObjectId'];
  updates: ProjectUpdateInput;
}>;


export type UpdateProjectMutation = (
  { __typename?: 'Mutation' }
  & { project?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, '_id' | 'title' | 'description'>
  )> }
);
