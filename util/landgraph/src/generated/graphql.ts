import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type Category = {
  __typename?: 'Category';
  categoryId: Scalars['ID'];
  members: Array<Member>;
  membersAggregate?: Maybe<CategoryMemberMembersAggregationSelection>;
  membersConnection: CategoryMembersConnection;
  name: Scalars['String'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<CategoryProjectProjectsAggregationSelection>;
  projectsConnection: CategoryProjectsConnection;
};


/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type CategoryMembersArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type CategoryMembersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MemberWhere>;
};


/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type CategoryMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CategoryMembersConnectionSort>>;
  where?: InputMaybe<CategoryMembersConnectionWhere>;
};


/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type CategoryProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type CategoryProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


/**
 * Category
 *
 * TODO: add (maybe?) "union CategorizedEntity = Member | Project"
 */
export type CategoryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CategoryProjectsConnectionSort>>;
  where?: InputMaybe<CategoryProjectsConnectionWhere>;
};

export type CategoryAggregateSelection = {
  __typename?: 'CategoryAggregateSelection';
  categoryId: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
};

export type CategoryConnectInput = {
  members?: InputMaybe<Array<CategoryMembersConnectFieldInput>>;
  projects?: InputMaybe<Array<CategoryProjectsConnectFieldInput>>;
};

export type CategoryConnectOrCreateInput = {
  members?: InputMaybe<Array<CategoryMembersConnectOrCreateFieldInput>>;
  projects?: InputMaybe<Array<CategoryProjectsConnectOrCreateFieldInput>>;
};

export type CategoryConnectOrCreateWhere = {
  node: CategoryUniqueWhere;
};

export type CategoryConnectWhere = {
  node: CategoryWhere;
};

export type CategoryCreateInput = {
  members?: InputMaybe<CategoryMembersFieldInput>;
  name: Scalars['String'];
  projects?: InputMaybe<CategoryProjectsFieldInput>;
};

export type CategoryDeleteInput = {
  members?: InputMaybe<Array<CategoryMembersDeleteFieldInput>>;
  projects?: InputMaybe<Array<CategoryProjectsDeleteFieldInput>>;
};

export type CategoryDisconnectInput = {
  members?: InputMaybe<Array<CategoryMembersDisconnectFieldInput>>;
  projects?: InputMaybe<Array<CategoryProjectsDisconnectFieldInput>>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  cursor: Scalars['String'];
  node: Category;
};

export type CategoryMemberMembersAggregationSelection = {
  __typename?: 'CategoryMemberMembersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CategoryMemberMembersNodeAggregateSelection>;
};

export type CategoryMemberMembersNodeAggregateSelection = {
  __typename?: 'CategoryMemberMembersNodeAggregateSelection';
  memberId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CategoryMembersAggregateInput = {
  AND?: InputMaybe<Array<CategoryMembersAggregateInput>>;
  OR?: InputMaybe<Array<CategoryMembersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CategoryMembersNodeAggregationWhereInput>;
};

export type CategoryMembersConnectFieldInput = {
  connect?: InputMaybe<Array<MemberConnectInput>>;
  where?: InputMaybe<MemberConnectWhere>;
};

export type CategoryMembersConnectOrCreateFieldInput = {
  onCreate: CategoryMembersConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type CategoryMembersConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type CategoryMembersConnection = {
  __typename?: 'CategoryMembersConnection';
  edges: Array<CategoryMembersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CategoryMembersConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type CategoryMembersConnectionWhere = {
  AND?: InputMaybe<Array<CategoryMembersConnectionWhere>>;
  OR?: InputMaybe<Array<CategoryMembersConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
  node_NOT?: InputMaybe<MemberWhere>;
};

export type CategoryMembersCreateFieldInput = {
  node: MemberCreateInput;
};

export type CategoryMembersDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<CategoryMembersConnectionWhere>;
};

export type CategoryMembersDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<CategoryMembersConnectionWhere>;
};

export type CategoryMembersFieldInput = {
  connect?: InputMaybe<Array<CategoryMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryMembersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CategoryMembersCreateFieldInput>>;
};

export type CategoryMembersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryMembersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CategoryMembersNodeAggregationWhereInput>>;
  memberId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type CategoryMembersRelationship = {
  __typename?: 'CategoryMembersRelationship';
  cursor: Scalars['String'];
  node: Member;
};

export type CategoryMembersUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type CategoryMembersUpdateFieldInput = {
  connect?: InputMaybe<Array<CategoryMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryMembersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CategoryMembersCreateFieldInput>>;
  delete?: InputMaybe<Array<CategoryMembersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CategoryMembersDisconnectFieldInput>>;
  update?: InputMaybe<CategoryMembersUpdateConnectionInput>;
  where?: InputMaybe<CategoryMembersConnectionWhere>;
};

export type CategoryOnCreateInput = {
  name: Scalars['String'];
};

export type CategoryOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CategorySort objects to sort Categories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CategorySort>>;
};

export type CategoryProjectProjectsAggregationSelection = {
  __typename?: 'CategoryProjectProjectsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CategoryProjectProjectsNodeAggregateSelection>;
};

export type CategoryProjectProjectsNodeAggregateSelection = {
  __typename?: 'CategoryProjectProjectsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type CategoryProjectsAggregateInput = {
  AND?: InputMaybe<Array<CategoryProjectsAggregateInput>>;
  OR?: InputMaybe<Array<CategoryProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CategoryProjectsNodeAggregationWhereInput>;
};

export type CategoryProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type CategoryProjectsConnectOrCreateFieldInput = {
  onCreate: CategoryProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type CategoryProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type CategoryProjectsConnection = {
  __typename?: 'CategoryProjectsConnection';
  edges: Array<CategoryProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CategoryProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type CategoryProjectsConnectionWhere = {
  AND?: InputMaybe<Array<CategoryProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<CategoryProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type CategoryProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type CategoryProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<CategoryProjectsConnectionWhere>;
};

export type CategoryProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<CategoryProjectsConnectionWhere>;
};

export type CategoryProjectsFieldInput = {
  connect?: InputMaybe<Array<CategoryProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CategoryProjectsCreateFieldInput>>;
};

export type CategoryProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CategoryProjectsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  projectId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CategoryProjectsRelationship = {
  __typename?: 'CategoryProjectsRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type CategoryProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type CategoryProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<CategoryProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CategoryProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<CategoryProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CategoryProjectsDisconnectFieldInput>>;
  update?: InputMaybe<CategoryProjectsUpdateConnectionInput>;
  where?: InputMaybe<CategoryProjectsConnectionWhere>;
};

export type CategoryRelationInput = {
  members?: InputMaybe<Array<CategoryMembersCreateFieldInput>>;
  projects?: InputMaybe<Array<CategoryProjectsCreateFieldInput>>;
};

/** Fields to sort Categories by. The order in which sorts are applied is not guaranteed when specifying many fields in one CategorySort object. */
export type CategorySort = {
  categoryId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CategoryUniqueWhere = {
  categoryId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateInput = {
  members?: InputMaybe<Array<CategoryMembersUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Array<CategoryProjectsUpdateFieldInput>>;
};

export type CategoryWhere = {
  AND?: InputMaybe<Array<CategoryWhere>>;
  OR?: InputMaybe<Array<CategoryWhere>>;
  categoryId?: InputMaybe<Scalars['ID']>;
  categoryId_CONTAINS?: InputMaybe<Scalars['ID']>;
  categoryId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  categoryId_IN?: InputMaybe<Array<Scalars['ID']>>;
  categoryId_NOT?: InputMaybe<Scalars['ID']>;
  categoryId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  categoryId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  categoryId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  categoryId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  categoryId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  membersAggregate?: InputMaybe<CategoryMembersAggregateInput>;
  membersConnection_ALL?: InputMaybe<CategoryMembersConnectionWhere>;
  membersConnection_NONE?: InputMaybe<CategoryMembersConnectionWhere>;
  membersConnection_SINGLE?: InputMaybe<CategoryMembersConnectionWhere>;
  membersConnection_SOME?: InputMaybe<CategoryMembersConnectionWhere>;
  /** Return Categories where all of the related Members match this filter */
  members_ALL?: InputMaybe<MemberWhere>;
  /** Return Categories where none of the related Members match this filter */
  members_NONE?: InputMaybe<MemberWhere>;
  /** Return Categories where one of the related Members match this filter */
  members_SINGLE?: InputMaybe<MemberWhere>;
  /** Return Categories where some of the related Members match this filter */
  members_SOME?: InputMaybe<MemberWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  projectsAggregate?: InputMaybe<CategoryProjectsAggregateInput>;
  projectsConnection_ALL?: InputMaybe<CategoryProjectsConnectionWhere>;
  projectsConnection_NONE?: InputMaybe<CategoryProjectsConnectionWhere>;
  projectsConnection_SINGLE?: InputMaybe<CategoryProjectsConnectionWhere>;
  projectsConnection_SOME?: InputMaybe<CategoryProjectsConnectionWhere>;
  /** Return Categories where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Categories where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Categories where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Categories where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
};

export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  edges: Array<CityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** City */
export type City = {
  __typename?: 'City';
  cityId: Scalars['ID'];
  country: Scalars['String'];
  name: Scalars['String'];
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<CityOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: CityOrganizationsConnection;
  state: Scalars['String'];
};


/** City */
export type CityOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/** City */
export type CityOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/** City */
export type CityOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CityOrganizationsConnectionSort>>;
  where?: InputMaybe<CityOrganizationsConnectionWhere>;
};

export type CityAggregateSelection = {
  __typename?: 'CityAggregateSelection';
  cityId: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  country: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  state: StringAggregateSelectionNonNullable;
};

export type CityConnectInput = {
  organizations?: InputMaybe<Array<CityOrganizationsConnectFieldInput>>;
};

export type CityConnectOrCreateInput = {
  organizations?: InputMaybe<Array<CityOrganizationsConnectOrCreateFieldInput>>;
};

export type CityConnectOrCreateWhere = {
  node: CityUniqueWhere;
};

export type CityConnectWhere = {
  node: CityWhere;
};

export type CityCreateInput = {
  country: Scalars['String'];
  name: Scalars['String'];
  organizations?: InputMaybe<CityOrganizationsFieldInput>;
  state: Scalars['String'];
};

export type CityDeleteInput = {
  organizations?: InputMaybe<Array<CityOrganizationsDeleteFieldInput>>;
};

export type CityDisconnectInput = {
  organizations?: InputMaybe<Array<CityOrganizationsDisconnectFieldInput>>;
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String'];
  node: City;
};

export type CityOnCreateInput = {
  country: Scalars['String'];
  name: Scalars['String'];
  state: Scalars['String'];
};

export type CityOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CitySort objects to sort Cities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CitySort>>;
};

export type CityOrganizationOrganizationsAggregationSelection = {
  __typename?: 'CityOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CityOrganizationOrganizationsNodeAggregateSelection>;
};

export type CityOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'CityOrganizationOrganizationsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type CityOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<CityOrganizationsAggregateInput>>;
  OR?: InputMaybe<Array<CityOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CityOrganizationsNodeAggregationWhereInput>;
};

export type CityOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type CityOrganizationsConnectOrCreateFieldInput = {
  onCreate: CityOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type CityOrganizationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type CityOrganizationsConnection = {
  __typename?: 'CityOrganizationsConnection';
  edges: Array<CityOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CityOrganizationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type CityOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<CityOrganizationsConnectionWhere>>;
  OR?: InputMaybe<Array<CityOrganizationsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type CityOrganizationsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type CityOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<CityOrganizationsConnectionWhere>;
};

export type CityOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<CityOrganizationsConnectionWhere>;
};

export type CityOrganizationsFieldInput = {
  connect?: InputMaybe<Array<CityOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CityOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CityOrganizationsCreateFieldInput>>;
};

export type CityOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CityOrganizationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CityOrganizationsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CityOrganizationsRelationship = {
  __typename?: 'CityOrganizationsRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type CityOrganizationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type CityOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<CityOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CityOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CityOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<CityOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CityOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<CityOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<CityOrganizationsConnectionWhere>;
};

export type CityRelationInput = {
  organizations?: InputMaybe<Array<CityOrganizationsCreateFieldInput>>;
};

/** Fields to sort Cities by. The order in which sorts are applied is not guaranteed when specifying many fields in one CitySort object. */
export type CitySort = {
  cityId?: InputMaybe<SortDirection>;
  country?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
};

export type CityUniqueWhere = {
  cityId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CityUpdateInput = {
  country?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Array<CityOrganizationsUpdateFieldInput>>;
  state?: InputMaybe<Scalars['String']>;
};

export type CityWhere = {
  AND?: InputMaybe<Array<CityWhere>>;
  OR?: InputMaybe<Array<CityWhere>>;
  cityId?: InputMaybe<Scalars['ID']>;
  cityId_CONTAINS?: InputMaybe<Scalars['ID']>;
  cityId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  cityId_IN?: InputMaybe<Array<Scalars['ID']>>;
  cityId_NOT?: InputMaybe<Scalars['ID']>;
  cityId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  cityId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  cityId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  cityId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  cityId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  country?: InputMaybe<Scalars['String']>;
  country_CONTAINS?: InputMaybe<Scalars['String']>;
  country_ENDS_WITH?: InputMaybe<Scalars['String']>;
  country_IN?: InputMaybe<Array<Scalars['String']>>;
  country_NOT?: InputMaybe<Scalars['String']>;
  country_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  country_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  country_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  country_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  country_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  organizationsAggregate?: InputMaybe<CityOrganizationsAggregateInput>;
  organizationsConnection_ALL?: InputMaybe<CityOrganizationsConnectionWhere>;
  organizationsConnection_NONE?: InputMaybe<CityOrganizationsConnectionWhere>;
  organizationsConnection_SINGLE?: InputMaybe<CityOrganizationsConnectionWhere>;
  organizationsConnection_SOME?: InputMaybe<CityOrganizationsConnectionWhere>;
  /** Return Cities where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Cities where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Cities where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Cities where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
  state?: InputMaybe<Scalars['String']>;
  state_CONTAINS?: InputMaybe<Scalars['String']>;
  state_ENDS_WITH?: InputMaybe<Scalars['String']>;
  state_IN?: InputMaybe<Array<Scalars['String']>>;
  state_NOT?: InputMaybe<Scalars['String']>;
  state_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  state_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  state_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  state_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  state_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CreateCategoriesMutationResponse = {
  __typename?: 'CreateCategoriesMutationResponse';
  categories: Array<Category>;
  info: CreateInfo;
};

export type CreateCitiesMutationResponse = {
  __typename?: 'CreateCitiesMutationResponse';
  cities: Array<City>;
  info: CreateInfo;
};

export type CreateEugsMutationResponse = {
  __typename?: 'CreateEugsMutationResponse';
  eugs: Array<Eug>;
  info: CreateInfo;
};

export type CreateIndustriesMutationResponse = {
  __typename?: 'CreateIndustriesMutationResponse';
  industries: Array<Industry>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateLanguagesMutationResponse = {
  __typename?: 'CreateLanguagesMutationResponse';
  info: CreateInfo;
  languages: Array<Language>;
};

export type CreateLicensesMutationResponse = {
  __typename?: 'CreateLicensesMutationResponse';
  info: CreateInfo;
  licenses: Array<License>;
};

export type CreateMembersMutationResponse = {
  __typename?: 'CreateMembersMutationResponse';
  info: CreateInfo;
  members: Array<Member>;
};

export type CreateMembershipTypesMutationResponse = {
  __typename?: 'CreateMembershipTypesMutationResponse';
  info: CreateInfo;
  membershipTypes: Array<MembershipType>;
};

export type CreateOrganizationsMutationResponse = {
  __typename?: 'CreateOrganizationsMutationResponse';
  info: CreateInfo;
  organizations: Array<Organization>;
};

export type CreatePeopleMutationResponse = {
  __typename?: 'CreatePeopleMutationResponse';
  info: CreateInfo;
  people: Array<Person>;
};

export type CreateProjectPhasesMutationResponse = {
  __typename?: 'CreateProjectPhasesMutationResponse';
  info: CreateInfo;
  projectPhases: Array<ProjectPhase>;
};

export type CreateProjectsMutationResponse = {
  __typename?: 'CreateProjectsMutationResponse';
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateTagsMutationResponse = {
  __typename?: 'CreateTagsMutationResponse';
  info: CreateInfo;
  tags: Array<Tag>;
};

export type CreateTocsMutationResponse = {
  __typename?: 'CreateTocsMutationResponse';
  info: CreateInfo;
  tocs: Array<Toc>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

/** EUG: End User Group */
export type Eug = {
  __typename?: 'EUG';
  eugId: Scalars['ID'];
  members?: Maybe<Member>;
  membersAggregate?: Maybe<EugMemberMembersAggregationSelection>;
  membersConnection: EugMembersConnection;
  name: Scalars['String'];
  rolePersons: Array<Person>;
  rolePersonsAggregate?: Maybe<EugPersonRolePersonsAggregationSelection>;
  rolePersonsConnection: EugRolePersonsConnection;
};


/** EUG: End User Group */
export type EugMembersArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


/** EUG: End User Group */
export type EugMembersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MemberWhere>;
};


/** EUG: End User Group */
export type EugMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EugMembersConnectionSort>>;
  where?: InputMaybe<EugMembersConnectionWhere>;
};


/** EUG: End User Group */
export type EugRolePersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** EUG: End User Group */
export type EugRolePersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** EUG: End User Group */
export type EugRolePersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<EugRolePersonsConnectionSort>>;
  where?: InputMaybe<EugRolePersonsConnectionWhere>;
};

export type EugAggregateSelection = {
  __typename?: 'EUGAggregateSelection';
  count: Scalars['Int'];
  eugId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EugConnectInput = {
  members?: InputMaybe<EugMembersConnectFieldInput>;
  rolePersons?: InputMaybe<Array<EugRolePersonsConnectFieldInput>>;
};

export type EugConnectOrCreateInput = {
  members?: InputMaybe<EugMembersConnectOrCreateFieldInput>;
  rolePersons?: InputMaybe<Array<EugRolePersonsConnectOrCreateFieldInput>>;
};

export type EugConnectOrCreateWhere = {
  node: EugUniqueWhere;
};

export type EugConnectWhere = {
  node: EugWhere;
};

export type EugCreateInput = {
  members?: InputMaybe<EugMembersFieldInput>;
  name: Scalars['String'];
  rolePersons?: InputMaybe<EugRolePersonsFieldInput>;
};

export type EugDeleteInput = {
  members?: InputMaybe<EugMembersDeleteFieldInput>;
  rolePersons?: InputMaybe<Array<EugRolePersonsDeleteFieldInput>>;
};

export type EugDisconnectInput = {
  members?: InputMaybe<EugMembersDisconnectFieldInput>;
  rolePersons?: InputMaybe<Array<EugRolePersonsDisconnectFieldInput>>;
};

export type EugEdge = {
  __typename?: 'EUGEdge';
  cursor: Scalars['String'];
  node: Eug;
};

export type EugMemberMembersAggregationSelection = {
  __typename?: 'EUGMemberMembersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EugMemberMembersNodeAggregateSelection>;
};

export type EugMemberMembersNodeAggregateSelection = {
  __typename?: 'EUGMemberMembersNodeAggregateSelection';
  memberId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type EugMembersAggregateInput = {
  AND?: InputMaybe<Array<EugMembersAggregateInput>>;
  OR?: InputMaybe<Array<EugMembersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EugMembersNodeAggregationWhereInput>;
};

export type EugMembersConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  where?: InputMaybe<MemberConnectWhere>;
};

export type EugMembersConnectOrCreateFieldInput = {
  onCreate: EugMembersConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type EugMembersConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type EugMembersConnection = {
  __typename?: 'EUGMembersConnection';
  edges: Array<EugMembersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EugMembersConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type EugMembersConnectionWhere = {
  AND?: InputMaybe<Array<EugMembersConnectionWhere>>;
  OR?: InputMaybe<Array<EugMembersConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
  node_NOT?: InputMaybe<MemberWhere>;
};

export type EugMembersCreateFieldInput = {
  node: MemberCreateInput;
};

export type EugMembersDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<EugMembersConnectionWhere>;
};

export type EugMembersDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<EugMembersConnectionWhere>;
};

export type EugMembersFieldInput = {
  connect?: InputMaybe<EugMembersConnectFieldInput>;
  connectOrCreate?: InputMaybe<EugMembersConnectOrCreateFieldInput>;
  create?: InputMaybe<EugMembersCreateFieldInput>;
};

export type EugMembersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EugMembersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EugMembersNodeAggregationWhereInput>>;
  memberId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type EugMembersRelationship = {
  __typename?: 'EUGMembersRelationship';
  cursor: Scalars['String'];
  node: Member;
};

export type EugMembersUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type EugMembersUpdateFieldInput = {
  connect?: InputMaybe<EugMembersConnectFieldInput>;
  connectOrCreate?: InputMaybe<EugMembersConnectOrCreateFieldInput>;
  create?: InputMaybe<EugMembersCreateFieldInput>;
  delete?: InputMaybe<EugMembersDeleteFieldInput>;
  disconnect?: InputMaybe<EugMembersDisconnectFieldInput>;
  update?: InputMaybe<EugMembersUpdateConnectionInput>;
  where?: InputMaybe<EugMembersConnectionWhere>;
};

export type EugOnCreateInput = {
  name: Scalars['String'];
};

export type EugOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more EUGSort objects to sort Eugs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EugSort>>;
};

export type EugPersonRolePersonsAggregationSelection = {
  __typename?: 'EUGPersonRolePersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<EugPersonRolePersonsNodeAggregateSelection>;
};

export type EugPersonRolePersonsNodeAggregateSelection = {
  __typename?: 'EUGPersonRolePersonsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type EugRelationInput = {
  members?: InputMaybe<EugMembersCreateFieldInput>;
  rolePersons?: InputMaybe<Array<EugRolePersonsCreateFieldInput>>;
};

export type EugRolePersonsAggregateInput = {
  AND?: InputMaybe<Array<EugRolePersonsAggregateInput>>;
  OR?: InputMaybe<Array<EugRolePersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<EugRolePersonsNodeAggregationWhereInput>;
};

export type EugRolePersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<PersonConnectWhere>;
};

export type EugRolePersonsConnectOrCreateFieldInput = {
  onCreate: EugRolePersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type EugRolePersonsConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: PersonOnCreateInput;
};

export type EugRolePersonsConnection = {
  __typename?: 'EUGRolePersonsConnection';
  edges: Array<EugRolePersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EugRolePersonsConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<PersonSort>;
};

export type EugRolePersonsConnectionWhere = {
  AND?: InputMaybe<Array<EugRolePersonsConnectionWhere>>;
  OR?: InputMaybe<Array<EugRolePersonsConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type EugRolePersonsCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: PersonCreateInput;
};

export type EugRolePersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<EugRolePersonsConnectionWhere>;
};

export type EugRolePersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<EugRolePersonsConnectionWhere>;
};

export type EugRolePersonsFieldInput = {
  connect?: InputMaybe<Array<EugRolePersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EugRolePersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EugRolePersonsCreateFieldInput>>;
};

export type EugRolePersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EugRolePersonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EugRolePersonsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type EugRolePersonsRelationship = ServedInRole & {
  __typename?: 'EUGRolePersonsRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Person;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type EugRolePersonsUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<PersonUpdateInput>;
};

export type EugRolePersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<EugRolePersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<EugRolePersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<EugRolePersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<EugRolePersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EugRolePersonsDisconnectFieldInput>>;
  update?: InputMaybe<EugRolePersonsUpdateConnectionInput>;
  where?: InputMaybe<EugRolePersonsConnectionWhere>;
};

/** Fields to sort Eugs by. The order in which sorts are applied is not guaranteed when specifying many fields in one EUGSort object. */
export type EugSort = {
  eugId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type EugUniqueWhere = {
  eugId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EugUpdateInput = {
  members?: InputMaybe<EugMembersUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  rolePersons?: InputMaybe<Array<EugRolePersonsUpdateFieldInput>>;
};

export type EugWhere = {
  AND?: InputMaybe<Array<EugWhere>>;
  OR?: InputMaybe<Array<EugWhere>>;
  eugId?: InputMaybe<Scalars['ID']>;
  eugId_CONTAINS?: InputMaybe<Scalars['ID']>;
  eugId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  eugId_IN?: InputMaybe<Array<Scalars['ID']>>;
  eugId_NOT?: InputMaybe<Scalars['ID']>;
  eugId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  eugId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  eugId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  eugId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  eugId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  members?: InputMaybe<MemberWhere>;
  membersAggregate?: InputMaybe<EugMembersAggregateInput>;
  membersConnection?: InputMaybe<EugMembersConnectionWhere>;
  membersConnection_NOT?: InputMaybe<EugMembersConnectionWhere>;
  members_NOT?: InputMaybe<MemberWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  rolePersonsAggregate?: InputMaybe<EugRolePersonsAggregateInput>;
  rolePersonsConnection_ALL?: InputMaybe<EugRolePersonsConnectionWhere>;
  rolePersonsConnection_NONE?: InputMaybe<EugRolePersonsConnectionWhere>;
  rolePersonsConnection_SINGLE?: InputMaybe<EugRolePersonsConnectionWhere>;
  rolePersonsConnection_SOME?: InputMaybe<EugRolePersonsConnectionWhere>;
  /** Return EUGS where all of the related People match this filter */
  rolePersons_ALL?: InputMaybe<PersonWhere>;
  /** Return EUGS where none of the related People match this filter */
  rolePersons_NONE?: InputMaybe<PersonWhere>;
  /** Return EUGS where one of the related People match this filter */
  rolePersons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return EUGS where some of the related People match this filter */
  rolePersons_SOME?: InputMaybe<PersonWhere>;
};

export type EugsConnection = {
  __typename?: 'EugsConnection';
  edges: Array<EugEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IndustriesConnection = {
  __typename?: 'IndustriesConnection';
  edges: Array<IndustryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Industry */
export type Industry = {
  __typename?: 'Industry';
  industryId: Scalars['ID'];
  name: Scalars['String'];
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<IndustryOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: IndustryOrganizationsConnection;
};


/** Industry */
export type IndustryOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Industry */
export type IndustryOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Industry */
export type IndustryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IndustryOrganizationsConnectionSort>>;
  where?: InputMaybe<IndustryOrganizationsConnectionWhere>;
};

export type IndustryAggregateSelection = {
  __typename?: 'IndustryAggregateSelection';
  count: Scalars['Int'];
  industryId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type IndustryConnectInput = {
  organizations?: InputMaybe<Array<IndustryOrganizationsConnectFieldInput>>;
};

export type IndustryConnectOrCreateInput = {
  organizations?: InputMaybe<Array<IndustryOrganizationsConnectOrCreateFieldInput>>;
};

export type IndustryConnectOrCreateWhere = {
  node: IndustryUniqueWhere;
};

export type IndustryConnectWhere = {
  node: IndustryWhere;
};

export type IndustryCreateInput = {
  name: Scalars['String'];
  organizations?: InputMaybe<IndustryOrganizationsFieldInput>;
};

export type IndustryDeleteInput = {
  organizations?: InputMaybe<Array<IndustryOrganizationsDeleteFieldInput>>;
};

export type IndustryDisconnectInput = {
  organizations?: InputMaybe<Array<IndustryOrganizationsDisconnectFieldInput>>;
};

export type IndustryEdge = {
  __typename?: 'IndustryEdge';
  cursor: Scalars['String'];
  node: Industry;
};

export type IndustryOnCreateInput = {
  name: Scalars['String'];
};

export type IndustryOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more IndustrySort objects to sort Industries by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<IndustrySort>>;
};

export type IndustryOrganizationOrganizationsAggregationSelection = {
  __typename?: 'IndustryOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<IndustryOrganizationOrganizationsNodeAggregateSelection>;
};

export type IndustryOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'IndustryOrganizationOrganizationsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type IndustryOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<IndustryOrganizationsAggregateInput>>;
  OR?: InputMaybe<Array<IndustryOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<IndustryOrganizationsNodeAggregationWhereInput>;
};

export type IndustryOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type IndustryOrganizationsConnectOrCreateFieldInput = {
  onCreate: IndustryOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type IndustryOrganizationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type IndustryOrganizationsConnection = {
  __typename?: 'IndustryOrganizationsConnection';
  edges: Array<IndustryOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IndustryOrganizationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type IndustryOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<IndustryOrganizationsConnectionWhere>>;
  OR?: InputMaybe<Array<IndustryOrganizationsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type IndustryOrganizationsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type IndustryOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<IndustryOrganizationsConnectionWhere>;
};

export type IndustryOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<IndustryOrganizationsConnectionWhere>;
};

export type IndustryOrganizationsFieldInput = {
  connect?: InputMaybe<Array<IndustryOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IndustryOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IndustryOrganizationsCreateFieldInput>>;
};

export type IndustryOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IndustryOrganizationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<IndustryOrganizationsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type IndustryOrganizationsRelationship = {
  __typename?: 'IndustryOrganizationsRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type IndustryOrganizationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type IndustryOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<IndustryOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<IndustryOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<IndustryOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<IndustryOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IndustryOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<IndustryOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<IndustryOrganizationsConnectionWhere>;
};

export type IndustryRelationInput = {
  organizations?: InputMaybe<Array<IndustryOrganizationsCreateFieldInput>>;
};

/** Fields to sort Industries by. The order in which sorts are applied is not guaranteed when specifying many fields in one IndustrySort object. */
export type IndustrySort = {
  industryId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type IndustryUniqueWhere = {
  industryId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IndustryUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Array<IndustryOrganizationsUpdateFieldInput>>;
};

export type IndustryWhere = {
  AND?: InputMaybe<Array<IndustryWhere>>;
  OR?: InputMaybe<Array<IndustryWhere>>;
  industryId?: InputMaybe<Scalars['ID']>;
  industryId_CONTAINS?: InputMaybe<Scalars['ID']>;
  industryId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  industryId_IN?: InputMaybe<Array<Scalars['ID']>>;
  industryId_NOT?: InputMaybe<Scalars['ID']>;
  industryId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  industryId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  industryId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  industryId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  industryId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  organizationsAggregate?: InputMaybe<IndustryOrganizationsAggregateInput>;
  organizationsConnection_ALL?: InputMaybe<IndustryOrganizationsConnectionWhere>;
  organizationsConnection_NONE?: InputMaybe<IndustryOrganizationsConnectionWhere>;
  organizationsConnection_SINGLE?: InputMaybe<IndustryOrganizationsConnectionWhere>;
  organizationsConnection_SOME?: InputMaybe<IndustryOrganizationsConnectionWhere>;
  /** Return Industries where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Industries where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Industries where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Industries where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
};

/** Language: TODO doc */
export type Language = {
  __typename?: 'Language';
  languageId: Scalars['ID'];
  name: Scalars['String'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<LanguageProjectProjectsAggregationSelection>;
  projectsConnection: LanguageProjectsConnection;
};


/** Language: TODO doc */
export type LanguageProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


/** Language: TODO doc */
export type LanguageProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


/** Language: TODO doc */
export type LanguageProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LanguageProjectsConnectionSort>>;
  where?: InputMaybe<LanguageProjectsConnectionWhere>;
};

export type LanguageAggregateSelection = {
  __typename?: 'LanguageAggregateSelection';
  count: Scalars['Int'];
  languageId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type LanguageConnectInput = {
  projects?: InputMaybe<Array<LanguageProjectsConnectFieldInput>>;
};

export type LanguageConnectOrCreateInput = {
  projects?: InputMaybe<Array<LanguageProjectsConnectOrCreateFieldInput>>;
};

export type LanguageConnectOrCreateWhere = {
  node: LanguageUniqueWhere;
};

export type LanguageConnectWhere = {
  node: LanguageWhere;
};

export type LanguageCreateInput = {
  name: Scalars['String'];
  projects?: InputMaybe<LanguageProjectsFieldInput>;
};

export type LanguageDeleteInput = {
  projects?: InputMaybe<Array<LanguageProjectsDeleteFieldInput>>;
};

export type LanguageDisconnectInput = {
  projects?: InputMaybe<Array<LanguageProjectsDisconnectFieldInput>>;
};

export type LanguageEdge = {
  __typename?: 'LanguageEdge';
  cursor: Scalars['String'];
  node: Language;
};

export type LanguageOnCreateInput = {
  name: Scalars['String'];
};

export type LanguageOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LanguageSort objects to sort Languages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LanguageSort>>;
};

export type LanguageProjectProjectsAggregationSelection = {
  __typename?: 'LanguageProjectProjectsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<LanguageProjectProjectsNodeAggregateSelection>;
};

export type LanguageProjectProjectsNodeAggregateSelection = {
  __typename?: 'LanguageProjectProjectsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type LanguageProjectsAggregateInput = {
  AND?: InputMaybe<Array<LanguageProjectsAggregateInput>>;
  OR?: InputMaybe<Array<LanguageProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<LanguageProjectsNodeAggregationWhereInput>;
};

export type LanguageProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type LanguageProjectsConnectOrCreateFieldInput = {
  onCreate: LanguageProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type LanguageProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type LanguageProjectsConnection = {
  __typename?: 'LanguageProjectsConnection';
  edges: Array<LanguageProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LanguageProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type LanguageProjectsConnectionWhere = {
  AND?: InputMaybe<Array<LanguageProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<LanguageProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type LanguageProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type LanguageProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<LanguageProjectsConnectionWhere>;
};

export type LanguageProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<LanguageProjectsConnectionWhere>;
};

export type LanguageProjectsFieldInput = {
  connect?: InputMaybe<Array<LanguageProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LanguageProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LanguageProjectsCreateFieldInput>>;
};

export type LanguageProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LanguageProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LanguageProjectsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  projectId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type LanguageProjectsRelationship = {
  __typename?: 'LanguageProjectsRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type LanguageProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type LanguageProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<LanguageProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LanguageProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LanguageProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<LanguageProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LanguageProjectsDisconnectFieldInput>>;
  update?: InputMaybe<LanguageProjectsUpdateConnectionInput>;
  where?: InputMaybe<LanguageProjectsConnectionWhere>;
};

export type LanguageRelationInput = {
  projects?: InputMaybe<Array<LanguageProjectsCreateFieldInput>>;
};

/** Fields to sort Languages by. The order in which sorts are applied is not guaranteed when specifying many fields in one LanguageSort object. */
export type LanguageSort = {
  languageId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type LanguageUniqueWhere = {
  languageId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LanguageUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Array<LanguageProjectsUpdateFieldInput>>;
};

export type LanguageWhere = {
  AND?: InputMaybe<Array<LanguageWhere>>;
  OR?: InputMaybe<Array<LanguageWhere>>;
  languageId?: InputMaybe<Scalars['ID']>;
  languageId_CONTAINS?: InputMaybe<Scalars['ID']>;
  languageId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  languageId_IN?: InputMaybe<Array<Scalars['ID']>>;
  languageId_NOT?: InputMaybe<Scalars['ID']>;
  languageId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  languageId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  languageId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  languageId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  languageId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  projectsAggregate?: InputMaybe<LanguageProjectsAggregateInput>;
  projectsConnection_ALL?: InputMaybe<LanguageProjectsConnectionWhere>;
  projectsConnection_NONE?: InputMaybe<LanguageProjectsConnectionWhere>;
  projectsConnection_SINGLE?: InputMaybe<LanguageProjectsConnectionWhere>;
  projectsConnection_SOME?: InputMaybe<LanguageProjectsConnectionWhere>;
  /** Return Languages where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Languages where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Languages where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Languages where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
};

export type LanguagesConnection = {
  __typename?: 'LanguagesConnection';
  edges: Array<LanguageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** License: TODO doc */
export type License = {
  __typename?: 'License';
  licenseId: Scalars['ID'];
  name: Scalars['String'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<LicenseProjectProjectsAggregationSelection>;
  projectsConnection: LicenseProjectsConnection;
};


/** License: TODO doc */
export type LicenseProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


/** License: TODO doc */
export type LicenseProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


/** License: TODO doc */
export type LicenseProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LicenseProjectsConnectionSort>>;
  where?: InputMaybe<LicenseProjectsConnectionWhere>;
};

export type LicenseAggregateSelection = {
  __typename?: 'LicenseAggregateSelection';
  count: Scalars['Int'];
  licenseId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type LicenseConnectInput = {
  projects?: InputMaybe<Array<LicenseProjectsConnectFieldInput>>;
};

export type LicenseConnectOrCreateInput = {
  projects?: InputMaybe<Array<LicenseProjectsConnectOrCreateFieldInput>>;
};

export type LicenseConnectOrCreateWhere = {
  node: LicenseUniqueWhere;
};

export type LicenseConnectWhere = {
  node: LicenseWhere;
};

export type LicenseCreateInput = {
  name: Scalars['String'];
  projects?: InputMaybe<LicenseProjectsFieldInput>;
};

export type LicenseDeleteInput = {
  projects?: InputMaybe<Array<LicenseProjectsDeleteFieldInput>>;
};

export type LicenseDisconnectInput = {
  projects?: InputMaybe<Array<LicenseProjectsDisconnectFieldInput>>;
};

export type LicenseEdge = {
  __typename?: 'LicenseEdge';
  cursor: Scalars['String'];
  node: License;
};

export type LicenseOnCreateInput = {
  name: Scalars['String'];
};

export type LicenseOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LicenseSort objects to sort Licenses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LicenseSort>>;
};

export type LicenseProjectProjectsAggregationSelection = {
  __typename?: 'LicenseProjectProjectsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<LicenseProjectProjectsNodeAggregateSelection>;
};

export type LicenseProjectProjectsNodeAggregateSelection = {
  __typename?: 'LicenseProjectProjectsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type LicenseProjectsAggregateInput = {
  AND?: InputMaybe<Array<LicenseProjectsAggregateInput>>;
  OR?: InputMaybe<Array<LicenseProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<LicenseProjectsNodeAggregationWhereInput>;
};

export type LicenseProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type LicenseProjectsConnectOrCreateFieldInput = {
  onCreate: LicenseProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type LicenseProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type LicenseProjectsConnection = {
  __typename?: 'LicenseProjectsConnection';
  edges: Array<LicenseProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LicenseProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type LicenseProjectsConnectionWhere = {
  AND?: InputMaybe<Array<LicenseProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<LicenseProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type LicenseProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type LicenseProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<LicenseProjectsConnectionWhere>;
};

export type LicenseProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<LicenseProjectsConnectionWhere>;
};

export type LicenseProjectsFieldInput = {
  connect?: InputMaybe<Array<LicenseProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LicenseProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LicenseProjectsCreateFieldInput>>;
};

export type LicenseProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LicenseProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LicenseProjectsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  projectId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type LicenseProjectsRelationship = {
  __typename?: 'LicenseProjectsRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type LicenseProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type LicenseProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<LicenseProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<LicenseProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<LicenseProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<LicenseProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LicenseProjectsDisconnectFieldInput>>;
  update?: InputMaybe<LicenseProjectsUpdateConnectionInput>;
  where?: InputMaybe<LicenseProjectsConnectionWhere>;
};

export type LicenseRelationInput = {
  projects?: InputMaybe<Array<LicenseProjectsCreateFieldInput>>;
};

/** Fields to sort Licenses by. The order in which sorts are applied is not guaranteed when specifying many fields in one LicenseSort object. */
export type LicenseSort = {
  licenseId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type LicenseUniqueWhere = {
  licenseId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LicenseUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Array<LicenseProjectsUpdateFieldInput>>;
};

export type LicenseWhere = {
  AND?: InputMaybe<Array<LicenseWhere>>;
  OR?: InputMaybe<Array<LicenseWhere>>;
  licenseId?: InputMaybe<Scalars['ID']>;
  licenseId_CONTAINS?: InputMaybe<Scalars['ID']>;
  licenseId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  licenseId_IN?: InputMaybe<Array<Scalars['ID']>>;
  licenseId_NOT?: InputMaybe<Scalars['ID']>;
  licenseId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  licenseId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  licenseId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  licenseId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  licenseId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  projectsAggregate?: InputMaybe<LicenseProjectsAggregateInput>;
  projectsConnection_ALL?: InputMaybe<LicenseProjectsConnectionWhere>;
  projectsConnection_NONE?: InputMaybe<LicenseProjectsConnectionWhere>;
  projectsConnection_SINGLE?: InputMaybe<LicenseProjectsConnectionWhere>;
  projectsConnection_SOME?: InputMaybe<LicenseProjectsConnectionWhere>;
  /** Return Licenses where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Licenses where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Licenses where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Licenses where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
};

export type LicensesConnection = {
  __typename?: 'LicensesConnection';
  edges: Array<LicenseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type Member = {
  __typename?: 'Member';
  categories: Array<Category>;
  categoriesAggregate?: Maybe<MemberCategoryCategoriesAggregationSelection>;
  categoriesConnection: MemberCategoriesConnection;
  cncfMemberships: Array<MembershipType>;
  cncfMembershipsAggregate?: Maybe<MemberMembershipTypeCncfMembershipsAggregationSelection>;
  cncfMembershipsConnection: MemberCncfMembershipsConnection;
  endUserGroups: Array<Eug>;
  endUserGroupsAggregate?: Maybe<MemberEugEndUserGroupsAggregationSelection>;
  endUserGroupsConnection: MemberEndUserGroupsConnection;
  memberId: Scalars['ID'];
  name: Scalars['String'];
  organizations: Array<Organization>;
  organizationsAggregate?: Maybe<MemberOrganizationOrganizationsAggregationSelection>;
  organizationsConnection: MemberOrganizationsConnection;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberCategoriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberCategoriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CategoryWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MemberCategoriesConnectionSort>>;
  where?: InputMaybe<MemberCategoriesConnectionWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberCncfMembershipsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MembershipTypeOptions>;
  where?: InputMaybe<MembershipTypeWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberCncfMembershipsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MembershipTypeWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberCncfMembershipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MemberCncfMembershipsConnectionSort>>;
  where?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberEndUserGroupsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<EugOptions>;
  where?: InputMaybe<EugWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberEndUserGroupsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EugWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberEndUserGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MemberEndUserGroupsConnectionSort>>;
  where?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberOrganizationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberOrganizationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/**
 * Member: CNCF Member Organization
 *
 * TODO: This needs a better relationship name: (Member)->[OWNS]->(Organization)
 */
export type MemberOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MemberOrganizationsConnectionSort>>;
  where?: InputMaybe<MemberOrganizationsConnectionWhere>;
};

export type MemberAggregateSelection = {
  __typename?: 'MemberAggregateSelection';
  count: Scalars['Int'];
  memberId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MemberCategoriesAggregateInput = {
  AND?: InputMaybe<Array<MemberCategoriesAggregateInput>>;
  OR?: InputMaybe<Array<MemberCategoriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MemberCategoriesNodeAggregationWhereInput>;
};

export type MemberCategoriesConnectFieldInput = {
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  where?: InputMaybe<CategoryConnectWhere>;
};

export type MemberCategoriesConnectOrCreateFieldInput = {
  onCreate: MemberCategoriesConnectOrCreateFieldInputOnCreate;
  where: CategoryConnectOrCreateWhere;
};

export type MemberCategoriesConnectOrCreateFieldInputOnCreate = {
  node: CategoryOnCreateInput;
};

export type MemberCategoriesConnection = {
  __typename?: 'MemberCategoriesConnection';
  edges: Array<MemberCategoriesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MemberCategoriesConnectionSort = {
  node?: InputMaybe<CategorySort>;
};

export type MemberCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<MemberCategoriesConnectionWhere>>;
  OR?: InputMaybe<Array<MemberCategoriesConnectionWhere>>;
  node?: InputMaybe<CategoryWhere>;
  node_NOT?: InputMaybe<CategoryWhere>;
};

export type MemberCategoriesCreateFieldInput = {
  node: CategoryCreateInput;
};

export type MemberCategoriesDeleteFieldInput = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<MemberCategoriesConnectionWhere>;
};

export type MemberCategoriesDisconnectFieldInput = {
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  where?: InputMaybe<MemberCategoriesConnectionWhere>;
};

export type MemberCategoriesFieldInput = {
  connect?: InputMaybe<Array<MemberCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberCategoriesCreateFieldInput>>;
};

export type MemberCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberCategoriesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MemberCategoriesNodeAggregationWhereInput>>;
  categoryId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type MemberCategoriesRelationship = {
  __typename?: 'MemberCategoriesRelationship';
  cursor: Scalars['String'];
  node: Category;
};

export type MemberCategoriesUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
};

export type MemberCategoriesUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberCategoriesCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberCategoriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberCategoriesDisconnectFieldInput>>;
  update?: InputMaybe<MemberCategoriesUpdateConnectionInput>;
  where?: InputMaybe<MemberCategoriesConnectionWhere>;
};

export type MemberCategoryCategoriesAggregationSelection = {
  __typename?: 'MemberCategoryCategoriesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MemberCategoryCategoriesNodeAggregateSelection>;
};

export type MemberCategoryCategoriesNodeAggregateSelection = {
  __typename?: 'MemberCategoryCategoriesNodeAggregateSelection';
  categoryId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MemberCncfMembershipsAggregateInput = {
  AND?: InputMaybe<Array<MemberCncfMembershipsAggregateInput>>;
  OR?: InputMaybe<Array<MemberCncfMembershipsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MemberCncfMembershipsNodeAggregationWhereInput>;
};

export type MemberCncfMembershipsConnectFieldInput = {
  connect?: InputMaybe<Array<MembershipTypeConnectInput>>;
  where?: InputMaybe<MembershipTypeConnectWhere>;
};

export type MemberCncfMembershipsConnectOrCreateFieldInput = {
  onCreate: MemberCncfMembershipsConnectOrCreateFieldInputOnCreate;
  where: MembershipTypeConnectOrCreateWhere;
};

export type MemberCncfMembershipsConnectOrCreateFieldInputOnCreate = {
  node: MembershipTypeOnCreateInput;
};

export type MemberCncfMembershipsConnection = {
  __typename?: 'MemberCncfMembershipsConnection';
  edges: Array<MemberCncfMembershipsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MemberCncfMembershipsConnectionSort = {
  node?: InputMaybe<MembershipTypeSort>;
};

export type MemberCncfMembershipsConnectionWhere = {
  AND?: InputMaybe<Array<MemberCncfMembershipsConnectionWhere>>;
  OR?: InputMaybe<Array<MemberCncfMembershipsConnectionWhere>>;
  node?: InputMaybe<MembershipTypeWhere>;
  node_NOT?: InputMaybe<MembershipTypeWhere>;
};

export type MemberCncfMembershipsCreateFieldInput = {
  node: MembershipTypeCreateInput;
};

export type MemberCncfMembershipsDeleteFieldInput = {
  delete?: InputMaybe<MembershipTypeDeleteInput>;
  where?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
};

export type MemberCncfMembershipsDisconnectFieldInput = {
  disconnect?: InputMaybe<MembershipTypeDisconnectInput>;
  where?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
};

export type MemberCncfMembershipsFieldInput = {
  connect?: InputMaybe<Array<MemberCncfMembershipsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberCncfMembershipsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberCncfMembershipsCreateFieldInput>>;
};

export type MemberCncfMembershipsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberCncfMembershipsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MemberCncfMembershipsNodeAggregationWhereInput>>;
  membershipTypeId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MemberCncfMembershipsRelationship = {
  __typename?: 'MemberCncfMembershipsRelationship';
  cursor: Scalars['String'];
  node: MembershipType;
};

export type MemberCncfMembershipsUpdateConnectionInput = {
  node?: InputMaybe<MembershipTypeUpdateInput>;
};

export type MemberCncfMembershipsUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberCncfMembershipsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberCncfMembershipsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberCncfMembershipsCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberCncfMembershipsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberCncfMembershipsDisconnectFieldInput>>;
  update?: InputMaybe<MemberCncfMembershipsUpdateConnectionInput>;
  where?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
};

export type MemberConnectInput = {
  categories?: InputMaybe<Array<MemberCategoriesConnectFieldInput>>;
  cncfMemberships?: InputMaybe<Array<MemberCncfMembershipsConnectFieldInput>>;
  endUserGroups?: InputMaybe<Array<MemberEndUserGroupsConnectFieldInput>>;
  organizations?: InputMaybe<Array<MemberOrganizationsConnectFieldInput>>;
};

export type MemberConnectOrCreateInput = {
  categories?: InputMaybe<Array<MemberCategoriesConnectOrCreateFieldInput>>;
  cncfMemberships?: InputMaybe<Array<MemberCncfMembershipsConnectOrCreateFieldInput>>;
  endUserGroups?: InputMaybe<Array<MemberEndUserGroupsConnectOrCreateFieldInput>>;
  organizations?: InputMaybe<Array<MemberOrganizationsConnectOrCreateFieldInput>>;
};

export type MemberConnectOrCreateWhere = {
  node: MemberUniqueWhere;
};

export type MemberConnectWhere = {
  node: MemberWhere;
};

export type MemberCreateInput = {
  categories?: InputMaybe<MemberCategoriesFieldInput>;
  cncfMemberships?: InputMaybe<MemberCncfMembershipsFieldInput>;
  endUserGroups?: InputMaybe<MemberEndUserGroupsFieldInput>;
  name: Scalars['String'];
  organizations?: InputMaybe<MemberOrganizationsFieldInput>;
};

export type MemberDeleteInput = {
  categories?: InputMaybe<Array<MemberCategoriesDeleteFieldInput>>;
  cncfMemberships?: InputMaybe<Array<MemberCncfMembershipsDeleteFieldInput>>;
  endUserGroups?: InputMaybe<Array<MemberEndUserGroupsDeleteFieldInput>>;
  organizations?: InputMaybe<Array<MemberOrganizationsDeleteFieldInput>>;
};

export type MemberDisconnectInput = {
  categories?: InputMaybe<Array<MemberCategoriesDisconnectFieldInput>>;
  cncfMemberships?: InputMaybe<Array<MemberCncfMembershipsDisconnectFieldInput>>;
  endUserGroups?: InputMaybe<Array<MemberEndUserGroupsDisconnectFieldInput>>;
  organizations?: InputMaybe<Array<MemberOrganizationsDisconnectFieldInput>>;
};

export type MemberEugEndUserGroupsAggregationSelection = {
  __typename?: 'MemberEUGEndUserGroupsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MemberEugEndUserGroupsNodeAggregateSelection>;
};

export type MemberEugEndUserGroupsNodeAggregateSelection = {
  __typename?: 'MemberEUGEndUserGroupsNodeAggregateSelection';
  eugId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MemberEdge = {
  __typename?: 'MemberEdge';
  cursor: Scalars['String'];
  node: Member;
};

export type MemberEndUserGroupsAggregateInput = {
  AND?: InputMaybe<Array<MemberEndUserGroupsAggregateInput>>;
  OR?: InputMaybe<Array<MemberEndUserGroupsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MemberEndUserGroupsNodeAggregationWhereInput>;
};

export type MemberEndUserGroupsConnectFieldInput = {
  connect?: InputMaybe<Array<EugConnectInput>>;
  where?: InputMaybe<EugConnectWhere>;
};

export type MemberEndUserGroupsConnectOrCreateFieldInput = {
  onCreate: MemberEndUserGroupsConnectOrCreateFieldInputOnCreate;
  where: EugConnectOrCreateWhere;
};

export type MemberEndUserGroupsConnectOrCreateFieldInputOnCreate = {
  node: EugOnCreateInput;
};

export type MemberEndUserGroupsConnection = {
  __typename?: 'MemberEndUserGroupsConnection';
  edges: Array<MemberEndUserGroupsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MemberEndUserGroupsConnectionSort = {
  node?: InputMaybe<EugSort>;
};

export type MemberEndUserGroupsConnectionWhere = {
  AND?: InputMaybe<Array<MemberEndUserGroupsConnectionWhere>>;
  OR?: InputMaybe<Array<MemberEndUserGroupsConnectionWhere>>;
  node?: InputMaybe<EugWhere>;
  node_NOT?: InputMaybe<EugWhere>;
};

export type MemberEndUserGroupsCreateFieldInput = {
  node: EugCreateInput;
};

export type MemberEndUserGroupsDeleteFieldInput = {
  delete?: InputMaybe<EugDeleteInput>;
  where?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
};

export type MemberEndUserGroupsDisconnectFieldInput = {
  disconnect?: InputMaybe<EugDisconnectInput>;
  where?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
};

export type MemberEndUserGroupsFieldInput = {
  connect?: InputMaybe<Array<MemberEndUserGroupsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberEndUserGroupsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberEndUserGroupsCreateFieldInput>>;
};

export type MemberEndUserGroupsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberEndUserGroupsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MemberEndUserGroupsNodeAggregationWhereInput>>;
  eugId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type MemberEndUserGroupsRelationship = {
  __typename?: 'MemberEndUserGroupsRelationship';
  cursor: Scalars['String'];
  node: Eug;
};

export type MemberEndUserGroupsUpdateConnectionInput = {
  node?: InputMaybe<EugUpdateInput>;
};

export type MemberEndUserGroupsUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberEndUserGroupsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberEndUserGroupsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberEndUserGroupsCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberEndUserGroupsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberEndUserGroupsDisconnectFieldInput>>;
  update?: InputMaybe<MemberEndUserGroupsUpdateConnectionInput>;
  where?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
};

export type MemberMembershipTypeCncfMembershipsAggregationSelection = {
  __typename?: 'MemberMembershipTypeCncfMembershipsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MemberMembershipTypeCncfMembershipsNodeAggregateSelection>;
};

export type MemberMembershipTypeCncfMembershipsNodeAggregateSelection = {
  __typename?: 'MemberMembershipTypeCncfMembershipsNodeAggregateSelection';
  membershipTypeId: IdAggregateSelectionNonNullable;
};

export type MemberOnCreateInput = {
  name: Scalars['String'];
};

export type MemberOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MemberSort objects to sort Members by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MemberSort>>;
};

export type MemberOrganizationOrganizationsAggregationSelection = {
  __typename?: 'MemberOrganizationOrganizationsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MemberOrganizationOrganizationsNodeAggregateSelection>;
};

export type MemberOrganizationOrganizationsNodeAggregateSelection = {
  __typename?: 'MemberOrganizationOrganizationsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type MemberOrganizationsAggregateInput = {
  AND?: InputMaybe<Array<MemberOrganizationsAggregateInput>>;
  OR?: InputMaybe<Array<MemberOrganizationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MemberOrganizationsNodeAggregationWhereInput>;
};

export type MemberOrganizationsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type MemberOrganizationsConnectOrCreateFieldInput = {
  onCreate: MemberOrganizationsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type MemberOrganizationsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type MemberOrganizationsConnection = {
  __typename?: 'MemberOrganizationsConnection';
  edges: Array<MemberOrganizationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MemberOrganizationsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type MemberOrganizationsConnectionWhere = {
  AND?: InputMaybe<Array<MemberOrganizationsConnectionWhere>>;
  OR?: InputMaybe<Array<MemberOrganizationsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type MemberOrganizationsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type MemberOrganizationsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<MemberOrganizationsConnectionWhere>;
};

export type MemberOrganizationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<MemberOrganizationsConnectionWhere>;
};

export type MemberOrganizationsFieldInput = {
  connect?: InputMaybe<Array<MemberOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberOrganizationsCreateFieldInput>>;
};

export type MemberOrganizationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemberOrganizationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MemberOrganizationsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MemberOrganizationsRelationship = {
  __typename?: 'MemberOrganizationsRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type MemberOrganizationsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type MemberOrganizationsUpdateFieldInput = {
  connect?: InputMaybe<Array<MemberOrganizationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemberOrganizationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemberOrganizationsCreateFieldInput>>;
  delete?: InputMaybe<Array<MemberOrganizationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MemberOrganizationsDisconnectFieldInput>>;
  update?: InputMaybe<MemberOrganizationsUpdateConnectionInput>;
  where?: InputMaybe<MemberOrganizationsConnectionWhere>;
};

export type MemberRelationInput = {
  categories?: InputMaybe<Array<MemberCategoriesCreateFieldInput>>;
  cncfMemberships?: InputMaybe<Array<MemberCncfMembershipsCreateFieldInput>>;
  endUserGroups?: InputMaybe<Array<MemberEndUserGroupsCreateFieldInput>>;
  organizations?: InputMaybe<Array<MemberOrganizationsCreateFieldInput>>;
};

/** Fields to sort Members by. The order in which sorts are applied is not guaranteed when specifying many fields in one MemberSort object. */
export type MemberSort = {
  memberId?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type MemberUniqueWhere = {
  memberId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MemberUpdateInput = {
  categories?: InputMaybe<Array<MemberCategoriesUpdateFieldInput>>;
  cncfMemberships?: InputMaybe<Array<MemberCncfMembershipsUpdateFieldInput>>;
  endUserGroups?: InputMaybe<Array<MemberEndUserGroupsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Array<MemberOrganizationsUpdateFieldInput>>;
};

export type MemberWhere = {
  AND?: InputMaybe<Array<MemberWhere>>;
  OR?: InputMaybe<Array<MemberWhere>>;
  categoriesAggregate?: InputMaybe<MemberCategoriesAggregateInput>;
  categoriesConnection_ALL?: InputMaybe<MemberCategoriesConnectionWhere>;
  categoriesConnection_NONE?: InputMaybe<MemberCategoriesConnectionWhere>;
  categoriesConnection_SINGLE?: InputMaybe<MemberCategoriesConnectionWhere>;
  categoriesConnection_SOME?: InputMaybe<MemberCategoriesConnectionWhere>;
  /** Return Members where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<CategoryWhere>;
  /** Return Members where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<CategoryWhere>;
  /** Return Members where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<CategoryWhere>;
  /** Return Members where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<CategoryWhere>;
  cncfMembershipsAggregate?: InputMaybe<MemberCncfMembershipsAggregateInput>;
  cncfMembershipsConnection_ALL?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
  cncfMembershipsConnection_NONE?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
  cncfMembershipsConnection_SINGLE?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
  cncfMembershipsConnection_SOME?: InputMaybe<MemberCncfMembershipsConnectionWhere>;
  /** Return Members where all of the related MembershipTypes match this filter */
  cncfMemberships_ALL?: InputMaybe<MembershipTypeWhere>;
  /** Return Members where none of the related MembershipTypes match this filter */
  cncfMemberships_NONE?: InputMaybe<MembershipTypeWhere>;
  /** Return Members where one of the related MembershipTypes match this filter */
  cncfMemberships_SINGLE?: InputMaybe<MembershipTypeWhere>;
  /** Return Members where some of the related MembershipTypes match this filter */
  cncfMemberships_SOME?: InputMaybe<MembershipTypeWhere>;
  endUserGroupsAggregate?: InputMaybe<MemberEndUserGroupsAggregateInput>;
  endUserGroupsConnection_ALL?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
  endUserGroupsConnection_NONE?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
  endUserGroupsConnection_SINGLE?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
  endUserGroupsConnection_SOME?: InputMaybe<MemberEndUserGroupsConnectionWhere>;
  /** Return Members where all of the related EUGS match this filter */
  endUserGroups_ALL?: InputMaybe<EugWhere>;
  /** Return Members where none of the related EUGS match this filter */
  endUserGroups_NONE?: InputMaybe<EugWhere>;
  /** Return Members where one of the related EUGS match this filter */
  endUserGroups_SINGLE?: InputMaybe<EugWhere>;
  /** Return Members where some of the related EUGS match this filter */
  endUserGroups_SOME?: InputMaybe<EugWhere>;
  memberId?: InputMaybe<Scalars['ID']>;
  memberId_CONTAINS?: InputMaybe<Scalars['ID']>;
  memberId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  memberId_IN?: InputMaybe<Array<Scalars['ID']>>;
  memberId_NOT?: InputMaybe<Scalars['ID']>;
  memberId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  memberId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  memberId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  memberId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  memberId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  organizationsAggregate?: InputMaybe<MemberOrganizationsAggregateInput>;
  organizationsConnection_ALL?: InputMaybe<MemberOrganizationsConnectionWhere>;
  organizationsConnection_NONE?: InputMaybe<MemberOrganizationsConnectionWhere>;
  organizationsConnection_SINGLE?: InputMaybe<MemberOrganizationsConnectionWhere>;
  organizationsConnection_SOME?: InputMaybe<MemberOrganizationsConnectionWhere>;
  /** Return Members where all of the related Organizations match this filter */
  organizations_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Members where none of the related Organizations match this filter */
  organizations_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Members where one of the related Organizations match this filter */
  organizations_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Members where some of the related Organizations match this filter */
  organizations_SOME?: InputMaybe<OrganizationWhere>;
};

export type MembersConnection = {
  __typename?: 'MembersConnection';
  edges: Array<MemberEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/**
 * MembershipType
 *
 * TODO: add date for transition to a membership type to the relationship"
 */
export type MembershipType = {
  __typename?: 'MembershipType';
  members: Array<Member>;
  membersAggregate?: Maybe<MembershipTypeMemberMembersAggregationSelection>;
  membersConnection: MembershipTypeMembersConnection;
  membershipType: MembershipTypes;
  membershipTypeId: Scalars['ID'];
};


/**
 * MembershipType
 *
 * TODO: add date for transition to a membership type to the relationship"
 */
export type MembershipTypeMembersArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


/**
 * MembershipType
 *
 * TODO: add date for transition to a membership type to the relationship"
 */
export type MembershipTypeMembersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MemberWhere>;
};


/**
 * MembershipType
 *
 * TODO: add date for transition to a membership type to the relationship"
 */
export type MembershipTypeMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MembershipTypeMembersConnectionSort>>;
  where?: InputMaybe<MembershipTypeMembersConnectionWhere>;
};

export type MembershipTypeAggregateSelection = {
  __typename?: 'MembershipTypeAggregateSelection';
  count: Scalars['Int'];
  membershipTypeId: IdAggregateSelectionNonNullable;
};

export type MembershipTypeConnectInput = {
  members?: InputMaybe<Array<MembershipTypeMembersConnectFieldInput>>;
};

export type MembershipTypeConnectOrCreateInput = {
  members?: InputMaybe<Array<MembershipTypeMembersConnectOrCreateFieldInput>>;
};

export type MembershipTypeConnectOrCreateWhere = {
  node: MembershipTypeUniqueWhere;
};

export type MembershipTypeConnectWhere = {
  node: MembershipTypeWhere;
};

export type MembershipTypeCreateInput = {
  members?: InputMaybe<MembershipTypeMembersFieldInput>;
  membershipType: MembershipTypes;
};

export type MembershipTypeDeleteInput = {
  members?: InputMaybe<Array<MembershipTypeMembersDeleteFieldInput>>;
};

export type MembershipTypeDisconnectInput = {
  members?: InputMaybe<Array<MembershipTypeMembersDisconnectFieldInput>>;
};

export type MembershipTypeEdge = {
  __typename?: 'MembershipTypeEdge';
  cursor: Scalars['String'];
  node: MembershipType;
};

export type MembershipTypeMemberMembersAggregationSelection = {
  __typename?: 'MembershipTypeMemberMembersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MembershipTypeMemberMembersNodeAggregateSelection>;
};

export type MembershipTypeMemberMembersNodeAggregateSelection = {
  __typename?: 'MembershipTypeMemberMembersNodeAggregateSelection';
  memberId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type MembershipTypeMembersAggregateInput = {
  AND?: InputMaybe<Array<MembershipTypeMembersAggregateInput>>;
  OR?: InputMaybe<Array<MembershipTypeMembersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MembershipTypeMembersNodeAggregationWhereInput>;
};

export type MembershipTypeMembersConnectFieldInput = {
  connect?: InputMaybe<Array<MemberConnectInput>>;
  where?: InputMaybe<MemberConnectWhere>;
};

export type MembershipTypeMembersConnectOrCreateFieldInput = {
  onCreate: MembershipTypeMembersConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type MembershipTypeMembersConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type MembershipTypeMembersConnection = {
  __typename?: 'MembershipTypeMembersConnection';
  edges: Array<MembershipTypeMembersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MembershipTypeMembersConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type MembershipTypeMembersConnectionWhere = {
  AND?: InputMaybe<Array<MembershipTypeMembersConnectionWhere>>;
  OR?: InputMaybe<Array<MembershipTypeMembersConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
  node_NOT?: InputMaybe<MemberWhere>;
};

export type MembershipTypeMembersCreateFieldInput = {
  node: MemberCreateInput;
};

export type MembershipTypeMembersDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<MembershipTypeMembersConnectionWhere>;
};

export type MembershipTypeMembersDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<MembershipTypeMembersConnectionWhere>;
};

export type MembershipTypeMembersFieldInput = {
  connect?: InputMaybe<Array<MembershipTypeMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MembershipTypeMembersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MembershipTypeMembersCreateFieldInput>>;
};

export type MembershipTypeMembersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MembershipTypeMembersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MembershipTypeMembersNodeAggregationWhereInput>>;
  memberId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type MembershipTypeMembersRelationship = {
  __typename?: 'MembershipTypeMembersRelationship';
  cursor: Scalars['String'];
  node: Member;
};

export type MembershipTypeMembersUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type MembershipTypeMembersUpdateFieldInput = {
  connect?: InputMaybe<Array<MembershipTypeMembersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MembershipTypeMembersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MembershipTypeMembersCreateFieldInput>>;
  delete?: InputMaybe<Array<MembershipTypeMembersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MembershipTypeMembersDisconnectFieldInput>>;
  update?: InputMaybe<MembershipTypeMembersUpdateConnectionInput>;
  where?: InputMaybe<MembershipTypeMembersConnectionWhere>;
};

export type MembershipTypeOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type MembershipTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MembershipTypeSort objects to sort MembershipTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MembershipTypeSort>>;
};

export type MembershipTypeRelationInput = {
  members?: InputMaybe<Array<MembershipTypeMembersCreateFieldInput>>;
};

/** Fields to sort MembershipTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one MembershipTypeSort object. */
export type MembershipTypeSort = {
  membershipType?: InputMaybe<SortDirection>;
  membershipTypeId?: InputMaybe<SortDirection>;
};

export type MembershipTypeUniqueWhere = {
  membershipType?: InputMaybe<MembershipTypes>;
  membershipTypeId?: InputMaybe<Scalars['ID']>;
};

export type MembershipTypeUpdateInput = {
  members?: InputMaybe<Array<MembershipTypeMembersUpdateFieldInput>>;
  membershipType?: InputMaybe<MembershipTypes>;
};

export type MembershipTypeWhere = {
  AND?: InputMaybe<Array<MembershipTypeWhere>>;
  OR?: InputMaybe<Array<MembershipTypeWhere>>;
  membersAggregate?: InputMaybe<MembershipTypeMembersAggregateInput>;
  membersConnection_ALL?: InputMaybe<MembershipTypeMembersConnectionWhere>;
  membersConnection_NONE?: InputMaybe<MembershipTypeMembersConnectionWhere>;
  membersConnection_SINGLE?: InputMaybe<MembershipTypeMembersConnectionWhere>;
  membersConnection_SOME?: InputMaybe<MembershipTypeMembersConnectionWhere>;
  /** Return MembershipTypes where all of the related Members match this filter */
  members_ALL?: InputMaybe<MemberWhere>;
  /** Return MembershipTypes where none of the related Members match this filter */
  members_NONE?: InputMaybe<MemberWhere>;
  /** Return MembershipTypes where one of the related Members match this filter */
  members_SINGLE?: InputMaybe<MemberWhere>;
  /** Return MembershipTypes where some of the related Members match this filter */
  members_SOME?: InputMaybe<MemberWhere>;
  membershipType?: InputMaybe<MembershipTypes>;
  membershipTypeId?: InputMaybe<Scalars['ID']>;
  membershipTypeId_CONTAINS?: InputMaybe<Scalars['ID']>;
  membershipTypeId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  membershipTypeId_IN?: InputMaybe<Array<Scalars['ID']>>;
  membershipTypeId_NOT?: InputMaybe<Scalars['ID']>;
  membershipTypeId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  membershipTypeId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  membershipTypeId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  membershipTypeId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  membershipTypeId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  membershipType_IN?: InputMaybe<Array<MembershipTypes>>;
  membershipType_NOT?: InputMaybe<MembershipTypes>;
  membershipType_NOT_IN?: InputMaybe<Array<MembershipTypes>>;
};

/** MembershipTypes */
export enum MembershipTypes {
  Academic = 'ACADEMIC',
  EndUserSupporter = 'END_USER_SUPPORTER',
  Gold = 'GOLD',
  Nonprofit = 'NONPROFIT',
  Platinum = 'PLATINUM',
  Silver = 'SILVER'
}

export type MembershipTypesConnection = {
  __typename?: 'MembershipTypesConnection';
  edges: Array<MembershipTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategories: CreateCategoriesMutationResponse;
  createCities: CreateCitiesMutationResponse;
  createEugs: CreateEugsMutationResponse;
  createIndustries: CreateIndustriesMutationResponse;
  createLanguages: CreateLanguagesMutationResponse;
  createLicenses: CreateLicensesMutationResponse;
  createMembers: CreateMembersMutationResponse;
  createMembershipTypes: CreateMembershipTypesMutationResponse;
  createOrganizations: CreateOrganizationsMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  createProjectPhases: CreateProjectPhasesMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createTags: CreateTagsMutationResponse;
  createTocs: CreateTocsMutationResponse;
  deleteCategories: DeleteInfo;
  deleteCities: DeleteInfo;
  deleteEugs: DeleteInfo;
  deleteIndustries: DeleteInfo;
  deleteLanguages: DeleteInfo;
  deleteLicenses: DeleteInfo;
  deleteMembers: DeleteInfo;
  deleteMembershipTypes: DeleteInfo;
  deleteOrganizations: DeleteInfo;
  deletePeople: DeleteInfo;
  deleteProjectPhases: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteTags: DeleteInfo;
  deleteTocs: DeleteInfo;
  updateCategories: UpdateCategoriesMutationResponse;
  updateCities: UpdateCitiesMutationResponse;
  updateEugs: UpdateEugsMutationResponse;
  updateIndustries: UpdateIndustriesMutationResponse;
  updateLanguages: UpdateLanguagesMutationResponse;
  updateLicenses: UpdateLicensesMutationResponse;
  updateMembers: UpdateMembersMutationResponse;
  updateMembershipTypes: UpdateMembershipTypesMutationResponse;
  updateOrganizations: UpdateOrganizationsMutationResponse;
  updatePeople: UpdatePeopleMutationResponse;
  updateProjectPhases: UpdateProjectPhasesMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateTags: UpdateTagsMutationResponse;
  updateTocs: UpdateTocsMutationResponse;
};


export type MutationCreateCategoriesArgs = {
  input: Array<CategoryCreateInput>;
};


export type MutationCreateCitiesArgs = {
  input: Array<CityCreateInput>;
};


export type MutationCreateEugsArgs = {
  input: Array<EugCreateInput>;
};


export type MutationCreateIndustriesArgs = {
  input: Array<IndustryCreateInput>;
};


export type MutationCreateLanguagesArgs = {
  input: Array<LanguageCreateInput>;
};


export type MutationCreateLicensesArgs = {
  input: Array<LicenseCreateInput>;
};


export type MutationCreateMembersArgs = {
  input: Array<MemberCreateInput>;
};


export type MutationCreateMembershipTypesArgs = {
  input: Array<MembershipTypeCreateInput>;
};


export type MutationCreateOrganizationsArgs = {
  input: Array<OrganizationCreateInput>;
};


export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};


export type MutationCreateProjectPhasesArgs = {
  input: Array<ProjectPhaseCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>;
};


export type MutationCreateTocsArgs = {
  input: Array<TocCreateInput>;
};


export type MutationDeleteCategoriesArgs = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<CategoryWhere>;
};


export type MutationDeleteCitiesArgs = {
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationDeleteEugsArgs = {
  delete?: InputMaybe<EugDeleteInput>;
  where?: InputMaybe<EugWhere>;
};


export type MutationDeleteIndustriesArgs = {
  delete?: InputMaybe<IndustryDeleteInput>;
  where?: InputMaybe<IndustryWhere>;
};


export type MutationDeleteLanguagesArgs = {
  delete?: InputMaybe<LanguageDeleteInput>;
  where?: InputMaybe<LanguageWhere>;
};


export type MutationDeleteLicensesArgs = {
  delete?: InputMaybe<LicenseDeleteInput>;
  where?: InputMaybe<LicenseWhere>;
};


export type MutationDeleteMembersArgs = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<MemberWhere>;
};


export type MutationDeleteMembershipTypesArgs = {
  delete?: InputMaybe<MembershipTypeDeleteInput>;
  where?: InputMaybe<MembershipTypeWhere>;
};


export type MutationDeleteOrganizationsArgs = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationWhere>;
};


export type MutationDeletePeopleArgs = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationDeleteProjectPhasesArgs = {
  delete?: InputMaybe<ProjectPhaseDeleteInput>;
  where?: InputMaybe<ProjectPhaseWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationDeleteTagsArgs = {
  delete?: InputMaybe<TagDeleteInput>;
  where?: InputMaybe<TagWhere>;
};


export type MutationDeleteTocsArgs = {
  delete?: InputMaybe<TocDeleteInput>;
  where?: InputMaybe<TocWhere>;
};


export type MutationUpdateCategoriesArgs = {
  connect?: InputMaybe<CategoryConnectInput>;
  connectOrCreate?: InputMaybe<CategoryConnectOrCreateInput>;
  create?: InputMaybe<CategoryRelationInput>;
  delete?: InputMaybe<CategoryDeleteInput>;
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  update?: InputMaybe<CategoryUpdateInput>;
  where?: InputMaybe<CategoryWhere>;
};


export type MutationUpdateCitiesArgs = {
  connect?: InputMaybe<CityConnectInput>;
  connectOrCreate?: InputMaybe<CityConnectOrCreateInput>;
  create?: InputMaybe<CityRelationInput>;
  delete?: InputMaybe<CityDeleteInput>;
  disconnect?: InputMaybe<CityDisconnectInput>;
  update?: InputMaybe<CityUpdateInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationUpdateEugsArgs = {
  connect?: InputMaybe<EugConnectInput>;
  connectOrCreate?: InputMaybe<EugConnectOrCreateInput>;
  create?: InputMaybe<EugRelationInput>;
  delete?: InputMaybe<EugDeleteInput>;
  disconnect?: InputMaybe<EugDisconnectInput>;
  update?: InputMaybe<EugUpdateInput>;
  where?: InputMaybe<EugWhere>;
};


export type MutationUpdateIndustriesArgs = {
  connect?: InputMaybe<IndustryConnectInput>;
  connectOrCreate?: InputMaybe<IndustryConnectOrCreateInput>;
  create?: InputMaybe<IndustryRelationInput>;
  delete?: InputMaybe<IndustryDeleteInput>;
  disconnect?: InputMaybe<IndustryDisconnectInput>;
  update?: InputMaybe<IndustryUpdateInput>;
  where?: InputMaybe<IndustryWhere>;
};


export type MutationUpdateLanguagesArgs = {
  connect?: InputMaybe<LanguageConnectInput>;
  connectOrCreate?: InputMaybe<LanguageConnectOrCreateInput>;
  create?: InputMaybe<LanguageRelationInput>;
  delete?: InputMaybe<LanguageDeleteInput>;
  disconnect?: InputMaybe<LanguageDisconnectInput>;
  update?: InputMaybe<LanguageUpdateInput>;
  where?: InputMaybe<LanguageWhere>;
};


export type MutationUpdateLicensesArgs = {
  connect?: InputMaybe<LicenseConnectInput>;
  connectOrCreate?: InputMaybe<LicenseConnectOrCreateInput>;
  create?: InputMaybe<LicenseRelationInput>;
  delete?: InputMaybe<LicenseDeleteInput>;
  disconnect?: InputMaybe<LicenseDisconnectInput>;
  update?: InputMaybe<LicenseUpdateInput>;
  where?: InputMaybe<LicenseWhere>;
};


export type MutationUpdateMembersArgs = {
  connect?: InputMaybe<MemberConnectInput>;
  connectOrCreate?: InputMaybe<MemberConnectOrCreateInput>;
  create?: InputMaybe<MemberRelationInput>;
  delete?: InputMaybe<MemberDeleteInput>;
  disconnect?: InputMaybe<MemberDisconnectInput>;
  update?: InputMaybe<MemberUpdateInput>;
  where?: InputMaybe<MemberWhere>;
};


export type MutationUpdateMembershipTypesArgs = {
  connect?: InputMaybe<MembershipTypeConnectInput>;
  connectOrCreate?: InputMaybe<MembershipTypeConnectOrCreateInput>;
  create?: InputMaybe<MembershipTypeRelationInput>;
  delete?: InputMaybe<MembershipTypeDeleteInput>;
  disconnect?: InputMaybe<MembershipTypeDisconnectInput>;
  update?: InputMaybe<MembershipTypeUpdateInput>;
  where?: InputMaybe<MembershipTypeWhere>;
};


export type MutationUpdateOrganizationsArgs = {
  connect?: InputMaybe<OrganizationConnectInput>;
  connectOrCreate?: InputMaybe<OrganizationConnectOrCreateInput>;
  create?: InputMaybe<OrganizationRelationInput>;
  delete?: InputMaybe<OrganizationDeleteInput>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  update?: InputMaybe<OrganizationUpdateInput>;
  where?: InputMaybe<OrganizationWhere>;
};


export type MutationUpdatePeopleArgs = {
  connect?: InputMaybe<PersonConnectInput>;
  connectOrCreate?: InputMaybe<PersonConnectOrCreateInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationUpdateProjectPhasesArgs = {
  connect?: InputMaybe<ProjectPhaseConnectInput>;
  connectOrCreate?: InputMaybe<ProjectPhaseConnectOrCreateInput>;
  create?: InputMaybe<ProjectPhaseRelationInput>;
  delete?: InputMaybe<ProjectPhaseDeleteInput>;
  disconnect?: InputMaybe<ProjectPhaseDisconnectInput>;
  update?: InputMaybe<ProjectPhaseUpdateInput>;
  where?: InputMaybe<ProjectPhaseWhere>;
};


export type MutationUpdateProjectsArgs = {
  connect?: InputMaybe<ProjectConnectInput>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationUpdateTagsArgs = {
  connect?: InputMaybe<TagConnectInput>;
  connectOrCreate?: InputMaybe<TagConnectOrCreateInput>;
  create?: InputMaybe<TagRelationInput>;
  delete?: InputMaybe<TagDeleteInput>;
  disconnect?: InputMaybe<TagDisconnectInput>;
  update?: InputMaybe<TagUpdateInput>;
  where?: InputMaybe<TagWhere>;
};


export type MutationUpdateTocsArgs = {
  connect?: InputMaybe<TocConnectInput>;
  connectOrCreate?: InputMaybe<TocConnectOrCreateInput>;
  create?: InputMaybe<TocRelationInput>;
  delete?: InputMaybe<TocDeleteInput>;
  disconnect?: InputMaybe<TocDisconnectInput>;
  update?: InputMaybe<TocUpdateInput>;
  where?: InputMaybe<TocWhere>;
};

/** Organization */
export type Organization = {
  __typename?: 'Organization';
  board: Array<Person>;
  boardAggregate?: Maybe<OrganizationPersonBoardAggregationSelection>;
  boardConnection: OrganizationBoardConnection;
  employees: Array<Person>;
  employeesAggregate?: Maybe<OrganizationPersonEmployeesAggregationSelection>;
  employeesConnection: OrganizationEmployeesConnection;
  headquarters: Array<City>;
  headquartersAggregate?: Maybe<OrganizationCityHeadquartersAggregationSelection>;
  headquartersConnection: OrganizationHeadquartersConnection;
  industries: Array<Industry>;
  industriesAggregate?: Maybe<OrganizationIndustryIndustriesAggregationSelection>;
  industriesConnection: OrganizationIndustriesConnection;
  name: Scalars['String'];
  organizationId: Scalars['ID'];
  ownedBy: Member;
  ownedByAggregate?: Maybe<OrganizationMemberOwnedByAggregationSelection>;
  ownedByConnection: OrganizationOwnedByConnection;
  parentOrg?: Maybe<Organization>;
  parentOrgAggregate?: Maybe<OrganizationOrganizationParentOrgAggregationSelection>;
  parentOrgConnection: OrganizationParentOrgConnection;
  subOrgs: Array<Organization>;
  subOrgsAggregate?: Maybe<OrganizationOrganizationSubOrgsAggregationSelection>;
  subOrgsConnection: OrganizationSubOrgsConnection;
};


/** Organization */
export type OrganizationBoardArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** Organization */
export type OrganizationBoardAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** Organization */
export type OrganizationBoardConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationBoardConnectionSort>>;
  where?: InputMaybe<OrganizationBoardConnectionWhere>;
};


/** Organization */
export type OrganizationEmployeesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** Organization */
export type OrganizationEmployeesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** Organization */
export type OrganizationEmployeesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationEmployeesConnectionSort>>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};


/** Organization */
export type OrganizationHeadquartersArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


/** Organization */
export type OrganizationHeadquartersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CityWhere>;
};


/** Organization */
export type OrganizationHeadquartersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationHeadquartersConnectionSort>>;
  where?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
};


/** Organization */
export type OrganizationIndustriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<IndustryOptions>;
  where?: InputMaybe<IndustryWhere>;
};


/** Organization */
export type OrganizationIndustriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<IndustryWhere>;
};


/** Organization */
export type OrganizationIndustriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationIndustriesConnectionSort>>;
  where?: InputMaybe<OrganizationIndustriesConnectionWhere>;
};


/** Organization */
export type OrganizationOwnedByArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


/** Organization */
export type OrganizationOwnedByAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MemberWhere>;
};


/** Organization */
export type OrganizationOwnedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationOwnedByConnectionSort>>;
  where?: InputMaybe<OrganizationOwnedByConnectionWhere>;
};


/** Organization */
export type OrganizationParentOrgArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Organization */
export type OrganizationParentOrgAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Organization */
export type OrganizationParentOrgConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationParentOrgConnectionSort>>;
  where?: InputMaybe<OrganizationParentOrgConnectionWhere>;
};


/** Organization */
export type OrganizationSubOrgsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Organization */
export type OrganizationSubOrgsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Organization */
export type OrganizationSubOrgsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OrganizationSubOrgsConnectionSort>>;
  where?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
};

export type OrganizationAggregateSelection = {
  __typename?: 'OrganizationAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type OrganizationBoardAggregateInput = {
  AND?: InputMaybe<Array<OrganizationBoardAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationBoardAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationBoardNodeAggregationWhereInput>;
};

export type OrganizationBoardConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  where?: InputMaybe<PersonConnectWhere>;
};

export type OrganizationBoardConnectOrCreateFieldInput = {
  onCreate: OrganizationBoardConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type OrganizationBoardConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type OrganizationBoardConnection = {
  __typename?: 'OrganizationBoardConnection';
  edges: Array<OrganizationBoardRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationBoardConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type OrganizationBoardConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationBoardConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationBoardConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type OrganizationBoardCreateFieldInput = {
  node: PersonCreateInput;
};

export type OrganizationBoardDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<OrganizationBoardConnectionWhere>;
};

export type OrganizationBoardDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<OrganizationBoardConnectionWhere>;
};

export type OrganizationBoardFieldInput = {
  connect?: InputMaybe<Array<OrganizationBoardConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationBoardConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationBoardCreateFieldInput>>;
};

export type OrganizationBoardNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationBoardNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationBoardNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OrganizationBoardRelationship = {
  __typename?: 'OrganizationBoardRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type OrganizationBoardUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type OrganizationBoardUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationBoardConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationBoardConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationBoardCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationBoardDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationBoardDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationBoardUpdateConnectionInput>;
  where?: InputMaybe<OrganizationBoardConnectionWhere>;
};

export type OrganizationCityHeadquartersAggregationSelection = {
  __typename?: 'OrganizationCityHeadquartersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationCityHeadquartersNodeAggregateSelection>;
};

export type OrganizationCityHeadquartersNodeAggregateSelection = {
  __typename?: 'OrganizationCityHeadquartersNodeAggregateSelection';
  cityId: IdAggregateSelectionNonNullable;
  country: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  state: StringAggregateSelectionNonNullable;
};

export type OrganizationConnectInput = {
  board?: InputMaybe<Array<OrganizationBoardConnectFieldInput>>;
  employees?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  headquarters?: InputMaybe<Array<OrganizationHeadquartersConnectFieldInput>>;
  industries?: InputMaybe<Array<OrganizationIndustriesConnectFieldInput>>;
  ownedBy?: InputMaybe<OrganizationOwnedByConnectFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgConnectFieldInput>;
  subOrgs?: InputMaybe<Array<OrganizationSubOrgsConnectFieldInput>>;
};

export type OrganizationConnectOrCreateInput = {
  board?: InputMaybe<Array<OrganizationBoardConnectOrCreateFieldInput>>;
  employees?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
  headquarters?: InputMaybe<Array<OrganizationHeadquartersConnectOrCreateFieldInput>>;
  industries?: InputMaybe<Array<OrganizationIndustriesConnectOrCreateFieldInput>>;
  ownedBy?: InputMaybe<OrganizationOwnedByConnectOrCreateFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgConnectOrCreateFieldInput>;
  subOrgs?: InputMaybe<Array<OrganizationSubOrgsConnectOrCreateFieldInput>>;
};

export type OrganizationConnectOrCreateWhere = {
  node: OrganizationUniqueWhere;
};

export type OrganizationConnectWhere = {
  node: OrganizationWhere;
};

export type OrganizationCreateInput = {
  board?: InputMaybe<OrganizationBoardFieldInput>;
  employees?: InputMaybe<OrganizationEmployeesFieldInput>;
  headquarters?: InputMaybe<OrganizationHeadquartersFieldInput>;
  industries?: InputMaybe<OrganizationIndustriesFieldInput>;
  name: Scalars['String'];
  ownedBy?: InputMaybe<OrganizationOwnedByFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgFieldInput>;
  subOrgs?: InputMaybe<OrganizationSubOrgsFieldInput>;
};

export type OrganizationDeleteInput = {
  board?: InputMaybe<Array<OrganizationBoardDeleteFieldInput>>;
  employees?: InputMaybe<Array<OrganizationEmployeesDeleteFieldInput>>;
  headquarters?: InputMaybe<Array<OrganizationHeadquartersDeleteFieldInput>>;
  industries?: InputMaybe<Array<OrganizationIndustriesDeleteFieldInput>>;
  ownedBy?: InputMaybe<OrganizationOwnedByDeleteFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgDeleteFieldInput>;
  subOrgs?: InputMaybe<Array<OrganizationSubOrgsDeleteFieldInput>>;
};

export type OrganizationDisconnectInput = {
  board?: InputMaybe<Array<OrganizationBoardDisconnectFieldInput>>;
  employees?: InputMaybe<Array<OrganizationEmployeesDisconnectFieldInput>>;
  headquarters?: InputMaybe<Array<OrganizationHeadquartersDisconnectFieldInput>>;
  industries?: InputMaybe<Array<OrganizationIndustriesDisconnectFieldInput>>;
  ownedBy?: InputMaybe<OrganizationOwnedByDisconnectFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgDisconnectFieldInput>;
  subOrgs?: InputMaybe<Array<OrganizationSubOrgsDisconnectFieldInput>>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String'];
  node: Organization;
};

export type OrganizationEmployeesAggregateInput = {
  AND?: InputMaybe<Array<OrganizationEmployeesAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationEmployeesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationEmployeesNodeAggregationWhereInput>;
};

export type OrganizationEmployeesConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  where?: InputMaybe<PersonConnectWhere>;
};

export type OrganizationEmployeesConnectOrCreateFieldInput = {
  onCreate: OrganizationEmployeesConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type OrganizationEmployeesConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type OrganizationEmployeesConnection = {
  __typename?: 'OrganizationEmployeesConnection';
  edges: Array<OrganizationEmployeesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationEmployeesConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type OrganizationEmployeesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationEmployeesConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationEmployeesConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type OrganizationEmployeesCreateFieldInput = {
  node: PersonCreateInput;
};

export type OrganizationEmployeesDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};

export type OrganizationEmployeesDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};

export type OrganizationEmployeesFieldInput = {
  connect?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
};

export type OrganizationEmployeesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationEmployeesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationEmployeesNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OrganizationEmployeesRelationship = {
  __typename?: 'OrganizationEmployeesRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type OrganizationEmployeesUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type OrganizationEmployeesUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationEmployeesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationEmployeesDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationEmployeesUpdateConnectionInput>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};

export type OrganizationHeadquartersAggregateInput = {
  AND?: InputMaybe<Array<OrganizationHeadquartersAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationHeadquartersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationHeadquartersNodeAggregationWhereInput>;
};

export type OrganizationHeadquartersConnectFieldInput = {
  connect?: InputMaybe<Array<CityConnectInput>>;
  where?: InputMaybe<CityConnectWhere>;
};

export type OrganizationHeadquartersConnectOrCreateFieldInput = {
  onCreate: OrganizationHeadquartersConnectOrCreateFieldInputOnCreate;
  where: CityConnectOrCreateWhere;
};

export type OrganizationHeadquartersConnectOrCreateFieldInputOnCreate = {
  node: CityOnCreateInput;
};

export type OrganizationHeadquartersConnection = {
  __typename?: 'OrganizationHeadquartersConnection';
  edges: Array<OrganizationHeadquartersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationHeadquartersConnectionSort = {
  node?: InputMaybe<CitySort>;
};

export type OrganizationHeadquartersConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationHeadquartersConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationHeadquartersConnectionWhere>>;
  node?: InputMaybe<CityWhere>;
  node_NOT?: InputMaybe<CityWhere>;
};

export type OrganizationHeadquartersCreateFieldInput = {
  node: CityCreateInput;
};

export type OrganizationHeadquartersDeleteFieldInput = {
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
};

export type OrganizationHeadquartersDisconnectFieldInput = {
  disconnect?: InputMaybe<CityDisconnectInput>;
  where?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
};

export type OrganizationHeadquartersFieldInput = {
  connect?: InputMaybe<Array<OrganizationHeadquartersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationHeadquartersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationHeadquartersCreateFieldInput>>;
};

export type OrganizationHeadquartersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationHeadquartersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationHeadquartersNodeAggregationWhereInput>>;
  cityId_EQUAL?: InputMaybe<Scalars['ID']>;
  country_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  country_EQUAL?: InputMaybe<Scalars['String']>;
  country_GT?: InputMaybe<Scalars['Int']>;
  country_GTE?: InputMaybe<Scalars['Int']>;
  country_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  country_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  country_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  country_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  country_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  country_LT?: InputMaybe<Scalars['Int']>;
  country_LTE?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  state_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  state_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  state_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  state_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  state_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  state_EQUAL?: InputMaybe<Scalars['String']>;
  state_GT?: InputMaybe<Scalars['Int']>;
  state_GTE?: InputMaybe<Scalars['Int']>;
  state_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  state_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  state_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  state_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  state_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  state_LT?: InputMaybe<Scalars['Int']>;
  state_LTE?: InputMaybe<Scalars['Int']>;
  state_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  state_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  state_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  state_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  state_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type OrganizationHeadquartersRelationship = {
  __typename?: 'OrganizationHeadquartersRelationship';
  cursor: Scalars['String'];
  node: City;
};

export type OrganizationHeadquartersUpdateConnectionInput = {
  node?: InputMaybe<CityUpdateInput>;
};

export type OrganizationHeadquartersUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationHeadquartersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationHeadquartersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationHeadquartersCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationHeadquartersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationHeadquartersDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationHeadquartersUpdateConnectionInput>;
  where?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
};

export type OrganizationIndustriesAggregateInput = {
  AND?: InputMaybe<Array<OrganizationIndustriesAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationIndustriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationIndustriesNodeAggregationWhereInput>;
};

export type OrganizationIndustriesConnectFieldInput = {
  connect?: InputMaybe<Array<IndustryConnectInput>>;
  where?: InputMaybe<IndustryConnectWhere>;
};

export type OrganizationIndustriesConnectOrCreateFieldInput = {
  onCreate: OrganizationIndustriesConnectOrCreateFieldInputOnCreate;
  where: IndustryConnectOrCreateWhere;
};

export type OrganizationIndustriesConnectOrCreateFieldInputOnCreate = {
  node: IndustryOnCreateInput;
};

export type OrganizationIndustriesConnection = {
  __typename?: 'OrganizationIndustriesConnection';
  edges: Array<OrganizationIndustriesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationIndustriesConnectionSort = {
  node?: InputMaybe<IndustrySort>;
};

export type OrganizationIndustriesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationIndustriesConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationIndustriesConnectionWhere>>;
  node?: InputMaybe<IndustryWhere>;
  node_NOT?: InputMaybe<IndustryWhere>;
};

export type OrganizationIndustriesCreateFieldInput = {
  node: IndustryCreateInput;
};

export type OrganizationIndustriesDeleteFieldInput = {
  delete?: InputMaybe<IndustryDeleteInput>;
  where?: InputMaybe<OrganizationIndustriesConnectionWhere>;
};

export type OrganizationIndustriesDisconnectFieldInput = {
  disconnect?: InputMaybe<IndustryDisconnectInput>;
  where?: InputMaybe<OrganizationIndustriesConnectionWhere>;
};

export type OrganizationIndustriesFieldInput = {
  connect?: InputMaybe<Array<OrganizationIndustriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationIndustriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationIndustriesCreateFieldInput>>;
};

export type OrganizationIndustriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationIndustriesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationIndustriesNodeAggregationWhereInput>>;
  industryId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type OrganizationIndustriesRelationship = {
  __typename?: 'OrganizationIndustriesRelationship';
  cursor: Scalars['String'];
  node: Industry;
};

export type OrganizationIndustriesUpdateConnectionInput = {
  node?: InputMaybe<IndustryUpdateInput>;
};

export type OrganizationIndustriesUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationIndustriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationIndustriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationIndustriesCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationIndustriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationIndustriesDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationIndustriesUpdateConnectionInput>;
  where?: InputMaybe<OrganizationIndustriesConnectionWhere>;
};

export type OrganizationIndustryIndustriesAggregationSelection = {
  __typename?: 'OrganizationIndustryIndustriesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationIndustryIndustriesNodeAggregateSelection>;
};

export type OrganizationIndustryIndustriesNodeAggregateSelection = {
  __typename?: 'OrganizationIndustryIndustriesNodeAggregateSelection';
  industryId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type OrganizationMemberOwnedByAggregationSelection = {
  __typename?: 'OrganizationMemberOwnedByAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationMemberOwnedByNodeAggregateSelection>;
};

export type OrganizationMemberOwnedByNodeAggregateSelection = {
  __typename?: 'OrganizationMemberOwnedByNodeAggregateSelection';
  memberId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type OrganizationOnCreateInput = {
  name: Scalars['String'];
};

export type OrganizationOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more OrganizationSort objects to sort Organizations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrganizationSort>>;
};

export type OrganizationOrganizationParentOrgAggregationSelection = {
  __typename?: 'OrganizationOrganizationParentOrgAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationOrganizationParentOrgNodeAggregateSelection>;
};

export type OrganizationOrganizationParentOrgNodeAggregateSelection = {
  __typename?: 'OrganizationOrganizationParentOrgNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type OrganizationOrganizationSubOrgsAggregationSelection = {
  __typename?: 'OrganizationOrganizationSubOrgsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationOrganizationSubOrgsNodeAggregateSelection>;
};

export type OrganizationOrganizationSubOrgsNodeAggregateSelection = {
  __typename?: 'OrganizationOrganizationSubOrgsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type OrganizationOwnedByAggregateInput = {
  AND?: InputMaybe<Array<OrganizationOwnedByAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationOwnedByAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationOwnedByNodeAggregationWhereInput>;
};

export type OrganizationOwnedByConnectFieldInput = {
  connect?: InputMaybe<MemberConnectInput>;
  where?: InputMaybe<MemberConnectWhere>;
};

export type OrganizationOwnedByConnectOrCreateFieldInput = {
  onCreate: OrganizationOwnedByConnectOrCreateFieldInputOnCreate;
  where: MemberConnectOrCreateWhere;
};

export type OrganizationOwnedByConnectOrCreateFieldInputOnCreate = {
  node: MemberOnCreateInput;
};

export type OrganizationOwnedByConnection = {
  __typename?: 'OrganizationOwnedByConnection';
  edges: Array<OrganizationOwnedByRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationOwnedByConnectionSort = {
  node?: InputMaybe<MemberSort>;
};

export type OrganizationOwnedByConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationOwnedByConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationOwnedByConnectionWhere>>;
  node?: InputMaybe<MemberWhere>;
  node_NOT?: InputMaybe<MemberWhere>;
};

export type OrganizationOwnedByCreateFieldInput = {
  node: MemberCreateInput;
};

export type OrganizationOwnedByDeleteFieldInput = {
  delete?: InputMaybe<MemberDeleteInput>;
  where?: InputMaybe<OrganizationOwnedByConnectionWhere>;
};

export type OrganizationOwnedByDisconnectFieldInput = {
  disconnect?: InputMaybe<MemberDisconnectInput>;
  where?: InputMaybe<OrganizationOwnedByConnectionWhere>;
};

export type OrganizationOwnedByFieldInput = {
  connect?: InputMaybe<OrganizationOwnedByConnectFieldInput>;
  connectOrCreate?: InputMaybe<OrganizationOwnedByConnectOrCreateFieldInput>;
  create?: InputMaybe<OrganizationOwnedByCreateFieldInput>;
};

export type OrganizationOwnedByNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationOwnedByNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationOwnedByNodeAggregationWhereInput>>;
  memberId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type OrganizationOwnedByRelationship = {
  __typename?: 'OrganizationOwnedByRelationship';
  cursor: Scalars['String'];
  node: Member;
};

export type OrganizationOwnedByUpdateConnectionInput = {
  node?: InputMaybe<MemberUpdateInput>;
};

export type OrganizationOwnedByUpdateFieldInput = {
  connect?: InputMaybe<OrganizationOwnedByConnectFieldInput>;
  connectOrCreate?: InputMaybe<OrganizationOwnedByConnectOrCreateFieldInput>;
  create?: InputMaybe<OrganizationOwnedByCreateFieldInput>;
  delete?: InputMaybe<OrganizationOwnedByDeleteFieldInput>;
  disconnect?: InputMaybe<OrganizationOwnedByDisconnectFieldInput>;
  update?: InputMaybe<OrganizationOwnedByUpdateConnectionInput>;
  where?: InputMaybe<OrganizationOwnedByConnectionWhere>;
};

export type OrganizationParentOrgAggregateInput = {
  AND?: InputMaybe<Array<OrganizationParentOrgAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationParentOrgAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationParentOrgNodeAggregationWhereInput>;
};

export type OrganizationParentOrgConnectFieldInput = {
  connect?: InputMaybe<OrganizationConnectInput>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type OrganizationParentOrgConnectOrCreateFieldInput = {
  onCreate: OrganizationParentOrgConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type OrganizationParentOrgConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type OrganizationParentOrgConnection = {
  __typename?: 'OrganizationParentOrgConnection';
  edges: Array<OrganizationParentOrgRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationParentOrgConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type OrganizationParentOrgConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationParentOrgConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationParentOrgConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type OrganizationParentOrgCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type OrganizationParentOrgDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationParentOrgConnectionWhere>;
};

export type OrganizationParentOrgDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<OrganizationParentOrgConnectionWhere>;
};

export type OrganizationParentOrgFieldInput = {
  connect?: InputMaybe<OrganizationParentOrgConnectFieldInput>;
  connectOrCreate?: InputMaybe<OrganizationParentOrgConnectOrCreateFieldInput>;
  create?: InputMaybe<OrganizationParentOrgCreateFieldInput>;
};

export type OrganizationParentOrgNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationParentOrgNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationParentOrgNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OrganizationParentOrgRelationship = {
  __typename?: 'OrganizationParentOrgRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type OrganizationParentOrgUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type OrganizationParentOrgUpdateFieldInput = {
  connect?: InputMaybe<OrganizationParentOrgConnectFieldInput>;
  connectOrCreate?: InputMaybe<OrganizationParentOrgConnectOrCreateFieldInput>;
  create?: InputMaybe<OrganizationParentOrgCreateFieldInput>;
  delete?: InputMaybe<OrganizationParentOrgDeleteFieldInput>;
  disconnect?: InputMaybe<OrganizationParentOrgDisconnectFieldInput>;
  update?: InputMaybe<OrganizationParentOrgUpdateConnectionInput>;
  where?: InputMaybe<OrganizationParentOrgConnectionWhere>;
};

export type OrganizationPersonBoardAggregationSelection = {
  __typename?: 'OrganizationPersonBoardAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationPersonBoardNodeAggregateSelection>;
};

export type OrganizationPersonBoardNodeAggregateSelection = {
  __typename?: 'OrganizationPersonBoardNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type OrganizationPersonEmployeesAggregationSelection = {
  __typename?: 'OrganizationPersonEmployeesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OrganizationPersonEmployeesNodeAggregateSelection>;
};

export type OrganizationPersonEmployeesNodeAggregateSelection = {
  __typename?: 'OrganizationPersonEmployeesNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type OrganizationRelationInput = {
  board?: InputMaybe<Array<OrganizationBoardCreateFieldInput>>;
  employees?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
  headquarters?: InputMaybe<Array<OrganizationHeadquartersCreateFieldInput>>;
  industries?: InputMaybe<Array<OrganizationIndustriesCreateFieldInput>>;
  ownedBy?: InputMaybe<OrganizationOwnedByCreateFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgCreateFieldInput>;
  subOrgs?: InputMaybe<Array<OrganizationSubOrgsCreateFieldInput>>;
};

/** Fields to sort Organizations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrganizationSort object. */
export type OrganizationSort = {
  name?: InputMaybe<SortDirection>;
  organizationId?: InputMaybe<SortDirection>;
};

export type OrganizationSubOrgsAggregateInput = {
  AND?: InputMaybe<Array<OrganizationSubOrgsAggregateInput>>;
  OR?: InputMaybe<Array<OrganizationSubOrgsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OrganizationSubOrgsNodeAggregationWhereInput>;
};

export type OrganizationSubOrgsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type OrganizationSubOrgsConnectOrCreateFieldInput = {
  onCreate: OrganizationSubOrgsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type OrganizationSubOrgsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type OrganizationSubOrgsConnection = {
  __typename?: 'OrganizationSubOrgsConnection';
  edges: Array<OrganizationSubOrgsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationSubOrgsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type OrganizationSubOrgsConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationSubOrgsConnectionWhere>>;
  OR?: InputMaybe<Array<OrganizationSubOrgsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type OrganizationSubOrgsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type OrganizationSubOrgsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
};

export type OrganizationSubOrgsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
};

export type OrganizationSubOrgsFieldInput = {
  connect?: InputMaybe<Array<OrganizationSubOrgsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationSubOrgsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationSubOrgsCreateFieldInput>>;
};

export type OrganizationSubOrgsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationSubOrgsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationSubOrgsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OrganizationSubOrgsRelationship = {
  __typename?: 'OrganizationSubOrgsRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type OrganizationSubOrgsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type OrganizationSubOrgsUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationSubOrgsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationSubOrgsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationSubOrgsCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationSubOrgsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationSubOrgsDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationSubOrgsUpdateConnectionInput>;
  where?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
};

export type OrganizationUniqueWhere = {
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
};

export type OrganizationUpdateInput = {
  board?: InputMaybe<Array<OrganizationBoardUpdateFieldInput>>;
  employees?: InputMaybe<Array<OrganizationEmployeesUpdateFieldInput>>;
  headquarters?: InputMaybe<Array<OrganizationHeadquartersUpdateFieldInput>>;
  industries?: InputMaybe<Array<OrganizationIndustriesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  ownedBy?: InputMaybe<OrganizationOwnedByUpdateFieldInput>;
  parentOrg?: InputMaybe<OrganizationParentOrgUpdateFieldInput>;
  subOrgs?: InputMaybe<Array<OrganizationSubOrgsUpdateFieldInput>>;
};

export type OrganizationWhere = {
  AND?: InputMaybe<Array<OrganizationWhere>>;
  OR?: InputMaybe<Array<OrganizationWhere>>;
  boardAggregate?: InputMaybe<OrganizationBoardAggregateInput>;
  boardConnection_ALL?: InputMaybe<OrganizationBoardConnectionWhere>;
  boardConnection_NONE?: InputMaybe<OrganizationBoardConnectionWhere>;
  boardConnection_SINGLE?: InputMaybe<OrganizationBoardConnectionWhere>;
  boardConnection_SOME?: InputMaybe<OrganizationBoardConnectionWhere>;
  /** Return Organizations where all of the related People match this filter */
  board_ALL?: InputMaybe<PersonWhere>;
  /** Return Organizations where none of the related People match this filter */
  board_NONE?: InputMaybe<PersonWhere>;
  /** Return Organizations where one of the related People match this filter */
  board_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Organizations where some of the related People match this filter */
  board_SOME?: InputMaybe<PersonWhere>;
  employeesAggregate?: InputMaybe<OrganizationEmployeesAggregateInput>;
  employeesConnection_ALL?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  employeesConnection_NONE?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  employeesConnection_SINGLE?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  employeesConnection_SOME?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where all of the related People match this filter */
  employees_ALL?: InputMaybe<PersonWhere>;
  /** Return Organizations where none of the related People match this filter */
  employees_NONE?: InputMaybe<PersonWhere>;
  /** Return Organizations where one of the related People match this filter */
  employees_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Organizations where some of the related People match this filter */
  employees_SOME?: InputMaybe<PersonWhere>;
  headquartersAggregate?: InputMaybe<OrganizationHeadquartersAggregateInput>;
  headquartersConnection_ALL?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
  headquartersConnection_NONE?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
  headquartersConnection_SINGLE?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
  headquartersConnection_SOME?: InputMaybe<OrganizationHeadquartersConnectionWhere>;
  /** Return Organizations where all of the related Cities match this filter */
  headquarters_ALL?: InputMaybe<CityWhere>;
  /** Return Organizations where none of the related Cities match this filter */
  headquarters_NONE?: InputMaybe<CityWhere>;
  /** Return Organizations where one of the related Cities match this filter */
  headquarters_SINGLE?: InputMaybe<CityWhere>;
  /** Return Organizations where some of the related Cities match this filter */
  headquarters_SOME?: InputMaybe<CityWhere>;
  industriesAggregate?: InputMaybe<OrganizationIndustriesAggregateInput>;
  industriesConnection_ALL?: InputMaybe<OrganizationIndustriesConnectionWhere>;
  industriesConnection_NONE?: InputMaybe<OrganizationIndustriesConnectionWhere>;
  industriesConnection_SINGLE?: InputMaybe<OrganizationIndustriesConnectionWhere>;
  industriesConnection_SOME?: InputMaybe<OrganizationIndustriesConnectionWhere>;
  /** Return Organizations where all of the related Industries match this filter */
  industries_ALL?: InputMaybe<IndustryWhere>;
  /** Return Organizations where none of the related Industries match this filter */
  industries_NONE?: InputMaybe<IndustryWhere>;
  /** Return Organizations where one of the related Industries match this filter */
  industries_SINGLE?: InputMaybe<IndustryWhere>;
  /** Return Organizations where some of the related Industries match this filter */
  industries_SOME?: InputMaybe<IndustryWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['ID']>;
  organizationId_CONTAINS?: InputMaybe<Scalars['ID']>;
  organizationId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  organizationId_IN?: InputMaybe<Array<Scalars['ID']>>;
  organizationId_NOT?: InputMaybe<Scalars['ID']>;
  organizationId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  organizationId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  organizationId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  organizationId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  organizationId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ownedBy?: InputMaybe<MemberWhere>;
  ownedByAggregate?: InputMaybe<OrganizationOwnedByAggregateInput>;
  ownedByConnection?: InputMaybe<OrganizationOwnedByConnectionWhere>;
  ownedByConnection_NOT?: InputMaybe<OrganizationOwnedByConnectionWhere>;
  ownedBy_NOT?: InputMaybe<MemberWhere>;
  parentOrg?: InputMaybe<OrganizationWhere>;
  parentOrgAggregate?: InputMaybe<OrganizationParentOrgAggregateInput>;
  parentOrgConnection?: InputMaybe<OrganizationParentOrgConnectionWhere>;
  parentOrgConnection_NOT?: InputMaybe<OrganizationParentOrgConnectionWhere>;
  parentOrg_NOT?: InputMaybe<OrganizationWhere>;
  subOrgsAggregate?: InputMaybe<OrganizationSubOrgsAggregateInput>;
  subOrgsConnection_ALL?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
  subOrgsConnection_NONE?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
  subOrgsConnection_SINGLE?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
  subOrgsConnection_SOME?: InputMaybe<OrganizationSubOrgsConnectionWhere>;
  /** Return Organizations where all of the related Organizations match this filter */
  subOrgs_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where none of the related Organizations match this filter */
  subOrgs_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where one of the related Organizations match this filter */
  subOrgs_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Organizations where some of the related Organizations match this filter */
  subOrgs_SOME?: InputMaybe<OrganizationWhere>;
};

export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Person: human */
export type Person = {
  __typename?: 'Person';
  boards: Array<Organization>;
  boardsAggregate?: Maybe<PersonOrganizationBoardsAggregationSelection>;
  boardsConnection: PersonBoardsConnection;
  employers: Array<Organization>;
  employersAggregate?: Maybe<PersonOrganizationEmployersAggregationSelection>;
  employersConnection: PersonEmployersConnection;
  eugRoles: Array<Eug>;
  eugRolesAggregate?: Maybe<PersonEugEugRolesAggregationSelection>;
  eugRolesConnection: PersonEugRolesConnection;
  name: Scalars['String'];
  personId: Scalars['ID'];
  projRoles: Array<Project>;
  projRolesAggregate?: Maybe<PersonProjectProjRolesAggregationSelection>;
  projRolesConnection: PersonProjRolesConnection;
  tagRoles: Array<Tag>;
  tagRolesAggregate?: Maybe<PersonTagTagRolesAggregationSelection>;
  tagRolesConnection: PersonTagRolesConnection;
  tocRoles: Array<Toc>;
  tocRolesAggregate?: Maybe<PersonTocTocRolesAggregationSelection>;
  tocRolesConnection: PersonTocRolesConnection;
};


/** Person: human */
export type PersonBoardsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Person: human */
export type PersonBoardsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Person: human */
export type PersonBoardsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonBoardsConnectionSort>>;
  where?: InputMaybe<PersonBoardsConnectionWhere>;
};


/** Person: human */
export type PersonEmployersArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Person: human */
export type PersonEmployersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OrganizationWhere>;
};


/** Person: human */
export type PersonEmployersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonEmployersConnectionSort>>;
  where?: InputMaybe<PersonEmployersConnectionWhere>;
};


/** Person: human */
export type PersonEugRolesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<EugOptions>;
  where?: InputMaybe<EugWhere>;
};


/** Person: human */
export type PersonEugRolesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<EugWhere>;
};


/** Person: human */
export type PersonEugRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonEugRolesConnectionSort>>;
  where?: InputMaybe<PersonEugRolesConnectionWhere>;
};


/** Person: human */
export type PersonProjRolesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


/** Person: human */
export type PersonProjRolesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


/** Person: human */
export type PersonProjRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonProjRolesConnectionSort>>;
  where?: InputMaybe<PersonProjRolesConnectionWhere>;
};


/** Person: human */
export type PersonTagRolesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TagOptions>;
  where?: InputMaybe<TagWhere>;
};


/** Person: human */
export type PersonTagRolesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TagWhere>;
};


/** Person: human */
export type PersonTagRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonTagRolesConnectionSort>>;
  where?: InputMaybe<PersonTagRolesConnectionWhere>;
};


/** Person: human */
export type PersonTocRolesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TocOptions>;
  where?: InputMaybe<TocWhere>;
};


/** Person: human */
export type PersonTocRolesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TocWhere>;
};


/** Person: human */
export type PersonTocRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PersonTocRolesConnectionSort>>;
  where?: InputMaybe<PersonTocRolesConnectionWhere>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type PersonBoardsAggregateInput = {
  AND?: InputMaybe<Array<PersonBoardsAggregateInput>>;
  OR?: InputMaybe<Array<PersonBoardsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonBoardsNodeAggregationWhereInput>;
};

export type PersonBoardsConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type PersonBoardsConnectOrCreateFieldInput = {
  onCreate: PersonBoardsConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type PersonBoardsConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type PersonBoardsConnection = {
  __typename?: 'PersonBoardsConnection';
  edges: Array<PersonBoardsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonBoardsConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type PersonBoardsConnectionWhere = {
  AND?: InputMaybe<Array<PersonBoardsConnectionWhere>>;
  OR?: InputMaybe<Array<PersonBoardsConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type PersonBoardsCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type PersonBoardsDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<PersonBoardsConnectionWhere>;
};

export type PersonBoardsDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<PersonBoardsConnectionWhere>;
};

export type PersonBoardsFieldInput = {
  connect?: InputMaybe<Array<PersonBoardsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonBoardsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonBoardsCreateFieldInput>>;
};

export type PersonBoardsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonBoardsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonBoardsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type PersonBoardsRelationship = {
  __typename?: 'PersonBoardsRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type PersonBoardsUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type PersonBoardsUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonBoardsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonBoardsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonBoardsCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonBoardsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonBoardsDisconnectFieldInput>>;
  update?: InputMaybe<PersonBoardsUpdateConnectionInput>;
  where?: InputMaybe<PersonBoardsConnectionWhere>;
};

export type PersonConnectInput = {
  boards?: InputMaybe<Array<PersonBoardsConnectFieldInput>>;
  employers?: InputMaybe<Array<PersonEmployersConnectFieldInput>>;
  eugRoles?: InputMaybe<Array<PersonEugRolesConnectFieldInput>>;
  projRoles?: InputMaybe<Array<PersonProjRolesConnectFieldInput>>;
  tagRoles?: InputMaybe<Array<PersonTagRolesConnectFieldInput>>;
  tocRoles?: InputMaybe<Array<PersonTocRolesConnectFieldInput>>;
};

export type PersonConnectOrCreateInput = {
  boards?: InputMaybe<Array<PersonBoardsConnectOrCreateFieldInput>>;
  employers?: InputMaybe<Array<PersonEmployersConnectOrCreateFieldInput>>;
  eugRoles?: InputMaybe<Array<PersonEugRolesConnectOrCreateFieldInput>>;
  projRoles?: InputMaybe<Array<PersonProjRolesConnectOrCreateFieldInput>>;
  tagRoles?: InputMaybe<Array<PersonTagRolesConnectOrCreateFieldInput>>;
  tocRoles?: InputMaybe<Array<PersonTocRolesConnectOrCreateFieldInput>>;
};

export type PersonConnectOrCreateWhere = {
  node: PersonUniqueWhere;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  boards?: InputMaybe<PersonBoardsFieldInput>;
  employers?: InputMaybe<PersonEmployersFieldInput>;
  eugRoles?: InputMaybe<PersonEugRolesFieldInput>;
  name: Scalars['String'];
  projRoles?: InputMaybe<PersonProjRolesFieldInput>;
  tagRoles?: InputMaybe<PersonTagRolesFieldInput>;
  tocRoles?: InputMaybe<PersonTocRolesFieldInput>;
};

export type PersonDeleteInput = {
  boards?: InputMaybe<Array<PersonBoardsDeleteFieldInput>>;
  employers?: InputMaybe<Array<PersonEmployersDeleteFieldInput>>;
  eugRoles?: InputMaybe<Array<PersonEugRolesDeleteFieldInput>>;
  projRoles?: InputMaybe<Array<PersonProjRolesDeleteFieldInput>>;
  tagRoles?: InputMaybe<Array<PersonTagRolesDeleteFieldInput>>;
  tocRoles?: InputMaybe<Array<PersonTocRolesDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  boards?: InputMaybe<Array<PersonBoardsDisconnectFieldInput>>;
  employers?: InputMaybe<Array<PersonEmployersDisconnectFieldInput>>;
  eugRoles?: InputMaybe<Array<PersonEugRolesDisconnectFieldInput>>;
  projRoles?: InputMaybe<Array<PersonProjRolesDisconnectFieldInput>>;
  tagRoles?: InputMaybe<Array<PersonTagRolesDisconnectFieldInput>>;
  tocRoles?: InputMaybe<Array<PersonTocRolesDisconnectFieldInput>>;
};

export type PersonEugEugRolesAggregationSelection = {
  __typename?: 'PersonEUGEugRolesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonEugEugRolesNodeAggregateSelection>;
};

export type PersonEugEugRolesNodeAggregateSelection = {
  __typename?: 'PersonEUGEugRolesNodeAggregateSelection';
  eugId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonEmployersAggregateInput = {
  AND?: InputMaybe<Array<PersonEmployersAggregateInput>>;
  OR?: InputMaybe<Array<PersonEmployersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonEmployersNodeAggregationWhereInput>;
};

export type PersonEmployersConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type PersonEmployersConnectOrCreateFieldInput = {
  onCreate: PersonEmployersConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type PersonEmployersConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type PersonEmployersConnection = {
  __typename?: 'PersonEmployersConnection';
  edges: Array<PersonEmployersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonEmployersConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type PersonEmployersConnectionWhere = {
  AND?: InputMaybe<Array<PersonEmployersConnectionWhere>>;
  OR?: InputMaybe<Array<PersonEmployersConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
  node_NOT?: InputMaybe<OrganizationWhere>;
};

export type PersonEmployersCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type PersonEmployersDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<PersonEmployersConnectionWhere>;
};

export type PersonEmployersDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<PersonEmployersConnectionWhere>;
};

export type PersonEmployersFieldInput = {
  connect?: InputMaybe<Array<PersonEmployersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonEmployersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonEmployersCreateFieldInput>>;
};

export type PersonEmployersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonEmployersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonEmployersNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  organizationId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type PersonEmployersRelationship = {
  __typename?: 'PersonEmployersRelationship';
  cursor: Scalars['String'];
  node: Organization;
};

export type PersonEmployersUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type PersonEmployersUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonEmployersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonEmployersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonEmployersCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonEmployersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonEmployersDisconnectFieldInput>>;
  update?: InputMaybe<PersonEmployersUpdateConnectionInput>;
  where?: InputMaybe<PersonEmployersConnectionWhere>;
};

export type PersonEugRolesAggregateInput = {
  AND?: InputMaybe<Array<PersonEugRolesAggregateInput>>;
  OR?: InputMaybe<Array<PersonEugRolesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonEugRolesNodeAggregationWhereInput>;
};

export type PersonEugRolesConnectFieldInput = {
  connect?: InputMaybe<Array<EugConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<EugConnectWhere>;
};

export type PersonEugRolesConnectOrCreateFieldInput = {
  onCreate: PersonEugRolesConnectOrCreateFieldInputOnCreate;
  where: EugConnectOrCreateWhere;
};

export type PersonEugRolesConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: EugOnCreateInput;
};

export type PersonEugRolesConnection = {
  __typename?: 'PersonEugRolesConnection';
  edges: Array<PersonEugRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonEugRolesConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<EugSort>;
};

export type PersonEugRolesConnectionWhere = {
  AND?: InputMaybe<Array<PersonEugRolesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonEugRolesConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<EugWhere>;
  node_NOT?: InputMaybe<EugWhere>;
};

export type PersonEugRolesCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: EugCreateInput;
};

export type PersonEugRolesDeleteFieldInput = {
  delete?: InputMaybe<EugDeleteInput>;
  where?: InputMaybe<PersonEugRolesConnectionWhere>;
};

export type PersonEugRolesDisconnectFieldInput = {
  disconnect?: InputMaybe<EugDisconnectInput>;
  where?: InputMaybe<PersonEugRolesConnectionWhere>;
};

export type PersonEugRolesFieldInput = {
  connect?: InputMaybe<Array<PersonEugRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonEugRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonEugRolesCreateFieldInput>>;
};

export type PersonEugRolesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonEugRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonEugRolesNodeAggregationWhereInput>>;
  eugId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type PersonEugRolesRelationship = ServedInRole & {
  __typename?: 'PersonEugRolesRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Eug;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type PersonEugRolesUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<EugUpdateInput>;
};

export type PersonEugRolesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonEugRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonEugRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonEugRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonEugRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonEugRolesDisconnectFieldInput>>;
  update?: InputMaybe<PersonEugRolesUpdateConnectionInput>;
  where?: InputMaybe<PersonEugRolesConnectionWhere>;
};

export type PersonOnCreateInput = {
  name: Scalars['String'];
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonOrganizationBoardsAggregationSelection = {
  __typename?: 'PersonOrganizationBoardsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonOrganizationBoardsNodeAggregateSelection>;
};

export type PersonOrganizationBoardsNodeAggregateSelection = {
  __typename?: 'PersonOrganizationBoardsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type PersonOrganizationEmployersAggregationSelection = {
  __typename?: 'PersonOrganizationEmployersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonOrganizationEmployersNodeAggregateSelection>;
};

export type PersonOrganizationEmployersNodeAggregateSelection = {
  __typename?: 'PersonOrganizationEmployersNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  organizationId: IdAggregateSelectionNonNullable;
};

export type PersonProjRolesAggregateInput = {
  AND?: InputMaybe<Array<PersonProjRolesAggregateInput>>;
  OR?: InputMaybe<Array<PersonProjRolesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonProjRolesNodeAggregationWhereInput>;
};

export type PersonProjRolesConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type PersonProjRolesConnectOrCreateFieldInput = {
  onCreate: PersonProjRolesConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type PersonProjRolesConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: ProjectOnCreateInput;
};

export type PersonProjRolesConnection = {
  __typename?: 'PersonProjRolesConnection';
  edges: Array<PersonProjRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonProjRolesConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<ProjectSort>;
};

export type PersonProjRolesConnectionWhere = {
  AND?: InputMaybe<Array<PersonProjRolesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonProjRolesConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type PersonProjRolesCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: ProjectCreateInput;
};

export type PersonProjRolesDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<PersonProjRolesConnectionWhere>;
};

export type PersonProjRolesDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<PersonProjRolesConnectionWhere>;
};

export type PersonProjRolesFieldInput = {
  connect?: InputMaybe<Array<PersonProjRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonProjRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonProjRolesCreateFieldInput>>;
};

export type PersonProjRolesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonProjRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonProjRolesNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  projectId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type PersonProjRolesRelationship = ServedInRole & {
  __typename?: 'PersonProjRolesRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Project;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type PersonProjRolesUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<ProjectUpdateInput>;
};

export type PersonProjRolesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonProjRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonProjRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonProjRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonProjRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonProjRolesDisconnectFieldInput>>;
  update?: InputMaybe<PersonProjRolesUpdateConnectionInput>;
  where?: InputMaybe<PersonProjRolesConnectionWhere>;
};

export type PersonProjectProjRolesAggregationSelection = {
  __typename?: 'PersonProjectProjRolesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonProjectProjRolesNodeAggregateSelection>;
};

export type PersonProjectProjRolesNodeAggregateSelection = {
  __typename?: 'PersonProjectProjRolesNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type PersonRelationInput = {
  boards?: InputMaybe<Array<PersonBoardsCreateFieldInput>>;
  employers?: InputMaybe<Array<PersonEmployersCreateFieldInput>>;
  eugRoles?: InputMaybe<Array<PersonEugRolesCreateFieldInput>>;
  projRoles?: InputMaybe<Array<PersonProjRolesCreateFieldInput>>;
  tagRoles?: InputMaybe<Array<PersonTagRolesCreateFieldInput>>;
  tocRoles?: InputMaybe<Array<PersonTocRolesCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  name?: InputMaybe<SortDirection>;
  personId?: InputMaybe<SortDirection>;
};

export type PersonTagTagRolesAggregationSelection = {
  __typename?: 'PersonTAGTagRolesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonTagTagRolesNodeAggregateSelection>;
};

export type PersonTagTagRolesNodeAggregateSelection = {
  __typename?: 'PersonTAGTagRolesNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  tagId: IdAggregateSelectionNonNullable;
};

export type PersonTocTocRolesAggregationSelection = {
  __typename?: 'PersonTOCTocRolesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PersonTocTocRolesNodeAggregateSelection>;
};

export type PersonTocTocRolesNodeAggregateSelection = {
  __typename?: 'PersonTOCTocRolesNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  tocId: IdAggregateSelectionNonNullable;
};

export type PersonTagRolesAggregateInput = {
  AND?: InputMaybe<Array<PersonTagRolesAggregateInput>>;
  OR?: InputMaybe<Array<PersonTagRolesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonTagRolesNodeAggregationWhereInput>;
};

export type PersonTagRolesConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<TagConnectWhere>;
};

export type PersonTagRolesConnectOrCreateFieldInput = {
  onCreate: PersonTagRolesConnectOrCreateFieldInputOnCreate;
  where: TagConnectOrCreateWhere;
};

export type PersonTagRolesConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: TagOnCreateInput;
};

export type PersonTagRolesConnection = {
  __typename?: 'PersonTagRolesConnection';
  edges: Array<PersonTagRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonTagRolesConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<TagSort>;
};

export type PersonTagRolesConnectionWhere = {
  AND?: InputMaybe<Array<PersonTagRolesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonTagRolesConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<TagWhere>;
  node_NOT?: InputMaybe<TagWhere>;
};

export type PersonTagRolesCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: TagCreateInput;
};

export type PersonTagRolesDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>;
  where?: InputMaybe<PersonTagRolesConnectionWhere>;
};

export type PersonTagRolesDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>;
  where?: InputMaybe<PersonTagRolesConnectionWhere>;
};

export type PersonTagRolesFieldInput = {
  connect?: InputMaybe<Array<PersonTagRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonTagRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonTagRolesCreateFieldInput>>;
};

export type PersonTagRolesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonTagRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonTagRolesNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  tagId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type PersonTagRolesRelationship = ServedInRole & {
  __typename?: 'PersonTagRolesRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Tag;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type PersonTagRolesUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<TagUpdateInput>;
};

export type PersonTagRolesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonTagRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonTagRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonTagRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonTagRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonTagRolesDisconnectFieldInput>>;
  update?: InputMaybe<PersonTagRolesUpdateConnectionInput>;
  where?: InputMaybe<PersonTagRolesConnectionWhere>;
};

export type PersonTocRolesAggregateInput = {
  AND?: InputMaybe<Array<PersonTocRolesAggregateInput>>;
  OR?: InputMaybe<Array<PersonTocRolesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PersonTocRolesNodeAggregationWhereInput>;
};

export type PersonTocRolesConnectFieldInput = {
  connect?: InputMaybe<Array<TocConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<TocConnectWhere>;
};

export type PersonTocRolesConnectOrCreateFieldInput = {
  onCreate: PersonTocRolesConnectOrCreateFieldInputOnCreate;
  where: TocConnectOrCreateWhere;
};

export type PersonTocRolesConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: TocOnCreateInput;
};

export type PersonTocRolesConnection = {
  __typename?: 'PersonTocRolesConnection';
  edges: Array<PersonTocRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonTocRolesConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<TocSort>;
};

export type PersonTocRolesConnectionWhere = {
  AND?: InputMaybe<Array<PersonTocRolesConnectionWhere>>;
  OR?: InputMaybe<Array<PersonTocRolesConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<TocWhere>;
  node_NOT?: InputMaybe<TocWhere>;
};

export type PersonTocRolesCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: TocCreateInput;
};

export type PersonTocRolesDeleteFieldInput = {
  delete?: InputMaybe<TocDeleteInput>;
  where?: InputMaybe<PersonTocRolesConnectionWhere>;
};

export type PersonTocRolesDisconnectFieldInput = {
  disconnect?: InputMaybe<TocDisconnectInput>;
  where?: InputMaybe<PersonTocRolesConnectionWhere>;
};

export type PersonTocRolesFieldInput = {
  connect?: InputMaybe<Array<PersonTocRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonTocRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonTocRolesCreateFieldInput>>;
};

export type PersonTocRolesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonTocRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PersonTocRolesNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  tocId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type PersonTocRolesRelationship = ServedInRole & {
  __typename?: 'PersonTocRolesRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Toc;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type PersonTocRolesUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<TocUpdateInput>;
};

export type PersonTocRolesUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonTocRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonTocRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonTocRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonTocRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonTocRolesDisconnectFieldInput>>;
  update?: InputMaybe<PersonTocRolesUpdateConnectionInput>;
  where?: InputMaybe<PersonTocRolesConnectionWhere>;
};

export type PersonUniqueWhere = {
  name?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['ID']>;
};

export type PersonUpdateInput = {
  boards?: InputMaybe<Array<PersonBoardsUpdateFieldInput>>;
  employers?: InputMaybe<Array<PersonEmployersUpdateFieldInput>>;
  eugRoles?: InputMaybe<Array<PersonEugRolesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  projRoles?: InputMaybe<Array<PersonProjRolesUpdateFieldInput>>;
  tagRoles?: InputMaybe<Array<PersonTagRolesUpdateFieldInput>>;
  tocRoles?: InputMaybe<Array<PersonTocRolesUpdateFieldInput>>;
};

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>;
  OR?: InputMaybe<Array<PersonWhere>>;
  boardsAggregate?: InputMaybe<PersonBoardsAggregateInput>;
  boardsConnection_ALL?: InputMaybe<PersonBoardsConnectionWhere>;
  boardsConnection_NONE?: InputMaybe<PersonBoardsConnectionWhere>;
  boardsConnection_SINGLE?: InputMaybe<PersonBoardsConnectionWhere>;
  boardsConnection_SOME?: InputMaybe<PersonBoardsConnectionWhere>;
  /** Return People where all of the related Organizations match this filter */
  boards_ALL?: InputMaybe<OrganizationWhere>;
  /** Return People where none of the related Organizations match this filter */
  boards_NONE?: InputMaybe<OrganizationWhere>;
  /** Return People where one of the related Organizations match this filter */
  boards_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return People where some of the related Organizations match this filter */
  boards_SOME?: InputMaybe<OrganizationWhere>;
  employersAggregate?: InputMaybe<PersonEmployersAggregateInput>;
  employersConnection_ALL?: InputMaybe<PersonEmployersConnectionWhere>;
  employersConnection_NONE?: InputMaybe<PersonEmployersConnectionWhere>;
  employersConnection_SINGLE?: InputMaybe<PersonEmployersConnectionWhere>;
  employersConnection_SOME?: InputMaybe<PersonEmployersConnectionWhere>;
  /** Return People where all of the related Organizations match this filter */
  employers_ALL?: InputMaybe<OrganizationWhere>;
  /** Return People where none of the related Organizations match this filter */
  employers_NONE?: InputMaybe<OrganizationWhere>;
  /** Return People where one of the related Organizations match this filter */
  employers_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return People where some of the related Organizations match this filter */
  employers_SOME?: InputMaybe<OrganizationWhere>;
  eugRolesAggregate?: InputMaybe<PersonEugRolesAggregateInput>;
  eugRolesConnection_ALL?: InputMaybe<PersonEugRolesConnectionWhere>;
  eugRolesConnection_NONE?: InputMaybe<PersonEugRolesConnectionWhere>;
  eugRolesConnection_SINGLE?: InputMaybe<PersonEugRolesConnectionWhere>;
  eugRolesConnection_SOME?: InputMaybe<PersonEugRolesConnectionWhere>;
  /** Return People where all of the related EUGS match this filter */
  eugRoles_ALL?: InputMaybe<EugWhere>;
  /** Return People where none of the related EUGS match this filter */
  eugRoles_NONE?: InputMaybe<EugWhere>;
  /** Return People where one of the related EUGS match this filter */
  eugRoles_SINGLE?: InputMaybe<EugWhere>;
  /** Return People where some of the related EUGS match this filter */
  eugRoles_SOME?: InputMaybe<EugWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['ID']>;
  personId_CONTAINS?: InputMaybe<Scalars['ID']>;
  personId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  personId_IN?: InputMaybe<Array<Scalars['ID']>>;
  personId_NOT?: InputMaybe<Scalars['ID']>;
  personId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  personId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  personId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  personId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  personId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  projRolesAggregate?: InputMaybe<PersonProjRolesAggregateInput>;
  projRolesConnection_ALL?: InputMaybe<PersonProjRolesConnectionWhere>;
  projRolesConnection_NONE?: InputMaybe<PersonProjRolesConnectionWhere>;
  projRolesConnection_SINGLE?: InputMaybe<PersonProjRolesConnectionWhere>;
  projRolesConnection_SOME?: InputMaybe<PersonProjRolesConnectionWhere>;
  /** Return People where all of the related Projects match this filter */
  projRoles_ALL?: InputMaybe<ProjectWhere>;
  /** Return People where none of the related Projects match this filter */
  projRoles_NONE?: InputMaybe<ProjectWhere>;
  /** Return People where one of the related Projects match this filter */
  projRoles_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return People where some of the related Projects match this filter */
  projRoles_SOME?: InputMaybe<ProjectWhere>;
  tagRolesAggregate?: InputMaybe<PersonTagRolesAggregateInput>;
  tagRolesConnection_ALL?: InputMaybe<PersonTagRolesConnectionWhere>;
  tagRolesConnection_NONE?: InputMaybe<PersonTagRolesConnectionWhere>;
  tagRolesConnection_SINGLE?: InputMaybe<PersonTagRolesConnectionWhere>;
  tagRolesConnection_SOME?: InputMaybe<PersonTagRolesConnectionWhere>;
  /** Return People where all of the related TAGS match this filter */
  tagRoles_ALL?: InputMaybe<TagWhere>;
  /** Return People where none of the related TAGS match this filter */
  tagRoles_NONE?: InputMaybe<TagWhere>;
  /** Return People where one of the related TAGS match this filter */
  tagRoles_SINGLE?: InputMaybe<TagWhere>;
  /** Return People where some of the related TAGS match this filter */
  tagRoles_SOME?: InputMaybe<TagWhere>;
  tocRolesAggregate?: InputMaybe<PersonTocRolesAggregateInput>;
  tocRolesConnection_ALL?: InputMaybe<PersonTocRolesConnectionWhere>;
  tocRolesConnection_NONE?: InputMaybe<PersonTocRolesConnectionWhere>;
  tocRolesConnection_SINGLE?: InputMaybe<PersonTocRolesConnectionWhere>;
  tocRolesConnection_SOME?: InputMaybe<PersonTocRolesConnectionWhere>;
  /** Return People where all of the related TOCS match this filter */
  tocRoles_ALL?: InputMaybe<TocWhere>;
  /** Return People where none of the related TOCS match this filter */
  tocRoles_NONE?: InputMaybe<TocWhere>;
  /** Return People where one of the related TOCS match this filter */
  tocRoles_SINGLE?: InputMaybe<TocWhere>;
  /** Return People where some of the related TOCS match this filter */
  tocRoles_SOME?: InputMaybe<TocWhere>;
};

/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type Project = {
  __typename?: 'Project';
  categories: Array<Category>;
  categoriesAggregate?: Maybe<ProjectCategoryCategoriesAggregationSelection>;
  categoriesConnection: ProjectCategoriesConnection;
  languages: Array<Language>;
  languagesAggregate?: Maybe<ProjectLanguageLanguagesAggregationSelection>;
  languagesConnection: ProjectLanguagesConnection;
  licenses: Array<License>;
  licensesAggregate?: Maybe<ProjectLicenseLicensesAggregationSelection>;
  licensesConnection: ProjectLicensesConnection;
  name: Scalars['String'];
  projRoles: Array<Person>;
  projRolesAggregate?: Maybe<ProjectPersonProjRolesAggregationSelection>;
  projRolesConnection: ProjectProjRolesConnection;
  projectId: Scalars['ID'];
  projectLevels: Array<ProjectPhase>;
  projectLevelsAggregate?: Maybe<ProjectProjectPhaseProjectLevelsAggregationSelection>;
  projectLevelsConnection: ProjectProjectLevelsConnection;
  tags: Array<Tag>;
  tagsAggregate?: Maybe<ProjectTagTagsAggregationSelection>;
  tagsConnection: ProjectTagsConnection;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectCategoriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectCategoriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CategoryWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectCategoriesConnectionSort>>;
  where?: InputMaybe<ProjectCategoriesConnectionWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectLanguagesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LanguageOptions>;
  where?: InputMaybe<LanguageWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectLanguagesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LanguageWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectLanguagesConnectionSort>>;
  where?: InputMaybe<ProjectLanguagesConnectionWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectLicensesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<LicenseOptions>;
  where?: InputMaybe<LicenseWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectLicensesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LicenseWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectLicensesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectLicensesConnectionSort>>;
  where?: InputMaybe<ProjectLicensesConnectionWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectProjRolesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectProjRolesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectProjRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectProjRolesConnectionSort>>;
  where?: InputMaybe<ProjectProjRolesConnectionWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectProjectLevelsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectPhaseOptions>;
  where?: InputMaybe<ProjectPhaseWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectProjectLevelsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectPhaseWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectProjectLevelsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectProjectLevelsConnectionSort>>;
  where?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TagOptions>;
  where?: InputMaybe<TagWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TagWhere>;
};


/** Project: CNCF Open Source Project (Sandbox, Incubating, Graduated, Archived) */
export type ProjectTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectTagsConnectionSort>>;
  where?: InputMaybe<ProjectTagsConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: 'ProjectAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type ProjectCategoriesAggregateInput = {
  AND?: InputMaybe<Array<ProjectCategoriesAggregateInput>>;
  OR?: InputMaybe<Array<ProjectCategoriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectCategoriesNodeAggregationWhereInput>;
};

export type ProjectCategoriesConnectFieldInput = {
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  where?: InputMaybe<CategoryConnectWhere>;
};

export type ProjectCategoriesConnectOrCreateFieldInput = {
  onCreate: ProjectCategoriesConnectOrCreateFieldInputOnCreate;
  where: CategoryConnectOrCreateWhere;
};

export type ProjectCategoriesConnectOrCreateFieldInputOnCreate = {
  node: CategoryOnCreateInput;
};

export type ProjectCategoriesConnection = {
  __typename?: 'ProjectCategoriesConnection';
  edges: Array<ProjectCategoriesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectCategoriesConnectionSort = {
  node?: InputMaybe<CategorySort>;
};

export type ProjectCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectCategoriesConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectCategoriesConnectionWhere>>;
  node?: InputMaybe<CategoryWhere>;
  node_NOT?: InputMaybe<CategoryWhere>;
};

export type ProjectCategoriesCreateFieldInput = {
  node: CategoryCreateInput;
};

export type ProjectCategoriesDeleteFieldInput = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<ProjectCategoriesConnectionWhere>;
};

export type ProjectCategoriesDisconnectFieldInput = {
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  where?: InputMaybe<ProjectCategoriesConnectionWhere>;
};

export type ProjectCategoriesFieldInput = {
  connect?: InputMaybe<Array<ProjectCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectCategoriesCreateFieldInput>>;
};

export type ProjectCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectCategoriesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectCategoriesNodeAggregationWhereInput>>;
  categoryId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ProjectCategoriesRelationship = {
  __typename?: 'ProjectCategoriesRelationship';
  cursor: Scalars['String'];
  node: Category;
};

export type ProjectCategoriesUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
};

export type ProjectCategoriesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectCategoriesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCategoriesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectCategoriesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectCategoriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectCategoriesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectCategoriesUpdateConnectionInput>;
  where?: InputMaybe<ProjectCategoriesConnectionWhere>;
};

export type ProjectCategoryCategoriesAggregationSelection = {
  __typename?: 'ProjectCategoryCategoriesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectCategoryCategoriesNodeAggregateSelection>;
};

export type ProjectCategoryCategoriesNodeAggregateSelection = {
  __typename?: 'ProjectCategoryCategoriesNodeAggregateSelection';
  categoryId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectConnectInput = {
  categories?: InputMaybe<Array<ProjectCategoriesConnectFieldInput>>;
  languages?: InputMaybe<Array<ProjectLanguagesConnectFieldInput>>;
  licenses?: InputMaybe<Array<ProjectLicensesConnectFieldInput>>;
  projRoles?: InputMaybe<Array<ProjectProjRolesConnectFieldInput>>;
  projectLevels?: InputMaybe<Array<ProjectProjectLevelsConnectFieldInput>>;
  tags?: InputMaybe<Array<ProjectTagsConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  categories?: InputMaybe<Array<ProjectCategoriesConnectOrCreateFieldInput>>;
  languages?: InputMaybe<Array<ProjectLanguagesConnectOrCreateFieldInput>>;
  licenses?: InputMaybe<Array<ProjectLicensesConnectOrCreateFieldInput>>;
  projRoles?: InputMaybe<Array<ProjectProjRolesConnectOrCreateFieldInput>>;
  projectLevels?: InputMaybe<Array<ProjectProjectLevelsConnectOrCreateFieldInput>>;
  tags?: InputMaybe<Array<ProjectTagsConnectOrCreateFieldInput>>;
};

export type ProjectConnectOrCreateWhere = {
  node: ProjectUniqueWhere;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  categories?: InputMaybe<ProjectCategoriesFieldInput>;
  languages?: InputMaybe<ProjectLanguagesFieldInput>;
  licenses?: InputMaybe<ProjectLicensesFieldInput>;
  name: Scalars['String'];
  projRoles?: InputMaybe<ProjectProjRolesFieldInput>;
  projectLevels?: InputMaybe<ProjectProjectLevelsFieldInput>;
  tags?: InputMaybe<ProjectTagsFieldInput>;
};

export type ProjectDeleteInput = {
  categories?: InputMaybe<Array<ProjectCategoriesDeleteFieldInput>>;
  languages?: InputMaybe<Array<ProjectLanguagesDeleteFieldInput>>;
  licenses?: InputMaybe<Array<ProjectLicensesDeleteFieldInput>>;
  projRoles?: InputMaybe<Array<ProjectProjRolesDeleteFieldInput>>;
  projectLevels?: InputMaybe<Array<ProjectProjectLevelsDeleteFieldInput>>;
  tags?: InputMaybe<Array<ProjectTagsDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  categories?: InputMaybe<Array<ProjectCategoriesDisconnectFieldInput>>;
  languages?: InputMaybe<Array<ProjectLanguagesDisconnectFieldInput>>;
  licenses?: InputMaybe<Array<ProjectLicensesDisconnectFieldInput>>;
  projRoles?: InputMaybe<Array<ProjectProjRolesDisconnectFieldInput>>;
  projectLevels?: InputMaybe<Array<ProjectProjectLevelsDisconnectFieldInput>>;
  tags?: InputMaybe<Array<ProjectTagsDisconnectFieldInput>>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node: Project;
};

export type ProjectLanguageLanguagesAggregationSelection = {
  __typename?: 'ProjectLanguageLanguagesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectLanguageLanguagesNodeAggregateSelection>;
};

export type ProjectLanguageLanguagesNodeAggregateSelection = {
  __typename?: 'ProjectLanguageLanguagesNodeAggregateSelection';
  languageId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectLanguagesAggregateInput = {
  AND?: InputMaybe<Array<ProjectLanguagesAggregateInput>>;
  OR?: InputMaybe<Array<ProjectLanguagesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectLanguagesNodeAggregationWhereInput>;
};

export type ProjectLanguagesConnectFieldInput = {
  connect?: InputMaybe<Array<LanguageConnectInput>>;
  where?: InputMaybe<LanguageConnectWhere>;
};

export type ProjectLanguagesConnectOrCreateFieldInput = {
  onCreate: ProjectLanguagesConnectOrCreateFieldInputOnCreate;
  where: LanguageConnectOrCreateWhere;
};

export type ProjectLanguagesConnectOrCreateFieldInputOnCreate = {
  node: LanguageOnCreateInput;
};

export type ProjectLanguagesConnection = {
  __typename?: 'ProjectLanguagesConnection';
  edges: Array<ProjectLanguagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectLanguagesConnectionSort = {
  node?: InputMaybe<LanguageSort>;
};

export type ProjectLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectLanguagesConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectLanguagesConnectionWhere>>;
  node?: InputMaybe<LanguageWhere>;
  node_NOT?: InputMaybe<LanguageWhere>;
};

export type ProjectLanguagesCreateFieldInput = {
  node: LanguageCreateInput;
};

export type ProjectLanguagesDeleteFieldInput = {
  delete?: InputMaybe<LanguageDeleteInput>;
  where?: InputMaybe<ProjectLanguagesConnectionWhere>;
};

export type ProjectLanguagesDisconnectFieldInput = {
  disconnect?: InputMaybe<LanguageDisconnectInput>;
  where?: InputMaybe<ProjectLanguagesConnectionWhere>;
};

export type ProjectLanguagesFieldInput = {
  connect?: InputMaybe<Array<ProjectLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectLanguagesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectLanguagesCreateFieldInput>>;
};

export type ProjectLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectLanguagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectLanguagesNodeAggregationWhereInput>>;
  languageId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ProjectLanguagesRelationship = {
  __typename?: 'ProjectLanguagesRelationship';
  cursor: Scalars['String'];
  node: Language;
};

export type ProjectLanguagesUpdateConnectionInput = {
  node?: InputMaybe<LanguageUpdateInput>;
};

export type ProjectLanguagesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectLanguagesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectLanguagesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectLanguagesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectLanguagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectLanguagesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectLanguagesUpdateConnectionInput>;
  where?: InputMaybe<ProjectLanguagesConnectionWhere>;
};

export type ProjectLicenseLicensesAggregationSelection = {
  __typename?: 'ProjectLicenseLicensesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectLicenseLicensesNodeAggregateSelection>;
};

export type ProjectLicenseLicensesNodeAggregateSelection = {
  __typename?: 'ProjectLicenseLicensesNodeAggregateSelection';
  licenseId: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectLicensesAggregateInput = {
  AND?: InputMaybe<Array<ProjectLicensesAggregateInput>>;
  OR?: InputMaybe<Array<ProjectLicensesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectLicensesNodeAggregationWhereInput>;
};

export type ProjectLicensesConnectFieldInput = {
  connect?: InputMaybe<Array<LicenseConnectInput>>;
  where?: InputMaybe<LicenseConnectWhere>;
};

export type ProjectLicensesConnectOrCreateFieldInput = {
  onCreate: ProjectLicensesConnectOrCreateFieldInputOnCreate;
  where: LicenseConnectOrCreateWhere;
};

export type ProjectLicensesConnectOrCreateFieldInputOnCreate = {
  node: LicenseOnCreateInput;
};

export type ProjectLicensesConnection = {
  __typename?: 'ProjectLicensesConnection';
  edges: Array<ProjectLicensesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectLicensesConnectionSort = {
  node?: InputMaybe<LicenseSort>;
};

export type ProjectLicensesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectLicensesConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectLicensesConnectionWhere>>;
  node?: InputMaybe<LicenseWhere>;
  node_NOT?: InputMaybe<LicenseWhere>;
};

export type ProjectLicensesCreateFieldInput = {
  node: LicenseCreateInput;
};

export type ProjectLicensesDeleteFieldInput = {
  delete?: InputMaybe<LicenseDeleteInput>;
  where?: InputMaybe<ProjectLicensesConnectionWhere>;
};

export type ProjectLicensesDisconnectFieldInput = {
  disconnect?: InputMaybe<LicenseDisconnectInput>;
  where?: InputMaybe<ProjectLicensesConnectionWhere>;
};

export type ProjectLicensesFieldInput = {
  connect?: InputMaybe<Array<ProjectLicensesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectLicensesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectLicensesCreateFieldInput>>;
};

export type ProjectLicensesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectLicensesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectLicensesNodeAggregationWhereInput>>;
  licenseId_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type ProjectLicensesRelationship = {
  __typename?: 'ProjectLicensesRelationship';
  cursor: Scalars['String'];
  node: License;
};

export type ProjectLicensesUpdateConnectionInput = {
  node?: InputMaybe<LicenseUpdateInput>;
};

export type ProjectLicensesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectLicensesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectLicensesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectLicensesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectLicensesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectLicensesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectLicensesUpdateConnectionInput>;
  where?: InputMaybe<ProjectLicensesConnectionWhere>;
};

export type ProjectOnCreateInput = {
  name: Scalars['String'];
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectPersonProjRolesAggregationSelection = {
  __typename?: 'ProjectPersonProjRolesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectPersonProjRolesNodeAggregateSelection>;
};

export type ProjectPersonProjRolesNodeAggregateSelection = {
  __typename?: 'ProjectPersonProjRolesNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

/** ProjectPhase: Sandbox, Incubation, Graduated, Archived */
export type ProjectPhase = {
  __typename?: 'ProjectPhase';
  projectPhase: ProjectPhases;
  projectPhaseId: Scalars['ID'];
  projects: Array<Project>;
  projectsAggregate?: Maybe<ProjectPhaseProjectProjectsAggregationSelection>;
  projectsConnection: ProjectPhaseProjectsConnection;
};


/** ProjectPhase: Sandbox, Incubation, Graduated, Archived */
export type ProjectPhaseProjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


/** ProjectPhase: Sandbox, Incubation, Graduated, Archived */
export type ProjectPhaseProjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


/** ProjectPhase: Sandbox, Incubation, Graduated, Archived */
export type ProjectPhaseProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ProjectPhaseProjectsConnectionSort>>;
  where?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
};

export type ProjectPhaseAggregateSelection = {
  __typename?: 'ProjectPhaseAggregateSelection';
  count: Scalars['Int'];
  projectPhaseId: IdAggregateSelectionNonNullable;
};

export type ProjectPhaseConnectInput = {
  projects?: InputMaybe<Array<ProjectPhaseProjectsConnectFieldInput>>;
};

export type ProjectPhaseConnectOrCreateInput = {
  projects?: InputMaybe<Array<ProjectPhaseProjectsConnectOrCreateFieldInput>>;
};

export type ProjectPhaseConnectOrCreateWhere = {
  node: ProjectPhaseUniqueWhere;
};

export type ProjectPhaseConnectWhere = {
  node: ProjectPhaseWhere;
};

export type ProjectPhaseCreateInput = {
  projectPhase: ProjectPhases;
  projects?: InputMaybe<ProjectPhaseProjectsFieldInput>;
};

export type ProjectPhaseDeleteInput = {
  projects?: InputMaybe<Array<ProjectPhaseProjectsDeleteFieldInput>>;
};

export type ProjectPhaseDisconnectInput = {
  projects?: InputMaybe<Array<ProjectPhaseProjectsDisconnectFieldInput>>;
};

export type ProjectPhaseEdge = {
  __typename?: 'ProjectPhaseEdge';
  cursor: Scalars['String'];
  node: ProjectPhase;
};

export type ProjectPhaseOnCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectPhaseOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ProjectPhaseSort objects to sort ProjectPhases by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectPhaseSort>>;
};

export type ProjectPhaseProjectProjectsAggregationSelection = {
  __typename?: 'ProjectPhaseProjectProjectsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectPhaseProjectProjectsNodeAggregateSelection>;
};

export type ProjectPhaseProjectProjectsNodeAggregateSelection = {
  __typename?: 'ProjectPhaseProjectProjectsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type ProjectPhaseProjectsAggregateInput = {
  AND?: InputMaybe<Array<ProjectPhaseProjectsAggregateInput>>;
  OR?: InputMaybe<Array<ProjectPhaseProjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectPhaseProjectsNodeAggregationWhereInput>;
};

export type ProjectPhaseProjectsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type ProjectPhaseProjectsConnectOrCreateFieldInput = {
  onCreate: ProjectPhaseProjectsConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type ProjectPhaseProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type ProjectPhaseProjectsConnection = {
  __typename?: 'ProjectPhaseProjectsConnection';
  edges: Array<ProjectPhaseProjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectPhaseProjectsConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type ProjectPhaseProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectPhaseProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectPhaseProjectsConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type ProjectPhaseProjectsCreateFieldInput = {
  node: ProjectCreateInput;
};

export type ProjectPhaseProjectsDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
};

export type ProjectPhaseProjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
};

export type ProjectPhaseProjectsFieldInput = {
  connect?: InputMaybe<Array<ProjectPhaseProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectPhaseProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectPhaseProjectsCreateFieldInput>>;
};

export type ProjectPhaseProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectPhaseProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectPhaseProjectsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  projectId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type ProjectPhaseProjectsRelationship = {
  __typename?: 'ProjectPhaseProjectsRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type ProjectPhaseProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ProjectPhaseProjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectPhaseProjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectPhaseProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectPhaseProjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectPhaseProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectPhaseProjectsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectPhaseProjectsUpdateConnectionInput>;
  where?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
};

export type ProjectPhaseRelationInput = {
  projects?: InputMaybe<Array<ProjectPhaseProjectsCreateFieldInput>>;
};

/** Fields to sort ProjectPhases by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectPhaseSort object. */
export type ProjectPhaseSort = {
  projectPhase?: InputMaybe<SortDirection>;
  projectPhaseId?: InputMaybe<SortDirection>;
};

export type ProjectPhaseUniqueWhere = {
  projectPhase?: InputMaybe<ProjectPhases>;
  projectPhaseId?: InputMaybe<Scalars['ID']>;
};

export type ProjectPhaseUpdateInput = {
  projectPhase?: InputMaybe<ProjectPhases>;
  projects?: InputMaybe<Array<ProjectPhaseProjectsUpdateFieldInput>>;
};

export type ProjectPhaseWhere = {
  AND?: InputMaybe<Array<ProjectPhaseWhere>>;
  OR?: InputMaybe<Array<ProjectPhaseWhere>>;
  projectPhase?: InputMaybe<ProjectPhases>;
  projectPhaseId?: InputMaybe<Scalars['ID']>;
  projectPhaseId_CONTAINS?: InputMaybe<Scalars['ID']>;
  projectPhaseId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  projectPhaseId_IN?: InputMaybe<Array<Scalars['ID']>>;
  projectPhaseId_NOT?: InputMaybe<Scalars['ID']>;
  projectPhaseId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  projectPhaseId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  projectPhaseId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  projectPhaseId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  projectPhaseId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  projectPhase_IN?: InputMaybe<Array<ProjectPhases>>;
  projectPhase_NOT?: InputMaybe<ProjectPhases>;
  projectPhase_NOT_IN?: InputMaybe<Array<ProjectPhases>>;
  projectsAggregate?: InputMaybe<ProjectPhaseProjectsAggregateInput>;
  projectsConnection_ALL?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
  projectsConnection_NONE?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
  projectsConnection_SINGLE?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
  projectsConnection_SOME?: InputMaybe<ProjectPhaseProjectsConnectionWhere>;
  /** Return ProjectPhases where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return ProjectPhases where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return ProjectPhases where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return ProjectPhases where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
};

/** ProjectPhases */
export enum ProjectPhases {
  Archived = 'ARCHIVED',
  Graduated = 'GRADUATED',
  Incubating = 'INCUBATING',
  Sandbox = 'SANDBOX'
}

export type ProjectPhasesConnection = {
  __typename?: 'ProjectPhasesConnection';
  edges: Array<ProjectPhaseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectProjRolesAggregateInput = {
  AND?: InputMaybe<Array<ProjectProjRolesAggregateInput>>;
  OR?: InputMaybe<Array<ProjectProjRolesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectProjRolesNodeAggregationWhereInput>;
};

export type ProjectProjRolesConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<PersonConnectWhere>;
};

export type ProjectProjRolesConnectOrCreateFieldInput = {
  onCreate: ProjectProjRolesConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type ProjectProjRolesConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: PersonOnCreateInput;
};

export type ProjectProjRolesConnection = {
  __typename?: 'ProjectProjRolesConnection';
  edges: Array<ProjectProjRolesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectProjRolesConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<PersonSort>;
};

export type ProjectProjRolesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectProjRolesConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectProjRolesConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type ProjectProjRolesCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: PersonCreateInput;
};

export type ProjectProjRolesDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<ProjectProjRolesConnectionWhere>;
};

export type ProjectProjRolesDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<ProjectProjRolesConnectionWhere>;
};

export type ProjectProjRolesFieldInput = {
  connect?: InputMaybe<Array<ProjectProjRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectProjRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectProjRolesCreateFieldInput>>;
};

export type ProjectProjRolesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectProjRolesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectProjRolesNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type ProjectProjRolesRelationship = ServedInRole & {
  __typename?: 'ProjectProjRolesRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Person;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type ProjectProjRolesUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<PersonUpdateInput>;
};

export type ProjectProjRolesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectProjRolesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectProjRolesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectProjRolesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectProjRolesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectProjRolesDisconnectFieldInput>>;
  update?: InputMaybe<ProjectProjRolesUpdateConnectionInput>;
  where?: InputMaybe<ProjectProjRolesConnectionWhere>;
};

export type ProjectProjectLevelsAggregateInput = {
  AND?: InputMaybe<Array<ProjectProjectLevelsAggregateInput>>;
  OR?: InputMaybe<Array<ProjectProjectLevelsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectProjectLevelsNodeAggregationWhereInput>;
};

export type ProjectProjectLevelsConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectPhaseConnectInput>>;
  where?: InputMaybe<ProjectPhaseConnectWhere>;
};

export type ProjectProjectLevelsConnectOrCreateFieldInput = {
  onCreate: ProjectProjectLevelsConnectOrCreateFieldInputOnCreate;
  where: ProjectPhaseConnectOrCreateWhere;
};

export type ProjectProjectLevelsConnectOrCreateFieldInputOnCreate = {
  node: ProjectPhaseOnCreateInput;
};

export type ProjectProjectLevelsConnection = {
  __typename?: 'ProjectProjectLevelsConnection';
  edges: Array<ProjectProjectLevelsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectProjectLevelsConnectionSort = {
  node?: InputMaybe<ProjectPhaseSort>;
};

export type ProjectProjectLevelsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectProjectLevelsConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectProjectLevelsConnectionWhere>>;
  node?: InputMaybe<ProjectPhaseWhere>;
  node_NOT?: InputMaybe<ProjectPhaseWhere>;
};

export type ProjectProjectLevelsCreateFieldInput = {
  node: ProjectPhaseCreateInput;
};

export type ProjectProjectLevelsDeleteFieldInput = {
  delete?: InputMaybe<ProjectPhaseDeleteInput>;
  where?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
};

export type ProjectProjectLevelsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectPhaseDisconnectInput>;
  where?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
};

export type ProjectProjectLevelsFieldInput = {
  connect?: InputMaybe<Array<ProjectProjectLevelsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectProjectLevelsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectProjectLevelsCreateFieldInput>>;
};

export type ProjectProjectLevelsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectProjectLevelsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectProjectLevelsNodeAggregationWhereInput>>;
  projectPhaseId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type ProjectProjectLevelsRelationship = {
  __typename?: 'ProjectProjectLevelsRelationship';
  cursor: Scalars['String'];
  node: ProjectPhase;
};

export type ProjectProjectLevelsUpdateConnectionInput = {
  node?: InputMaybe<ProjectPhaseUpdateInput>;
};

export type ProjectProjectLevelsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectProjectLevelsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectProjectLevelsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectProjectLevelsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectProjectLevelsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectProjectLevelsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectProjectLevelsUpdateConnectionInput>;
  where?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
};

export type ProjectProjectPhaseProjectLevelsAggregationSelection = {
  __typename?: 'ProjectProjectPhaseProjectLevelsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectProjectPhaseProjectLevelsNodeAggregateSelection>;
};

export type ProjectProjectPhaseProjectLevelsNodeAggregateSelection = {
  __typename?: 'ProjectProjectPhaseProjectLevelsNodeAggregateSelection';
  projectPhaseId: IdAggregateSelectionNonNullable;
};

export type ProjectRelationInput = {
  categories?: InputMaybe<Array<ProjectCategoriesCreateFieldInput>>;
  languages?: InputMaybe<Array<ProjectLanguagesCreateFieldInput>>;
  licenses?: InputMaybe<Array<ProjectLicensesCreateFieldInput>>;
  projRoles?: InputMaybe<Array<ProjectProjRolesCreateFieldInput>>;
  projectLevels?: InputMaybe<Array<ProjectProjectLevelsCreateFieldInput>>;
  tags?: InputMaybe<Array<ProjectTagsCreateFieldInput>>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  name?: InputMaybe<SortDirection>;
  projectId?: InputMaybe<SortDirection>;
};

export type ProjectTagTagsAggregationSelection = {
  __typename?: 'ProjectTAGTagsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<ProjectTagTagsNodeAggregateSelection>;
};

export type ProjectTagTagsNodeAggregateSelection = {
  __typename?: 'ProjectTAGTagsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  tagId: IdAggregateSelectionNonNullable;
};

export type ProjectTagsAggregateInput = {
  AND?: InputMaybe<Array<ProjectTagsAggregateInput>>;
  OR?: InputMaybe<Array<ProjectTagsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<ProjectTagsNodeAggregationWhereInput>;
};

export type ProjectTagsConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>;
  where?: InputMaybe<TagConnectWhere>;
};

export type ProjectTagsConnectOrCreateFieldInput = {
  onCreate: ProjectTagsConnectOrCreateFieldInputOnCreate;
  where: TagConnectOrCreateWhere;
};

export type ProjectTagsConnectOrCreateFieldInputOnCreate = {
  node: TagOnCreateInput;
};

export type ProjectTagsConnection = {
  __typename?: 'ProjectTagsConnection';
  edges: Array<ProjectTagsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProjectTagsConnectionSort = {
  node?: InputMaybe<TagSort>;
};

export type ProjectTagsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectTagsConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectTagsConnectionWhere>>;
  node?: InputMaybe<TagWhere>;
  node_NOT?: InputMaybe<TagWhere>;
};

export type ProjectTagsCreateFieldInput = {
  node: TagCreateInput;
};

export type ProjectTagsDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>;
  where?: InputMaybe<ProjectTagsConnectionWhere>;
};

export type ProjectTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>;
  where?: InputMaybe<ProjectTagsConnectionWhere>;
};

export type ProjectTagsFieldInput = {
  connect?: InputMaybe<Array<ProjectTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectTagsCreateFieldInput>>;
};

export type ProjectTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectTagsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectTagsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  tagId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type ProjectTagsRelationship = {
  __typename?: 'ProjectTagsRelationship';
  cursor: Scalars['String'];
  node: Tag;
};

export type ProjectTagsUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>;
};

export type ProjectTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectTagsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectTagsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectTagsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectTagsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectTagsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectTagsUpdateConnectionInput>;
  where?: InputMaybe<ProjectTagsConnectionWhere>;
};

export type ProjectUniqueWhere = {
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['ID']>;
};

export type ProjectUpdateInput = {
  categories?: InputMaybe<Array<ProjectCategoriesUpdateFieldInput>>;
  languages?: InputMaybe<Array<ProjectLanguagesUpdateFieldInput>>;
  licenses?: InputMaybe<Array<ProjectLicensesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  projRoles?: InputMaybe<Array<ProjectProjRolesUpdateFieldInput>>;
  projectLevels?: InputMaybe<Array<ProjectProjectLevelsUpdateFieldInput>>;
  tags?: InputMaybe<Array<ProjectTagsUpdateFieldInput>>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  categoriesAggregate?: InputMaybe<ProjectCategoriesAggregateInput>;
  categoriesConnection_ALL?: InputMaybe<ProjectCategoriesConnectionWhere>;
  categoriesConnection_NONE?: InputMaybe<ProjectCategoriesConnectionWhere>;
  categoriesConnection_SINGLE?: InputMaybe<ProjectCategoriesConnectionWhere>;
  categoriesConnection_SOME?: InputMaybe<ProjectCategoriesConnectionWhere>;
  /** Return Projects where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<CategoryWhere>;
  /** Return Projects where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<CategoryWhere>;
  /** Return Projects where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<CategoryWhere>;
  /** Return Projects where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<CategoryWhere>;
  languagesAggregate?: InputMaybe<ProjectLanguagesAggregateInput>;
  languagesConnection_ALL?: InputMaybe<ProjectLanguagesConnectionWhere>;
  languagesConnection_NONE?: InputMaybe<ProjectLanguagesConnectionWhere>;
  languagesConnection_SINGLE?: InputMaybe<ProjectLanguagesConnectionWhere>;
  languagesConnection_SOME?: InputMaybe<ProjectLanguagesConnectionWhere>;
  /** Return Projects where all of the related Languages match this filter */
  languages_ALL?: InputMaybe<LanguageWhere>;
  /** Return Projects where none of the related Languages match this filter */
  languages_NONE?: InputMaybe<LanguageWhere>;
  /** Return Projects where one of the related Languages match this filter */
  languages_SINGLE?: InputMaybe<LanguageWhere>;
  /** Return Projects where some of the related Languages match this filter */
  languages_SOME?: InputMaybe<LanguageWhere>;
  licensesAggregate?: InputMaybe<ProjectLicensesAggregateInput>;
  licensesConnection_ALL?: InputMaybe<ProjectLicensesConnectionWhere>;
  licensesConnection_NONE?: InputMaybe<ProjectLicensesConnectionWhere>;
  licensesConnection_SINGLE?: InputMaybe<ProjectLicensesConnectionWhere>;
  licensesConnection_SOME?: InputMaybe<ProjectLicensesConnectionWhere>;
  /** Return Projects where all of the related Licenses match this filter */
  licenses_ALL?: InputMaybe<LicenseWhere>;
  /** Return Projects where none of the related Licenses match this filter */
  licenses_NONE?: InputMaybe<LicenseWhere>;
  /** Return Projects where one of the related Licenses match this filter */
  licenses_SINGLE?: InputMaybe<LicenseWhere>;
  /** Return Projects where some of the related Licenses match this filter */
  licenses_SOME?: InputMaybe<LicenseWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  projRolesAggregate?: InputMaybe<ProjectProjRolesAggregateInput>;
  projRolesConnection_ALL?: InputMaybe<ProjectProjRolesConnectionWhere>;
  projRolesConnection_NONE?: InputMaybe<ProjectProjRolesConnectionWhere>;
  projRolesConnection_SINGLE?: InputMaybe<ProjectProjRolesConnectionWhere>;
  projRolesConnection_SOME?: InputMaybe<ProjectProjRolesConnectionWhere>;
  /** Return Projects where all of the related People match this filter */
  projRoles_ALL?: InputMaybe<PersonWhere>;
  /** Return Projects where none of the related People match this filter */
  projRoles_NONE?: InputMaybe<PersonWhere>;
  /** Return Projects where one of the related People match this filter */
  projRoles_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Projects where some of the related People match this filter */
  projRoles_SOME?: InputMaybe<PersonWhere>;
  projectId?: InputMaybe<Scalars['ID']>;
  projectId_CONTAINS?: InputMaybe<Scalars['ID']>;
  projectId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  projectId_IN?: InputMaybe<Array<Scalars['ID']>>;
  projectId_NOT?: InputMaybe<Scalars['ID']>;
  projectId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  projectId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  projectId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  projectId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  projectId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  projectLevelsAggregate?: InputMaybe<ProjectProjectLevelsAggregateInput>;
  projectLevelsConnection_ALL?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
  projectLevelsConnection_NONE?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
  projectLevelsConnection_SINGLE?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
  projectLevelsConnection_SOME?: InputMaybe<ProjectProjectLevelsConnectionWhere>;
  /** Return Projects where all of the related ProjectPhases match this filter */
  projectLevels_ALL?: InputMaybe<ProjectPhaseWhere>;
  /** Return Projects where none of the related ProjectPhases match this filter */
  projectLevels_NONE?: InputMaybe<ProjectPhaseWhere>;
  /** Return Projects where one of the related ProjectPhases match this filter */
  projectLevels_SINGLE?: InputMaybe<ProjectPhaseWhere>;
  /** Return Projects where some of the related ProjectPhases match this filter */
  projectLevels_SOME?: InputMaybe<ProjectPhaseWhere>;
  tagsAggregate?: InputMaybe<ProjectTagsAggregateInput>;
  tagsConnection_ALL?: InputMaybe<ProjectTagsConnectionWhere>;
  tagsConnection_NONE?: InputMaybe<ProjectTagsConnectionWhere>;
  tagsConnection_SINGLE?: InputMaybe<ProjectTagsConnectionWhere>;
  tagsConnection_SOME?: InputMaybe<ProjectTagsConnectionWhere>;
  /** Return Projects where all of the related TAGS match this filter */
  tags_ALL?: InputMaybe<TagWhere>;
  /** Return Projects where none of the related TAGS match this filter */
  tags_NONE?: InputMaybe<TagWhere>;
  /** Return Projects where one of the related TAGS match this filter */
  tags_SINGLE?: InputMaybe<TagWhere>;
  /** Return Projects where some of the related TAGS match this filter */
  tags_SOME?: InputMaybe<TagWhere>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  categoriesAggregate: CategoryAggregateSelection;
  categoriesConnection: CategoriesConnection;
  cities: Array<City>;
  citiesAggregate: CityAggregateSelection;
  citiesConnection: CitiesConnection;
  eugs: Array<Eug>;
  eugsAggregate: EugAggregateSelection;
  eugsConnection: EugsConnection;
  industries: Array<Industry>;
  industriesAggregate: IndustryAggregateSelection;
  industriesConnection: IndustriesConnection;
  languages: Array<Language>;
  languagesAggregate: LanguageAggregateSelection;
  languagesConnection: LanguagesConnection;
  licenses: Array<License>;
  licensesAggregate: LicenseAggregateSelection;
  licensesConnection: LicensesConnection;
  members: Array<Member>;
  membersAggregate: MemberAggregateSelection;
  membersConnection: MembersConnection;
  membershipTypes: Array<MembershipType>;
  membershipTypesAggregate: MembershipTypeAggregateSelection;
  membershipTypesConnection: MembershipTypesConnection;
  organizations: Array<Organization>;
  organizationsAggregate: OrganizationAggregateSelection;
  organizationsConnection: OrganizationsConnection;
  people: Array<Person>;
  peopleAggregate: PersonAggregateSelection;
  peopleConnection: PeopleConnection;
  projectPhases: Array<ProjectPhase>;
  projectPhasesAggregate: ProjectPhaseAggregateSelection;
  projectPhasesConnection: ProjectPhasesConnection;
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  tags: Array<Tag>;
  tagsAggregate: TagAggregateSelection;
  tagsConnection: TagsConnection;
  tocs: Array<Toc>;
  tocsAggregate: TocAggregateSelection;
  tocsConnection: TocsConnection;
};


export type QueryCategoriesArgs = {
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCategoriesAggregateArgs = {
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CategorySort>>>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCitiesArgs = {
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


export type QueryCitiesAggregateArgs = {
  where?: InputMaybe<CityWhere>;
};


export type QueryCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CitySort>>>;
  where?: InputMaybe<CityWhere>;
};


export type QueryEugsArgs = {
  options?: InputMaybe<EugOptions>;
  where?: InputMaybe<EugWhere>;
};


export type QueryEugsAggregateArgs = {
  where?: InputMaybe<EugWhere>;
};


export type QueryEugsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<EugSort>>>;
  where?: InputMaybe<EugWhere>;
};


export type QueryIndustriesArgs = {
  options?: InputMaybe<IndustryOptions>;
  where?: InputMaybe<IndustryWhere>;
};


export type QueryIndustriesAggregateArgs = {
  where?: InputMaybe<IndustryWhere>;
};


export type QueryIndustriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<IndustrySort>>>;
  where?: InputMaybe<IndustryWhere>;
};


export type QueryLanguagesArgs = {
  options?: InputMaybe<LanguageOptions>;
  where?: InputMaybe<LanguageWhere>;
};


export type QueryLanguagesAggregateArgs = {
  where?: InputMaybe<LanguageWhere>;
};


export type QueryLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<LanguageSort>>>;
  where?: InputMaybe<LanguageWhere>;
};


export type QueryLicensesArgs = {
  options?: InputMaybe<LicenseOptions>;
  where?: InputMaybe<LicenseWhere>;
};


export type QueryLicensesAggregateArgs = {
  where?: InputMaybe<LicenseWhere>;
};


export type QueryLicensesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<LicenseSort>>>;
  where?: InputMaybe<LicenseWhere>;
};


export type QueryMembersArgs = {
  options?: InputMaybe<MemberOptions>;
  where?: InputMaybe<MemberWhere>;
};


export type QueryMembersAggregateArgs = {
  where?: InputMaybe<MemberWhere>;
};


export type QueryMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MemberSort>>>;
  where?: InputMaybe<MemberWhere>;
};


export type QueryMembershipTypesArgs = {
  options?: InputMaybe<MembershipTypeOptions>;
  where?: InputMaybe<MembershipTypeWhere>;
};


export type QueryMembershipTypesAggregateArgs = {
  where?: InputMaybe<MembershipTypeWhere>;
};


export type QueryMembershipTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MembershipTypeSort>>>;
  where?: InputMaybe<MembershipTypeWhere>;
};


export type QueryOrganizationsArgs = {
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<OrganizationSort>>>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryPeopleArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryProjectPhasesArgs = {
  options?: InputMaybe<ProjectPhaseOptions>;
  where?: InputMaybe<ProjectPhaseWhere>;
};


export type QueryProjectPhasesAggregateArgs = {
  where?: InputMaybe<ProjectPhaseWhere>;
};


export type QueryProjectPhasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectPhaseSort>>>;
  where?: InputMaybe<ProjectPhaseWhere>;
};


export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryTagsArgs = {
  options?: InputMaybe<TagOptions>;
  where?: InputMaybe<TagWhere>;
};


export type QueryTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>;
};


export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TagSort>>>;
  where?: InputMaybe<TagWhere>;
};


export type QueryTocsArgs = {
  options?: InputMaybe<TocOptions>;
  where?: InputMaybe<TocWhere>;
};


export type QueryTocsAggregateArgs = {
  where?: InputMaybe<TocWhere>;
};


export type QueryTocsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TocSort>>>;
  where?: InputMaybe<TocWhere>;
};

export enum Role_Position {
  Chair = 'CHAIR',
  TechnicalLead = 'TECHNICAL_LEAD'
}

export enum Role_Type {
  EndUserGroup = 'END_USER_GROUP',
  Project = 'PROJECT',
  TechnicalAdvisoryGroup = 'TECHNICAL_ADVISORY_GROUP',
  Toc = 'TOC'
}

export type ServedInRole = {
  from?: Maybe<Scalars['Date']>;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type ServedInRoleCreateInput = {
  from?: InputMaybe<Scalars['Date']>;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: InputMaybe<Scalars['Date']>;
};

export type ServedInRoleSort = {
  from?: InputMaybe<SortDirection>;
  rolePosition?: InputMaybe<SortDirection>;
  roleType?: InputMaybe<SortDirection>;
  to?: InputMaybe<SortDirection>;
};

export type ServedInRoleUpdateInput = {
  from?: InputMaybe<Scalars['Date']>;
  rolePosition?: InputMaybe<Role_Position>;
  roleType?: InputMaybe<Role_Type>;
  to?: InputMaybe<Scalars['Date']>;
};

export type ServedInRoleWhere = {
  AND?: InputMaybe<Array<ServedInRoleWhere>>;
  OR?: InputMaybe<Array<ServedInRoleWhere>>;
  from?: InputMaybe<Scalars['Date']>;
  from_GT?: InputMaybe<Scalars['Date']>;
  from_GTE?: InputMaybe<Scalars['Date']>;
  from_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  from_LT?: InputMaybe<Scalars['Date']>;
  from_LTE?: InputMaybe<Scalars['Date']>;
  from_NOT?: InputMaybe<Scalars['Date']>;
  from_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  rolePosition?: InputMaybe<Role_Position>;
  rolePosition_IN?: InputMaybe<Array<Role_Position>>;
  rolePosition_NOT?: InputMaybe<Role_Position>;
  rolePosition_NOT_IN?: InputMaybe<Array<Role_Position>>;
  roleType?: InputMaybe<Role_Type>;
  roleType_IN?: InputMaybe<Array<Role_Type>>;
  roleType_NOT?: InputMaybe<Role_Type>;
  roleType_NOT_IN?: InputMaybe<Array<Role_Type>>;
  to?: InputMaybe<Scalars['Date']>;
  to_GT?: InputMaybe<Scalars['Date']>;
  to_GTE?: InputMaybe<Scalars['Date']>;
  to_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  to_LT?: InputMaybe<Scalars['Date']>;
  to_LTE?: InputMaybe<Scalars['Date']>;
  to_NOT?: InputMaybe<Scalars['Date']>;
  to_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

/** TAG: Technical Advisory Group: TODO doc */
export type Tag = {
  __typename?: 'TAG';
  communityPersons: Array<Person>;
  communityPersonsAggregate?: Maybe<TagPersonCommunityPersonsAggregationSelection>;
  communityPersonsConnection: TagCommunityPersonsConnection;
  name: Scalars['String'];
  projectsInScope: Array<Project>;
  projectsInScopeAggregate?: Maybe<TagProjectProjectsInScopeAggregationSelection>;
  projectsInScopeConnection: TagProjectsInScopeConnection;
  rolePersons: Array<Person>;
  rolePersonsAggregate?: Maybe<TagPersonRolePersonsAggregationSelection>;
  rolePersonsConnection: TagRolePersonsConnection;
  tagId: Scalars['ID'];
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagCommunityPersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagCommunityPersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagCommunityPersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TagCommunityPersonsConnectionSort>>;
  where?: InputMaybe<TagCommunityPersonsConnectionWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagProjectsInScopeArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagProjectsInScopeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProjectWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagProjectsInScopeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TagProjectsInScopeConnectionSort>>;
  where?: InputMaybe<TagProjectsInScopeConnectionWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagRolePersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagRolePersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** TAG: Technical Advisory Group: TODO doc */
export type TagRolePersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TagRolePersonsConnectionSort>>;
  where?: InputMaybe<TagRolePersonsConnectionWhere>;
};

export type TagAggregateSelection = {
  __typename?: 'TAGAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
  tagId: IdAggregateSelectionNonNullable;
};

export type TagCommunityPersonsAggregateInput = {
  AND?: InputMaybe<Array<TagCommunityPersonsAggregateInput>>;
  OR?: InputMaybe<Array<TagCommunityPersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TagCommunityPersonsNodeAggregationWhereInput>;
};

export type TagCommunityPersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  where?: InputMaybe<PersonConnectWhere>;
};

export type TagCommunityPersonsConnectOrCreateFieldInput = {
  onCreate: TagCommunityPersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type TagCommunityPersonsConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type TagCommunityPersonsConnection = {
  __typename?: 'TAGCommunityPersonsConnection';
  edges: Array<TagCommunityPersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagCommunityPersonsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type TagCommunityPersonsConnectionWhere = {
  AND?: InputMaybe<Array<TagCommunityPersonsConnectionWhere>>;
  OR?: InputMaybe<Array<TagCommunityPersonsConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type TagCommunityPersonsCreateFieldInput = {
  node: PersonCreateInput;
};

export type TagCommunityPersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<TagCommunityPersonsConnectionWhere>;
};

export type TagCommunityPersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<TagCommunityPersonsConnectionWhere>;
};

export type TagCommunityPersonsFieldInput = {
  connect?: InputMaybe<Array<TagCommunityPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagCommunityPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagCommunityPersonsCreateFieldInput>>;
};

export type TagCommunityPersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagCommunityPersonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TagCommunityPersonsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TagCommunityPersonsRelationship = {
  __typename?: 'TAGCommunityPersonsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type TagCommunityPersonsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type TagCommunityPersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<TagCommunityPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagCommunityPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagCommunityPersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<TagCommunityPersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TagCommunityPersonsDisconnectFieldInput>>;
  update?: InputMaybe<TagCommunityPersonsUpdateConnectionInput>;
  where?: InputMaybe<TagCommunityPersonsConnectionWhere>;
};

export type TagConnectInput = {
  communityPersons?: InputMaybe<Array<TagCommunityPersonsConnectFieldInput>>;
  projectsInScope?: InputMaybe<Array<TagProjectsInScopeConnectFieldInput>>;
  rolePersons?: InputMaybe<Array<TagRolePersonsConnectFieldInput>>;
};

export type TagConnectOrCreateInput = {
  communityPersons?: InputMaybe<Array<TagCommunityPersonsConnectOrCreateFieldInput>>;
  projectsInScope?: InputMaybe<Array<TagProjectsInScopeConnectOrCreateFieldInput>>;
  rolePersons?: InputMaybe<Array<TagRolePersonsConnectOrCreateFieldInput>>;
};

export type TagConnectOrCreateWhere = {
  node: TagUniqueWhere;
};

export type TagConnectWhere = {
  node: TagWhere;
};

export type TagCreateInput = {
  communityPersons?: InputMaybe<TagCommunityPersonsFieldInput>;
  name: Scalars['String'];
  projectsInScope?: InputMaybe<TagProjectsInScopeFieldInput>;
  rolePersons?: InputMaybe<TagRolePersonsFieldInput>;
};

export type TagDeleteInput = {
  communityPersons?: InputMaybe<Array<TagCommunityPersonsDeleteFieldInput>>;
  projectsInScope?: InputMaybe<Array<TagProjectsInScopeDeleteFieldInput>>;
  rolePersons?: InputMaybe<Array<TagRolePersonsDeleteFieldInput>>;
};

export type TagDisconnectInput = {
  communityPersons?: InputMaybe<Array<TagCommunityPersonsDisconnectFieldInput>>;
  projectsInScope?: InputMaybe<Array<TagProjectsInScopeDisconnectFieldInput>>;
  rolePersons?: InputMaybe<Array<TagRolePersonsDisconnectFieldInput>>;
};

export type TagEdge = {
  __typename?: 'TAGEdge';
  cursor: Scalars['String'];
  node: Tag;
};

export type TagOnCreateInput = {
  name: Scalars['String'];
};

export type TagOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TAGSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TagSort>>;
};

export type TagPersonCommunityPersonsAggregationSelection = {
  __typename?: 'TAGPersonCommunityPersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TagPersonCommunityPersonsNodeAggregateSelection>;
};

export type TagPersonCommunityPersonsNodeAggregateSelection = {
  __typename?: 'TAGPersonCommunityPersonsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type TagPersonRolePersonsAggregationSelection = {
  __typename?: 'TAGPersonRolePersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TagPersonRolePersonsNodeAggregateSelection>;
};

export type TagPersonRolePersonsNodeAggregateSelection = {
  __typename?: 'TAGPersonRolePersonsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type TagProjectProjectsInScopeAggregationSelection = {
  __typename?: 'TAGProjectProjectsInScopeAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TagProjectProjectsInScopeNodeAggregateSelection>;
};

export type TagProjectProjectsInScopeNodeAggregateSelection = {
  __typename?: 'TAGProjectProjectsInScopeNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  projectId: IdAggregateSelectionNonNullable;
};

export type TagProjectsInScopeAggregateInput = {
  AND?: InputMaybe<Array<TagProjectsInScopeAggregateInput>>;
  OR?: InputMaybe<Array<TagProjectsInScopeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TagProjectsInScopeNodeAggregationWhereInput>;
};

export type TagProjectsInScopeConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  where?: InputMaybe<ProjectConnectWhere>;
};

export type TagProjectsInScopeConnectOrCreateFieldInput = {
  onCreate: TagProjectsInScopeConnectOrCreateFieldInputOnCreate;
  where: ProjectConnectOrCreateWhere;
};

export type TagProjectsInScopeConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type TagProjectsInScopeConnection = {
  __typename?: 'TAGProjectsInScopeConnection';
  edges: Array<TagProjectsInScopeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagProjectsInScopeConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type TagProjectsInScopeConnectionWhere = {
  AND?: InputMaybe<Array<TagProjectsInScopeConnectionWhere>>;
  OR?: InputMaybe<Array<TagProjectsInScopeConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type TagProjectsInScopeCreateFieldInput = {
  node: ProjectCreateInput;
};

export type TagProjectsInScopeDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<TagProjectsInScopeConnectionWhere>;
};

export type TagProjectsInScopeDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<TagProjectsInScopeConnectionWhere>;
};

export type TagProjectsInScopeFieldInput = {
  connect?: InputMaybe<Array<TagProjectsInScopeConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagProjectsInScopeConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagProjectsInScopeCreateFieldInput>>;
};

export type TagProjectsInScopeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagProjectsInScopeNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TagProjectsInScopeNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  projectId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TagProjectsInScopeRelationship = {
  __typename?: 'TAGProjectsInScopeRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type TagProjectsInScopeUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type TagProjectsInScopeUpdateFieldInput = {
  connect?: InputMaybe<Array<TagProjectsInScopeConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagProjectsInScopeConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagProjectsInScopeCreateFieldInput>>;
  delete?: InputMaybe<Array<TagProjectsInScopeDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TagProjectsInScopeDisconnectFieldInput>>;
  update?: InputMaybe<TagProjectsInScopeUpdateConnectionInput>;
  where?: InputMaybe<TagProjectsInScopeConnectionWhere>;
};

export type TagRelationInput = {
  communityPersons?: InputMaybe<Array<TagCommunityPersonsCreateFieldInput>>;
  projectsInScope?: InputMaybe<Array<TagProjectsInScopeCreateFieldInput>>;
  rolePersons?: InputMaybe<Array<TagRolePersonsCreateFieldInput>>;
};

export type TagRolePersonsAggregateInput = {
  AND?: InputMaybe<Array<TagRolePersonsAggregateInput>>;
  OR?: InputMaybe<Array<TagRolePersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TagRolePersonsNodeAggregationWhereInput>;
};

export type TagRolePersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<PersonConnectWhere>;
};

export type TagRolePersonsConnectOrCreateFieldInput = {
  onCreate: TagRolePersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type TagRolePersonsConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: PersonOnCreateInput;
};

export type TagRolePersonsConnection = {
  __typename?: 'TAGRolePersonsConnection';
  edges: Array<TagRolePersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagRolePersonsConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<PersonSort>;
};

export type TagRolePersonsConnectionWhere = {
  AND?: InputMaybe<Array<TagRolePersonsConnectionWhere>>;
  OR?: InputMaybe<Array<TagRolePersonsConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type TagRolePersonsCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: PersonCreateInput;
};

export type TagRolePersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<TagRolePersonsConnectionWhere>;
};

export type TagRolePersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<TagRolePersonsConnectionWhere>;
};

export type TagRolePersonsFieldInput = {
  connect?: InputMaybe<Array<TagRolePersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagRolePersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagRolePersonsCreateFieldInput>>;
};

export type TagRolePersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagRolePersonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TagRolePersonsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TagRolePersonsRelationship = ServedInRole & {
  __typename?: 'TAGRolePersonsRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Person;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type TagRolePersonsUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<PersonUpdateInput>;
};

export type TagRolePersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<TagRolePersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TagRolePersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TagRolePersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<TagRolePersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TagRolePersonsDisconnectFieldInput>>;
  update?: InputMaybe<TagRolePersonsUpdateConnectionInput>;
  where?: InputMaybe<TagRolePersonsConnectionWhere>;
};

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TAGSort object. */
export type TagSort = {
  name?: InputMaybe<SortDirection>;
  tagId?: InputMaybe<SortDirection>;
};

export type TagUniqueWhere = {
  name?: InputMaybe<Scalars['String']>;
  tagId?: InputMaybe<Scalars['ID']>;
};

export type TagUpdateInput = {
  communityPersons?: InputMaybe<Array<TagCommunityPersonsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  projectsInScope?: InputMaybe<Array<TagProjectsInScopeUpdateFieldInput>>;
  rolePersons?: InputMaybe<Array<TagRolePersonsUpdateFieldInput>>;
};

export type TagWhere = {
  AND?: InputMaybe<Array<TagWhere>>;
  OR?: InputMaybe<Array<TagWhere>>;
  communityPersonsAggregate?: InputMaybe<TagCommunityPersonsAggregateInput>;
  communityPersonsConnection_ALL?: InputMaybe<TagCommunityPersonsConnectionWhere>;
  communityPersonsConnection_NONE?: InputMaybe<TagCommunityPersonsConnectionWhere>;
  communityPersonsConnection_SINGLE?: InputMaybe<TagCommunityPersonsConnectionWhere>;
  communityPersonsConnection_SOME?: InputMaybe<TagCommunityPersonsConnectionWhere>;
  /** Return TAGS where all of the related People match this filter */
  communityPersons_ALL?: InputMaybe<PersonWhere>;
  /** Return TAGS where none of the related People match this filter */
  communityPersons_NONE?: InputMaybe<PersonWhere>;
  /** Return TAGS where one of the related People match this filter */
  communityPersons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return TAGS where some of the related People match this filter */
  communityPersons_SOME?: InputMaybe<PersonWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  projectsInScopeAggregate?: InputMaybe<TagProjectsInScopeAggregateInput>;
  projectsInScopeConnection_ALL?: InputMaybe<TagProjectsInScopeConnectionWhere>;
  projectsInScopeConnection_NONE?: InputMaybe<TagProjectsInScopeConnectionWhere>;
  projectsInScopeConnection_SINGLE?: InputMaybe<TagProjectsInScopeConnectionWhere>;
  projectsInScopeConnection_SOME?: InputMaybe<TagProjectsInScopeConnectionWhere>;
  /** Return TAGS where all of the related Projects match this filter */
  projectsInScope_ALL?: InputMaybe<ProjectWhere>;
  /** Return TAGS where none of the related Projects match this filter */
  projectsInScope_NONE?: InputMaybe<ProjectWhere>;
  /** Return TAGS where one of the related Projects match this filter */
  projectsInScope_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return TAGS where some of the related Projects match this filter */
  projectsInScope_SOME?: InputMaybe<ProjectWhere>;
  rolePersonsAggregate?: InputMaybe<TagRolePersonsAggregateInput>;
  rolePersonsConnection_ALL?: InputMaybe<TagRolePersonsConnectionWhere>;
  rolePersonsConnection_NONE?: InputMaybe<TagRolePersonsConnectionWhere>;
  rolePersonsConnection_SINGLE?: InputMaybe<TagRolePersonsConnectionWhere>;
  rolePersonsConnection_SOME?: InputMaybe<TagRolePersonsConnectionWhere>;
  /** Return TAGS where all of the related People match this filter */
  rolePersons_ALL?: InputMaybe<PersonWhere>;
  /** Return TAGS where none of the related People match this filter */
  rolePersons_NONE?: InputMaybe<PersonWhere>;
  /** Return TAGS where one of the related People match this filter */
  rolePersons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return TAGS where some of the related People match this filter */
  rolePersons_SOME?: InputMaybe<PersonWhere>;
  tagId?: InputMaybe<Scalars['ID']>;
  tagId_CONTAINS?: InputMaybe<Scalars['ID']>;
  tagId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  tagId_IN?: InputMaybe<Array<Scalars['ID']>>;
  tagId_NOT?: InputMaybe<Scalars['ID']>;
  tagId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  tagId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  tagId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  tagId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  tagId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

/** TOC: Technical Oversight Committee */
export type Toc = {
  __typename?: 'TOC';
  communityPersons: Array<Person>;
  communityPersonsAggregate?: Maybe<TocPersonCommunityPersonsAggregationSelection>;
  communityPersonsConnection: TocCommunityPersonsConnection;
  name: Scalars['String'];
  rolePersons: Array<Person>;
  rolePersonsAggregate?: Maybe<TocPersonRolePersonsAggregationSelection>;
  rolePersonsConnection: TocRolePersonsConnection;
  tocId: Scalars['ID'];
};


/** TOC: Technical Oversight Committee */
export type TocCommunityPersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** TOC: Technical Oversight Committee */
export type TocCommunityPersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** TOC: Technical Oversight Committee */
export type TocCommunityPersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TocCommunityPersonsConnectionSort>>;
  where?: InputMaybe<TocCommunityPersonsConnectionWhere>;
};


/** TOC: Technical Oversight Committee */
export type TocRolePersonsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


/** TOC: Technical Oversight Committee */
export type TocRolePersonsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PersonWhere>;
};


/** TOC: Technical Oversight Committee */
export type TocRolePersonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TocRolePersonsConnectionSort>>;
  where?: InputMaybe<TocRolePersonsConnectionWhere>;
};

export type TocAggregateSelection = {
  __typename?: 'TOCAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelectionNonNullable;
  tocId: IdAggregateSelectionNonNullable;
};

export type TocCommunityPersonsAggregateInput = {
  AND?: InputMaybe<Array<TocCommunityPersonsAggregateInput>>;
  OR?: InputMaybe<Array<TocCommunityPersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TocCommunityPersonsNodeAggregationWhereInput>;
};

export type TocCommunityPersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  where?: InputMaybe<PersonConnectWhere>;
};

export type TocCommunityPersonsConnectOrCreateFieldInput = {
  onCreate: TocCommunityPersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type TocCommunityPersonsConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type TocCommunityPersonsConnection = {
  __typename?: 'TOCCommunityPersonsConnection';
  edges: Array<TocCommunityPersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TocCommunityPersonsConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type TocCommunityPersonsConnectionWhere = {
  AND?: InputMaybe<Array<TocCommunityPersonsConnectionWhere>>;
  OR?: InputMaybe<Array<TocCommunityPersonsConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type TocCommunityPersonsCreateFieldInput = {
  node: PersonCreateInput;
};

export type TocCommunityPersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<TocCommunityPersonsConnectionWhere>;
};

export type TocCommunityPersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<TocCommunityPersonsConnectionWhere>;
};

export type TocCommunityPersonsFieldInput = {
  connect?: InputMaybe<Array<TocCommunityPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TocCommunityPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TocCommunityPersonsCreateFieldInput>>;
};

export type TocCommunityPersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TocCommunityPersonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TocCommunityPersonsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TocCommunityPersonsRelationship = {
  __typename?: 'TOCCommunityPersonsRelationship';
  cursor: Scalars['String'];
  node: Person;
};

export type TocCommunityPersonsUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type TocCommunityPersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<TocCommunityPersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TocCommunityPersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TocCommunityPersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<TocCommunityPersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TocCommunityPersonsDisconnectFieldInput>>;
  update?: InputMaybe<TocCommunityPersonsUpdateConnectionInput>;
  where?: InputMaybe<TocCommunityPersonsConnectionWhere>;
};

export type TocConnectInput = {
  communityPersons?: InputMaybe<Array<TocCommunityPersonsConnectFieldInput>>;
  rolePersons?: InputMaybe<Array<TocRolePersonsConnectFieldInput>>;
};

export type TocConnectOrCreateInput = {
  communityPersons?: InputMaybe<Array<TocCommunityPersonsConnectOrCreateFieldInput>>;
  rolePersons?: InputMaybe<Array<TocRolePersonsConnectOrCreateFieldInput>>;
};

export type TocConnectOrCreateWhere = {
  node: TocUniqueWhere;
};

export type TocConnectWhere = {
  node: TocWhere;
};

export type TocCreateInput = {
  communityPersons?: InputMaybe<TocCommunityPersonsFieldInput>;
  name: Scalars['String'];
  rolePersons?: InputMaybe<TocRolePersonsFieldInput>;
};

export type TocDeleteInput = {
  communityPersons?: InputMaybe<Array<TocCommunityPersonsDeleteFieldInput>>;
  rolePersons?: InputMaybe<Array<TocRolePersonsDeleteFieldInput>>;
};

export type TocDisconnectInput = {
  communityPersons?: InputMaybe<Array<TocCommunityPersonsDisconnectFieldInput>>;
  rolePersons?: InputMaybe<Array<TocRolePersonsDisconnectFieldInput>>;
};

export type TocEdge = {
  __typename?: 'TOCEdge';
  cursor: Scalars['String'];
  node: Toc;
};

export type TocOnCreateInput = {
  name: Scalars['String'];
};

export type TocOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TOCSort objects to sort Tocs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TocSort>>;
};

export type TocPersonCommunityPersonsAggregationSelection = {
  __typename?: 'TOCPersonCommunityPersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TocPersonCommunityPersonsNodeAggregateSelection>;
};

export type TocPersonCommunityPersonsNodeAggregateSelection = {
  __typename?: 'TOCPersonCommunityPersonsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type TocPersonRolePersonsAggregationSelection = {
  __typename?: 'TOCPersonRolePersonsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TocPersonRolePersonsNodeAggregateSelection>;
};

export type TocPersonRolePersonsNodeAggregateSelection = {
  __typename?: 'TOCPersonRolePersonsNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  personId: IdAggregateSelectionNonNullable;
};

export type TocRelationInput = {
  communityPersons?: InputMaybe<Array<TocCommunityPersonsCreateFieldInput>>;
  rolePersons?: InputMaybe<Array<TocRolePersonsCreateFieldInput>>;
};

export type TocRolePersonsAggregateInput = {
  AND?: InputMaybe<Array<TocRolePersonsAggregateInput>>;
  OR?: InputMaybe<Array<TocRolePersonsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TocRolePersonsNodeAggregationWhereInput>;
};

export type TocRolePersonsConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  edge: ServedInRoleCreateInput;
  where?: InputMaybe<PersonConnectWhere>;
};

export type TocRolePersonsConnectOrCreateFieldInput = {
  onCreate: TocRolePersonsConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type TocRolePersonsConnectOrCreateFieldInputOnCreate = {
  edge: ServedInRoleCreateInput;
  node: PersonOnCreateInput;
};

export type TocRolePersonsConnection = {
  __typename?: 'TOCRolePersonsConnection';
  edges: Array<TocRolePersonsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TocRolePersonsConnectionSort = {
  edge?: InputMaybe<ServedInRoleSort>;
  node?: InputMaybe<PersonSort>;
};

export type TocRolePersonsConnectionWhere = {
  AND?: InputMaybe<Array<TocRolePersonsConnectionWhere>>;
  OR?: InputMaybe<Array<TocRolePersonsConnectionWhere>>;
  edge?: InputMaybe<ServedInRoleWhere>;
  edge_NOT?: InputMaybe<ServedInRoleWhere>;
  node?: InputMaybe<PersonWhere>;
  node_NOT?: InputMaybe<PersonWhere>;
};

export type TocRolePersonsCreateFieldInput = {
  edge: ServedInRoleCreateInput;
  node: PersonCreateInput;
};

export type TocRolePersonsDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<TocRolePersonsConnectionWhere>;
};

export type TocRolePersonsDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<TocRolePersonsConnectionWhere>;
};

export type TocRolePersonsFieldInput = {
  connect?: InputMaybe<Array<TocRolePersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TocRolePersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TocRolePersonsCreateFieldInput>>;
};

export type TocRolePersonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TocRolePersonsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TocRolePersonsNodeAggregationWhereInput>>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  personId_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TocRolePersonsRelationship = ServedInRole & {
  __typename?: 'TOCRolePersonsRelationship';
  cursor: Scalars['String'];
  from?: Maybe<Scalars['Date']>;
  node: Person;
  rolePosition: Role_Position;
  roleType: Role_Type;
  to?: Maybe<Scalars['Date']>;
};

export type TocRolePersonsUpdateConnectionInput = {
  edge?: InputMaybe<ServedInRoleUpdateInput>;
  node?: InputMaybe<PersonUpdateInput>;
};

export type TocRolePersonsUpdateFieldInput = {
  connect?: InputMaybe<Array<TocRolePersonsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TocRolePersonsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TocRolePersonsCreateFieldInput>>;
  delete?: InputMaybe<Array<TocRolePersonsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TocRolePersonsDisconnectFieldInput>>;
  update?: InputMaybe<TocRolePersonsUpdateConnectionInput>;
  where?: InputMaybe<TocRolePersonsConnectionWhere>;
};

/** Fields to sort Tocs by. The order in which sorts are applied is not guaranteed when specifying many fields in one TOCSort object. */
export type TocSort = {
  name?: InputMaybe<SortDirection>;
  tocId?: InputMaybe<SortDirection>;
};

export type TocUniqueWhere = {
  name?: InputMaybe<Scalars['String']>;
  tocId?: InputMaybe<Scalars['ID']>;
};

export type TocUpdateInput = {
  communityPersons?: InputMaybe<Array<TocCommunityPersonsUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
  rolePersons?: InputMaybe<Array<TocRolePersonsUpdateFieldInput>>;
};

export type TocWhere = {
  AND?: InputMaybe<Array<TocWhere>>;
  OR?: InputMaybe<Array<TocWhere>>;
  communityPersonsAggregate?: InputMaybe<TocCommunityPersonsAggregateInput>;
  communityPersonsConnection_ALL?: InputMaybe<TocCommunityPersonsConnectionWhere>;
  communityPersonsConnection_NONE?: InputMaybe<TocCommunityPersonsConnectionWhere>;
  communityPersonsConnection_SINGLE?: InputMaybe<TocCommunityPersonsConnectionWhere>;
  communityPersonsConnection_SOME?: InputMaybe<TocCommunityPersonsConnectionWhere>;
  /** Return TOCS where all of the related People match this filter */
  communityPersons_ALL?: InputMaybe<PersonWhere>;
  /** Return TOCS where none of the related People match this filter */
  communityPersons_NONE?: InputMaybe<PersonWhere>;
  /** Return TOCS where one of the related People match this filter */
  communityPersons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return TOCS where some of the related People match this filter */
  communityPersons_SOME?: InputMaybe<PersonWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  rolePersonsAggregate?: InputMaybe<TocRolePersonsAggregateInput>;
  rolePersonsConnection_ALL?: InputMaybe<TocRolePersonsConnectionWhere>;
  rolePersonsConnection_NONE?: InputMaybe<TocRolePersonsConnectionWhere>;
  rolePersonsConnection_SINGLE?: InputMaybe<TocRolePersonsConnectionWhere>;
  rolePersonsConnection_SOME?: InputMaybe<TocRolePersonsConnectionWhere>;
  /** Return TOCS where all of the related People match this filter */
  rolePersons_ALL?: InputMaybe<PersonWhere>;
  /** Return TOCS where none of the related People match this filter */
  rolePersons_NONE?: InputMaybe<PersonWhere>;
  /** Return TOCS where one of the related People match this filter */
  rolePersons_SINGLE?: InputMaybe<PersonWhere>;
  /** Return TOCS where some of the related People match this filter */
  rolePersons_SOME?: InputMaybe<PersonWhere>;
  tocId?: InputMaybe<Scalars['ID']>;
  tocId_CONTAINS?: InputMaybe<Scalars['ID']>;
  tocId_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  tocId_IN?: InputMaybe<Array<Scalars['ID']>>;
  tocId_NOT?: InputMaybe<Scalars['ID']>;
  tocId_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  tocId_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  tocId_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  tocId_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  tocId_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type TagsConnection = {
  __typename?: 'TagsConnection';
  edges: Array<TagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TocsConnection = {
  __typename?: 'TocsConnection';
  edges: Array<TocEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UpdateCategoriesMutationResponse = {
  __typename?: 'UpdateCategoriesMutationResponse';
  categories: Array<Category>;
  info: UpdateInfo;
};

export type UpdateCitiesMutationResponse = {
  __typename?: 'UpdateCitiesMutationResponse';
  cities: Array<City>;
  info: UpdateInfo;
};

export type UpdateEugsMutationResponse = {
  __typename?: 'UpdateEugsMutationResponse';
  eugs: Array<Eug>;
  info: UpdateInfo;
};

export type UpdateIndustriesMutationResponse = {
  __typename?: 'UpdateIndustriesMutationResponse';
  industries: Array<Industry>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateLanguagesMutationResponse = {
  __typename?: 'UpdateLanguagesMutationResponse';
  info: UpdateInfo;
  languages: Array<Language>;
};

export type UpdateLicensesMutationResponse = {
  __typename?: 'UpdateLicensesMutationResponse';
  info: UpdateInfo;
  licenses: Array<License>;
};

export type UpdateMembersMutationResponse = {
  __typename?: 'UpdateMembersMutationResponse';
  info: UpdateInfo;
  members: Array<Member>;
};

export type UpdateMembershipTypesMutationResponse = {
  __typename?: 'UpdateMembershipTypesMutationResponse';
  info: UpdateInfo;
  membershipTypes: Array<MembershipType>;
};

export type UpdateOrganizationsMutationResponse = {
  __typename?: 'UpdateOrganizationsMutationResponse';
  info: UpdateInfo;
  organizations: Array<Organization>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: 'UpdatePeopleMutationResponse';
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdateProjectPhasesMutationResponse = {
  __typename?: 'UpdateProjectPhasesMutationResponse';
  info: UpdateInfo;
  projectPhases: Array<ProjectPhase>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: 'UpdateProjectsMutationResponse';
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateTagsMutationResponse = {
  __typename?: 'UpdateTagsMutationResponse';
  info: UpdateInfo;
  tags: Array<Tag>;
};

export type UpdateTocsMutationResponse = {
  __typename?: 'UpdateTocsMutationResponse';
  info: UpdateInfo;
  tocs: Array<Toc>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoriesConnection: ResolverTypeWrapper<CategoriesConnection>;
  Category: ResolverTypeWrapper<Category>;
  CategoryAggregateSelection: ResolverTypeWrapper<CategoryAggregateSelection>;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnectOrCreateInput: CategoryConnectOrCreateInput;
  CategoryConnectOrCreateWhere: CategoryConnectOrCreateWhere;
  CategoryConnectWhere: CategoryConnectWhere;
  CategoryCreateInput: CategoryCreateInput;
  CategoryDeleteInput: CategoryDeleteInput;
  CategoryDisconnectInput: CategoryDisconnectInput;
  CategoryEdge: ResolverTypeWrapper<CategoryEdge>;
  CategoryMemberMembersAggregationSelection: ResolverTypeWrapper<CategoryMemberMembersAggregationSelection>;
  CategoryMemberMembersNodeAggregateSelection: ResolverTypeWrapper<CategoryMemberMembersNodeAggregateSelection>;
  CategoryMembersAggregateInput: CategoryMembersAggregateInput;
  CategoryMembersConnectFieldInput: CategoryMembersConnectFieldInput;
  CategoryMembersConnectOrCreateFieldInput: CategoryMembersConnectOrCreateFieldInput;
  CategoryMembersConnectOrCreateFieldInputOnCreate: CategoryMembersConnectOrCreateFieldInputOnCreate;
  CategoryMembersConnection: ResolverTypeWrapper<CategoryMembersConnection>;
  CategoryMembersConnectionSort: CategoryMembersConnectionSort;
  CategoryMembersConnectionWhere: CategoryMembersConnectionWhere;
  CategoryMembersCreateFieldInput: CategoryMembersCreateFieldInput;
  CategoryMembersDeleteFieldInput: CategoryMembersDeleteFieldInput;
  CategoryMembersDisconnectFieldInput: CategoryMembersDisconnectFieldInput;
  CategoryMembersFieldInput: CategoryMembersFieldInput;
  CategoryMembersNodeAggregationWhereInput: CategoryMembersNodeAggregationWhereInput;
  CategoryMembersRelationship: ResolverTypeWrapper<CategoryMembersRelationship>;
  CategoryMembersUpdateConnectionInput: CategoryMembersUpdateConnectionInput;
  CategoryMembersUpdateFieldInput: CategoryMembersUpdateFieldInput;
  CategoryOnCreateInput: CategoryOnCreateInput;
  CategoryOptions: CategoryOptions;
  CategoryProjectProjectsAggregationSelection: ResolverTypeWrapper<CategoryProjectProjectsAggregationSelection>;
  CategoryProjectProjectsNodeAggregateSelection: ResolverTypeWrapper<CategoryProjectProjectsNodeAggregateSelection>;
  CategoryProjectsAggregateInput: CategoryProjectsAggregateInput;
  CategoryProjectsConnectFieldInput: CategoryProjectsConnectFieldInput;
  CategoryProjectsConnectOrCreateFieldInput: CategoryProjectsConnectOrCreateFieldInput;
  CategoryProjectsConnectOrCreateFieldInputOnCreate: CategoryProjectsConnectOrCreateFieldInputOnCreate;
  CategoryProjectsConnection: ResolverTypeWrapper<CategoryProjectsConnection>;
  CategoryProjectsConnectionSort: CategoryProjectsConnectionSort;
  CategoryProjectsConnectionWhere: CategoryProjectsConnectionWhere;
  CategoryProjectsCreateFieldInput: CategoryProjectsCreateFieldInput;
  CategoryProjectsDeleteFieldInput: CategoryProjectsDeleteFieldInput;
  CategoryProjectsDisconnectFieldInput: CategoryProjectsDisconnectFieldInput;
  CategoryProjectsFieldInput: CategoryProjectsFieldInput;
  CategoryProjectsNodeAggregationWhereInput: CategoryProjectsNodeAggregationWhereInput;
  CategoryProjectsRelationship: ResolverTypeWrapper<CategoryProjectsRelationship>;
  CategoryProjectsUpdateConnectionInput: CategoryProjectsUpdateConnectionInput;
  CategoryProjectsUpdateFieldInput: CategoryProjectsUpdateFieldInput;
  CategoryRelationInput: CategoryRelationInput;
  CategorySort: CategorySort;
  CategoryUniqueWhere: CategoryUniqueWhere;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhere: CategoryWhere;
  CitiesConnection: ResolverTypeWrapper<CitiesConnection>;
  City: ResolverTypeWrapper<City>;
  CityAggregateSelection: ResolverTypeWrapper<CityAggregateSelection>;
  CityConnectInput: CityConnectInput;
  CityConnectOrCreateInput: CityConnectOrCreateInput;
  CityConnectOrCreateWhere: CityConnectOrCreateWhere;
  CityConnectWhere: CityConnectWhere;
  CityCreateInput: CityCreateInput;
  CityDeleteInput: CityDeleteInput;
  CityDisconnectInput: CityDisconnectInput;
  CityEdge: ResolverTypeWrapper<CityEdge>;
  CityOnCreateInput: CityOnCreateInput;
  CityOptions: CityOptions;
  CityOrganizationOrganizationsAggregationSelection: ResolverTypeWrapper<CityOrganizationOrganizationsAggregationSelection>;
  CityOrganizationOrganizationsNodeAggregateSelection: ResolverTypeWrapper<CityOrganizationOrganizationsNodeAggregateSelection>;
  CityOrganizationsAggregateInput: CityOrganizationsAggregateInput;
  CityOrganizationsConnectFieldInput: CityOrganizationsConnectFieldInput;
  CityOrganizationsConnectOrCreateFieldInput: CityOrganizationsConnectOrCreateFieldInput;
  CityOrganizationsConnectOrCreateFieldInputOnCreate: CityOrganizationsConnectOrCreateFieldInputOnCreate;
  CityOrganizationsConnection: ResolverTypeWrapper<CityOrganizationsConnection>;
  CityOrganizationsConnectionSort: CityOrganizationsConnectionSort;
  CityOrganizationsConnectionWhere: CityOrganizationsConnectionWhere;
  CityOrganizationsCreateFieldInput: CityOrganizationsCreateFieldInput;
  CityOrganizationsDeleteFieldInput: CityOrganizationsDeleteFieldInput;
  CityOrganizationsDisconnectFieldInput: CityOrganizationsDisconnectFieldInput;
  CityOrganizationsFieldInput: CityOrganizationsFieldInput;
  CityOrganizationsNodeAggregationWhereInput: CityOrganizationsNodeAggregationWhereInput;
  CityOrganizationsRelationship: ResolverTypeWrapper<CityOrganizationsRelationship>;
  CityOrganizationsUpdateConnectionInput: CityOrganizationsUpdateConnectionInput;
  CityOrganizationsUpdateFieldInput: CityOrganizationsUpdateFieldInput;
  CityRelationInput: CityRelationInput;
  CitySort: CitySort;
  CityUniqueWhere: CityUniqueWhere;
  CityUpdateInput: CityUpdateInput;
  CityWhere: CityWhere;
  CreateCategoriesMutationResponse: ResolverTypeWrapper<CreateCategoriesMutationResponse>;
  CreateCitiesMutationResponse: ResolverTypeWrapper<CreateCitiesMutationResponse>;
  CreateEugsMutationResponse: ResolverTypeWrapper<CreateEugsMutationResponse>;
  CreateIndustriesMutationResponse: ResolverTypeWrapper<CreateIndustriesMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateLanguagesMutationResponse: ResolverTypeWrapper<CreateLanguagesMutationResponse>;
  CreateLicensesMutationResponse: ResolverTypeWrapper<CreateLicensesMutationResponse>;
  CreateMembersMutationResponse: ResolverTypeWrapper<CreateMembersMutationResponse>;
  CreateMembershipTypesMutationResponse: ResolverTypeWrapper<CreateMembershipTypesMutationResponse>;
  CreateOrganizationsMutationResponse: ResolverTypeWrapper<CreateOrganizationsMutationResponse>;
  CreatePeopleMutationResponse: ResolverTypeWrapper<CreatePeopleMutationResponse>;
  CreateProjectPhasesMutationResponse: ResolverTypeWrapper<CreateProjectPhasesMutationResponse>;
  CreateProjectsMutationResponse: ResolverTypeWrapper<CreateProjectsMutationResponse>;
  CreateTagsMutationResponse: ResolverTypeWrapper<CreateTagsMutationResponse>;
  CreateTocsMutationResponse: ResolverTypeWrapper<CreateTocsMutationResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  EUG: ResolverTypeWrapper<Eug>;
  EUGAggregateSelection: ResolverTypeWrapper<EugAggregateSelection>;
  EUGConnectInput: EugConnectInput;
  EUGConnectOrCreateInput: EugConnectOrCreateInput;
  EUGConnectOrCreateWhere: EugConnectOrCreateWhere;
  EUGConnectWhere: EugConnectWhere;
  EUGCreateInput: EugCreateInput;
  EUGDeleteInput: EugDeleteInput;
  EUGDisconnectInput: EugDisconnectInput;
  EUGEdge: ResolverTypeWrapper<EugEdge>;
  EUGMemberMembersAggregationSelection: ResolverTypeWrapper<EugMemberMembersAggregationSelection>;
  EUGMemberMembersNodeAggregateSelection: ResolverTypeWrapper<EugMemberMembersNodeAggregateSelection>;
  EUGMembersAggregateInput: EugMembersAggregateInput;
  EUGMembersConnectFieldInput: EugMembersConnectFieldInput;
  EUGMembersConnectOrCreateFieldInput: EugMembersConnectOrCreateFieldInput;
  EUGMembersConnectOrCreateFieldInputOnCreate: EugMembersConnectOrCreateFieldInputOnCreate;
  EUGMembersConnection: ResolverTypeWrapper<EugMembersConnection>;
  EUGMembersConnectionSort: EugMembersConnectionSort;
  EUGMembersConnectionWhere: EugMembersConnectionWhere;
  EUGMembersCreateFieldInput: EugMembersCreateFieldInput;
  EUGMembersDeleteFieldInput: EugMembersDeleteFieldInput;
  EUGMembersDisconnectFieldInput: EugMembersDisconnectFieldInput;
  EUGMembersFieldInput: EugMembersFieldInput;
  EUGMembersNodeAggregationWhereInput: EugMembersNodeAggregationWhereInput;
  EUGMembersRelationship: ResolverTypeWrapper<EugMembersRelationship>;
  EUGMembersUpdateConnectionInput: EugMembersUpdateConnectionInput;
  EUGMembersUpdateFieldInput: EugMembersUpdateFieldInput;
  EUGOnCreateInput: EugOnCreateInput;
  EUGOptions: EugOptions;
  EUGPersonRolePersonsAggregationSelection: ResolverTypeWrapper<EugPersonRolePersonsAggregationSelection>;
  EUGPersonRolePersonsNodeAggregateSelection: ResolverTypeWrapper<EugPersonRolePersonsNodeAggregateSelection>;
  EUGRelationInput: EugRelationInput;
  EUGRolePersonsAggregateInput: EugRolePersonsAggregateInput;
  EUGRolePersonsConnectFieldInput: EugRolePersonsConnectFieldInput;
  EUGRolePersonsConnectOrCreateFieldInput: EugRolePersonsConnectOrCreateFieldInput;
  EUGRolePersonsConnectOrCreateFieldInputOnCreate: EugRolePersonsConnectOrCreateFieldInputOnCreate;
  EUGRolePersonsConnection: ResolverTypeWrapper<EugRolePersonsConnection>;
  EUGRolePersonsConnectionSort: EugRolePersonsConnectionSort;
  EUGRolePersonsConnectionWhere: EugRolePersonsConnectionWhere;
  EUGRolePersonsCreateFieldInput: EugRolePersonsCreateFieldInput;
  EUGRolePersonsDeleteFieldInput: EugRolePersonsDeleteFieldInput;
  EUGRolePersonsDisconnectFieldInput: EugRolePersonsDisconnectFieldInput;
  EUGRolePersonsFieldInput: EugRolePersonsFieldInput;
  EUGRolePersonsNodeAggregationWhereInput: EugRolePersonsNodeAggregationWhereInput;
  EUGRolePersonsRelationship: ResolverTypeWrapper<EugRolePersonsRelationship>;
  EUGRolePersonsUpdateConnectionInput: EugRolePersonsUpdateConnectionInput;
  EUGRolePersonsUpdateFieldInput: EugRolePersonsUpdateFieldInput;
  EUGSort: EugSort;
  EUGUniqueWhere: EugUniqueWhere;
  EUGUpdateInput: EugUpdateInput;
  EUGWhere: EugWhere;
  EugsConnection: ResolverTypeWrapper<EugsConnection>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDAggregateSelectionNonNullable: ResolverTypeWrapper<IdAggregateSelectionNonNullable>;
  IndustriesConnection: ResolverTypeWrapper<IndustriesConnection>;
  Industry: ResolverTypeWrapper<Industry>;
  IndustryAggregateSelection: ResolverTypeWrapper<IndustryAggregateSelection>;
  IndustryConnectInput: IndustryConnectInput;
  IndustryConnectOrCreateInput: IndustryConnectOrCreateInput;
  IndustryConnectOrCreateWhere: IndustryConnectOrCreateWhere;
  IndustryConnectWhere: IndustryConnectWhere;
  IndustryCreateInput: IndustryCreateInput;
  IndustryDeleteInput: IndustryDeleteInput;
  IndustryDisconnectInput: IndustryDisconnectInput;
  IndustryEdge: ResolverTypeWrapper<IndustryEdge>;
  IndustryOnCreateInput: IndustryOnCreateInput;
  IndustryOptions: IndustryOptions;
  IndustryOrganizationOrganizationsAggregationSelection: ResolverTypeWrapper<IndustryOrganizationOrganizationsAggregationSelection>;
  IndustryOrganizationOrganizationsNodeAggregateSelection: ResolverTypeWrapper<IndustryOrganizationOrganizationsNodeAggregateSelection>;
  IndustryOrganizationsAggregateInput: IndustryOrganizationsAggregateInput;
  IndustryOrganizationsConnectFieldInput: IndustryOrganizationsConnectFieldInput;
  IndustryOrganizationsConnectOrCreateFieldInput: IndustryOrganizationsConnectOrCreateFieldInput;
  IndustryOrganizationsConnectOrCreateFieldInputOnCreate: IndustryOrganizationsConnectOrCreateFieldInputOnCreate;
  IndustryOrganizationsConnection: ResolverTypeWrapper<IndustryOrganizationsConnection>;
  IndustryOrganizationsConnectionSort: IndustryOrganizationsConnectionSort;
  IndustryOrganizationsConnectionWhere: IndustryOrganizationsConnectionWhere;
  IndustryOrganizationsCreateFieldInput: IndustryOrganizationsCreateFieldInput;
  IndustryOrganizationsDeleteFieldInput: IndustryOrganizationsDeleteFieldInput;
  IndustryOrganizationsDisconnectFieldInput: IndustryOrganizationsDisconnectFieldInput;
  IndustryOrganizationsFieldInput: IndustryOrganizationsFieldInput;
  IndustryOrganizationsNodeAggregationWhereInput: IndustryOrganizationsNodeAggregationWhereInput;
  IndustryOrganizationsRelationship: ResolverTypeWrapper<IndustryOrganizationsRelationship>;
  IndustryOrganizationsUpdateConnectionInput: IndustryOrganizationsUpdateConnectionInput;
  IndustryOrganizationsUpdateFieldInput: IndustryOrganizationsUpdateFieldInput;
  IndustryRelationInput: IndustryRelationInput;
  IndustrySort: IndustrySort;
  IndustryUniqueWhere: IndustryUniqueWhere;
  IndustryUpdateInput: IndustryUpdateInput;
  IndustryWhere: IndustryWhere;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Language: ResolverTypeWrapper<Language>;
  LanguageAggregateSelection: ResolverTypeWrapper<LanguageAggregateSelection>;
  LanguageConnectInput: LanguageConnectInput;
  LanguageConnectOrCreateInput: LanguageConnectOrCreateInput;
  LanguageConnectOrCreateWhere: LanguageConnectOrCreateWhere;
  LanguageConnectWhere: LanguageConnectWhere;
  LanguageCreateInput: LanguageCreateInput;
  LanguageDeleteInput: LanguageDeleteInput;
  LanguageDisconnectInput: LanguageDisconnectInput;
  LanguageEdge: ResolverTypeWrapper<LanguageEdge>;
  LanguageOnCreateInput: LanguageOnCreateInput;
  LanguageOptions: LanguageOptions;
  LanguageProjectProjectsAggregationSelection: ResolverTypeWrapper<LanguageProjectProjectsAggregationSelection>;
  LanguageProjectProjectsNodeAggregateSelection: ResolverTypeWrapper<LanguageProjectProjectsNodeAggregateSelection>;
  LanguageProjectsAggregateInput: LanguageProjectsAggregateInput;
  LanguageProjectsConnectFieldInput: LanguageProjectsConnectFieldInput;
  LanguageProjectsConnectOrCreateFieldInput: LanguageProjectsConnectOrCreateFieldInput;
  LanguageProjectsConnectOrCreateFieldInputOnCreate: LanguageProjectsConnectOrCreateFieldInputOnCreate;
  LanguageProjectsConnection: ResolverTypeWrapper<LanguageProjectsConnection>;
  LanguageProjectsConnectionSort: LanguageProjectsConnectionSort;
  LanguageProjectsConnectionWhere: LanguageProjectsConnectionWhere;
  LanguageProjectsCreateFieldInput: LanguageProjectsCreateFieldInput;
  LanguageProjectsDeleteFieldInput: LanguageProjectsDeleteFieldInput;
  LanguageProjectsDisconnectFieldInput: LanguageProjectsDisconnectFieldInput;
  LanguageProjectsFieldInput: LanguageProjectsFieldInput;
  LanguageProjectsNodeAggregationWhereInput: LanguageProjectsNodeAggregationWhereInput;
  LanguageProjectsRelationship: ResolverTypeWrapper<LanguageProjectsRelationship>;
  LanguageProjectsUpdateConnectionInput: LanguageProjectsUpdateConnectionInput;
  LanguageProjectsUpdateFieldInput: LanguageProjectsUpdateFieldInput;
  LanguageRelationInput: LanguageRelationInput;
  LanguageSort: LanguageSort;
  LanguageUniqueWhere: LanguageUniqueWhere;
  LanguageUpdateInput: LanguageUpdateInput;
  LanguageWhere: LanguageWhere;
  LanguagesConnection: ResolverTypeWrapper<LanguagesConnection>;
  License: ResolverTypeWrapper<License>;
  LicenseAggregateSelection: ResolverTypeWrapper<LicenseAggregateSelection>;
  LicenseConnectInput: LicenseConnectInput;
  LicenseConnectOrCreateInput: LicenseConnectOrCreateInput;
  LicenseConnectOrCreateWhere: LicenseConnectOrCreateWhere;
  LicenseConnectWhere: LicenseConnectWhere;
  LicenseCreateInput: LicenseCreateInput;
  LicenseDeleteInput: LicenseDeleteInput;
  LicenseDisconnectInput: LicenseDisconnectInput;
  LicenseEdge: ResolverTypeWrapper<LicenseEdge>;
  LicenseOnCreateInput: LicenseOnCreateInput;
  LicenseOptions: LicenseOptions;
  LicenseProjectProjectsAggregationSelection: ResolverTypeWrapper<LicenseProjectProjectsAggregationSelection>;
  LicenseProjectProjectsNodeAggregateSelection: ResolverTypeWrapper<LicenseProjectProjectsNodeAggregateSelection>;
  LicenseProjectsAggregateInput: LicenseProjectsAggregateInput;
  LicenseProjectsConnectFieldInput: LicenseProjectsConnectFieldInput;
  LicenseProjectsConnectOrCreateFieldInput: LicenseProjectsConnectOrCreateFieldInput;
  LicenseProjectsConnectOrCreateFieldInputOnCreate: LicenseProjectsConnectOrCreateFieldInputOnCreate;
  LicenseProjectsConnection: ResolverTypeWrapper<LicenseProjectsConnection>;
  LicenseProjectsConnectionSort: LicenseProjectsConnectionSort;
  LicenseProjectsConnectionWhere: LicenseProjectsConnectionWhere;
  LicenseProjectsCreateFieldInput: LicenseProjectsCreateFieldInput;
  LicenseProjectsDeleteFieldInput: LicenseProjectsDeleteFieldInput;
  LicenseProjectsDisconnectFieldInput: LicenseProjectsDisconnectFieldInput;
  LicenseProjectsFieldInput: LicenseProjectsFieldInput;
  LicenseProjectsNodeAggregationWhereInput: LicenseProjectsNodeAggregationWhereInput;
  LicenseProjectsRelationship: ResolverTypeWrapper<LicenseProjectsRelationship>;
  LicenseProjectsUpdateConnectionInput: LicenseProjectsUpdateConnectionInput;
  LicenseProjectsUpdateFieldInput: LicenseProjectsUpdateFieldInput;
  LicenseRelationInput: LicenseRelationInput;
  LicenseSort: LicenseSort;
  LicenseUniqueWhere: LicenseUniqueWhere;
  LicenseUpdateInput: LicenseUpdateInput;
  LicenseWhere: LicenseWhere;
  LicensesConnection: ResolverTypeWrapper<LicensesConnection>;
  Member: ResolverTypeWrapper<Member>;
  MemberAggregateSelection: ResolverTypeWrapper<MemberAggregateSelection>;
  MemberCategoriesAggregateInput: MemberCategoriesAggregateInput;
  MemberCategoriesConnectFieldInput: MemberCategoriesConnectFieldInput;
  MemberCategoriesConnectOrCreateFieldInput: MemberCategoriesConnectOrCreateFieldInput;
  MemberCategoriesConnectOrCreateFieldInputOnCreate: MemberCategoriesConnectOrCreateFieldInputOnCreate;
  MemberCategoriesConnection: ResolverTypeWrapper<MemberCategoriesConnection>;
  MemberCategoriesConnectionSort: MemberCategoriesConnectionSort;
  MemberCategoriesConnectionWhere: MemberCategoriesConnectionWhere;
  MemberCategoriesCreateFieldInput: MemberCategoriesCreateFieldInput;
  MemberCategoriesDeleteFieldInput: MemberCategoriesDeleteFieldInput;
  MemberCategoriesDisconnectFieldInput: MemberCategoriesDisconnectFieldInput;
  MemberCategoriesFieldInput: MemberCategoriesFieldInput;
  MemberCategoriesNodeAggregationWhereInput: MemberCategoriesNodeAggregationWhereInput;
  MemberCategoriesRelationship: ResolverTypeWrapper<MemberCategoriesRelationship>;
  MemberCategoriesUpdateConnectionInput: MemberCategoriesUpdateConnectionInput;
  MemberCategoriesUpdateFieldInput: MemberCategoriesUpdateFieldInput;
  MemberCategoryCategoriesAggregationSelection: ResolverTypeWrapper<MemberCategoryCategoriesAggregationSelection>;
  MemberCategoryCategoriesNodeAggregateSelection: ResolverTypeWrapper<MemberCategoryCategoriesNodeAggregateSelection>;
  MemberCncfMembershipsAggregateInput: MemberCncfMembershipsAggregateInput;
  MemberCncfMembershipsConnectFieldInput: MemberCncfMembershipsConnectFieldInput;
  MemberCncfMembershipsConnectOrCreateFieldInput: MemberCncfMembershipsConnectOrCreateFieldInput;
  MemberCncfMembershipsConnectOrCreateFieldInputOnCreate: MemberCncfMembershipsConnectOrCreateFieldInputOnCreate;
  MemberCncfMembershipsConnection: ResolverTypeWrapper<MemberCncfMembershipsConnection>;
  MemberCncfMembershipsConnectionSort: MemberCncfMembershipsConnectionSort;
  MemberCncfMembershipsConnectionWhere: MemberCncfMembershipsConnectionWhere;
  MemberCncfMembershipsCreateFieldInput: MemberCncfMembershipsCreateFieldInput;
  MemberCncfMembershipsDeleteFieldInput: MemberCncfMembershipsDeleteFieldInput;
  MemberCncfMembershipsDisconnectFieldInput: MemberCncfMembershipsDisconnectFieldInput;
  MemberCncfMembershipsFieldInput: MemberCncfMembershipsFieldInput;
  MemberCncfMembershipsNodeAggregationWhereInput: MemberCncfMembershipsNodeAggregationWhereInput;
  MemberCncfMembershipsRelationship: ResolverTypeWrapper<MemberCncfMembershipsRelationship>;
  MemberCncfMembershipsUpdateConnectionInput: MemberCncfMembershipsUpdateConnectionInput;
  MemberCncfMembershipsUpdateFieldInput: MemberCncfMembershipsUpdateFieldInput;
  MemberConnectInput: MemberConnectInput;
  MemberConnectOrCreateInput: MemberConnectOrCreateInput;
  MemberConnectOrCreateWhere: MemberConnectOrCreateWhere;
  MemberConnectWhere: MemberConnectWhere;
  MemberCreateInput: MemberCreateInput;
  MemberDeleteInput: MemberDeleteInput;
  MemberDisconnectInput: MemberDisconnectInput;
  MemberEUGEndUserGroupsAggregationSelection: ResolverTypeWrapper<MemberEugEndUserGroupsAggregationSelection>;
  MemberEUGEndUserGroupsNodeAggregateSelection: ResolverTypeWrapper<MemberEugEndUserGroupsNodeAggregateSelection>;
  MemberEdge: ResolverTypeWrapper<MemberEdge>;
  MemberEndUserGroupsAggregateInput: MemberEndUserGroupsAggregateInput;
  MemberEndUserGroupsConnectFieldInput: MemberEndUserGroupsConnectFieldInput;
  MemberEndUserGroupsConnectOrCreateFieldInput: MemberEndUserGroupsConnectOrCreateFieldInput;
  MemberEndUserGroupsConnectOrCreateFieldInputOnCreate: MemberEndUserGroupsConnectOrCreateFieldInputOnCreate;
  MemberEndUserGroupsConnection: ResolverTypeWrapper<MemberEndUserGroupsConnection>;
  MemberEndUserGroupsConnectionSort: MemberEndUserGroupsConnectionSort;
  MemberEndUserGroupsConnectionWhere: MemberEndUserGroupsConnectionWhere;
  MemberEndUserGroupsCreateFieldInput: MemberEndUserGroupsCreateFieldInput;
  MemberEndUserGroupsDeleteFieldInput: MemberEndUserGroupsDeleteFieldInput;
  MemberEndUserGroupsDisconnectFieldInput: MemberEndUserGroupsDisconnectFieldInput;
  MemberEndUserGroupsFieldInput: MemberEndUserGroupsFieldInput;
  MemberEndUserGroupsNodeAggregationWhereInput: MemberEndUserGroupsNodeAggregationWhereInput;
  MemberEndUserGroupsRelationship: ResolverTypeWrapper<MemberEndUserGroupsRelationship>;
  MemberEndUserGroupsUpdateConnectionInput: MemberEndUserGroupsUpdateConnectionInput;
  MemberEndUserGroupsUpdateFieldInput: MemberEndUserGroupsUpdateFieldInput;
  MemberMembershipTypeCncfMembershipsAggregationSelection: ResolverTypeWrapper<MemberMembershipTypeCncfMembershipsAggregationSelection>;
  MemberMembershipTypeCncfMembershipsNodeAggregateSelection: ResolverTypeWrapper<MemberMembershipTypeCncfMembershipsNodeAggregateSelection>;
  MemberOnCreateInput: MemberOnCreateInput;
  MemberOptions: MemberOptions;
  MemberOrganizationOrganizationsAggregationSelection: ResolverTypeWrapper<MemberOrganizationOrganizationsAggregationSelection>;
  MemberOrganizationOrganizationsNodeAggregateSelection: ResolverTypeWrapper<MemberOrganizationOrganizationsNodeAggregateSelection>;
  MemberOrganizationsAggregateInput: MemberOrganizationsAggregateInput;
  MemberOrganizationsConnectFieldInput: MemberOrganizationsConnectFieldInput;
  MemberOrganizationsConnectOrCreateFieldInput: MemberOrganizationsConnectOrCreateFieldInput;
  MemberOrganizationsConnectOrCreateFieldInputOnCreate: MemberOrganizationsConnectOrCreateFieldInputOnCreate;
  MemberOrganizationsConnection: ResolverTypeWrapper<MemberOrganizationsConnection>;
  MemberOrganizationsConnectionSort: MemberOrganizationsConnectionSort;
  MemberOrganizationsConnectionWhere: MemberOrganizationsConnectionWhere;
  MemberOrganizationsCreateFieldInput: MemberOrganizationsCreateFieldInput;
  MemberOrganizationsDeleteFieldInput: MemberOrganizationsDeleteFieldInput;
  MemberOrganizationsDisconnectFieldInput: MemberOrganizationsDisconnectFieldInput;
  MemberOrganizationsFieldInput: MemberOrganizationsFieldInput;
  MemberOrganizationsNodeAggregationWhereInput: MemberOrganizationsNodeAggregationWhereInput;
  MemberOrganizationsRelationship: ResolverTypeWrapper<MemberOrganizationsRelationship>;
  MemberOrganizationsUpdateConnectionInput: MemberOrganizationsUpdateConnectionInput;
  MemberOrganizationsUpdateFieldInput: MemberOrganizationsUpdateFieldInput;
  MemberRelationInput: MemberRelationInput;
  MemberSort: MemberSort;
  MemberUniqueWhere: MemberUniqueWhere;
  MemberUpdateInput: MemberUpdateInput;
  MemberWhere: MemberWhere;
  MembersConnection: ResolverTypeWrapper<MembersConnection>;
  MembershipType: ResolverTypeWrapper<MembershipType>;
  MembershipTypeAggregateSelection: ResolverTypeWrapper<MembershipTypeAggregateSelection>;
  MembershipTypeConnectInput: MembershipTypeConnectInput;
  MembershipTypeConnectOrCreateInput: MembershipTypeConnectOrCreateInput;
  MembershipTypeConnectOrCreateWhere: MembershipTypeConnectOrCreateWhere;
  MembershipTypeConnectWhere: MembershipTypeConnectWhere;
  MembershipTypeCreateInput: MembershipTypeCreateInput;
  MembershipTypeDeleteInput: MembershipTypeDeleteInput;
  MembershipTypeDisconnectInput: MembershipTypeDisconnectInput;
  MembershipTypeEdge: ResolverTypeWrapper<MembershipTypeEdge>;
  MembershipTypeMemberMembersAggregationSelection: ResolverTypeWrapper<MembershipTypeMemberMembersAggregationSelection>;
  MembershipTypeMemberMembersNodeAggregateSelection: ResolverTypeWrapper<MembershipTypeMemberMembersNodeAggregateSelection>;
  MembershipTypeMembersAggregateInput: MembershipTypeMembersAggregateInput;
  MembershipTypeMembersConnectFieldInput: MembershipTypeMembersConnectFieldInput;
  MembershipTypeMembersConnectOrCreateFieldInput: MembershipTypeMembersConnectOrCreateFieldInput;
  MembershipTypeMembersConnectOrCreateFieldInputOnCreate: MembershipTypeMembersConnectOrCreateFieldInputOnCreate;
  MembershipTypeMembersConnection: ResolverTypeWrapper<MembershipTypeMembersConnection>;
  MembershipTypeMembersConnectionSort: MembershipTypeMembersConnectionSort;
  MembershipTypeMembersConnectionWhere: MembershipTypeMembersConnectionWhere;
  MembershipTypeMembersCreateFieldInput: MembershipTypeMembersCreateFieldInput;
  MembershipTypeMembersDeleteFieldInput: MembershipTypeMembersDeleteFieldInput;
  MembershipTypeMembersDisconnectFieldInput: MembershipTypeMembersDisconnectFieldInput;
  MembershipTypeMembersFieldInput: MembershipTypeMembersFieldInput;
  MembershipTypeMembersNodeAggregationWhereInput: MembershipTypeMembersNodeAggregationWhereInput;
  MembershipTypeMembersRelationship: ResolverTypeWrapper<MembershipTypeMembersRelationship>;
  MembershipTypeMembersUpdateConnectionInput: MembershipTypeMembersUpdateConnectionInput;
  MembershipTypeMembersUpdateFieldInput: MembershipTypeMembersUpdateFieldInput;
  MembershipTypeOnCreateInput: MembershipTypeOnCreateInput;
  MembershipTypeOptions: MembershipTypeOptions;
  MembershipTypeRelationInput: MembershipTypeRelationInput;
  MembershipTypeSort: MembershipTypeSort;
  MembershipTypeUniqueWhere: MembershipTypeUniqueWhere;
  MembershipTypeUpdateInput: MembershipTypeUpdateInput;
  MembershipTypeWhere: MembershipTypeWhere;
  MembershipTypes: MembershipTypes;
  MembershipTypesConnection: ResolverTypeWrapper<MembershipTypesConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationAggregateSelection: ResolverTypeWrapper<OrganizationAggregateSelection>;
  OrganizationBoardAggregateInput: OrganizationBoardAggregateInput;
  OrganizationBoardConnectFieldInput: OrganizationBoardConnectFieldInput;
  OrganizationBoardConnectOrCreateFieldInput: OrganizationBoardConnectOrCreateFieldInput;
  OrganizationBoardConnectOrCreateFieldInputOnCreate: OrganizationBoardConnectOrCreateFieldInputOnCreate;
  OrganizationBoardConnection: ResolverTypeWrapper<OrganizationBoardConnection>;
  OrganizationBoardConnectionSort: OrganizationBoardConnectionSort;
  OrganizationBoardConnectionWhere: OrganizationBoardConnectionWhere;
  OrganizationBoardCreateFieldInput: OrganizationBoardCreateFieldInput;
  OrganizationBoardDeleteFieldInput: OrganizationBoardDeleteFieldInput;
  OrganizationBoardDisconnectFieldInput: OrganizationBoardDisconnectFieldInput;
  OrganizationBoardFieldInput: OrganizationBoardFieldInput;
  OrganizationBoardNodeAggregationWhereInput: OrganizationBoardNodeAggregationWhereInput;
  OrganizationBoardRelationship: ResolverTypeWrapper<OrganizationBoardRelationship>;
  OrganizationBoardUpdateConnectionInput: OrganizationBoardUpdateConnectionInput;
  OrganizationBoardUpdateFieldInput: OrganizationBoardUpdateFieldInput;
  OrganizationCityHeadquartersAggregationSelection: ResolverTypeWrapper<OrganizationCityHeadquartersAggregationSelection>;
  OrganizationCityHeadquartersNodeAggregateSelection: ResolverTypeWrapper<OrganizationCityHeadquartersNodeAggregateSelection>;
  OrganizationConnectInput: OrganizationConnectInput;
  OrganizationConnectOrCreateInput: OrganizationConnectOrCreateInput;
  OrganizationConnectOrCreateWhere: OrganizationConnectOrCreateWhere;
  OrganizationConnectWhere: OrganizationConnectWhere;
  OrganizationCreateInput: OrganizationCreateInput;
  OrganizationDeleteInput: OrganizationDeleteInput;
  OrganizationDisconnectInput: OrganizationDisconnectInput;
  OrganizationEdge: ResolverTypeWrapper<OrganizationEdge>;
  OrganizationEmployeesAggregateInput: OrganizationEmployeesAggregateInput;
  OrganizationEmployeesConnectFieldInput: OrganizationEmployeesConnectFieldInput;
  OrganizationEmployeesConnectOrCreateFieldInput: OrganizationEmployeesConnectOrCreateFieldInput;
  OrganizationEmployeesConnectOrCreateFieldInputOnCreate: OrganizationEmployeesConnectOrCreateFieldInputOnCreate;
  OrganizationEmployeesConnection: ResolverTypeWrapper<OrganizationEmployeesConnection>;
  OrganizationEmployeesConnectionSort: OrganizationEmployeesConnectionSort;
  OrganizationEmployeesConnectionWhere: OrganizationEmployeesConnectionWhere;
  OrganizationEmployeesCreateFieldInput: OrganizationEmployeesCreateFieldInput;
  OrganizationEmployeesDeleteFieldInput: OrganizationEmployeesDeleteFieldInput;
  OrganizationEmployeesDisconnectFieldInput: OrganizationEmployeesDisconnectFieldInput;
  OrganizationEmployeesFieldInput: OrganizationEmployeesFieldInput;
  OrganizationEmployeesNodeAggregationWhereInput: OrganizationEmployeesNodeAggregationWhereInput;
  OrganizationEmployeesRelationship: ResolverTypeWrapper<OrganizationEmployeesRelationship>;
  OrganizationEmployeesUpdateConnectionInput: OrganizationEmployeesUpdateConnectionInput;
  OrganizationEmployeesUpdateFieldInput: OrganizationEmployeesUpdateFieldInput;
  OrganizationHeadquartersAggregateInput: OrganizationHeadquartersAggregateInput;
  OrganizationHeadquartersConnectFieldInput: OrganizationHeadquartersConnectFieldInput;
  OrganizationHeadquartersConnectOrCreateFieldInput: OrganizationHeadquartersConnectOrCreateFieldInput;
  OrganizationHeadquartersConnectOrCreateFieldInputOnCreate: OrganizationHeadquartersConnectOrCreateFieldInputOnCreate;
  OrganizationHeadquartersConnection: ResolverTypeWrapper<OrganizationHeadquartersConnection>;
  OrganizationHeadquartersConnectionSort: OrganizationHeadquartersConnectionSort;
  OrganizationHeadquartersConnectionWhere: OrganizationHeadquartersConnectionWhere;
  OrganizationHeadquartersCreateFieldInput: OrganizationHeadquartersCreateFieldInput;
  OrganizationHeadquartersDeleteFieldInput: OrganizationHeadquartersDeleteFieldInput;
  OrganizationHeadquartersDisconnectFieldInput: OrganizationHeadquartersDisconnectFieldInput;
  OrganizationHeadquartersFieldInput: OrganizationHeadquartersFieldInput;
  OrganizationHeadquartersNodeAggregationWhereInput: OrganizationHeadquartersNodeAggregationWhereInput;
  OrganizationHeadquartersRelationship: ResolverTypeWrapper<OrganizationHeadquartersRelationship>;
  OrganizationHeadquartersUpdateConnectionInput: OrganizationHeadquartersUpdateConnectionInput;
  OrganizationHeadquartersUpdateFieldInput: OrganizationHeadquartersUpdateFieldInput;
  OrganizationIndustriesAggregateInput: OrganizationIndustriesAggregateInput;
  OrganizationIndustriesConnectFieldInput: OrganizationIndustriesConnectFieldInput;
  OrganizationIndustriesConnectOrCreateFieldInput: OrganizationIndustriesConnectOrCreateFieldInput;
  OrganizationIndustriesConnectOrCreateFieldInputOnCreate: OrganizationIndustriesConnectOrCreateFieldInputOnCreate;
  OrganizationIndustriesConnection: ResolverTypeWrapper<OrganizationIndustriesConnection>;
  OrganizationIndustriesConnectionSort: OrganizationIndustriesConnectionSort;
  OrganizationIndustriesConnectionWhere: OrganizationIndustriesConnectionWhere;
  OrganizationIndustriesCreateFieldInput: OrganizationIndustriesCreateFieldInput;
  OrganizationIndustriesDeleteFieldInput: OrganizationIndustriesDeleteFieldInput;
  OrganizationIndustriesDisconnectFieldInput: OrganizationIndustriesDisconnectFieldInput;
  OrganizationIndustriesFieldInput: OrganizationIndustriesFieldInput;
  OrganizationIndustriesNodeAggregationWhereInput: OrganizationIndustriesNodeAggregationWhereInput;
  OrganizationIndustriesRelationship: ResolverTypeWrapper<OrganizationIndustriesRelationship>;
  OrganizationIndustriesUpdateConnectionInput: OrganizationIndustriesUpdateConnectionInput;
  OrganizationIndustriesUpdateFieldInput: OrganizationIndustriesUpdateFieldInput;
  OrganizationIndustryIndustriesAggregationSelection: ResolverTypeWrapper<OrganizationIndustryIndustriesAggregationSelection>;
  OrganizationIndustryIndustriesNodeAggregateSelection: ResolverTypeWrapper<OrganizationIndustryIndustriesNodeAggregateSelection>;
  OrganizationMemberOwnedByAggregationSelection: ResolverTypeWrapper<OrganizationMemberOwnedByAggregationSelection>;
  OrganizationMemberOwnedByNodeAggregateSelection: ResolverTypeWrapper<OrganizationMemberOwnedByNodeAggregateSelection>;
  OrganizationOnCreateInput: OrganizationOnCreateInput;
  OrganizationOptions: OrganizationOptions;
  OrganizationOrganizationParentOrgAggregationSelection: ResolverTypeWrapper<OrganizationOrganizationParentOrgAggregationSelection>;
  OrganizationOrganizationParentOrgNodeAggregateSelection: ResolverTypeWrapper<OrganizationOrganizationParentOrgNodeAggregateSelection>;
  OrganizationOrganizationSubOrgsAggregationSelection: ResolverTypeWrapper<OrganizationOrganizationSubOrgsAggregationSelection>;
  OrganizationOrganizationSubOrgsNodeAggregateSelection: ResolverTypeWrapper<OrganizationOrganizationSubOrgsNodeAggregateSelection>;
  OrganizationOwnedByAggregateInput: OrganizationOwnedByAggregateInput;
  OrganizationOwnedByConnectFieldInput: OrganizationOwnedByConnectFieldInput;
  OrganizationOwnedByConnectOrCreateFieldInput: OrganizationOwnedByConnectOrCreateFieldInput;
  OrganizationOwnedByConnectOrCreateFieldInputOnCreate: OrganizationOwnedByConnectOrCreateFieldInputOnCreate;
  OrganizationOwnedByConnection: ResolverTypeWrapper<OrganizationOwnedByConnection>;
  OrganizationOwnedByConnectionSort: OrganizationOwnedByConnectionSort;
  OrganizationOwnedByConnectionWhere: OrganizationOwnedByConnectionWhere;
  OrganizationOwnedByCreateFieldInput: OrganizationOwnedByCreateFieldInput;
  OrganizationOwnedByDeleteFieldInput: OrganizationOwnedByDeleteFieldInput;
  OrganizationOwnedByDisconnectFieldInput: OrganizationOwnedByDisconnectFieldInput;
  OrganizationOwnedByFieldInput: OrganizationOwnedByFieldInput;
  OrganizationOwnedByNodeAggregationWhereInput: OrganizationOwnedByNodeAggregationWhereInput;
  OrganizationOwnedByRelationship: ResolverTypeWrapper<OrganizationOwnedByRelationship>;
  OrganizationOwnedByUpdateConnectionInput: OrganizationOwnedByUpdateConnectionInput;
  OrganizationOwnedByUpdateFieldInput: OrganizationOwnedByUpdateFieldInput;
  OrganizationParentOrgAggregateInput: OrganizationParentOrgAggregateInput;
  OrganizationParentOrgConnectFieldInput: OrganizationParentOrgConnectFieldInput;
  OrganizationParentOrgConnectOrCreateFieldInput: OrganizationParentOrgConnectOrCreateFieldInput;
  OrganizationParentOrgConnectOrCreateFieldInputOnCreate: OrganizationParentOrgConnectOrCreateFieldInputOnCreate;
  OrganizationParentOrgConnection: ResolverTypeWrapper<OrganizationParentOrgConnection>;
  OrganizationParentOrgConnectionSort: OrganizationParentOrgConnectionSort;
  OrganizationParentOrgConnectionWhere: OrganizationParentOrgConnectionWhere;
  OrganizationParentOrgCreateFieldInput: OrganizationParentOrgCreateFieldInput;
  OrganizationParentOrgDeleteFieldInput: OrganizationParentOrgDeleteFieldInput;
  OrganizationParentOrgDisconnectFieldInput: OrganizationParentOrgDisconnectFieldInput;
  OrganizationParentOrgFieldInput: OrganizationParentOrgFieldInput;
  OrganizationParentOrgNodeAggregationWhereInput: OrganizationParentOrgNodeAggregationWhereInput;
  OrganizationParentOrgRelationship: ResolverTypeWrapper<OrganizationParentOrgRelationship>;
  OrganizationParentOrgUpdateConnectionInput: OrganizationParentOrgUpdateConnectionInput;
  OrganizationParentOrgUpdateFieldInput: OrganizationParentOrgUpdateFieldInput;
  OrganizationPersonBoardAggregationSelection: ResolverTypeWrapper<OrganizationPersonBoardAggregationSelection>;
  OrganizationPersonBoardNodeAggregateSelection: ResolverTypeWrapper<OrganizationPersonBoardNodeAggregateSelection>;
  OrganizationPersonEmployeesAggregationSelection: ResolverTypeWrapper<OrganizationPersonEmployeesAggregationSelection>;
  OrganizationPersonEmployeesNodeAggregateSelection: ResolverTypeWrapper<OrganizationPersonEmployeesNodeAggregateSelection>;
  OrganizationRelationInput: OrganizationRelationInput;
  OrganizationSort: OrganizationSort;
  OrganizationSubOrgsAggregateInput: OrganizationSubOrgsAggregateInput;
  OrganizationSubOrgsConnectFieldInput: OrganizationSubOrgsConnectFieldInput;
  OrganizationSubOrgsConnectOrCreateFieldInput: OrganizationSubOrgsConnectOrCreateFieldInput;
  OrganizationSubOrgsConnectOrCreateFieldInputOnCreate: OrganizationSubOrgsConnectOrCreateFieldInputOnCreate;
  OrganizationSubOrgsConnection: ResolverTypeWrapper<OrganizationSubOrgsConnection>;
  OrganizationSubOrgsConnectionSort: OrganizationSubOrgsConnectionSort;
  OrganizationSubOrgsConnectionWhere: OrganizationSubOrgsConnectionWhere;
  OrganizationSubOrgsCreateFieldInput: OrganizationSubOrgsCreateFieldInput;
  OrganizationSubOrgsDeleteFieldInput: OrganizationSubOrgsDeleteFieldInput;
  OrganizationSubOrgsDisconnectFieldInput: OrganizationSubOrgsDisconnectFieldInput;
  OrganizationSubOrgsFieldInput: OrganizationSubOrgsFieldInput;
  OrganizationSubOrgsNodeAggregationWhereInput: OrganizationSubOrgsNodeAggregationWhereInput;
  OrganizationSubOrgsRelationship: ResolverTypeWrapper<OrganizationSubOrgsRelationship>;
  OrganizationSubOrgsUpdateConnectionInput: OrganizationSubOrgsUpdateConnectionInput;
  OrganizationSubOrgsUpdateFieldInput: OrganizationSubOrgsUpdateFieldInput;
  OrganizationUniqueWhere: OrganizationUniqueWhere;
  OrganizationUpdateInput: OrganizationUpdateInput;
  OrganizationWhere: OrganizationWhere;
  OrganizationsConnection: ResolverTypeWrapper<OrganizationsConnection>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PeopleConnection: ResolverTypeWrapper<PeopleConnection>;
  Person: ResolverTypeWrapper<Person>;
  PersonAggregateSelection: ResolverTypeWrapper<PersonAggregateSelection>;
  PersonBoardsAggregateInput: PersonBoardsAggregateInput;
  PersonBoardsConnectFieldInput: PersonBoardsConnectFieldInput;
  PersonBoardsConnectOrCreateFieldInput: PersonBoardsConnectOrCreateFieldInput;
  PersonBoardsConnectOrCreateFieldInputOnCreate: PersonBoardsConnectOrCreateFieldInputOnCreate;
  PersonBoardsConnection: ResolverTypeWrapper<PersonBoardsConnection>;
  PersonBoardsConnectionSort: PersonBoardsConnectionSort;
  PersonBoardsConnectionWhere: PersonBoardsConnectionWhere;
  PersonBoardsCreateFieldInput: PersonBoardsCreateFieldInput;
  PersonBoardsDeleteFieldInput: PersonBoardsDeleteFieldInput;
  PersonBoardsDisconnectFieldInput: PersonBoardsDisconnectFieldInput;
  PersonBoardsFieldInput: PersonBoardsFieldInput;
  PersonBoardsNodeAggregationWhereInput: PersonBoardsNodeAggregationWhereInput;
  PersonBoardsRelationship: ResolverTypeWrapper<PersonBoardsRelationship>;
  PersonBoardsUpdateConnectionInput: PersonBoardsUpdateConnectionInput;
  PersonBoardsUpdateFieldInput: PersonBoardsUpdateFieldInput;
  PersonConnectInput: PersonConnectInput;
  PersonConnectOrCreateInput: PersonConnectOrCreateInput;
  PersonConnectOrCreateWhere: PersonConnectOrCreateWhere;
  PersonConnectWhere: PersonConnectWhere;
  PersonCreateInput: PersonCreateInput;
  PersonDeleteInput: PersonDeleteInput;
  PersonDisconnectInput: PersonDisconnectInput;
  PersonEUGEugRolesAggregationSelection: ResolverTypeWrapper<PersonEugEugRolesAggregationSelection>;
  PersonEUGEugRolesNodeAggregateSelection: ResolverTypeWrapper<PersonEugEugRolesNodeAggregateSelection>;
  PersonEdge: ResolverTypeWrapper<PersonEdge>;
  PersonEmployersAggregateInput: PersonEmployersAggregateInput;
  PersonEmployersConnectFieldInput: PersonEmployersConnectFieldInput;
  PersonEmployersConnectOrCreateFieldInput: PersonEmployersConnectOrCreateFieldInput;
  PersonEmployersConnectOrCreateFieldInputOnCreate: PersonEmployersConnectOrCreateFieldInputOnCreate;
  PersonEmployersConnection: ResolverTypeWrapper<PersonEmployersConnection>;
  PersonEmployersConnectionSort: PersonEmployersConnectionSort;
  PersonEmployersConnectionWhere: PersonEmployersConnectionWhere;
  PersonEmployersCreateFieldInput: PersonEmployersCreateFieldInput;
  PersonEmployersDeleteFieldInput: PersonEmployersDeleteFieldInput;
  PersonEmployersDisconnectFieldInput: PersonEmployersDisconnectFieldInput;
  PersonEmployersFieldInput: PersonEmployersFieldInput;
  PersonEmployersNodeAggregationWhereInput: PersonEmployersNodeAggregationWhereInput;
  PersonEmployersRelationship: ResolverTypeWrapper<PersonEmployersRelationship>;
  PersonEmployersUpdateConnectionInput: PersonEmployersUpdateConnectionInput;
  PersonEmployersUpdateFieldInput: PersonEmployersUpdateFieldInput;
  PersonEugRolesAggregateInput: PersonEugRolesAggregateInput;
  PersonEugRolesConnectFieldInput: PersonEugRolesConnectFieldInput;
  PersonEugRolesConnectOrCreateFieldInput: PersonEugRolesConnectOrCreateFieldInput;
  PersonEugRolesConnectOrCreateFieldInputOnCreate: PersonEugRolesConnectOrCreateFieldInputOnCreate;
  PersonEugRolesConnection: ResolverTypeWrapper<PersonEugRolesConnection>;
  PersonEugRolesConnectionSort: PersonEugRolesConnectionSort;
  PersonEugRolesConnectionWhere: PersonEugRolesConnectionWhere;
  PersonEugRolesCreateFieldInput: PersonEugRolesCreateFieldInput;
  PersonEugRolesDeleteFieldInput: PersonEugRolesDeleteFieldInput;
  PersonEugRolesDisconnectFieldInput: PersonEugRolesDisconnectFieldInput;
  PersonEugRolesFieldInput: PersonEugRolesFieldInput;
  PersonEugRolesNodeAggregationWhereInput: PersonEugRolesNodeAggregationWhereInput;
  PersonEugRolesRelationship: ResolverTypeWrapper<PersonEugRolesRelationship>;
  PersonEugRolesUpdateConnectionInput: PersonEugRolesUpdateConnectionInput;
  PersonEugRolesUpdateFieldInput: PersonEugRolesUpdateFieldInput;
  PersonOnCreateInput: PersonOnCreateInput;
  PersonOptions: PersonOptions;
  PersonOrganizationBoardsAggregationSelection: ResolverTypeWrapper<PersonOrganizationBoardsAggregationSelection>;
  PersonOrganizationBoardsNodeAggregateSelection: ResolverTypeWrapper<PersonOrganizationBoardsNodeAggregateSelection>;
  PersonOrganizationEmployersAggregationSelection: ResolverTypeWrapper<PersonOrganizationEmployersAggregationSelection>;
  PersonOrganizationEmployersNodeAggregateSelection: ResolverTypeWrapper<PersonOrganizationEmployersNodeAggregateSelection>;
  PersonProjRolesAggregateInput: PersonProjRolesAggregateInput;
  PersonProjRolesConnectFieldInput: PersonProjRolesConnectFieldInput;
  PersonProjRolesConnectOrCreateFieldInput: PersonProjRolesConnectOrCreateFieldInput;
  PersonProjRolesConnectOrCreateFieldInputOnCreate: PersonProjRolesConnectOrCreateFieldInputOnCreate;
  PersonProjRolesConnection: ResolverTypeWrapper<PersonProjRolesConnection>;
  PersonProjRolesConnectionSort: PersonProjRolesConnectionSort;
  PersonProjRolesConnectionWhere: PersonProjRolesConnectionWhere;
  PersonProjRolesCreateFieldInput: PersonProjRolesCreateFieldInput;
  PersonProjRolesDeleteFieldInput: PersonProjRolesDeleteFieldInput;
  PersonProjRolesDisconnectFieldInput: PersonProjRolesDisconnectFieldInput;
  PersonProjRolesFieldInput: PersonProjRolesFieldInput;
  PersonProjRolesNodeAggregationWhereInput: PersonProjRolesNodeAggregationWhereInput;
  PersonProjRolesRelationship: ResolverTypeWrapper<PersonProjRolesRelationship>;
  PersonProjRolesUpdateConnectionInput: PersonProjRolesUpdateConnectionInput;
  PersonProjRolesUpdateFieldInput: PersonProjRolesUpdateFieldInput;
  PersonProjectProjRolesAggregationSelection: ResolverTypeWrapper<PersonProjectProjRolesAggregationSelection>;
  PersonProjectProjRolesNodeAggregateSelection: ResolverTypeWrapper<PersonProjectProjRolesNodeAggregateSelection>;
  PersonRelationInput: PersonRelationInput;
  PersonSort: PersonSort;
  PersonTAGTagRolesAggregationSelection: ResolverTypeWrapper<PersonTagTagRolesAggregationSelection>;
  PersonTAGTagRolesNodeAggregateSelection: ResolverTypeWrapper<PersonTagTagRolesNodeAggregateSelection>;
  PersonTOCTocRolesAggregationSelection: ResolverTypeWrapper<PersonTocTocRolesAggregationSelection>;
  PersonTOCTocRolesNodeAggregateSelection: ResolverTypeWrapper<PersonTocTocRolesNodeAggregateSelection>;
  PersonTagRolesAggregateInput: PersonTagRolesAggregateInput;
  PersonTagRolesConnectFieldInput: PersonTagRolesConnectFieldInput;
  PersonTagRolesConnectOrCreateFieldInput: PersonTagRolesConnectOrCreateFieldInput;
  PersonTagRolesConnectOrCreateFieldInputOnCreate: PersonTagRolesConnectOrCreateFieldInputOnCreate;
  PersonTagRolesConnection: ResolverTypeWrapper<PersonTagRolesConnection>;
  PersonTagRolesConnectionSort: PersonTagRolesConnectionSort;
  PersonTagRolesConnectionWhere: PersonTagRolesConnectionWhere;
  PersonTagRolesCreateFieldInput: PersonTagRolesCreateFieldInput;
  PersonTagRolesDeleteFieldInput: PersonTagRolesDeleteFieldInput;
  PersonTagRolesDisconnectFieldInput: PersonTagRolesDisconnectFieldInput;
  PersonTagRolesFieldInput: PersonTagRolesFieldInput;
  PersonTagRolesNodeAggregationWhereInput: PersonTagRolesNodeAggregationWhereInput;
  PersonTagRolesRelationship: ResolverTypeWrapper<PersonTagRolesRelationship>;
  PersonTagRolesUpdateConnectionInput: PersonTagRolesUpdateConnectionInput;
  PersonTagRolesUpdateFieldInput: PersonTagRolesUpdateFieldInput;
  PersonTocRolesAggregateInput: PersonTocRolesAggregateInput;
  PersonTocRolesConnectFieldInput: PersonTocRolesConnectFieldInput;
  PersonTocRolesConnectOrCreateFieldInput: PersonTocRolesConnectOrCreateFieldInput;
  PersonTocRolesConnectOrCreateFieldInputOnCreate: PersonTocRolesConnectOrCreateFieldInputOnCreate;
  PersonTocRolesConnection: ResolverTypeWrapper<PersonTocRolesConnection>;
  PersonTocRolesConnectionSort: PersonTocRolesConnectionSort;
  PersonTocRolesConnectionWhere: PersonTocRolesConnectionWhere;
  PersonTocRolesCreateFieldInput: PersonTocRolesCreateFieldInput;
  PersonTocRolesDeleteFieldInput: PersonTocRolesDeleteFieldInput;
  PersonTocRolesDisconnectFieldInput: PersonTocRolesDisconnectFieldInput;
  PersonTocRolesFieldInput: PersonTocRolesFieldInput;
  PersonTocRolesNodeAggregationWhereInput: PersonTocRolesNodeAggregationWhereInput;
  PersonTocRolesRelationship: ResolverTypeWrapper<PersonTocRolesRelationship>;
  PersonTocRolesUpdateConnectionInput: PersonTocRolesUpdateConnectionInput;
  PersonTocRolesUpdateFieldInput: PersonTocRolesUpdateFieldInput;
  PersonUniqueWhere: PersonUniqueWhere;
  PersonUpdateInput: PersonUpdateInput;
  PersonWhere: PersonWhere;
  Project: ResolverTypeWrapper<Project>;
  ProjectAggregateSelection: ResolverTypeWrapper<ProjectAggregateSelection>;
  ProjectCategoriesAggregateInput: ProjectCategoriesAggregateInput;
  ProjectCategoriesConnectFieldInput: ProjectCategoriesConnectFieldInput;
  ProjectCategoriesConnectOrCreateFieldInput: ProjectCategoriesConnectOrCreateFieldInput;
  ProjectCategoriesConnectOrCreateFieldInputOnCreate: ProjectCategoriesConnectOrCreateFieldInputOnCreate;
  ProjectCategoriesConnection: ResolverTypeWrapper<ProjectCategoriesConnection>;
  ProjectCategoriesConnectionSort: ProjectCategoriesConnectionSort;
  ProjectCategoriesConnectionWhere: ProjectCategoriesConnectionWhere;
  ProjectCategoriesCreateFieldInput: ProjectCategoriesCreateFieldInput;
  ProjectCategoriesDeleteFieldInput: ProjectCategoriesDeleteFieldInput;
  ProjectCategoriesDisconnectFieldInput: ProjectCategoriesDisconnectFieldInput;
  ProjectCategoriesFieldInput: ProjectCategoriesFieldInput;
  ProjectCategoriesNodeAggregationWhereInput: ProjectCategoriesNodeAggregationWhereInput;
  ProjectCategoriesRelationship: ResolverTypeWrapper<ProjectCategoriesRelationship>;
  ProjectCategoriesUpdateConnectionInput: ProjectCategoriesUpdateConnectionInput;
  ProjectCategoriesUpdateFieldInput: ProjectCategoriesUpdateFieldInput;
  ProjectCategoryCategoriesAggregationSelection: ResolverTypeWrapper<ProjectCategoryCategoriesAggregationSelection>;
  ProjectCategoryCategoriesNodeAggregateSelection: ResolverTypeWrapper<ProjectCategoryCategoriesNodeAggregateSelection>;
  ProjectConnectInput: ProjectConnectInput;
  ProjectConnectOrCreateInput: ProjectConnectOrCreateInput;
  ProjectConnectOrCreateWhere: ProjectConnectOrCreateWhere;
  ProjectConnectWhere: ProjectConnectWhere;
  ProjectCreateInput: ProjectCreateInput;
  ProjectDeleteInput: ProjectDeleteInput;
  ProjectDisconnectInput: ProjectDisconnectInput;
  ProjectEdge: ResolverTypeWrapper<ProjectEdge>;
  ProjectLanguageLanguagesAggregationSelection: ResolverTypeWrapper<ProjectLanguageLanguagesAggregationSelection>;
  ProjectLanguageLanguagesNodeAggregateSelection: ResolverTypeWrapper<ProjectLanguageLanguagesNodeAggregateSelection>;
  ProjectLanguagesAggregateInput: ProjectLanguagesAggregateInput;
  ProjectLanguagesConnectFieldInput: ProjectLanguagesConnectFieldInput;
  ProjectLanguagesConnectOrCreateFieldInput: ProjectLanguagesConnectOrCreateFieldInput;
  ProjectLanguagesConnectOrCreateFieldInputOnCreate: ProjectLanguagesConnectOrCreateFieldInputOnCreate;
  ProjectLanguagesConnection: ResolverTypeWrapper<ProjectLanguagesConnection>;
  ProjectLanguagesConnectionSort: ProjectLanguagesConnectionSort;
  ProjectLanguagesConnectionWhere: ProjectLanguagesConnectionWhere;
  ProjectLanguagesCreateFieldInput: ProjectLanguagesCreateFieldInput;
  ProjectLanguagesDeleteFieldInput: ProjectLanguagesDeleteFieldInput;
  ProjectLanguagesDisconnectFieldInput: ProjectLanguagesDisconnectFieldInput;
  ProjectLanguagesFieldInput: ProjectLanguagesFieldInput;
  ProjectLanguagesNodeAggregationWhereInput: ProjectLanguagesNodeAggregationWhereInput;
  ProjectLanguagesRelationship: ResolverTypeWrapper<ProjectLanguagesRelationship>;
  ProjectLanguagesUpdateConnectionInput: ProjectLanguagesUpdateConnectionInput;
  ProjectLanguagesUpdateFieldInput: ProjectLanguagesUpdateFieldInput;
  ProjectLicenseLicensesAggregationSelection: ResolverTypeWrapper<ProjectLicenseLicensesAggregationSelection>;
  ProjectLicenseLicensesNodeAggregateSelection: ResolverTypeWrapper<ProjectLicenseLicensesNodeAggregateSelection>;
  ProjectLicensesAggregateInput: ProjectLicensesAggregateInput;
  ProjectLicensesConnectFieldInput: ProjectLicensesConnectFieldInput;
  ProjectLicensesConnectOrCreateFieldInput: ProjectLicensesConnectOrCreateFieldInput;
  ProjectLicensesConnectOrCreateFieldInputOnCreate: ProjectLicensesConnectOrCreateFieldInputOnCreate;
  ProjectLicensesConnection: ResolverTypeWrapper<ProjectLicensesConnection>;
  ProjectLicensesConnectionSort: ProjectLicensesConnectionSort;
  ProjectLicensesConnectionWhere: ProjectLicensesConnectionWhere;
  ProjectLicensesCreateFieldInput: ProjectLicensesCreateFieldInput;
  ProjectLicensesDeleteFieldInput: ProjectLicensesDeleteFieldInput;
  ProjectLicensesDisconnectFieldInput: ProjectLicensesDisconnectFieldInput;
  ProjectLicensesFieldInput: ProjectLicensesFieldInput;
  ProjectLicensesNodeAggregationWhereInput: ProjectLicensesNodeAggregationWhereInput;
  ProjectLicensesRelationship: ResolverTypeWrapper<ProjectLicensesRelationship>;
  ProjectLicensesUpdateConnectionInput: ProjectLicensesUpdateConnectionInput;
  ProjectLicensesUpdateFieldInput: ProjectLicensesUpdateFieldInput;
  ProjectOnCreateInput: ProjectOnCreateInput;
  ProjectOptions: ProjectOptions;
  ProjectPersonProjRolesAggregationSelection: ResolverTypeWrapper<ProjectPersonProjRolesAggregationSelection>;
  ProjectPersonProjRolesNodeAggregateSelection: ResolverTypeWrapper<ProjectPersonProjRolesNodeAggregateSelection>;
  ProjectPhase: ResolverTypeWrapper<ProjectPhase>;
  ProjectPhaseAggregateSelection: ResolverTypeWrapper<ProjectPhaseAggregateSelection>;
  ProjectPhaseConnectInput: ProjectPhaseConnectInput;
  ProjectPhaseConnectOrCreateInput: ProjectPhaseConnectOrCreateInput;
  ProjectPhaseConnectOrCreateWhere: ProjectPhaseConnectOrCreateWhere;
  ProjectPhaseConnectWhere: ProjectPhaseConnectWhere;
  ProjectPhaseCreateInput: ProjectPhaseCreateInput;
  ProjectPhaseDeleteInput: ProjectPhaseDeleteInput;
  ProjectPhaseDisconnectInput: ProjectPhaseDisconnectInput;
  ProjectPhaseEdge: ResolverTypeWrapper<ProjectPhaseEdge>;
  ProjectPhaseOnCreateInput: ProjectPhaseOnCreateInput;
  ProjectPhaseOptions: ProjectPhaseOptions;
  ProjectPhaseProjectProjectsAggregationSelection: ResolverTypeWrapper<ProjectPhaseProjectProjectsAggregationSelection>;
  ProjectPhaseProjectProjectsNodeAggregateSelection: ResolverTypeWrapper<ProjectPhaseProjectProjectsNodeAggregateSelection>;
  ProjectPhaseProjectsAggregateInput: ProjectPhaseProjectsAggregateInput;
  ProjectPhaseProjectsConnectFieldInput: ProjectPhaseProjectsConnectFieldInput;
  ProjectPhaseProjectsConnectOrCreateFieldInput: ProjectPhaseProjectsConnectOrCreateFieldInput;
  ProjectPhaseProjectsConnectOrCreateFieldInputOnCreate: ProjectPhaseProjectsConnectOrCreateFieldInputOnCreate;
  ProjectPhaseProjectsConnection: ResolverTypeWrapper<ProjectPhaseProjectsConnection>;
  ProjectPhaseProjectsConnectionSort: ProjectPhaseProjectsConnectionSort;
  ProjectPhaseProjectsConnectionWhere: ProjectPhaseProjectsConnectionWhere;
  ProjectPhaseProjectsCreateFieldInput: ProjectPhaseProjectsCreateFieldInput;
  ProjectPhaseProjectsDeleteFieldInput: ProjectPhaseProjectsDeleteFieldInput;
  ProjectPhaseProjectsDisconnectFieldInput: ProjectPhaseProjectsDisconnectFieldInput;
  ProjectPhaseProjectsFieldInput: ProjectPhaseProjectsFieldInput;
  ProjectPhaseProjectsNodeAggregationWhereInput: ProjectPhaseProjectsNodeAggregationWhereInput;
  ProjectPhaseProjectsRelationship: ResolverTypeWrapper<ProjectPhaseProjectsRelationship>;
  ProjectPhaseProjectsUpdateConnectionInput: ProjectPhaseProjectsUpdateConnectionInput;
  ProjectPhaseProjectsUpdateFieldInput: ProjectPhaseProjectsUpdateFieldInput;
  ProjectPhaseRelationInput: ProjectPhaseRelationInput;
  ProjectPhaseSort: ProjectPhaseSort;
  ProjectPhaseUniqueWhere: ProjectPhaseUniqueWhere;
  ProjectPhaseUpdateInput: ProjectPhaseUpdateInput;
  ProjectPhaseWhere: ProjectPhaseWhere;
  ProjectPhases: ProjectPhases;
  ProjectPhasesConnection: ResolverTypeWrapper<ProjectPhasesConnection>;
  ProjectProjRolesAggregateInput: ProjectProjRolesAggregateInput;
  ProjectProjRolesConnectFieldInput: ProjectProjRolesConnectFieldInput;
  ProjectProjRolesConnectOrCreateFieldInput: ProjectProjRolesConnectOrCreateFieldInput;
  ProjectProjRolesConnectOrCreateFieldInputOnCreate: ProjectProjRolesConnectOrCreateFieldInputOnCreate;
  ProjectProjRolesConnection: ResolverTypeWrapper<ProjectProjRolesConnection>;
  ProjectProjRolesConnectionSort: ProjectProjRolesConnectionSort;
  ProjectProjRolesConnectionWhere: ProjectProjRolesConnectionWhere;
  ProjectProjRolesCreateFieldInput: ProjectProjRolesCreateFieldInput;
  ProjectProjRolesDeleteFieldInput: ProjectProjRolesDeleteFieldInput;
  ProjectProjRolesDisconnectFieldInput: ProjectProjRolesDisconnectFieldInput;
  ProjectProjRolesFieldInput: ProjectProjRolesFieldInput;
  ProjectProjRolesNodeAggregationWhereInput: ProjectProjRolesNodeAggregationWhereInput;
  ProjectProjRolesRelationship: ResolverTypeWrapper<ProjectProjRolesRelationship>;
  ProjectProjRolesUpdateConnectionInput: ProjectProjRolesUpdateConnectionInput;
  ProjectProjRolesUpdateFieldInput: ProjectProjRolesUpdateFieldInput;
  ProjectProjectLevelsAggregateInput: ProjectProjectLevelsAggregateInput;
  ProjectProjectLevelsConnectFieldInput: ProjectProjectLevelsConnectFieldInput;
  ProjectProjectLevelsConnectOrCreateFieldInput: ProjectProjectLevelsConnectOrCreateFieldInput;
  ProjectProjectLevelsConnectOrCreateFieldInputOnCreate: ProjectProjectLevelsConnectOrCreateFieldInputOnCreate;
  ProjectProjectLevelsConnection: ResolverTypeWrapper<ProjectProjectLevelsConnection>;
  ProjectProjectLevelsConnectionSort: ProjectProjectLevelsConnectionSort;
  ProjectProjectLevelsConnectionWhere: ProjectProjectLevelsConnectionWhere;
  ProjectProjectLevelsCreateFieldInput: ProjectProjectLevelsCreateFieldInput;
  ProjectProjectLevelsDeleteFieldInput: ProjectProjectLevelsDeleteFieldInput;
  ProjectProjectLevelsDisconnectFieldInput: ProjectProjectLevelsDisconnectFieldInput;
  ProjectProjectLevelsFieldInput: ProjectProjectLevelsFieldInput;
  ProjectProjectLevelsNodeAggregationWhereInput: ProjectProjectLevelsNodeAggregationWhereInput;
  ProjectProjectLevelsRelationship: ResolverTypeWrapper<ProjectProjectLevelsRelationship>;
  ProjectProjectLevelsUpdateConnectionInput: ProjectProjectLevelsUpdateConnectionInput;
  ProjectProjectLevelsUpdateFieldInput: ProjectProjectLevelsUpdateFieldInput;
  ProjectProjectPhaseProjectLevelsAggregationSelection: ResolverTypeWrapper<ProjectProjectPhaseProjectLevelsAggregationSelection>;
  ProjectProjectPhaseProjectLevelsNodeAggregateSelection: ResolverTypeWrapper<ProjectProjectPhaseProjectLevelsNodeAggregateSelection>;
  ProjectRelationInput: ProjectRelationInput;
  ProjectSort: ProjectSort;
  ProjectTAGTagsAggregationSelection: ResolverTypeWrapper<ProjectTagTagsAggregationSelection>;
  ProjectTAGTagsNodeAggregateSelection: ResolverTypeWrapper<ProjectTagTagsNodeAggregateSelection>;
  ProjectTagsAggregateInput: ProjectTagsAggregateInput;
  ProjectTagsConnectFieldInput: ProjectTagsConnectFieldInput;
  ProjectTagsConnectOrCreateFieldInput: ProjectTagsConnectOrCreateFieldInput;
  ProjectTagsConnectOrCreateFieldInputOnCreate: ProjectTagsConnectOrCreateFieldInputOnCreate;
  ProjectTagsConnection: ResolverTypeWrapper<ProjectTagsConnection>;
  ProjectTagsConnectionSort: ProjectTagsConnectionSort;
  ProjectTagsConnectionWhere: ProjectTagsConnectionWhere;
  ProjectTagsCreateFieldInput: ProjectTagsCreateFieldInput;
  ProjectTagsDeleteFieldInput: ProjectTagsDeleteFieldInput;
  ProjectTagsDisconnectFieldInput: ProjectTagsDisconnectFieldInput;
  ProjectTagsFieldInput: ProjectTagsFieldInput;
  ProjectTagsNodeAggregationWhereInput: ProjectTagsNodeAggregationWhereInput;
  ProjectTagsRelationship: ResolverTypeWrapper<ProjectTagsRelationship>;
  ProjectTagsUpdateConnectionInput: ProjectTagsUpdateConnectionInput;
  ProjectTagsUpdateFieldInput: ProjectTagsUpdateFieldInput;
  ProjectUniqueWhere: ProjectUniqueWhere;
  ProjectUpdateInput: ProjectUpdateInput;
  ProjectWhere: ProjectWhere;
  ProjectsConnection: ResolverTypeWrapper<ProjectsConnection>;
  Query: ResolverTypeWrapper<{}>;
  ROLE_POSITION: Role_Position;
  ROLE_TYPE: Role_Type;
  ServedInRole: ResolversTypes['EUGRolePersonsRelationship'] | ResolversTypes['PersonEugRolesRelationship'] | ResolversTypes['PersonProjRolesRelationship'] | ResolversTypes['PersonTagRolesRelationship'] | ResolversTypes['PersonTocRolesRelationship'] | ResolversTypes['ProjectProjRolesRelationship'] | ResolversTypes['TAGRolePersonsRelationship'] | ResolversTypes['TOCRolePersonsRelationship'];
  ServedInRoleCreateInput: ServedInRoleCreateInput;
  ServedInRoleSort: ServedInRoleSort;
  ServedInRoleUpdateInput: ServedInRoleUpdateInput;
  ServedInRoleWhere: ServedInRoleWhere;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  TAG: ResolverTypeWrapper<Tag>;
  TAGAggregateSelection: ResolverTypeWrapper<TagAggregateSelection>;
  TAGCommunityPersonsAggregateInput: TagCommunityPersonsAggregateInput;
  TAGCommunityPersonsConnectFieldInput: TagCommunityPersonsConnectFieldInput;
  TAGCommunityPersonsConnectOrCreateFieldInput: TagCommunityPersonsConnectOrCreateFieldInput;
  TAGCommunityPersonsConnectOrCreateFieldInputOnCreate: TagCommunityPersonsConnectOrCreateFieldInputOnCreate;
  TAGCommunityPersonsConnection: ResolverTypeWrapper<TagCommunityPersonsConnection>;
  TAGCommunityPersonsConnectionSort: TagCommunityPersonsConnectionSort;
  TAGCommunityPersonsConnectionWhere: TagCommunityPersonsConnectionWhere;
  TAGCommunityPersonsCreateFieldInput: TagCommunityPersonsCreateFieldInput;
  TAGCommunityPersonsDeleteFieldInput: TagCommunityPersonsDeleteFieldInput;
  TAGCommunityPersonsDisconnectFieldInput: TagCommunityPersonsDisconnectFieldInput;
  TAGCommunityPersonsFieldInput: TagCommunityPersonsFieldInput;
  TAGCommunityPersonsNodeAggregationWhereInput: TagCommunityPersonsNodeAggregationWhereInput;
  TAGCommunityPersonsRelationship: ResolverTypeWrapper<TagCommunityPersonsRelationship>;
  TAGCommunityPersonsUpdateConnectionInput: TagCommunityPersonsUpdateConnectionInput;
  TAGCommunityPersonsUpdateFieldInput: TagCommunityPersonsUpdateFieldInput;
  TAGConnectInput: TagConnectInput;
  TAGConnectOrCreateInput: TagConnectOrCreateInput;
  TAGConnectOrCreateWhere: TagConnectOrCreateWhere;
  TAGConnectWhere: TagConnectWhere;
  TAGCreateInput: TagCreateInput;
  TAGDeleteInput: TagDeleteInput;
  TAGDisconnectInput: TagDisconnectInput;
  TAGEdge: ResolverTypeWrapper<TagEdge>;
  TAGOnCreateInput: TagOnCreateInput;
  TAGOptions: TagOptions;
  TAGPersonCommunityPersonsAggregationSelection: ResolverTypeWrapper<TagPersonCommunityPersonsAggregationSelection>;
  TAGPersonCommunityPersonsNodeAggregateSelection: ResolverTypeWrapper<TagPersonCommunityPersonsNodeAggregateSelection>;
  TAGPersonRolePersonsAggregationSelection: ResolverTypeWrapper<TagPersonRolePersonsAggregationSelection>;
  TAGPersonRolePersonsNodeAggregateSelection: ResolverTypeWrapper<TagPersonRolePersonsNodeAggregateSelection>;
  TAGProjectProjectsInScopeAggregationSelection: ResolverTypeWrapper<TagProjectProjectsInScopeAggregationSelection>;
  TAGProjectProjectsInScopeNodeAggregateSelection: ResolverTypeWrapper<TagProjectProjectsInScopeNodeAggregateSelection>;
  TAGProjectsInScopeAggregateInput: TagProjectsInScopeAggregateInput;
  TAGProjectsInScopeConnectFieldInput: TagProjectsInScopeConnectFieldInput;
  TAGProjectsInScopeConnectOrCreateFieldInput: TagProjectsInScopeConnectOrCreateFieldInput;
  TAGProjectsInScopeConnectOrCreateFieldInputOnCreate: TagProjectsInScopeConnectOrCreateFieldInputOnCreate;
  TAGProjectsInScopeConnection: ResolverTypeWrapper<TagProjectsInScopeConnection>;
  TAGProjectsInScopeConnectionSort: TagProjectsInScopeConnectionSort;
  TAGProjectsInScopeConnectionWhere: TagProjectsInScopeConnectionWhere;
  TAGProjectsInScopeCreateFieldInput: TagProjectsInScopeCreateFieldInput;
  TAGProjectsInScopeDeleteFieldInput: TagProjectsInScopeDeleteFieldInput;
  TAGProjectsInScopeDisconnectFieldInput: TagProjectsInScopeDisconnectFieldInput;
  TAGProjectsInScopeFieldInput: TagProjectsInScopeFieldInput;
  TAGProjectsInScopeNodeAggregationWhereInput: TagProjectsInScopeNodeAggregationWhereInput;
  TAGProjectsInScopeRelationship: ResolverTypeWrapper<TagProjectsInScopeRelationship>;
  TAGProjectsInScopeUpdateConnectionInput: TagProjectsInScopeUpdateConnectionInput;
  TAGProjectsInScopeUpdateFieldInput: TagProjectsInScopeUpdateFieldInput;
  TAGRelationInput: TagRelationInput;
  TAGRolePersonsAggregateInput: TagRolePersonsAggregateInput;
  TAGRolePersonsConnectFieldInput: TagRolePersonsConnectFieldInput;
  TAGRolePersonsConnectOrCreateFieldInput: TagRolePersonsConnectOrCreateFieldInput;
  TAGRolePersonsConnectOrCreateFieldInputOnCreate: TagRolePersonsConnectOrCreateFieldInputOnCreate;
  TAGRolePersonsConnection: ResolverTypeWrapper<TagRolePersonsConnection>;
  TAGRolePersonsConnectionSort: TagRolePersonsConnectionSort;
  TAGRolePersonsConnectionWhere: TagRolePersonsConnectionWhere;
  TAGRolePersonsCreateFieldInput: TagRolePersonsCreateFieldInput;
  TAGRolePersonsDeleteFieldInput: TagRolePersonsDeleteFieldInput;
  TAGRolePersonsDisconnectFieldInput: TagRolePersonsDisconnectFieldInput;
  TAGRolePersonsFieldInput: TagRolePersonsFieldInput;
  TAGRolePersonsNodeAggregationWhereInput: TagRolePersonsNodeAggregationWhereInput;
  TAGRolePersonsRelationship: ResolverTypeWrapper<TagRolePersonsRelationship>;
  TAGRolePersonsUpdateConnectionInput: TagRolePersonsUpdateConnectionInput;
  TAGRolePersonsUpdateFieldInput: TagRolePersonsUpdateFieldInput;
  TAGSort: TagSort;
  TAGUniqueWhere: TagUniqueWhere;
  TAGUpdateInput: TagUpdateInput;
  TAGWhere: TagWhere;
  TOC: ResolverTypeWrapper<Toc>;
  TOCAggregateSelection: ResolverTypeWrapper<TocAggregateSelection>;
  TOCCommunityPersonsAggregateInput: TocCommunityPersonsAggregateInput;
  TOCCommunityPersonsConnectFieldInput: TocCommunityPersonsConnectFieldInput;
  TOCCommunityPersonsConnectOrCreateFieldInput: TocCommunityPersonsConnectOrCreateFieldInput;
  TOCCommunityPersonsConnectOrCreateFieldInputOnCreate: TocCommunityPersonsConnectOrCreateFieldInputOnCreate;
  TOCCommunityPersonsConnection: ResolverTypeWrapper<TocCommunityPersonsConnection>;
  TOCCommunityPersonsConnectionSort: TocCommunityPersonsConnectionSort;
  TOCCommunityPersonsConnectionWhere: TocCommunityPersonsConnectionWhere;
  TOCCommunityPersonsCreateFieldInput: TocCommunityPersonsCreateFieldInput;
  TOCCommunityPersonsDeleteFieldInput: TocCommunityPersonsDeleteFieldInput;
  TOCCommunityPersonsDisconnectFieldInput: TocCommunityPersonsDisconnectFieldInput;
  TOCCommunityPersonsFieldInput: TocCommunityPersonsFieldInput;
  TOCCommunityPersonsNodeAggregationWhereInput: TocCommunityPersonsNodeAggregationWhereInput;
  TOCCommunityPersonsRelationship: ResolverTypeWrapper<TocCommunityPersonsRelationship>;
  TOCCommunityPersonsUpdateConnectionInput: TocCommunityPersonsUpdateConnectionInput;
  TOCCommunityPersonsUpdateFieldInput: TocCommunityPersonsUpdateFieldInput;
  TOCConnectInput: TocConnectInput;
  TOCConnectOrCreateInput: TocConnectOrCreateInput;
  TOCConnectOrCreateWhere: TocConnectOrCreateWhere;
  TOCConnectWhere: TocConnectWhere;
  TOCCreateInput: TocCreateInput;
  TOCDeleteInput: TocDeleteInput;
  TOCDisconnectInput: TocDisconnectInput;
  TOCEdge: ResolverTypeWrapper<TocEdge>;
  TOCOnCreateInput: TocOnCreateInput;
  TOCOptions: TocOptions;
  TOCPersonCommunityPersonsAggregationSelection: ResolverTypeWrapper<TocPersonCommunityPersonsAggregationSelection>;
  TOCPersonCommunityPersonsNodeAggregateSelection: ResolverTypeWrapper<TocPersonCommunityPersonsNodeAggregateSelection>;
  TOCPersonRolePersonsAggregationSelection: ResolverTypeWrapper<TocPersonRolePersonsAggregationSelection>;
  TOCPersonRolePersonsNodeAggregateSelection: ResolverTypeWrapper<TocPersonRolePersonsNodeAggregateSelection>;
  TOCRelationInput: TocRelationInput;
  TOCRolePersonsAggregateInput: TocRolePersonsAggregateInput;
  TOCRolePersonsConnectFieldInput: TocRolePersonsConnectFieldInput;
  TOCRolePersonsConnectOrCreateFieldInput: TocRolePersonsConnectOrCreateFieldInput;
  TOCRolePersonsConnectOrCreateFieldInputOnCreate: TocRolePersonsConnectOrCreateFieldInputOnCreate;
  TOCRolePersonsConnection: ResolverTypeWrapper<TocRolePersonsConnection>;
  TOCRolePersonsConnectionSort: TocRolePersonsConnectionSort;
  TOCRolePersonsConnectionWhere: TocRolePersonsConnectionWhere;
  TOCRolePersonsCreateFieldInput: TocRolePersonsCreateFieldInput;
  TOCRolePersonsDeleteFieldInput: TocRolePersonsDeleteFieldInput;
  TOCRolePersonsDisconnectFieldInput: TocRolePersonsDisconnectFieldInput;
  TOCRolePersonsFieldInput: TocRolePersonsFieldInput;
  TOCRolePersonsNodeAggregationWhereInput: TocRolePersonsNodeAggregationWhereInput;
  TOCRolePersonsRelationship: ResolverTypeWrapper<TocRolePersonsRelationship>;
  TOCRolePersonsUpdateConnectionInput: TocRolePersonsUpdateConnectionInput;
  TOCRolePersonsUpdateFieldInput: TocRolePersonsUpdateFieldInput;
  TOCSort: TocSort;
  TOCUniqueWhere: TocUniqueWhere;
  TOCUpdateInput: TocUpdateInput;
  TOCWhere: TocWhere;
  TagsConnection: ResolverTypeWrapper<TagsConnection>;
  TocsConnection: ResolverTypeWrapper<TocsConnection>;
  UpdateCategoriesMutationResponse: ResolverTypeWrapper<UpdateCategoriesMutationResponse>;
  UpdateCitiesMutationResponse: ResolverTypeWrapper<UpdateCitiesMutationResponse>;
  UpdateEugsMutationResponse: ResolverTypeWrapper<UpdateEugsMutationResponse>;
  UpdateIndustriesMutationResponse: ResolverTypeWrapper<UpdateIndustriesMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateLanguagesMutationResponse: ResolverTypeWrapper<UpdateLanguagesMutationResponse>;
  UpdateLicensesMutationResponse: ResolverTypeWrapper<UpdateLicensesMutationResponse>;
  UpdateMembersMutationResponse: ResolverTypeWrapper<UpdateMembersMutationResponse>;
  UpdateMembershipTypesMutationResponse: ResolverTypeWrapper<UpdateMembershipTypesMutationResponse>;
  UpdateOrganizationsMutationResponse: ResolverTypeWrapper<UpdateOrganizationsMutationResponse>;
  UpdatePeopleMutationResponse: ResolverTypeWrapper<UpdatePeopleMutationResponse>;
  UpdateProjectPhasesMutationResponse: ResolverTypeWrapper<UpdateProjectPhasesMutationResponse>;
  UpdateProjectsMutationResponse: ResolverTypeWrapper<UpdateProjectsMutationResponse>;
  UpdateTagsMutationResponse: ResolverTypeWrapper<UpdateTagsMutationResponse>;
  UpdateTocsMutationResponse: ResolverTypeWrapper<UpdateTocsMutationResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CategoriesConnection: CategoriesConnection;
  Category: Category;
  CategoryAggregateSelection: CategoryAggregateSelection;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnectOrCreateInput: CategoryConnectOrCreateInput;
  CategoryConnectOrCreateWhere: CategoryConnectOrCreateWhere;
  CategoryConnectWhere: CategoryConnectWhere;
  CategoryCreateInput: CategoryCreateInput;
  CategoryDeleteInput: CategoryDeleteInput;
  CategoryDisconnectInput: CategoryDisconnectInput;
  CategoryEdge: CategoryEdge;
  CategoryMemberMembersAggregationSelection: CategoryMemberMembersAggregationSelection;
  CategoryMemberMembersNodeAggregateSelection: CategoryMemberMembersNodeAggregateSelection;
  CategoryMembersAggregateInput: CategoryMembersAggregateInput;
  CategoryMembersConnectFieldInput: CategoryMembersConnectFieldInput;
  CategoryMembersConnectOrCreateFieldInput: CategoryMembersConnectOrCreateFieldInput;
  CategoryMembersConnectOrCreateFieldInputOnCreate: CategoryMembersConnectOrCreateFieldInputOnCreate;
  CategoryMembersConnection: CategoryMembersConnection;
  CategoryMembersConnectionSort: CategoryMembersConnectionSort;
  CategoryMembersConnectionWhere: CategoryMembersConnectionWhere;
  CategoryMembersCreateFieldInput: CategoryMembersCreateFieldInput;
  CategoryMembersDeleteFieldInput: CategoryMembersDeleteFieldInput;
  CategoryMembersDisconnectFieldInput: CategoryMembersDisconnectFieldInput;
  CategoryMembersFieldInput: CategoryMembersFieldInput;
  CategoryMembersNodeAggregationWhereInput: CategoryMembersNodeAggregationWhereInput;
  CategoryMembersRelationship: CategoryMembersRelationship;
  CategoryMembersUpdateConnectionInput: CategoryMembersUpdateConnectionInput;
  CategoryMembersUpdateFieldInput: CategoryMembersUpdateFieldInput;
  CategoryOnCreateInput: CategoryOnCreateInput;
  CategoryOptions: CategoryOptions;
  CategoryProjectProjectsAggregationSelection: CategoryProjectProjectsAggregationSelection;
  CategoryProjectProjectsNodeAggregateSelection: CategoryProjectProjectsNodeAggregateSelection;
  CategoryProjectsAggregateInput: CategoryProjectsAggregateInput;
  CategoryProjectsConnectFieldInput: CategoryProjectsConnectFieldInput;
  CategoryProjectsConnectOrCreateFieldInput: CategoryProjectsConnectOrCreateFieldInput;
  CategoryProjectsConnectOrCreateFieldInputOnCreate: CategoryProjectsConnectOrCreateFieldInputOnCreate;
  CategoryProjectsConnection: CategoryProjectsConnection;
  CategoryProjectsConnectionSort: CategoryProjectsConnectionSort;
  CategoryProjectsConnectionWhere: CategoryProjectsConnectionWhere;
  CategoryProjectsCreateFieldInput: CategoryProjectsCreateFieldInput;
  CategoryProjectsDeleteFieldInput: CategoryProjectsDeleteFieldInput;
  CategoryProjectsDisconnectFieldInput: CategoryProjectsDisconnectFieldInput;
  CategoryProjectsFieldInput: CategoryProjectsFieldInput;
  CategoryProjectsNodeAggregationWhereInput: CategoryProjectsNodeAggregationWhereInput;
  CategoryProjectsRelationship: CategoryProjectsRelationship;
  CategoryProjectsUpdateConnectionInput: CategoryProjectsUpdateConnectionInput;
  CategoryProjectsUpdateFieldInput: CategoryProjectsUpdateFieldInput;
  CategoryRelationInput: CategoryRelationInput;
  CategorySort: CategorySort;
  CategoryUniqueWhere: CategoryUniqueWhere;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhere: CategoryWhere;
  CitiesConnection: CitiesConnection;
  City: City;
  CityAggregateSelection: CityAggregateSelection;
  CityConnectInput: CityConnectInput;
  CityConnectOrCreateInput: CityConnectOrCreateInput;
  CityConnectOrCreateWhere: CityConnectOrCreateWhere;
  CityConnectWhere: CityConnectWhere;
  CityCreateInput: CityCreateInput;
  CityDeleteInput: CityDeleteInput;
  CityDisconnectInput: CityDisconnectInput;
  CityEdge: CityEdge;
  CityOnCreateInput: CityOnCreateInput;
  CityOptions: CityOptions;
  CityOrganizationOrganizationsAggregationSelection: CityOrganizationOrganizationsAggregationSelection;
  CityOrganizationOrganizationsNodeAggregateSelection: CityOrganizationOrganizationsNodeAggregateSelection;
  CityOrganizationsAggregateInput: CityOrganizationsAggregateInput;
  CityOrganizationsConnectFieldInput: CityOrganizationsConnectFieldInput;
  CityOrganizationsConnectOrCreateFieldInput: CityOrganizationsConnectOrCreateFieldInput;
  CityOrganizationsConnectOrCreateFieldInputOnCreate: CityOrganizationsConnectOrCreateFieldInputOnCreate;
  CityOrganizationsConnection: CityOrganizationsConnection;
  CityOrganizationsConnectionSort: CityOrganizationsConnectionSort;
  CityOrganizationsConnectionWhere: CityOrganizationsConnectionWhere;
  CityOrganizationsCreateFieldInput: CityOrganizationsCreateFieldInput;
  CityOrganizationsDeleteFieldInput: CityOrganizationsDeleteFieldInput;
  CityOrganizationsDisconnectFieldInput: CityOrganizationsDisconnectFieldInput;
  CityOrganizationsFieldInput: CityOrganizationsFieldInput;
  CityOrganizationsNodeAggregationWhereInput: CityOrganizationsNodeAggregationWhereInput;
  CityOrganizationsRelationship: CityOrganizationsRelationship;
  CityOrganizationsUpdateConnectionInput: CityOrganizationsUpdateConnectionInput;
  CityOrganizationsUpdateFieldInput: CityOrganizationsUpdateFieldInput;
  CityRelationInput: CityRelationInput;
  CitySort: CitySort;
  CityUniqueWhere: CityUniqueWhere;
  CityUpdateInput: CityUpdateInput;
  CityWhere: CityWhere;
  CreateCategoriesMutationResponse: CreateCategoriesMutationResponse;
  CreateCitiesMutationResponse: CreateCitiesMutationResponse;
  CreateEugsMutationResponse: CreateEugsMutationResponse;
  CreateIndustriesMutationResponse: CreateIndustriesMutationResponse;
  CreateInfo: CreateInfo;
  CreateLanguagesMutationResponse: CreateLanguagesMutationResponse;
  CreateLicensesMutationResponse: CreateLicensesMutationResponse;
  CreateMembersMutationResponse: CreateMembersMutationResponse;
  CreateMembershipTypesMutationResponse: CreateMembershipTypesMutationResponse;
  CreateOrganizationsMutationResponse: CreateOrganizationsMutationResponse;
  CreatePeopleMutationResponse: CreatePeopleMutationResponse;
  CreateProjectPhasesMutationResponse: CreateProjectPhasesMutationResponse;
  CreateProjectsMutationResponse: CreateProjectsMutationResponse;
  CreateTagsMutationResponse: CreateTagsMutationResponse;
  CreateTocsMutationResponse: CreateTocsMutationResponse;
  Date: Scalars['Date'];
  DeleteInfo: DeleteInfo;
  EUG: Eug;
  EUGAggregateSelection: EugAggregateSelection;
  EUGConnectInput: EugConnectInput;
  EUGConnectOrCreateInput: EugConnectOrCreateInput;
  EUGConnectOrCreateWhere: EugConnectOrCreateWhere;
  EUGConnectWhere: EugConnectWhere;
  EUGCreateInput: EugCreateInput;
  EUGDeleteInput: EugDeleteInput;
  EUGDisconnectInput: EugDisconnectInput;
  EUGEdge: EugEdge;
  EUGMemberMembersAggregationSelection: EugMemberMembersAggregationSelection;
  EUGMemberMembersNodeAggregateSelection: EugMemberMembersNodeAggregateSelection;
  EUGMembersAggregateInput: EugMembersAggregateInput;
  EUGMembersConnectFieldInput: EugMembersConnectFieldInput;
  EUGMembersConnectOrCreateFieldInput: EugMembersConnectOrCreateFieldInput;
  EUGMembersConnectOrCreateFieldInputOnCreate: EugMembersConnectOrCreateFieldInputOnCreate;
  EUGMembersConnection: EugMembersConnection;
  EUGMembersConnectionSort: EugMembersConnectionSort;
  EUGMembersConnectionWhere: EugMembersConnectionWhere;
  EUGMembersCreateFieldInput: EugMembersCreateFieldInput;
  EUGMembersDeleteFieldInput: EugMembersDeleteFieldInput;
  EUGMembersDisconnectFieldInput: EugMembersDisconnectFieldInput;
  EUGMembersFieldInput: EugMembersFieldInput;
  EUGMembersNodeAggregationWhereInput: EugMembersNodeAggregationWhereInput;
  EUGMembersRelationship: EugMembersRelationship;
  EUGMembersUpdateConnectionInput: EugMembersUpdateConnectionInput;
  EUGMembersUpdateFieldInput: EugMembersUpdateFieldInput;
  EUGOnCreateInput: EugOnCreateInput;
  EUGOptions: EugOptions;
  EUGPersonRolePersonsAggregationSelection: EugPersonRolePersonsAggregationSelection;
  EUGPersonRolePersonsNodeAggregateSelection: EugPersonRolePersonsNodeAggregateSelection;
  EUGRelationInput: EugRelationInput;
  EUGRolePersonsAggregateInput: EugRolePersonsAggregateInput;
  EUGRolePersonsConnectFieldInput: EugRolePersonsConnectFieldInput;
  EUGRolePersonsConnectOrCreateFieldInput: EugRolePersonsConnectOrCreateFieldInput;
  EUGRolePersonsConnectOrCreateFieldInputOnCreate: EugRolePersonsConnectOrCreateFieldInputOnCreate;
  EUGRolePersonsConnection: EugRolePersonsConnection;
  EUGRolePersonsConnectionSort: EugRolePersonsConnectionSort;
  EUGRolePersonsConnectionWhere: EugRolePersonsConnectionWhere;
  EUGRolePersonsCreateFieldInput: EugRolePersonsCreateFieldInput;
  EUGRolePersonsDeleteFieldInput: EugRolePersonsDeleteFieldInput;
  EUGRolePersonsDisconnectFieldInput: EugRolePersonsDisconnectFieldInput;
  EUGRolePersonsFieldInput: EugRolePersonsFieldInput;
  EUGRolePersonsNodeAggregationWhereInput: EugRolePersonsNodeAggregationWhereInput;
  EUGRolePersonsRelationship: EugRolePersonsRelationship;
  EUGRolePersonsUpdateConnectionInput: EugRolePersonsUpdateConnectionInput;
  EUGRolePersonsUpdateFieldInput: EugRolePersonsUpdateFieldInput;
  EUGSort: EugSort;
  EUGUniqueWhere: EugUniqueWhere;
  EUGUpdateInput: EugUpdateInput;
  EUGWhere: EugWhere;
  EugsConnection: EugsConnection;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  IDAggregateSelectionNonNullable: IdAggregateSelectionNonNullable;
  IndustriesConnection: IndustriesConnection;
  Industry: Industry;
  IndustryAggregateSelection: IndustryAggregateSelection;
  IndustryConnectInput: IndustryConnectInput;
  IndustryConnectOrCreateInput: IndustryConnectOrCreateInput;
  IndustryConnectOrCreateWhere: IndustryConnectOrCreateWhere;
  IndustryConnectWhere: IndustryConnectWhere;
  IndustryCreateInput: IndustryCreateInput;
  IndustryDeleteInput: IndustryDeleteInput;
  IndustryDisconnectInput: IndustryDisconnectInput;
  IndustryEdge: IndustryEdge;
  IndustryOnCreateInput: IndustryOnCreateInput;
  IndustryOptions: IndustryOptions;
  IndustryOrganizationOrganizationsAggregationSelection: IndustryOrganizationOrganizationsAggregationSelection;
  IndustryOrganizationOrganizationsNodeAggregateSelection: IndustryOrganizationOrganizationsNodeAggregateSelection;
  IndustryOrganizationsAggregateInput: IndustryOrganizationsAggregateInput;
  IndustryOrganizationsConnectFieldInput: IndustryOrganizationsConnectFieldInput;
  IndustryOrganizationsConnectOrCreateFieldInput: IndustryOrganizationsConnectOrCreateFieldInput;
  IndustryOrganizationsConnectOrCreateFieldInputOnCreate: IndustryOrganizationsConnectOrCreateFieldInputOnCreate;
  IndustryOrganizationsConnection: IndustryOrganizationsConnection;
  IndustryOrganizationsConnectionSort: IndustryOrganizationsConnectionSort;
  IndustryOrganizationsConnectionWhere: IndustryOrganizationsConnectionWhere;
  IndustryOrganizationsCreateFieldInput: IndustryOrganizationsCreateFieldInput;
  IndustryOrganizationsDeleteFieldInput: IndustryOrganizationsDeleteFieldInput;
  IndustryOrganizationsDisconnectFieldInput: IndustryOrganizationsDisconnectFieldInput;
  IndustryOrganizationsFieldInput: IndustryOrganizationsFieldInput;
  IndustryOrganizationsNodeAggregationWhereInput: IndustryOrganizationsNodeAggregationWhereInput;
  IndustryOrganizationsRelationship: IndustryOrganizationsRelationship;
  IndustryOrganizationsUpdateConnectionInput: IndustryOrganizationsUpdateConnectionInput;
  IndustryOrganizationsUpdateFieldInput: IndustryOrganizationsUpdateFieldInput;
  IndustryRelationInput: IndustryRelationInput;
  IndustrySort: IndustrySort;
  IndustryUniqueWhere: IndustryUniqueWhere;
  IndustryUpdateInput: IndustryUpdateInput;
  IndustryWhere: IndustryWhere;
  Int: Scalars['Int'];
  Language: Language;
  LanguageAggregateSelection: LanguageAggregateSelection;
  LanguageConnectInput: LanguageConnectInput;
  LanguageConnectOrCreateInput: LanguageConnectOrCreateInput;
  LanguageConnectOrCreateWhere: LanguageConnectOrCreateWhere;
  LanguageConnectWhere: LanguageConnectWhere;
  LanguageCreateInput: LanguageCreateInput;
  LanguageDeleteInput: LanguageDeleteInput;
  LanguageDisconnectInput: LanguageDisconnectInput;
  LanguageEdge: LanguageEdge;
  LanguageOnCreateInput: LanguageOnCreateInput;
  LanguageOptions: LanguageOptions;
  LanguageProjectProjectsAggregationSelection: LanguageProjectProjectsAggregationSelection;
  LanguageProjectProjectsNodeAggregateSelection: LanguageProjectProjectsNodeAggregateSelection;
  LanguageProjectsAggregateInput: LanguageProjectsAggregateInput;
  LanguageProjectsConnectFieldInput: LanguageProjectsConnectFieldInput;
  LanguageProjectsConnectOrCreateFieldInput: LanguageProjectsConnectOrCreateFieldInput;
  LanguageProjectsConnectOrCreateFieldInputOnCreate: LanguageProjectsConnectOrCreateFieldInputOnCreate;
  LanguageProjectsConnection: LanguageProjectsConnection;
  LanguageProjectsConnectionSort: LanguageProjectsConnectionSort;
  LanguageProjectsConnectionWhere: LanguageProjectsConnectionWhere;
  LanguageProjectsCreateFieldInput: LanguageProjectsCreateFieldInput;
  LanguageProjectsDeleteFieldInput: LanguageProjectsDeleteFieldInput;
  LanguageProjectsDisconnectFieldInput: LanguageProjectsDisconnectFieldInput;
  LanguageProjectsFieldInput: LanguageProjectsFieldInput;
  LanguageProjectsNodeAggregationWhereInput: LanguageProjectsNodeAggregationWhereInput;
  LanguageProjectsRelationship: LanguageProjectsRelationship;
  LanguageProjectsUpdateConnectionInput: LanguageProjectsUpdateConnectionInput;
  LanguageProjectsUpdateFieldInput: LanguageProjectsUpdateFieldInput;
  LanguageRelationInput: LanguageRelationInput;
  LanguageSort: LanguageSort;
  LanguageUniqueWhere: LanguageUniqueWhere;
  LanguageUpdateInput: LanguageUpdateInput;
  LanguageWhere: LanguageWhere;
  LanguagesConnection: LanguagesConnection;
  License: License;
  LicenseAggregateSelection: LicenseAggregateSelection;
  LicenseConnectInput: LicenseConnectInput;
  LicenseConnectOrCreateInput: LicenseConnectOrCreateInput;
  LicenseConnectOrCreateWhere: LicenseConnectOrCreateWhere;
  LicenseConnectWhere: LicenseConnectWhere;
  LicenseCreateInput: LicenseCreateInput;
  LicenseDeleteInput: LicenseDeleteInput;
  LicenseDisconnectInput: LicenseDisconnectInput;
  LicenseEdge: LicenseEdge;
  LicenseOnCreateInput: LicenseOnCreateInput;
  LicenseOptions: LicenseOptions;
  LicenseProjectProjectsAggregationSelection: LicenseProjectProjectsAggregationSelection;
  LicenseProjectProjectsNodeAggregateSelection: LicenseProjectProjectsNodeAggregateSelection;
  LicenseProjectsAggregateInput: LicenseProjectsAggregateInput;
  LicenseProjectsConnectFieldInput: LicenseProjectsConnectFieldInput;
  LicenseProjectsConnectOrCreateFieldInput: LicenseProjectsConnectOrCreateFieldInput;
  LicenseProjectsConnectOrCreateFieldInputOnCreate: LicenseProjectsConnectOrCreateFieldInputOnCreate;
  LicenseProjectsConnection: LicenseProjectsConnection;
  LicenseProjectsConnectionSort: LicenseProjectsConnectionSort;
  LicenseProjectsConnectionWhere: LicenseProjectsConnectionWhere;
  LicenseProjectsCreateFieldInput: LicenseProjectsCreateFieldInput;
  LicenseProjectsDeleteFieldInput: LicenseProjectsDeleteFieldInput;
  LicenseProjectsDisconnectFieldInput: LicenseProjectsDisconnectFieldInput;
  LicenseProjectsFieldInput: LicenseProjectsFieldInput;
  LicenseProjectsNodeAggregationWhereInput: LicenseProjectsNodeAggregationWhereInput;
  LicenseProjectsRelationship: LicenseProjectsRelationship;
  LicenseProjectsUpdateConnectionInput: LicenseProjectsUpdateConnectionInput;
  LicenseProjectsUpdateFieldInput: LicenseProjectsUpdateFieldInput;
  LicenseRelationInput: LicenseRelationInput;
  LicenseSort: LicenseSort;
  LicenseUniqueWhere: LicenseUniqueWhere;
  LicenseUpdateInput: LicenseUpdateInput;
  LicenseWhere: LicenseWhere;
  LicensesConnection: LicensesConnection;
  Member: Member;
  MemberAggregateSelection: MemberAggregateSelection;
  MemberCategoriesAggregateInput: MemberCategoriesAggregateInput;
  MemberCategoriesConnectFieldInput: MemberCategoriesConnectFieldInput;
  MemberCategoriesConnectOrCreateFieldInput: MemberCategoriesConnectOrCreateFieldInput;
  MemberCategoriesConnectOrCreateFieldInputOnCreate: MemberCategoriesConnectOrCreateFieldInputOnCreate;
  MemberCategoriesConnection: MemberCategoriesConnection;
  MemberCategoriesConnectionSort: MemberCategoriesConnectionSort;
  MemberCategoriesConnectionWhere: MemberCategoriesConnectionWhere;
  MemberCategoriesCreateFieldInput: MemberCategoriesCreateFieldInput;
  MemberCategoriesDeleteFieldInput: MemberCategoriesDeleteFieldInput;
  MemberCategoriesDisconnectFieldInput: MemberCategoriesDisconnectFieldInput;
  MemberCategoriesFieldInput: MemberCategoriesFieldInput;
  MemberCategoriesNodeAggregationWhereInput: MemberCategoriesNodeAggregationWhereInput;
  MemberCategoriesRelationship: MemberCategoriesRelationship;
  MemberCategoriesUpdateConnectionInput: MemberCategoriesUpdateConnectionInput;
  MemberCategoriesUpdateFieldInput: MemberCategoriesUpdateFieldInput;
  MemberCategoryCategoriesAggregationSelection: MemberCategoryCategoriesAggregationSelection;
  MemberCategoryCategoriesNodeAggregateSelection: MemberCategoryCategoriesNodeAggregateSelection;
  MemberCncfMembershipsAggregateInput: MemberCncfMembershipsAggregateInput;
  MemberCncfMembershipsConnectFieldInput: MemberCncfMembershipsConnectFieldInput;
  MemberCncfMembershipsConnectOrCreateFieldInput: MemberCncfMembershipsConnectOrCreateFieldInput;
  MemberCncfMembershipsConnectOrCreateFieldInputOnCreate: MemberCncfMembershipsConnectOrCreateFieldInputOnCreate;
  MemberCncfMembershipsConnection: MemberCncfMembershipsConnection;
  MemberCncfMembershipsConnectionSort: MemberCncfMembershipsConnectionSort;
  MemberCncfMembershipsConnectionWhere: MemberCncfMembershipsConnectionWhere;
  MemberCncfMembershipsCreateFieldInput: MemberCncfMembershipsCreateFieldInput;
  MemberCncfMembershipsDeleteFieldInput: MemberCncfMembershipsDeleteFieldInput;
  MemberCncfMembershipsDisconnectFieldInput: MemberCncfMembershipsDisconnectFieldInput;
  MemberCncfMembershipsFieldInput: MemberCncfMembershipsFieldInput;
  MemberCncfMembershipsNodeAggregationWhereInput: MemberCncfMembershipsNodeAggregationWhereInput;
  MemberCncfMembershipsRelationship: MemberCncfMembershipsRelationship;
  MemberCncfMembershipsUpdateConnectionInput: MemberCncfMembershipsUpdateConnectionInput;
  MemberCncfMembershipsUpdateFieldInput: MemberCncfMembershipsUpdateFieldInput;
  MemberConnectInput: MemberConnectInput;
  MemberConnectOrCreateInput: MemberConnectOrCreateInput;
  MemberConnectOrCreateWhere: MemberConnectOrCreateWhere;
  MemberConnectWhere: MemberConnectWhere;
  MemberCreateInput: MemberCreateInput;
  MemberDeleteInput: MemberDeleteInput;
  MemberDisconnectInput: MemberDisconnectInput;
  MemberEUGEndUserGroupsAggregationSelection: MemberEugEndUserGroupsAggregationSelection;
  MemberEUGEndUserGroupsNodeAggregateSelection: MemberEugEndUserGroupsNodeAggregateSelection;
  MemberEdge: MemberEdge;
  MemberEndUserGroupsAggregateInput: MemberEndUserGroupsAggregateInput;
  MemberEndUserGroupsConnectFieldInput: MemberEndUserGroupsConnectFieldInput;
  MemberEndUserGroupsConnectOrCreateFieldInput: MemberEndUserGroupsConnectOrCreateFieldInput;
  MemberEndUserGroupsConnectOrCreateFieldInputOnCreate: MemberEndUserGroupsConnectOrCreateFieldInputOnCreate;
  MemberEndUserGroupsConnection: MemberEndUserGroupsConnection;
  MemberEndUserGroupsConnectionSort: MemberEndUserGroupsConnectionSort;
  MemberEndUserGroupsConnectionWhere: MemberEndUserGroupsConnectionWhere;
  MemberEndUserGroupsCreateFieldInput: MemberEndUserGroupsCreateFieldInput;
  MemberEndUserGroupsDeleteFieldInput: MemberEndUserGroupsDeleteFieldInput;
  MemberEndUserGroupsDisconnectFieldInput: MemberEndUserGroupsDisconnectFieldInput;
  MemberEndUserGroupsFieldInput: MemberEndUserGroupsFieldInput;
  MemberEndUserGroupsNodeAggregationWhereInput: MemberEndUserGroupsNodeAggregationWhereInput;
  MemberEndUserGroupsRelationship: MemberEndUserGroupsRelationship;
  MemberEndUserGroupsUpdateConnectionInput: MemberEndUserGroupsUpdateConnectionInput;
  MemberEndUserGroupsUpdateFieldInput: MemberEndUserGroupsUpdateFieldInput;
  MemberMembershipTypeCncfMembershipsAggregationSelection: MemberMembershipTypeCncfMembershipsAggregationSelection;
  MemberMembershipTypeCncfMembershipsNodeAggregateSelection: MemberMembershipTypeCncfMembershipsNodeAggregateSelection;
  MemberOnCreateInput: MemberOnCreateInput;
  MemberOptions: MemberOptions;
  MemberOrganizationOrganizationsAggregationSelection: MemberOrganizationOrganizationsAggregationSelection;
  MemberOrganizationOrganizationsNodeAggregateSelection: MemberOrganizationOrganizationsNodeAggregateSelection;
  MemberOrganizationsAggregateInput: MemberOrganizationsAggregateInput;
  MemberOrganizationsConnectFieldInput: MemberOrganizationsConnectFieldInput;
  MemberOrganizationsConnectOrCreateFieldInput: MemberOrganizationsConnectOrCreateFieldInput;
  MemberOrganizationsConnectOrCreateFieldInputOnCreate: MemberOrganizationsConnectOrCreateFieldInputOnCreate;
  MemberOrganizationsConnection: MemberOrganizationsConnection;
  MemberOrganizationsConnectionSort: MemberOrganizationsConnectionSort;
  MemberOrganizationsConnectionWhere: MemberOrganizationsConnectionWhere;
  MemberOrganizationsCreateFieldInput: MemberOrganizationsCreateFieldInput;
  MemberOrganizationsDeleteFieldInput: MemberOrganizationsDeleteFieldInput;
  MemberOrganizationsDisconnectFieldInput: MemberOrganizationsDisconnectFieldInput;
  MemberOrganizationsFieldInput: MemberOrganizationsFieldInput;
  MemberOrganizationsNodeAggregationWhereInput: MemberOrganizationsNodeAggregationWhereInput;
  MemberOrganizationsRelationship: MemberOrganizationsRelationship;
  MemberOrganizationsUpdateConnectionInput: MemberOrganizationsUpdateConnectionInput;
  MemberOrganizationsUpdateFieldInput: MemberOrganizationsUpdateFieldInput;
  MemberRelationInput: MemberRelationInput;
  MemberSort: MemberSort;
  MemberUniqueWhere: MemberUniqueWhere;
  MemberUpdateInput: MemberUpdateInput;
  MemberWhere: MemberWhere;
  MembersConnection: MembersConnection;
  MembershipType: MembershipType;
  MembershipTypeAggregateSelection: MembershipTypeAggregateSelection;
  MembershipTypeConnectInput: MembershipTypeConnectInput;
  MembershipTypeConnectOrCreateInput: MembershipTypeConnectOrCreateInput;
  MembershipTypeConnectOrCreateWhere: MembershipTypeConnectOrCreateWhere;
  MembershipTypeConnectWhere: MembershipTypeConnectWhere;
  MembershipTypeCreateInput: MembershipTypeCreateInput;
  MembershipTypeDeleteInput: MembershipTypeDeleteInput;
  MembershipTypeDisconnectInput: MembershipTypeDisconnectInput;
  MembershipTypeEdge: MembershipTypeEdge;
  MembershipTypeMemberMembersAggregationSelection: MembershipTypeMemberMembersAggregationSelection;
  MembershipTypeMemberMembersNodeAggregateSelection: MembershipTypeMemberMembersNodeAggregateSelection;
  MembershipTypeMembersAggregateInput: MembershipTypeMembersAggregateInput;
  MembershipTypeMembersConnectFieldInput: MembershipTypeMembersConnectFieldInput;
  MembershipTypeMembersConnectOrCreateFieldInput: MembershipTypeMembersConnectOrCreateFieldInput;
  MembershipTypeMembersConnectOrCreateFieldInputOnCreate: MembershipTypeMembersConnectOrCreateFieldInputOnCreate;
  MembershipTypeMembersConnection: MembershipTypeMembersConnection;
  MembershipTypeMembersConnectionSort: MembershipTypeMembersConnectionSort;
  MembershipTypeMembersConnectionWhere: MembershipTypeMembersConnectionWhere;
  MembershipTypeMembersCreateFieldInput: MembershipTypeMembersCreateFieldInput;
  MembershipTypeMembersDeleteFieldInput: MembershipTypeMembersDeleteFieldInput;
  MembershipTypeMembersDisconnectFieldInput: MembershipTypeMembersDisconnectFieldInput;
  MembershipTypeMembersFieldInput: MembershipTypeMembersFieldInput;
  MembershipTypeMembersNodeAggregationWhereInput: MembershipTypeMembersNodeAggregationWhereInput;
  MembershipTypeMembersRelationship: MembershipTypeMembersRelationship;
  MembershipTypeMembersUpdateConnectionInput: MembershipTypeMembersUpdateConnectionInput;
  MembershipTypeMembersUpdateFieldInput: MembershipTypeMembersUpdateFieldInput;
  MembershipTypeOnCreateInput: MembershipTypeOnCreateInput;
  MembershipTypeOptions: MembershipTypeOptions;
  MembershipTypeRelationInput: MembershipTypeRelationInput;
  MembershipTypeSort: MembershipTypeSort;
  MembershipTypeUniqueWhere: MembershipTypeUniqueWhere;
  MembershipTypeUpdateInput: MembershipTypeUpdateInput;
  MembershipTypeWhere: MembershipTypeWhere;
  MembershipTypesConnection: MembershipTypesConnection;
  Mutation: {};
  Organization: Organization;
  OrganizationAggregateSelection: OrganizationAggregateSelection;
  OrganizationBoardAggregateInput: OrganizationBoardAggregateInput;
  OrganizationBoardConnectFieldInput: OrganizationBoardConnectFieldInput;
  OrganizationBoardConnectOrCreateFieldInput: OrganizationBoardConnectOrCreateFieldInput;
  OrganizationBoardConnectOrCreateFieldInputOnCreate: OrganizationBoardConnectOrCreateFieldInputOnCreate;
  OrganizationBoardConnection: OrganizationBoardConnection;
  OrganizationBoardConnectionSort: OrganizationBoardConnectionSort;
  OrganizationBoardConnectionWhere: OrganizationBoardConnectionWhere;
  OrganizationBoardCreateFieldInput: OrganizationBoardCreateFieldInput;
  OrganizationBoardDeleteFieldInput: OrganizationBoardDeleteFieldInput;
  OrganizationBoardDisconnectFieldInput: OrganizationBoardDisconnectFieldInput;
  OrganizationBoardFieldInput: OrganizationBoardFieldInput;
  OrganizationBoardNodeAggregationWhereInput: OrganizationBoardNodeAggregationWhereInput;
  OrganizationBoardRelationship: OrganizationBoardRelationship;
  OrganizationBoardUpdateConnectionInput: OrganizationBoardUpdateConnectionInput;
  OrganizationBoardUpdateFieldInput: OrganizationBoardUpdateFieldInput;
  OrganizationCityHeadquartersAggregationSelection: OrganizationCityHeadquartersAggregationSelection;
  OrganizationCityHeadquartersNodeAggregateSelection: OrganizationCityHeadquartersNodeAggregateSelection;
  OrganizationConnectInput: OrganizationConnectInput;
  OrganizationConnectOrCreateInput: OrganizationConnectOrCreateInput;
  OrganizationConnectOrCreateWhere: OrganizationConnectOrCreateWhere;
  OrganizationConnectWhere: OrganizationConnectWhere;
  OrganizationCreateInput: OrganizationCreateInput;
  OrganizationDeleteInput: OrganizationDeleteInput;
  OrganizationDisconnectInput: OrganizationDisconnectInput;
  OrganizationEdge: OrganizationEdge;
  OrganizationEmployeesAggregateInput: OrganizationEmployeesAggregateInput;
  OrganizationEmployeesConnectFieldInput: OrganizationEmployeesConnectFieldInput;
  OrganizationEmployeesConnectOrCreateFieldInput: OrganizationEmployeesConnectOrCreateFieldInput;
  OrganizationEmployeesConnectOrCreateFieldInputOnCreate: OrganizationEmployeesConnectOrCreateFieldInputOnCreate;
  OrganizationEmployeesConnection: OrganizationEmployeesConnection;
  OrganizationEmployeesConnectionSort: OrganizationEmployeesConnectionSort;
  OrganizationEmployeesConnectionWhere: OrganizationEmployeesConnectionWhere;
  OrganizationEmployeesCreateFieldInput: OrganizationEmployeesCreateFieldInput;
  OrganizationEmployeesDeleteFieldInput: OrganizationEmployeesDeleteFieldInput;
  OrganizationEmployeesDisconnectFieldInput: OrganizationEmployeesDisconnectFieldInput;
  OrganizationEmployeesFieldInput: OrganizationEmployeesFieldInput;
  OrganizationEmployeesNodeAggregationWhereInput: OrganizationEmployeesNodeAggregationWhereInput;
  OrganizationEmployeesRelationship: OrganizationEmployeesRelationship;
  OrganizationEmployeesUpdateConnectionInput: OrganizationEmployeesUpdateConnectionInput;
  OrganizationEmployeesUpdateFieldInput: OrganizationEmployeesUpdateFieldInput;
  OrganizationHeadquartersAggregateInput: OrganizationHeadquartersAggregateInput;
  OrganizationHeadquartersConnectFieldInput: OrganizationHeadquartersConnectFieldInput;
  OrganizationHeadquartersConnectOrCreateFieldInput: OrganizationHeadquartersConnectOrCreateFieldInput;
  OrganizationHeadquartersConnectOrCreateFieldInputOnCreate: OrganizationHeadquartersConnectOrCreateFieldInputOnCreate;
  OrganizationHeadquartersConnection: OrganizationHeadquartersConnection;
  OrganizationHeadquartersConnectionSort: OrganizationHeadquartersConnectionSort;
  OrganizationHeadquartersConnectionWhere: OrganizationHeadquartersConnectionWhere;
  OrganizationHeadquartersCreateFieldInput: OrganizationHeadquartersCreateFieldInput;
  OrganizationHeadquartersDeleteFieldInput: OrganizationHeadquartersDeleteFieldInput;
  OrganizationHeadquartersDisconnectFieldInput: OrganizationHeadquartersDisconnectFieldInput;
  OrganizationHeadquartersFieldInput: OrganizationHeadquartersFieldInput;
  OrganizationHeadquartersNodeAggregationWhereInput: OrganizationHeadquartersNodeAggregationWhereInput;
  OrganizationHeadquartersRelationship: OrganizationHeadquartersRelationship;
  OrganizationHeadquartersUpdateConnectionInput: OrganizationHeadquartersUpdateConnectionInput;
  OrganizationHeadquartersUpdateFieldInput: OrganizationHeadquartersUpdateFieldInput;
  OrganizationIndustriesAggregateInput: OrganizationIndustriesAggregateInput;
  OrganizationIndustriesConnectFieldInput: OrganizationIndustriesConnectFieldInput;
  OrganizationIndustriesConnectOrCreateFieldInput: OrganizationIndustriesConnectOrCreateFieldInput;
  OrganizationIndustriesConnectOrCreateFieldInputOnCreate: OrganizationIndustriesConnectOrCreateFieldInputOnCreate;
  OrganizationIndustriesConnection: OrganizationIndustriesConnection;
  OrganizationIndustriesConnectionSort: OrganizationIndustriesConnectionSort;
  OrganizationIndustriesConnectionWhere: OrganizationIndustriesConnectionWhere;
  OrganizationIndustriesCreateFieldInput: OrganizationIndustriesCreateFieldInput;
  OrganizationIndustriesDeleteFieldInput: OrganizationIndustriesDeleteFieldInput;
  OrganizationIndustriesDisconnectFieldInput: OrganizationIndustriesDisconnectFieldInput;
  OrganizationIndustriesFieldInput: OrganizationIndustriesFieldInput;
  OrganizationIndustriesNodeAggregationWhereInput: OrganizationIndustriesNodeAggregationWhereInput;
  OrganizationIndustriesRelationship: OrganizationIndustriesRelationship;
  OrganizationIndustriesUpdateConnectionInput: OrganizationIndustriesUpdateConnectionInput;
  OrganizationIndustriesUpdateFieldInput: OrganizationIndustriesUpdateFieldInput;
  OrganizationIndustryIndustriesAggregationSelection: OrganizationIndustryIndustriesAggregationSelection;
  OrganizationIndustryIndustriesNodeAggregateSelection: OrganizationIndustryIndustriesNodeAggregateSelection;
  OrganizationMemberOwnedByAggregationSelection: OrganizationMemberOwnedByAggregationSelection;
  OrganizationMemberOwnedByNodeAggregateSelection: OrganizationMemberOwnedByNodeAggregateSelection;
  OrganizationOnCreateInput: OrganizationOnCreateInput;
  OrganizationOptions: OrganizationOptions;
  OrganizationOrganizationParentOrgAggregationSelection: OrganizationOrganizationParentOrgAggregationSelection;
  OrganizationOrganizationParentOrgNodeAggregateSelection: OrganizationOrganizationParentOrgNodeAggregateSelection;
  OrganizationOrganizationSubOrgsAggregationSelection: OrganizationOrganizationSubOrgsAggregationSelection;
  OrganizationOrganizationSubOrgsNodeAggregateSelection: OrganizationOrganizationSubOrgsNodeAggregateSelection;
  OrganizationOwnedByAggregateInput: OrganizationOwnedByAggregateInput;
  OrganizationOwnedByConnectFieldInput: OrganizationOwnedByConnectFieldInput;
  OrganizationOwnedByConnectOrCreateFieldInput: OrganizationOwnedByConnectOrCreateFieldInput;
  OrganizationOwnedByConnectOrCreateFieldInputOnCreate: OrganizationOwnedByConnectOrCreateFieldInputOnCreate;
  OrganizationOwnedByConnection: OrganizationOwnedByConnection;
  OrganizationOwnedByConnectionSort: OrganizationOwnedByConnectionSort;
  OrganizationOwnedByConnectionWhere: OrganizationOwnedByConnectionWhere;
  OrganizationOwnedByCreateFieldInput: OrganizationOwnedByCreateFieldInput;
  OrganizationOwnedByDeleteFieldInput: OrganizationOwnedByDeleteFieldInput;
  OrganizationOwnedByDisconnectFieldInput: OrganizationOwnedByDisconnectFieldInput;
  OrganizationOwnedByFieldInput: OrganizationOwnedByFieldInput;
  OrganizationOwnedByNodeAggregationWhereInput: OrganizationOwnedByNodeAggregationWhereInput;
  OrganizationOwnedByRelationship: OrganizationOwnedByRelationship;
  OrganizationOwnedByUpdateConnectionInput: OrganizationOwnedByUpdateConnectionInput;
  OrganizationOwnedByUpdateFieldInput: OrganizationOwnedByUpdateFieldInput;
  OrganizationParentOrgAggregateInput: OrganizationParentOrgAggregateInput;
  OrganizationParentOrgConnectFieldInput: OrganizationParentOrgConnectFieldInput;
  OrganizationParentOrgConnectOrCreateFieldInput: OrganizationParentOrgConnectOrCreateFieldInput;
  OrganizationParentOrgConnectOrCreateFieldInputOnCreate: OrganizationParentOrgConnectOrCreateFieldInputOnCreate;
  OrganizationParentOrgConnection: OrganizationParentOrgConnection;
  OrganizationParentOrgConnectionSort: OrganizationParentOrgConnectionSort;
  OrganizationParentOrgConnectionWhere: OrganizationParentOrgConnectionWhere;
  OrganizationParentOrgCreateFieldInput: OrganizationParentOrgCreateFieldInput;
  OrganizationParentOrgDeleteFieldInput: OrganizationParentOrgDeleteFieldInput;
  OrganizationParentOrgDisconnectFieldInput: OrganizationParentOrgDisconnectFieldInput;
  OrganizationParentOrgFieldInput: OrganizationParentOrgFieldInput;
  OrganizationParentOrgNodeAggregationWhereInput: OrganizationParentOrgNodeAggregationWhereInput;
  OrganizationParentOrgRelationship: OrganizationParentOrgRelationship;
  OrganizationParentOrgUpdateConnectionInput: OrganizationParentOrgUpdateConnectionInput;
  OrganizationParentOrgUpdateFieldInput: OrganizationParentOrgUpdateFieldInput;
  OrganizationPersonBoardAggregationSelection: OrganizationPersonBoardAggregationSelection;
  OrganizationPersonBoardNodeAggregateSelection: OrganizationPersonBoardNodeAggregateSelection;
  OrganizationPersonEmployeesAggregationSelection: OrganizationPersonEmployeesAggregationSelection;
  OrganizationPersonEmployeesNodeAggregateSelection: OrganizationPersonEmployeesNodeAggregateSelection;
  OrganizationRelationInput: OrganizationRelationInput;
  OrganizationSort: OrganizationSort;
  OrganizationSubOrgsAggregateInput: OrganizationSubOrgsAggregateInput;
  OrganizationSubOrgsConnectFieldInput: OrganizationSubOrgsConnectFieldInput;
  OrganizationSubOrgsConnectOrCreateFieldInput: OrganizationSubOrgsConnectOrCreateFieldInput;
  OrganizationSubOrgsConnectOrCreateFieldInputOnCreate: OrganizationSubOrgsConnectOrCreateFieldInputOnCreate;
  OrganizationSubOrgsConnection: OrganizationSubOrgsConnection;
  OrganizationSubOrgsConnectionSort: OrganizationSubOrgsConnectionSort;
  OrganizationSubOrgsConnectionWhere: OrganizationSubOrgsConnectionWhere;
  OrganizationSubOrgsCreateFieldInput: OrganizationSubOrgsCreateFieldInput;
  OrganizationSubOrgsDeleteFieldInput: OrganizationSubOrgsDeleteFieldInput;
  OrganizationSubOrgsDisconnectFieldInput: OrganizationSubOrgsDisconnectFieldInput;
  OrganizationSubOrgsFieldInput: OrganizationSubOrgsFieldInput;
  OrganizationSubOrgsNodeAggregationWhereInput: OrganizationSubOrgsNodeAggregationWhereInput;
  OrganizationSubOrgsRelationship: OrganizationSubOrgsRelationship;
  OrganizationSubOrgsUpdateConnectionInput: OrganizationSubOrgsUpdateConnectionInput;
  OrganizationSubOrgsUpdateFieldInput: OrganizationSubOrgsUpdateFieldInput;
  OrganizationUniqueWhere: OrganizationUniqueWhere;
  OrganizationUpdateInput: OrganizationUpdateInput;
  OrganizationWhere: OrganizationWhere;
  OrganizationsConnection: OrganizationsConnection;
  PageInfo: PageInfo;
  PeopleConnection: PeopleConnection;
  Person: Person;
  PersonAggregateSelection: PersonAggregateSelection;
  PersonBoardsAggregateInput: PersonBoardsAggregateInput;
  PersonBoardsConnectFieldInput: PersonBoardsConnectFieldInput;
  PersonBoardsConnectOrCreateFieldInput: PersonBoardsConnectOrCreateFieldInput;
  PersonBoardsConnectOrCreateFieldInputOnCreate: PersonBoardsConnectOrCreateFieldInputOnCreate;
  PersonBoardsConnection: PersonBoardsConnection;
  PersonBoardsConnectionSort: PersonBoardsConnectionSort;
  PersonBoardsConnectionWhere: PersonBoardsConnectionWhere;
  PersonBoardsCreateFieldInput: PersonBoardsCreateFieldInput;
  PersonBoardsDeleteFieldInput: PersonBoardsDeleteFieldInput;
  PersonBoardsDisconnectFieldInput: PersonBoardsDisconnectFieldInput;
  PersonBoardsFieldInput: PersonBoardsFieldInput;
  PersonBoardsNodeAggregationWhereInput: PersonBoardsNodeAggregationWhereInput;
  PersonBoardsRelationship: PersonBoardsRelationship;
  PersonBoardsUpdateConnectionInput: PersonBoardsUpdateConnectionInput;
  PersonBoardsUpdateFieldInput: PersonBoardsUpdateFieldInput;
  PersonConnectInput: PersonConnectInput;
  PersonConnectOrCreateInput: PersonConnectOrCreateInput;
  PersonConnectOrCreateWhere: PersonConnectOrCreateWhere;
  PersonConnectWhere: PersonConnectWhere;
  PersonCreateInput: PersonCreateInput;
  PersonDeleteInput: PersonDeleteInput;
  PersonDisconnectInput: PersonDisconnectInput;
  PersonEUGEugRolesAggregationSelection: PersonEugEugRolesAggregationSelection;
  PersonEUGEugRolesNodeAggregateSelection: PersonEugEugRolesNodeAggregateSelection;
  PersonEdge: PersonEdge;
  PersonEmployersAggregateInput: PersonEmployersAggregateInput;
  PersonEmployersConnectFieldInput: PersonEmployersConnectFieldInput;
  PersonEmployersConnectOrCreateFieldInput: PersonEmployersConnectOrCreateFieldInput;
  PersonEmployersConnectOrCreateFieldInputOnCreate: PersonEmployersConnectOrCreateFieldInputOnCreate;
  PersonEmployersConnection: PersonEmployersConnection;
  PersonEmployersConnectionSort: PersonEmployersConnectionSort;
  PersonEmployersConnectionWhere: PersonEmployersConnectionWhere;
  PersonEmployersCreateFieldInput: PersonEmployersCreateFieldInput;
  PersonEmployersDeleteFieldInput: PersonEmployersDeleteFieldInput;
  PersonEmployersDisconnectFieldInput: PersonEmployersDisconnectFieldInput;
  PersonEmployersFieldInput: PersonEmployersFieldInput;
  PersonEmployersNodeAggregationWhereInput: PersonEmployersNodeAggregationWhereInput;
  PersonEmployersRelationship: PersonEmployersRelationship;
  PersonEmployersUpdateConnectionInput: PersonEmployersUpdateConnectionInput;
  PersonEmployersUpdateFieldInput: PersonEmployersUpdateFieldInput;
  PersonEugRolesAggregateInput: PersonEugRolesAggregateInput;
  PersonEugRolesConnectFieldInput: PersonEugRolesConnectFieldInput;
  PersonEugRolesConnectOrCreateFieldInput: PersonEugRolesConnectOrCreateFieldInput;
  PersonEugRolesConnectOrCreateFieldInputOnCreate: PersonEugRolesConnectOrCreateFieldInputOnCreate;
  PersonEugRolesConnection: PersonEugRolesConnection;
  PersonEugRolesConnectionSort: PersonEugRolesConnectionSort;
  PersonEugRolesConnectionWhere: PersonEugRolesConnectionWhere;
  PersonEugRolesCreateFieldInput: PersonEugRolesCreateFieldInput;
  PersonEugRolesDeleteFieldInput: PersonEugRolesDeleteFieldInput;
  PersonEugRolesDisconnectFieldInput: PersonEugRolesDisconnectFieldInput;
  PersonEugRolesFieldInput: PersonEugRolesFieldInput;
  PersonEugRolesNodeAggregationWhereInput: PersonEugRolesNodeAggregationWhereInput;
  PersonEugRolesRelationship: PersonEugRolesRelationship;
  PersonEugRolesUpdateConnectionInput: PersonEugRolesUpdateConnectionInput;
  PersonEugRolesUpdateFieldInput: PersonEugRolesUpdateFieldInput;
  PersonOnCreateInput: PersonOnCreateInput;
  PersonOptions: PersonOptions;
  PersonOrganizationBoardsAggregationSelection: PersonOrganizationBoardsAggregationSelection;
  PersonOrganizationBoardsNodeAggregateSelection: PersonOrganizationBoardsNodeAggregateSelection;
  PersonOrganizationEmployersAggregationSelection: PersonOrganizationEmployersAggregationSelection;
  PersonOrganizationEmployersNodeAggregateSelection: PersonOrganizationEmployersNodeAggregateSelection;
  PersonProjRolesAggregateInput: PersonProjRolesAggregateInput;
  PersonProjRolesConnectFieldInput: PersonProjRolesConnectFieldInput;
  PersonProjRolesConnectOrCreateFieldInput: PersonProjRolesConnectOrCreateFieldInput;
  PersonProjRolesConnectOrCreateFieldInputOnCreate: PersonProjRolesConnectOrCreateFieldInputOnCreate;
  PersonProjRolesConnection: PersonProjRolesConnection;
  PersonProjRolesConnectionSort: PersonProjRolesConnectionSort;
  PersonProjRolesConnectionWhere: PersonProjRolesConnectionWhere;
  PersonProjRolesCreateFieldInput: PersonProjRolesCreateFieldInput;
  PersonProjRolesDeleteFieldInput: PersonProjRolesDeleteFieldInput;
  PersonProjRolesDisconnectFieldInput: PersonProjRolesDisconnectFieldInput;
  PersonProjRolesFieldInput: PersonProjRolesFieldInput;
  PersonProjRolesNodeAggregationWhereInput: PersonProjRolesNodeAggregationWhereInput;
  PersonProjRolesRelationship: PersonProjRolesRelationship;
  PersonProjRolesUpdateConnectionInput: PersonProjRolesUpdateConnectionInput;
  PersonProjRolesUpdateFieldInput: PersonProjRolesUpdateFieldInput;
  PersonProjectProjRolesAggregationSelection: PersonProjectProjRolesAggregationSelection;
  PersonProjectProjRolesNodeAggregateSelection: PersonProjectProjRolesNodeAggregateSelection;
  PersonRelationInput: PersonRelationInput;
  PersonSort: PersonSort;
  PersonTAGTagRolesAggregationSelection: PersonTagTagRolesAggregationSelection;
  PersonTAGTagRolesNodeAggregateSelection: PersonTagTagRolesNodeAggregateSelection;
  PersonTOCTocRolesAggregationSelection: PersonTocTocRolesAggregationSelection;
  PersonTOCTocRolesNodeAggregateSelection: PersonTocTocRolesNodeAggregateSelection;
  PersonTagRolesAggregateInput: PersonTagRolesAggregateInput;
  PersonTagRolesConnectFieldInput: PersonTagRolesConnectFieldInput;
  PersonTagRolesConnectOrCreateFieldInput: PersonTagRolesConnectOrCreateFieldInput;
  PersonTagRolesConnectOrCreateFieldInputOnCreate: PersonTagRolesConnectOrCreateFieldInputOnCreate;
  PersonTagRolesConnection: PersonTagRolesConnection;
  PersonTagRolesConnectionSort: PersonTagRolesConnectionSort;
  PersonTagRolesConnectionWhere: PersonTagRolesConnectionWhere;
  PersonTagRolesCreateFieldInput: PersonTagRolesCreateFieldInput;
  PersonTagRolesDeleteFieldInput: PersonTagRolesDeleteFieldInput;
  PersonTagRolesDisconnectFieldInput: PersonTagRolesDisconnectFieldInput;
  PersonTagRolesFieldInput: PersonTagRolesFieldInput;
  PersonTagRolesNodeAggregationWhereInput: PersonTagRolesNodeAggregationWhereInput;
  PersonTagRolesRelationship: PersonTagRolesRelationship;
  PersonTagRolesUpdateConnectionInput: PersonTagRolesUpdateConnectionInput;
  PersonTagRolesUpdateFieldInput: PersonTagRolesUpdateFieldInput;
  PersonTocRolesAggregateInput: PersonTocRolesAggregateInput;
  PersonTocRolesConnectFieldInput: PersonTocRolesConnectFieldInput;
  PersonTocRolesConnectOrCreateFieldInput: PersonTocRolesConnectOrCreateFieldInput;
  PersonTocRolesConnectOrCreateFieldInputOnCreate: PersonTocRolesConnectOrCreateFieldInputOnCreate;
  PersonTocRolesConnection: PersonTocRolesConnection;
  PersonTocRolesConnectionSort: PersonTocRolesConnectionSort;
  PersonTocRolesConnectionWhere: PersonTocRolesConnectionWhere;
  PersonTocRolesCreateFieldInput: PersonTocRolesCreateFieldInput;
  PersonTocRolesDeleteFieldInput: PersonTocRolesDeleteFieldInput;
  PersonTocRolesDisconnectFieldInput: PersonTocRolesDisconnectFieldInput;
  PersonTocRolesFieldInput: PersonTocRolesFieldInput;
  PersonTocRolesNodeAggregationWhereInput: PersonTocRolesNodeAggregationWhereInput;
  PersonTocRolesRelationship: PersonTocRolesRelationship;
  PersonTocRolesUpdateConnectionInput: PersonTocRolesUpdateConnectionInput;
  PersonTocRolesUpdateFieldInput: PersonTocRolesUpdateFieldInput;
  PersonUniqueWhere: PersonUniqueWhere;
  PersonUpdateInput: PersonUpdateInput;
  PersonWhere: PersonWhere;
  Project: Project;
  ProjectAggregateSelection: ProjectAggregateSelection;
  ProjectCategoriesAggregateInput: ProjectCategoriesAggregateInput;
  ProjectCategoriesConnectFieldInput: ProjectCategoriesConnectFieldInput;
  ProjectCategoriesConnectOrCreateFieldInput: ProjectCategoriesConnectOrCreateFieldInput;
  ProjectCategoriesConnectOrCreateFieldInputOnCreate: ProjectCategoriesConnectOrCreateFieldInputOnCreate;
  ProjectCategoriesConnection: ProjectCategoriesConnection;
  ProjectCategoriesConnectionSort: ProjectCategoriesConnectionSort;
  ProjectCategoriesConnectionWhere: ProjectCategoriesConnectionWhere;
  ProjectCategoriesCreateFieldInput: ProjectCategoriesCreateFieldInput;
  ProjectCategoriesDeleteFieldInput: ProjectCategoriesDeleteFieldInput;
  ProjectCategoriesDisconnectFieldInput: ProjectCategoriesDisconnectFieldInput;
  ProjectCategoriesFieldInput: ProjectCategoriesFieldInput;
  ProjectCategoriesNodeAggregationWhereInput: ProjectCategoriesNodeAggregationWhereInput;
  ProjectCategoriesRelationship: ProjectCategoriesRelationship;
  ProjectCategoriesUpdateConnectionInput: ProjectCategoriesUpdateConnectionInput;
  ProjectCategoriesUpdateFieldInput: ProjectCategoriesUpdateFieldInput;
  ProjectCategoryCategoriesAggregationSelection: ProjectCategoryCategoriesAggregationSelection;
  ProjectCategoryCategoriesNodeAggregateSelection: ProjectCategoryCategoriesNodeAggregateSelection;
  ProjectConnectInput: ProjectConnectInput;
  ProjectConnectOrCreateInput: ProjectConnectOrCreateInput;
  ProjectConnectOrCreateWhere: ProjectConnectOrCreateWhere;
  ProjectConnectWhere: ProjectConnectWhere;
  ProjectCreateInput: ProjectCreateInput;
  ProjectDeleteInput: ProjectDeleteInput;
  ProjectDisconnectInput: ProjectDisconnectInput;
  ProjectEdge: ProjectEdge;
  ProjectLanguageLanguagesAggregationSelection: ProjectLanguageLanguagesAggregationSelection;
  ProjectLanguageLanguagesNodeAggregateSelection: ProjectLanguageLanguagesNodeAggregateSelection;
  ProjectLanguagesAggregateInput: ProjectLanguagesAggregateInput;
  ProjectLanguagesConnectFieldInput: ProjectLanguagesConnectFieldInput;
  ProjectLanguagesConnectOrCreateFieldInput: ProjectLanguagesConnectOrCreateFieldInput;
  ProjectLanguagesConnectOrCreateFieldInputOnCreate: ProjectLanguagesConnectOrCreateFieldInputOnCreate;
  ProjectLanguagesConnection: ProjectLanguagesConnection;
  ProjectLanguagesConnectionSort: ProjectLanguagesConnectionSort;
  ProjectLanguagesConnectionWhere: ProjectLanguagesConnectionWhere;
  ProjectLanguagesCreateFieldInput: ProjectLanguagesCreateFieldInput;
  ProjectLanguagesDeleteFieldInput: ProjectLanguagesDeleteFieldInput;
  ProjectLanguagesDisconnectFieldInput: ProjectLanguagesDisconnectFieldInput;
  ProjectLanguagesFieldInput: ProjectLanguagesFieldInput;
  ProjectLanguagesNodeAggregationWhereInput: ProjectLanguagesNodeAggregationWhereInput;
  ProjectLanguagesRelationship: ProjectLanguagesRelationship;
  ProjectLanguagesUpdateConnectionInput: ProjectLanguagesUpdateConnectionInput;
  ProjectLanguagesUpdateFieldInput: ProjectLanguagesUpdateFieldInput;
  ProjectLicenseLicensesAggregationSelection: ProjectLicenseLicensesAggregationSelection;
  ProjectLicenseLicensesNodeAggregateSelection: ProjectLicenseLicensesNodeAggregateSelection;
  ProjectLicensesAggregateInput: ProjectLicensesAggregateInput;
  ProjectLicensesConnectFieldInput: ProjectLicensesConnectFieldInput;
  ProjectLicensesConnectOrCreateFieldInput: ProjectLicensesConnectOrCreateFieldInput;
  ProjectLicensesConnectOrCreateFieldInputOnCreate: ProjectLicensesConnectOrCreateFieldInputOnCreate;
  ProjectLicensesConnection: ProjectLicensesConnection;
  ProjectLicensesConnectionSort: ProjectLicensesConnectionSort;
  ProjectLicensesConnectionWhere: ProjectLicensesConnectionWhere;
  ProjectLicensesCreateFieldInput: ProjectLicensesCreateFieldInput;
  ProjectLicensesDeleteFieldInput: ProjectLicensesDeleteFieldInput;
  ProjectLicensesDisconnectFieldInput: ProjectLicensesDisconnectFieldInput;
  ProjectLicensesFieldInput: ProjectLicensesFieldInput;
  ProjectLicensesNodeAggregationWhereInput: ProjectLicensesNodeAggregationWhereInput;
  ProjectLicensesRelationship: ProjectLicensesRelationship;
  ProjectLicensesUpdateConnectionInput: ProjectLicensesUpdateConnectionInput;
  ProjectLicensesUpdateFieldInput: ProjectLicensesUpdateFieldInput;
  ProjectOnCreateInput: ProjectOnCreateInput;
  ProjectOptions: ProjectOptions;
  ProjectPersonProjRolesAggregationSelection: ProjectPersonProjRolesAggregationSelection;
  ProjectPersonProjRolesNodeAggregateSelection: ProjectPersonProjRolesNodeAggregateSelection;
  ProjectPhase: ProjectPhase;
  ProjectPhaseAggregateSelection: ProjectPhaseAggregateSelection;
  ProjectPhaseConnectInput: ProjectPhaseConnectInput;
  ProjectPhaseConnectOrCreateInput: ProjectPhaseConnectOrCreateInput;
  ProjectPhaseConnectOrCreateWhere: ProjectPhaseConnectOrCreateWhere;
  ProjectPhaseConnectWhere: ProjectPhaseConnectWhere;
  ProjectPhaseCreateInput: ProjectPhaseCreateInput;
  ProjectPhaseDeleteInput: ProjectPhaseDeleteInput;
  ProjectPhaseDisconnectInput: ProjectPhaseDisconnectInput;
  ProjectPhaseEdge: ProjectPhaseEdge;
  ProjectPhaseOnCreateInput: ProjectPhaseOnCreateInput;
  ProjectPhaseOptions: ProjectPhaseOptions;
  ProjectPhaseProjectProjectsAggregationSelection: ProjectPhaseProjectProjectsAggregationSelection;
  ProjectPhaseProjectProjectsNodeAggregateSelection: ProjectPhaseProjectProjectsNodeAggregateSelection;
  ProjectPhaseProjectsAggregateInput: ProjectPhaseProjectsAggregateInput;
  ProjectPhaseProjectsConnectFieldInput: ProjectPhaseProjectsConnectFieldInput;
  ProjectPhaseProjectsConnectOrCreateFieldInput: ProjectPhaseProjectsConnectOrCreateFieldInput;
  ProjectPhaseProjectsConnectOrCreateFieldInputOnCreate: ProjectPhaseProjectsConnectOrCreateFieldInputOnCreate;
  ProjectPhaseProjectsConnection: ProjectPhaseProjectsConnection;
  ProjectPhaseProjectsConnectionSort: ProjectPhaseProjectsConnectionSort;
  ProjectPhaseProjectsConnectionWhere: ProjectPhaseProjectsConnectionWhere;
  ProjectPhaseProjectsCreateFieldInput: ProjectPhaseProjectsCreateFieldInput;
  ProjectPhaseProjectsDeleteFieldInput: ProjectPhaseProjectsDeleteFieldInput;
  ProjectPhaseProjectsDisconnectFieldInput: ProjectPhaseProjectsDisconnectFieldInput;
  ProjectPhaseProjectsFieldInput: ProjectPhaseProjectsFieldInput;
  ProjectPhaseProjectsNodeAggregationWhereInput: ProjectPhaseProjectsNodeAggregationWhereInput;
  ProjectPhaseProjectsRelationship: ProjectPhaseProjectsRelationship;
  ProjectPhaseProjectsUpdateConnectionInput: ProjectPhaseProjectsUpdateConnectionInput;
  ProjectPhaseProjectsUpdateFieldInput: ProjectPhaseProjectsUpdateFieldInput;
  ProjectPhaseRelationInput: ProjectPhaseRelationInput;
  ProjectPhaseSort: ProjectPhaseSort;
  ProjectPhaseUniqueWhere: ProjectPhaseUniqueWhere;
  ProjectPhaseUpdateInput: ProjectPhaseUpdateInput;
  ProjectPhaseWhere: ProjectPhaseWhere;
  ProjectPhasesConnection: ProjectPhasesConnection;
  ProjectProjRolesAggregateInput: ProjectProjRolesAggregateInput;
  ProjectProjRolesConnectFieldInput: ProjectProjRolesConnectFieldInput;
  ProjectProjRolesConnectOrCreateFieldInput: ProjectProjRolesConnectOrCreateFieldInput;
  ProjectProjRolesConnectOrCreateFieldInputOnCreate: ProjectProjRolesConnectOrCreateFieldInputOnCreate;
  ProjectProjRolesConnection: ProjectProjRolesConnection;
  ProjectProjRolesConnectionSort: ProjectProjRolesConnectionSort;
  ProjectProjRolesConnectionWhere: ProjectProjRolesConnectionWhere;
  ProjectProjRolesCreateFieldInput: ProjectProjRolesCreateFieldInput;
  ProjectProjRolesDeleteFieldInput: ProjectProjRolesDeleteFieldInput;
  ProjectProjRolesDisconnectFieldInput: ProjectProjRolesDisconnectFieldInput;
  ProjectProjRolesFieldInput: ProjectProjRolesFieldInput;
  ProjectProjRolesNodeAggregationWhereInput: ProjectProjRolesNodeAggregationWhereInput;
  ProjectProjRolesRelationship: ProjectProjRolesRelationship;
  ProjectProjRolesUpdateConnectionInput: ProjectProjRolesUpdateConnectionInput;
  ProjectProjRolesUpdateFieldInput: ProjectProjRolesUpdateFieldInput;
  ProjectProjectLevelsAggregateInput: ProjectProjectLevelsAggregateInput;
  ProjectProjectLevelsConnectFieldInput: ProjectProjectLevelsConnectFieldInput;
  ProjectProjectLevelsConnectOrCreateFieldInput: ProjectProjectLevelsConnectOrCreateFieldInput;
  ProjectProjectLevelsConnectOrCreateFieldInputOnCreate: ProjectProjectLevelsConnectOrCreateFieldInputOnCreate;
  ProjectProjectLevelsConnection: ProjectProjectLevelsConnection;
  ProjectProjectLevelsConnectionSort: ProjectProjectLevelsConnectionSort;
  ProjectProjectLevelsConnectionWhere: ProjectProjectLevelsConnectionWhere;
  ProjectProjectLevelsCreateFieldInput: ProjectProjectLevelsCreateFieldInput;
  ProjectProjectLevelsDeleteFieldInput: ProjectProjectLevelsDeleteFieldInput;
  ProjectProjectLevelsDisconnectFieldInput: ProjectProjectLevelsDisconnectFieldInput;
  ProjectProjectLevelsFieldInput: ProjectProjectLevelsFieldInput;
  ProjectProjectLevelsNodeAggregationWhereInput: ProjectProjectLevelsNodeAggregationWhereInput;
  ProjectProjectLevelsRelationship: ProjectProjectLevelsRelationship;
  ProjectProjectLevelsUpdateConnectionInput: ProjectProjectLevelsUpdateConnectionInput;
  ProjectProjectLevelsUpdateFieldInput: ProjectProjectLevelsUpdateFieldInput;
  ProjectProjectPhaseProjectLevelsAggregationSelection: ProjectProjectPhaseProjectLevelsAggregationSelection;
  ProjectProjectPhaseProjectLevelsNodeAggregateSelection: ProjectProjectPhaseProjectLevelsNodeAggregateSelection;
  ProjectRelationInput: ProjectRelationInput;
  ProjectSort: ProjectSort;
  ProjectTAGTagsAggregationSelection: ProjectTagTagsAggregationSelection;
  ProjectTAGTagsNodeAggregateSelection: ProjectTagTagsNodeAggregateSelection;
  ProjectTagsAggregateInput: ProjectTagsAggregateInput;
  ProjectTagsConnectFieldInput: ProjectTagsConnectFieldInput;
  ProjectTagsConnectOrCreateFieldInput: ProjectTagsConnectOrCreateFieldInput;
  ProjectTagsConnectOrCreateFieldInputOnCreate: ProjectTagsConnectOrCreateFieldInputOnCreate;
  ProjectTagsConnection: ProjectTagsConnection;
  ProjectTagsConnectionSort: ProjectTagsConnectionSort;
  ProjectTagsConnectionWhere: ProjectTagsConnectionWhere;
  ProjectTagsCreateFieldInput: ProjectTagsCreateFieldInput;
  ProjectTagsDeleteFieldInput: ProjectTagsDeleteFieldInput;
  ProjectTagsDisconnectFieldInput: ProjectTagsDisconnectFieldInput;
  ProjectTagsFieldInput: ProjectTagsFieldInput;
  ProjectTagsNodeAggregationWhereInput: ProjectTagsNodeAggregationWhereInput;
  ProjectTagsRelationship: ProjectTagsRelationship;
  ProjectTagsUpdateConnectionInput: ProjectTagsUpdateConnectionInput;
  ProjectTagsUpdateFieldInput: ProjectTagsUpdateFieldInput;
  ProjectUniqueWhere: ProjectUniqueWhere;
  ProjectUpdateInput: ProjectUpdateInput;
  ProjectWhere: ProjectWhere;
  ProjectsConnection: ProjectsConnection;
  Query: {};
  ServedInRole: ResolversParentTypes['EUGRolePersonsRelationship'] | ResolversParentTypes['PersonEugRolesRelationship'] | ResolversParentTypes['PersonProjRolesRelationship'] | ResolversParentTypes['PersonTagRolesRelationship'] | ResolversParentTypes['PersonTocRolesRelationship'] | ResolversParentTypes['ProjectProjRolesRelationship'] | ResolversParentTypes['TAGRolePersonsRelationship'] | ResolversParentTypes['TOCRolePersonsRelationship'];
  ServedInRoleCreateInput: ServedInRoleCreateInput;
  ServedInRoleSort: ServedInRoleSort;
  ServedInRoleUpdateInput: ServedInRoleUpdateInput;
  ServedInRoleWhere: ServedInRoleWhere;
  String: Scalars['String'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  TAG: Tag;
  TAGAggregateSelection: TagAggregateSelection;
  TAGCommunityPersonsAggregateInput: TagCommunityPersonsAggregateInput;
  TAGCommunityPersonsConnectFieldInput: TagCommunityPersonsConnectFieldInput;
  TAGCommunityPersonsConnectOrCreateFieldInput: TagCommunityPersonsConnectOrCreateFieldInput;
  TAGCommunityPersonsConnectOrCreateFieldInputOnCreate: TagCommunityPersonsConnectOrCreateFieldInputOnCreate;
  TAGCommunityPersonsConnection: TagCommunityPersonsConnection;
  TAGCommunityPersonsConnectionSort: TagCommunityPersonsConnectionSort;
  TAGCommunityPersonsConnectionWhere: TagCommunityPersonsConnectionWhere;
  TAGCommunityPersonsCreateFieldInput: TagCommunityPersonsCreateFieldInput;
  TAGCommunityPersonsDeleteFieldInput: TagCommunityPersonsDeleteFieldInput;
  TAGCommunityPersonsDisconnectFieldInput: TagCommunityPersonsDisconnectFieldInput;
  TAGCommunityPersonsFieldInput: TagCommunityPersonsFieldInput;
  TAGCommunityPersonsNodeAggregationWhereInput: TagCommunityPersonsNodeAggregationWhereInput;
  TAGCommunityPersonsRelationship: TagCommunityPersonsRelationship;
  TAGCommunityPersonsUpdateConnectionInput: TagCommunityPersonsUpdateConnectionInput;
  TAGCommunityPersonsUpdateFieldInput: TagCommunityPersonsUpdateFieldInput;
  TAGConnectInput: TagConnectInput;
  TAGConnectOrCreateInput: TagConnectOrCreateInput;
  TAGConnectOrCreateWhere: TagConnectOrCreateWhere;
  TAGConnectWhere: TagConnectWhere;
  TAGCreateInput: TagCreateInput;
  TAGDeleteInput: TagDeleteInput;
  TAGDisconnectInput: TagDisconnectInput;
  TAGEdge: TagEdge;
  TAGOnCreateInput: TagOnCreateInput;
  TAGOptions: TagOptions;
  TAGPersonCommunityPersonsAggregationSelection: TagPersonCommunityPersonsAggregationSelection;
  TAGPersonCommunityPersonsNodeAggregateSelection: TagPersonCommunityPersonsNodeAggregateSelection;
  TAGPersonRolePersonsAggregationSelection: TagPersonRolePersonsAggregationSelection;
  TAGPersonRolePersonsNodeAggregateSelection: TagPersonRolePersonsNodeAggregateSelection;
  TAGProjectProjectsInScopeAggregationSelection: TagProjectProjectsInScopeAggregationSelection;
  TAGProjectProjectsInScopeNodeAggregateSelection: TagProjectProjectsInScopeNodeAggregateSelection;
  TAGProjectsInScopeAggregateInput: TagProjectsInScopeAggregateInput;
  TAGProjectsInScopeConnectFieldInput: TagProjectsInScopeConnectFieldInput;
  TAGProjectsInScopeConnectOrCreateFieldInput: TagProjectsInScopeConnectOrCreateFieldInput;
  TAGProjectsInScopeConnectOrCreateFieldInputOnCreate: TagProjectsInScopeConnectOrCreateFieldInputOnCreate;
  TAGProjectsInScopeConnection: TagProjectsInScopeConnection;
  TAGProjectsInScopeConnectionSort: TagProjectsInScopeConnectionSort;
  TAGProjectsInScopeConnectionWhere: TagProjectsInScopeConnectionWhere;
  TAGProjectsInScopeCreateFieldInput: TagProjectsInScopeCreateFieldInput;
  TAGProjectsInScopeDeleteFieldInput: TagProjectsInScopeDeleteFieldInput;
  TAGProjectsInScopeDisconnectFieldInput: TagProjectsInScopeDisconnectFieldInput;
  TAGProjectsInScopeFieldInput: TagProjectsInScopeFieldInput;
  TAGProjectsInScopeNodeAggregationWhereInput: TagProjectsInScopeNodeAggregationWhereInput;
  TAGProjectsInScopeRelationship: TagProjectsInScopeRelationship;
  TAGProjectsInScopeUpdateConnectionInput: TagProjectsInScopeUpdateConnectionInput;
  TAGProjectsInScopeUpdateFieldInput: TagProjectsInScopeUpdateFieldInput;
  TAGRelationInput: TagRelationInput;
  TAGRolePersonsAggregateInput: TagRolePersonsAggregateInput;
  TAGRolePersonsConnectFieldInput: TagRolePersonsConnectFieldInput;
  TAGRolePersonsConnectOrCreateFieldInput: TagRolePersonsConnectOrCreateFieldInput;
  TAGRolePersonsConnectOrCreateFieldInputOnCreate: TagRolePersonsConnectOrCreateFieldInputOnCreate;
  TAGRolePersonsConnection: TagRolePersonsConnection;
  TAGRolePersonsConnectionSort: TagRolePersonsConnectionSort;
  TAGRolePersonsConnectionWhere: TagRolePersonsConnectionWhere;
  TAGRolePersonsCreateFieldInput: TagRolePersonsCreateFieldInput;
  TAGRolePersonsDeleteFieldInput: TagRolePersonsDeleteFieldInput;
  TAGRolePersonsDisconnectFieldInput: TagRolePersonsDisconnectFieldInput;
  TAGRolePersonsFieldInput: TagRolePersonsFieldInput;
  TAGRolePersonsNodeAggregationWhereInput: TagRolePersonsNodeAggregationWhereInput;
  TAGRolePersonsRelationship: TagRolePersonsRelationship;
  TAGRolePersonsUpdateConnectionInput: TagRolePersonsUpdateConnectionInput;
  TAGRolePersonsUpdateFieldInput: TagRolePersonsUpdateFieldInput;
  TAGSort: TagSort;
  TAGUniqueWhere: TagUniqueWhere;
  TAGUpdateInput: TagUpdateInput;
  TAGWhere: TagWhere;
  TOC: Toc;
  TOCAggregateSelection: TocAggregateSelection;
  TOCCommunityPersonsAggregateInput: TocCommunityPersonsAggregateInput;
  TOCCommunityPersonsConnectFieldInput: TocCommunityPersonsConnectFieldInput;
  TOCCommunityPersonsConnectOrCreateFieldInput: TocCommunityPersonsConnectOrCreateFieldInput;
  TOCCommunityPersonsConnectOrCreateFieldInputOnCreate: TocCommunityPersonsConnectOrCreateFieldInputOnCreate;
  TOCCommunityPersonsConnection: TocCommunityPersonsConnection;
  TOCCommunityPersonsConnectionSort: TocCommunityPersonsConnectionSort;
  TOCCommunityPersonsConnectionWhere: TocCommunityPersonsConnectionWhere;
  TOCCommunityPersonsCreateFieldInput: TocCommunityPersonsCreateFieldInput;
  TOCCommunityPersonsDeleteFieldInput: TocCommunityPersonsDeleteFieldInput;
  TOCCommunityPersonsDisconnectFieldInput: TocCommunityPersonsDisconnectFieldInput;
  TOCCommunityPersonsFieldInput: TocCommunityPersonsFieldInput;
  TOCCommunityPersonsNodeAggregationWhereInput: TocCommunityPersonsNodeAggregationWhereInput;
  TOCCommunityPersonsRelationship: TocCommunityPersonsRelationship;
  TOCCommunityPersonsUpdateConnectionInput: TocCommunityPersonsUpdateConnectionInput;
  TOCCommunityPersonsUpdateFieldInput: TocCommunityPersonsUpdateFieldInput;
  TOCConnectInput: TocConnectInput;
  TOCConnectOrCreateInput: TocConnectOrCreateInput;
  TOCConnectOrCreateWhere: TocConnectOrCreateWhere;
  TOCConnectWhere: TocConnectWhere;
  TOCCreateInput: TocCreateInput;
  TOCDeleteInput: TocDeleteInput;
  TOCDisconnectInput: TocDisconnectInput;
  TOCEdge: TocEdge;
  TOCOnCreateInput: TocOnCreateInput;
  TOCOptions: TocOptions;
  TOCPersonCommunityPersonsAggregationSelection: TocPersonCommunityPersonsAggregationSelection;
  TOCPersonCommunityPersonsNodeAggregateSelection: TocPersonCommunityPersonsNodeAggregateSelection;
  TOCPersonRolePersonsAggregationSelection: TocPersonRolePersonsAggregationSelection;
  TOCPersonRolePersonsNodeAggregateSelection: TocPersonRolePersonsNodeAggregateSelection;
  TOCRelationInput: TocRelationInput;
  TOCRolePersonsAggregateInput: TocRolePersonsAggregateInput;
  TOCRolePersonsConnectFieldInput: TocRolePersonsConnectFieldInput;
  TOCRolePersonsConnectOrCreateFieldInput: TocRolePersonsConnectOrCreateFieldInput;
  TOCRolePersonsConnectOrCreateFieldInputOnCreate: TocRolePersonsConnectOrCreateFieldInputOnCreate;
  TOCRolePersonsConnection: TocRolePersonsConnection;
  TOCRolePersonsConnectionSort: TocRolePersonsConnectionSort;
  TOCRolePersonsConnectionWhere: TocRolePersonsConnectionWhere;
  TOCRolePersonsCreateFieldInput: TocRolePersonsCreateFieldInput;
  TOCRolePersonsDeleteFieldInput: TocRolePersonsDeleteFieldInput;
  TOCRolePersonsDisconnectFieldInput: TocRolePersonsDisconnectFieldInput;
  TOCRolePersonsFieldInput: TocRolePersonsFieldInput;
  TOCRolePersonsNodeAggregationWhereInput: TocRolePersonsNodeAggregationWhereInput;
  TOCRolePersonsRelationship: TocRolePersonsRelationship;
  TOCRolePersonsUpdateConnectionInput: TocRolePersonsUpdateConnectionInput;
  TOCRolePersonsUpdateFieldInput: TocRolePersonsUpdateFieldInput;
  TOCSort: TocSort;
  TOCUniqueWhere: TocUniqueWhere;
  TOCUpdateInput: TocUpdateInput;
  TOCWhere: TocWhere;
  TagsConnection: TagsConnection;
  TocsConnection: TocsConnection;
  UpdateCategoriesMutationResponse: UpdateCategoriesMutationResponse;
  UpdateCitiesMutationResponse: UpdateCitiesMutationResponse;
  UpdateEugsMutationResponse: UpdateEugsMutationResponse;
  UpdateIndustriesMutationResponse: UpdateIndustriesMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateLanguagesMutationResponse: UpdateLanguagesMutationResponse;
  UpdateLicensesMutationResponse: UpdateLicensesMutationResponse;
  UpdateMembersMutationResponse: UpdateMembersMutationResponse;
  UpdateMembershipTypesMutationResponse: UpdateMembershipTypesMutationResponse;
  UpdateOrganizationsMutationResponse: UpdateOrganizationsMutationResponse;
  UpdatePeopleMutationResponse: UpdatePeopleMutationResponse;
  UpdateProjectPhasesMutationResponse: UpdateProjectPhasesMutationResponse;
  UpdateProjectsMutationResponse: UpdateProjectsMutationResponse;
  UpdateTagsMutationResponse: UpdateTagsMutationResponse;
  UpdateTocsMutationResponse: UpdateTocsMutationResponse;
};

export type CategoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesConnection'] = ResolversParentTypes['CategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<CategoryMembersArgs, 'directed'>>;
  membersAggregate?: Resolver<Maybe<ResolversTypes['CategoryMemberMembersAggregationSelection']>, ParentType, ContextType, RequireFields<CategoryMembersAggregateArgs, 'directed'>>;
  membersConnection?: Resolver<ResolversTypes['CategoryMembersConnection'], ParentType, ContextType, RequireFields<CategoryMembersConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<CategoryProjectsArgs, 'directed'>>;
  projectsAggregate?: Resolver<Maybe<ResolversTypes['CategoryProjectProjectsAggregationSelection']>, ParentType, ContextType, RequireFields<CategoryProjectsAggregateArgs, 'directed'>>;
  projectsConnection?: Resolver<ResolversTypes['CategoryProjectsConnection'], ParentType, ContextType, RequireFields<CategoryProjectsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryAggregateSelection'] = ResolversParentTypes['CategoryAggregateSelection']> = {
  categoryId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEdge'] = ResolversParentTypes['CategoryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryMemberMembersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryMemberMembersAggregationSelection'] = ResolversParentTypes['CategoryMemberMembersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CategoryMemberMembersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryMemberMembersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryMemberMembersNodeAggregateSelection'] = ResolversParentTypes['CategoryMemberMembersNodeAggregateSelection']> = {
  memberId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryMembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryMembersConnection'] = ResolversParentTypes['CategoryMembersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryMembersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryMembersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryMembersRelationship'] = ResolversParentTypes['CategoryMembersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryProjectProjectsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryProjectProjectsAggregationSelection'] = ResolversParentTypes['CategoryProjectProjectsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CategoryProjectProjectsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryProjectProjectsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryProjectProjectsNodeAggregateSelection'] = ResolversParentTypes['CategoryProjectProjectsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryProjectsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryProjectsConnection'] = ResolversParentTypes['CategoryProjectsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryProjectsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryProjectsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryProjectsRelationship'] = ResolversParentTypes['CategoryProjectsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CitiesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CitiesConnection'] = ResolversParentTypes['CitiesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CityEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  cityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<CityOrganizationsArgs, 'directed'>>;
  organizationsAggregate?: Resolver<Maybe<ResolversTypes['CityOrganizationOrganizationsAggregationSelection']>, ParentType, ContextType, RequireFields<CityOrganizationsAggregateArgs, 'directed'>>;
  organizationsConnection?: Resolver<ResolversTypes['CityOrganizationsConnection'], ParentType, ContextType, RequireFields<CityOrganizationsConnectionArgs, 'directed'>>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityAggregateSelection'] = ResolversParentTypes['CityAggregateSelection']> = {
  cityId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityEdge'] = ResolversParentTypes['CityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['City'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityOrganizationOrganizationsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityOrganizationOrganizationsAggregationSelection'] = ResolversParentTypes['CityOrganizationOrganizationsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CityOrganizationOrganizationsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityOrganizationOrganizationsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityOrganizationOrganizationsNodeAggregateSelection'] = ResolversParentTypes['CityOrganizationOrganizationsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityOrganizationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityOrganizationsConnection'] = ResolversParentTypes['CityOrganizationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CityOrganizationsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityOrganizationsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['CityOrganizationsRelationship'] = ResolversParentTypes['CityOrganizationsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCategoriesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCategoriesMutationResponse'] = ResolversParentTypes['CreateCategoriesMutationResponse']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCitiesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCitiesMutationResponse'] = ResolversParentTypes['CreateCitiesMutationResponse']> = {
  cities?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateEugsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateEugsMutationResponse'] = ResolversParentTypes['CreateEugsMutationResponse']> = {
  eugs?: Resolver<Array<ResolversTypes['EUG']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateIndustriesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateIndustriesMutationResponse'] = ResolversParentTypes['CreateIndustriesMutationResponse']> = {
  industries?: Resolver<Array<ResolversTypes['Industry']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLanguagesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateLanguagesMutationResponse'] = ResolversParentTypes['CreateLanguagesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLicensesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateLicensesMutationResponse'] = ResolversParentTypes['CreateLicensesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  licenses?: Resolver<Array<ResolversTypes['License']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMembersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMembersMutationResponse'] = ResolversParentTypes['CreateMembersMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMembershipTypesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMembershipTypesMutationResponse'] = ResolversParentTypes['CreateMembershipTypesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  membershipTypes?: Resolver<Array<ResolversTypes['MembershipType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganizationsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrganizationsMutationResponse'] = ResolversParentTypes['CreateOrganizationsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePeopleMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePeopleMutationResponse'] = ResolversParentTypes['CreatePeopleMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProjectPhasesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProjectPhasesMutationResponse'] = ResolversParentTypes['CreateProjectPhasesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  projectPhases?: Resolver<Array<ResolversTypes['ProjectPhase']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProjectsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProjectsMutationResponse'] = ResolversParentTypes['CreateProjectsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTagsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTagsMutationResponse'] = ResolversParentTypes['CreateTagsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['TAG']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTocsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTocsMutationResponse'] = ResolversParentTypes['CreateTocsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  tocs?: Resolver<Array<ResolversTypes['TOC']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeleteInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUG'] = ResolversParentTypes['EUG']> = {
  eugId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<EugMembersArgs, 'directed'>>;
  membersAggregate?: Resolver<Maybe<ResolversTypes['EUGMemberMembersAggregationSelection']>, ParentType, ContextType, RequireFields<EugMembersAggregateArgs, 'directed'>>;
  membersConnection?: Resolver<ResolversTypes['EUGMembersConnection'], ParentType, ContextType, RequireFields<EugMembersConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rolePersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<EugRolePersonsArgs, 'directed'>>;
  rolePersonsAggregate?: Resolver<Maybe<ResolversTypes['EUGPersonRolePersonsAggregationSelection']>, ParentType, ContextType, RequireFields<EugRolePersonsAggregateArgs, 'directed'>>;
  rolePersonsConnection?: Resolver<ResolversTypes['EUGRolePersonsConnection'], ParentType, ContextType, RequireFields<EugRolePersonsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGAggregateSelection'] = ResolversParentTypes['EUGAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eugId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGEdge'] = ResolversParentTypes['EUGEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EUG'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugMemberMembersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGMemberMembersAggregationSelection'] = ResolversParentTypes['EUGMemberMembersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['EUGMemberMembersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugMemberMembersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGMemberMembersNodeAggregateSelection'] = ResolversParentTypes['EUGMemberMembersNodeAggregateSelection']> = {
  memberId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugMembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGMembersConnection'] = ResolversParentTypes['EUGMembersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EUGMembersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugMembersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGMembersRelationship'] = ResolversParentTypes['EUGMembersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugPersonRolePersonsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGPersonRolePersonsAggregationSelection'] = ResolversParentTypes['EUGPersonRolePersonsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['EUGPersonRolePersonsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugPersonRolePersonsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGPersonRolePersonsNodeAggregateSelection'] = ResolversParentTypes['EUGPersonRolePersonsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugRolePersonsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGRolePersonsConnection'] = ResolversParentTypes['EUGRolePersonsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EUGRolePersonsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugRolePersonsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['EUGRolePersonsRelationship'] = ResolversParentTypes['EUGRolePersonsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EugsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EugsConnection'] = ResolversParentTypes['EugsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EUGEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['IDAggregateSelectionNonNullable'] = ResolversParentTypes['IDAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustriesConnection'] = ResolversParentTypes['IndustriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['IndustryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Industry'] = ResolversParentTypes['Industry']> = {
  industryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<IndustryOrganizationsArgs, 'directed'>>;
  organizationsAggregate?: Resolver<Maybe<ResolversTypes['IndustryOrganizationOrganizationsAggregationSelection']>, ParentType, ContextType, RequireFields<IndustryOrganizationsAggregateArgs, 'directed'>>;
  organizationsConnection?: Resolver<ResolversTypes['IndustryOrganizationsConnection'], ParentType, ContextType, RequireFields<IndustryOrganizationsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustryAggregateSelection'] = ResolversParentTypes['IndustryAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  industryId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustryEdge'] = ResolversParentTypes['IndustryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Industry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryOrganizationOrganizationsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustryOrganizationOrganizationsAggregationSelection'] = ResolversParentTypes['IndustryOrganizationOrganizationsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['IndustryOrganizationOrganizationsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryOrganizationOrganizationsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustryOrganizationOrganizationsNodeAggregateSelection'] = ResolversParentTypes['IndustryOrganizationOrganizationsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryOrganizationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustryOrganizationsConnection'] = ResolversParentTypes['IndustryOrganizationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['IndustryOrganizationsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryOrganizationsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['IndustryOrganizationsRelationship'] = ResolversParentTypes['IndustryOrganizationsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  languageId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<LanguageProjectsArgs, 'directed'>>;
  projectsAggregate?: Resolver<Maybe<ResolversTypes['LanguageProjectProjectsAggregationSelection']>, ParentType, ContextType, RequireFields<LanguageProjectsAggregateArgs, 'directed'>>;
  projectsConnection?: Resolver<ResolversTypes['LanguageProjectsConnection'], ParentType, ContextType, RequireFields<LanguageProjectsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageAggregateSelection'] = ResolversParentTypes['LanguageAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  languageId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageEdge'] = ResolversParentTypes['LanguageEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageProjectProjectsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageProjectProjectsAggregationSelection'] = ResolversParentTypes['LanguageProjectProjectsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LanguageProjectProjectsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageProjectProjectsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageProjectProjectsNodeAggregateSelection'] = ResolversParentTypes['LanguageProjectProjectsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageProjectsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageProjectsConnection'] = ResolversParentTypes['LanguageProjectsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LanguageProjectsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageProjectsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageProjectsRelationship'] = ResolversParentTypes['LanguageProjectsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguagesConnection'] = ResolversParentTypes['LanguagesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LanguageEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseResolvers<ContextType = any, ParentType extends ResolversParentTypes['License'] = ResolversParentTypes['License']> = {
  licenseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<LicenseProjectsArgs, 'directed'>>;
  projectsAggregate?: Resolver<Maybe<ResolversTypes['LicenseProjectProjectsAggregationSelection']>, ParentType, ContextType, RequireFields<LicenseProjectsAggregateArgs, 'directed'>>;
  projectsConnection?: Resolver<ResolversTypes['LicenseProjectsConnection'], ParentType, ContextType, RequireFields<LicenseProjectsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicenseAggregateSelection'] = ResolversParentTypes['LicenseAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  licenseId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicenseEdge'] = ResolversParentTypes['LicenseEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['License'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseProjectProjectsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicenseProjectProjectsAggregationSelection'] = ResolversParentTypes['LicenseProjectProjectsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LicenseProjectProjectsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseProjectProjectsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicenseProjectProjectsNodeAggregateSelection'] = ResolversParentTypes['LicenseProjectProjectsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseProjectsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicenseProjectsConnection'] = ResolversParentTypes['LicenseProjectsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LicenseProjectsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicenseProjectsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicenseProjectsRelationship'] = ResolversParentTypes['LicenseProjectsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LicensesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LicensesConnection'] = ResolversParentTypes['LicensesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LicenseEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MemberCategoriesArgs, 'directed'>>;
  categoriesAggregate?: Resolver<Maybe<ResolversTypes['MemberCategoryCategoriesAggregationSelection']>, ParentType, ContextType, RequireFields<MemberCategoriesAggregateArgs, 'directed'>>;
  categoriesConnection?: Resolver<ResolversTypes['MemberCategoriesConnection'], ParentType, ContextType, RequireFields<MemberCategoriesConnectionArgs, 'directed'>>;
  cncfMemberships?: Resolver<Array<ResolversTypes['MembershipType']>, ParentType, ContextType, RequireFields<MemberCncfMembershipsArgs, 'directed'>>;
  cncfMembershipsAggregate?: Resolver<Maybe<ResolversTypes['MemberMembershipTypeCncfMembershipsAggregationSelection']>, ParentType, ContextType, RequireFields<MemberCncfMembershipsAggregateArgs, 'directed'>>;
  cncfMembershipsConnection?: Resolver<ResolversTypes['MemberCncfMembershipsConnection'], ParentType, ContextType, RequireFields<MemberCncfMembershipsConnectionArgs, 'directed'>>;
  endUserGroups?: Resolver<Array<ResolversTypes['EUG']>, ParentType, ContextType, RequireFields<MemberEndUserGroupsArgs, 'directed'>>;
  endUserGroupsAggregate?: Resolver<Maybe<ResolversTypes['MemberEUGEndUserGroupsAggregationSelection']>, ParentType, ContextType, RequireFields<MemberEndUserGroupsAggregateArgs, 'directed'>>;
  endUserGroupsConnection?: Resolver<ResolversTypes['MemberEndUserGroupsConnection'], ParentType, ContextType, RequireFields<MemberEndUserGroupsConnectionArgs, 'directed'>>;
  memberId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MemberOrganizationsArgs, 'directed'>>;
  organizationsAggregate?: Resolver<Maybe<ResolversTypes['MemberOrganizationOrganizationsAggregationSelection']>, ParentType, ContextType, RequireFields<MemberOrganizationsAggregateArgs, 'directed'>>;
  organizationsConnection?: Resolver<ResolversTypes['MemberOrganizationsConnection'], ParentType, ContextType, RequireFields<MemberOrganizationsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberAggregateSelection'] = ResolversParentTypes['MemberAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memberId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCategoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCategoriesConnection'] = ResolversParentTypes['MemberCategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberCategoriesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCategoriesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCategoriesRelationship'] = ResolversParentTypes['MemberCategoriesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCategoryCategoriesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCategoryCategoriesAggregationSelection'] = ResolversParentTypes['MemberCategoryCategoriesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberCategoryCategoriesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCategoryCategoriesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCategoryCategoriesNodeAggregateSelection'] = ResolversParentTypes['MemberCategoryCategoriesNodeAggregateSelection']> = {
  categoryId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCncfMembershipsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCncfMembershipsConnection'] = ResolversParentTypes['MemberCncfMembershipsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberCncfMembershipsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberCncfMembershipsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberCncfMembershipsRelationship'] = ResolversParentTypes['MemberCncfMembershipsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MembershipType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberEugEndUserGroupsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberEUGEndUserGroupsAggregationSelection'] = ResolversParentTypes['MemberEUGEndUserGroupsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberEUGEndUserGroupsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberEugEndUserGroupsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberEUGEndUserGroupsNodeAggregateSelection'] = ResolversParentTypes['MemberEUGEndUserGroupsNodeAggregateSelection']> = {
  eugId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberEdge'] = ResolversParentTypes['MemberEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberEndUserGroupsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberEndUserGroupsConnection'] = ResolversParentTypes['MemberEndUserGroupsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberEndUserGroupsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberEndUserGroupsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberEndUserGroupsRelationship'] = ResolversParentTypes['MemberEndUserGroupsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EUG'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMembershipTypeCncfMembershipsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMembershipTypeCncfMembershipsAggregationSelection'] = ResolversParentTypes['MemberMembershipTypeCncfMembershipsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberMembershipTypeCncfMembershipsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberMembershipTypeCncfMembershipsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMembershipTypeCncfMembershipsNodeAggregateSelection'] = ResolversParentTypes['MemberMembershipTypeCncfMembershipsNodeAggregateSelection']> = {
  membershipTypeId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberOrganizationOrganizationsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberOrganizationOrganizationsAggregationSelection'] = ResolversParentTypes['MemberOrganizationOrganizationsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MemberOrganizationOrganizationsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberOrganizationOrganizationsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberOrganizationOrganizationsNodeAggregateSelection'] = ResolversParentTypes['MemberOrganizationOrganizationsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberOrganizationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberOrganizationsConnection'] = ResolversParentTypes['MemberOrganizationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberOrganizationsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberOrganizationsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberOrganizationsRelationship'] = ResolversParentTypes['MemberOrganizationsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembersConnection'] = ResolversParentTypes['MembersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MemberEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipType'] = ResolversParentTypes['MembershipType']> = {
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MembershipTypeMembersArgs, 'directed'>>;
  membersAggregate?: Resolver<Maybe<ResolversTypes['MembershipTypeMemberMembersAggregationSelection']>, ParentType, ContextType, RequireFields<MembershipTypeMembersAggregateArgs, 'directed'>>;
  membersConnection?: Resolver<ResolversTypes['MembershipTypeMembersConnection'], ParentType, ContextType, RequireFields<MembershipTypeMembersConnectionArgs, 'directed'>>;
  membershipType?: Resolver<ResolversTypes['MembershipTypes'], ParentType, ContextType>;
  membershipTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypeAggregateSelection'] = ResolversParentTypes['MembershipTypeAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  membershipTypeId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypeEdge'] = ResolversParentTypes['MembershipTypeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MembershipType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeMemberMembersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypeMemberMembersAggregationSelection'] = ResolversParentTypes['MembershipTypeMemberMembersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MembershipTypeMemberMembersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeMemberMembersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypeMemberMembersNodeAggregateSelection'] = ResolversParentTypes['MembershipTypeMemberMembersNodeAggregateSelection']> = {
  memberId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeMembersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypeMembersConnection'] = ResolversParentTypes['MembershipTypeMembersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MembershipTypeMembersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypeMembersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypeMembersRelationship'] = ResolversParentTypes['MembershipTypeMembersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipTypesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MembershipTypesConnection'] = ResolversParentTypes['MembershipTypesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MembershipTypeEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCategories?: Resolver<ResolversTypes['CreateCategoriesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCategoriesArgs, 'input'>>;
  createCities?: Resolver<ResolversTypes['CreateCitiesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCitiesArgs, 'input'>>;
  createEugs?: Resolver<ResolversTypes['CreateEugsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateEugsArgs, 'input'>>;
  createIndustries?: Resolver<ResolversTypes['CreateIndustriesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateIndustriesArgs, 'input'>>;
  createLanguages?: Resolver<ResolversTypes['CreateLanguagesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateLanguagesArgs, 'input'>>;
  createLicenses?: Resolver<ResolversTypes['CreateLicensesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateLicensesArgs, 'input'>>;
  createMembers?: Resolver<ResolversTypes['CreateMembersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMembersArgs, 'input'>>;
  createMembershipTypes?: Resolver<ResolversTypes['CreateMembershipTypesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMembershipTypesArgs, 'input'>>;
  createOrganizations?: Resolver<ResolversTypes['CreateOrganizationsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateOrganizationsArgs, 'input'>>;
  createPeople?: Resolver<ResolversTypes['CreatePeopleMutationResponse'], ParentType, ContextType, RequireFields<MutationCreatePeopleArgs, 'input'>>;
  createProjectPhases?: Resolver<ResolversTypes['CreateProjectPhasesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateProjectPhasesArgs, 'input'>>;
  createProjects?: Resolver<ResolversTypes['CreateProjectsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateProjectsArgs, 'input'>>;
  createTags?: Resolver<ResolversTypes['CreateTagsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTagsArgs, 'input'>>;
  createTocs?: Resolver<ResolversTypes['CreateTocsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTocsArgs, 'input'>>;
  deleteCategories?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCategoriesArgs>>;
  deleteCities?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCitiesArgs>>;
  deleteEugs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteEugsArgs>>;
  deleteIndustries?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteIndustriesArgs>>;
  deleteLanguages?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteLanguagesArgs>>;
  deleteLicenses?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteLicensesArgs>>;
  deleteMembers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMembersArgs>>;
  deleteMembershipTypes?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMembershipTypesArgs>>;
  deleteOrganizations?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteOrganizationsArgs>>;
  deletePeople?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeletePeopleArgs>>;
  deleteProjectPhases?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteProjectPhasesArgs>>;
  deleteProjects?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteProjectsArgs>>;
  deleteTags?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTagsArgs>>;
  deleteTocs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTocsArgs>>;
  updateCategories?: Resolver<ResolversTypes['UpdateCategoriesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCategoriesArgs>>;
  updateCities?: Resolver<ResolversTypes['UpdateCitiesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCitiesArgs>>;
  updateEugs?: Resolver<ResolversTypes['UpdateEugsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateEugsArgs>>;
  updateIndustries?: Resolver<ResolversTypes['UpdateIndustriesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateIndustriesArgs>>;
  updateLanguages?: Resolver<ResolversTypes['UpdateLanguagesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateLanguagesArgs>>;
  updateLicenses?: Resolver<ResolversTypes['UpdateLicensesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateLicensesArgs>>;
  updateMembers?: Resolver<ResolversTypes['UpdateMembersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMembersArgs>>;
  updateMembershipTypes?: Resolver<ResolversTypes['UpdateMembershipTypesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMembershipTypesArgs>>;
  updateOrganizations?: Resolver<ResolversTypes['UpdateOrganizationsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateOrganizationsArgs>>;
  updatePeople?: Resolver<ResolversTypes['UpdatePeopleMutationResponse'], ParentType, ContextType, Partial<MutationUpdatePeopleArgs>>;
  updateProjectPhases?: Resolver<ResolversTypes['UpdateProjectPhasesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateProjectPhasesArgs>>;
  updateProjects?: Resolver<ResolversTypes['UpdateProjectsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateProjectsArgs>>;
  updateTags?: Resolver<ResolversTypes['UpdateTagsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTagsArgs>>;
  updateTocs?: Resolver<ResolversTypes['UpdateTocsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTocsArgs>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  board?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<OrganizationBoardArgs, 'directed'>>;
  boardAggregate?: Resolver<Maybe<ResolversTypes['OrganizationPersonBoardAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationBoardAggregateArgs, 'directed'>>;
  boardConnection?: Resolver<ResolversTypes['OrganizationBoardConnection'], ParentType, ContextType, RequireFields<OrganizationBoardConnectionArgs, 'directed'>>;
  employees?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<OrganizationEmployeesArgs, 'directed'>>;
  employeesAggregate?: Resolver<Maybe<ResolversTypes['OrganizationPersonEmployeesAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationEmployeesAggregateArgs, 'directed'>>;
  employeesConnection?: Resolver<ResolversTypes['OrganizationEmployeesConnection'], ParentType, ContextType, RequireFields<OrganizationEmployeesConnectionArgs, 'directed'>>;
  headquarters?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType, RequireFields<OrganizationHeadquartersArgs, 'directed'>>;
  headquartersAggregate?: Resolver<Maybe<ResolversTypes['OrganizationCityHeadquartersAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationHeadquartersAggregateArgs, 'directed'>>;
  headquartersConnection?: Resolver<ResolversTypes['OrganizationHeadquartersConnection'], ParentType, ContextType, RequireFields<OrganizationHeadquartersConnectionArgs, 'directed'>>;
  industries?: Resolver<Array<ResolversTypes['Industry']>, ParentType, ContextType, RequireFields<OrganizationIndustriesArgs, 'directed'>>;
  industriesAggregate?: Resolver<Maybe<ResolversTypes['OrganizationIndustryIndustriesAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationIndustriesAggregateArgs, 'directed'>>;
  industriesConnection?: Resolver<ResolversTypes['OrganizationIndustriesConnection'], ParentType, ContextType, RequireFields<OrganizationIndustriesConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ownedBy?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<OrganizationOwnedByArgs, 'directed'>>;
  ownedByAggregate?: Resolver<Maybe<ResolversTypes['OrganizationMemberOwnedByAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationOwnedByAggregateArgs, 'directed'>>;
  ownedByConnection?: Resolver<ResolversTypes['OrganizationOwnedByConnection'], ParentType, ContextType, RequireFields<OrganizationOwnedByConnectionArgs, 'directed'>>;
  parentOrg?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<OrganizationParentOrgArgs, 'directed'>>;
  parentOrgAggregate?: Resolver<Maybe<ResolversTypes['OrganizationOrganizationParentOrgAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationParentOrgAggregateArgs, 'directed'>>;
  parentOrgConnection?: Resolver<ResolversTypes['OrganizationParentOrgConnection'], ParentType, ContextType, RequireFields<OrganizationParentOrgConnectionArgs, 'directed'>>;
  subOrgs?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<OrganizationSubOrgsArgs, 'directed'>>;
  subOrgsAggregate?: Resolver<Maybe<ResolversTypes['OrganizationOrganizationSubOrgsAggregationSelection']>, ParentType, ContextType, RequireFields<OrganizationSubOrgsAggregateArgs, 'directed'>>;
  subOrgsConnection?: Resolver<ResolversTypes['OrganizationSubOrgsConnection'], ParentType, ContextType, RequireFields<OrganizationSubOrgsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationAggregateSelection'] = ResolversParentTypes['OrganizationAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationBoardConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationBoardConnection'] = ResolversParentTypes['OrganizationBoardConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationBoardRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationBoardRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationBoardRelationship'] = ResolversParentTypes['OrganizationBoardRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationCityHeadquartersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationCityHeadquartersAggregationSelection'] = ResolversParentTypes['OrganizationCityHeadquartersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationCityHeadquartersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationCityHeadquartersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationCityHeadquartersNodeAggregateSelection'] = ResolversParentTypes['OrganizationCityHeadquartersNodeAggregateSelection']> = {
  cityId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationEdge'] = ResolversParentTypes['OrganizationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationEmployeesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationEmployeesConnection'] = ResolversParentTypes['OrganizationEmployeesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationEmployeesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationEmployeesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationEmployeesRelationship'] = ResolversParentTypes['OrganizationEmployeesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationHeadquartersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationHeadquartersConnection'] = ResolversParentTypes['OrganizationHeadquartersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationHeadquartersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationHeadquartersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationHeadquartersRelationship'] = ResolversParentTypes['OrganizationHeadquartersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['City'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationIndustriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationIndustriesConnection'] = ResolversParentTypes['OrganizationIndustriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationIndustriesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationIndustriesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationIndustriesRelationship'] = ResolversParentTypes['OrganizationIndustriesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Industry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationIndustryIndustriesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationIndustryIndustriesAggregationSelection'] = ResolversParentTypes['OrganizationIndustryIndustriesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationIndustryIndustriesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationIndustryIndustriesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationIndustryIndustriesNodeAggregateSelection'] = ResolversParentTypes['OrganizationIndustryIndustriesNodeAggregateSelection']> = {
  industryId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationMemberOwnedByAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationMemberOwnedByAggregationSelection'] = ResolversParentTypes['OrganizationMemberOwnedByAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationMemberOwnedByNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationMemberOwnedByNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationMemberOwnedByNodeAggregateSelection'] = ResolversParentTypes['OrganizationMemberOwnedByNodeAggregateSelection']> = {
  memberId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOrganizationParentOrgAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOrganizationParentOrgAggregationSelection'] = ResolversParentTypes['OrganizationOrganizationParentOrgAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationOrganizationParentOrgNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOrganizationParentOrgNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOrganizationParentOrgNodeAggregateSelection'] = ResolversParentTypes['OrganizationOrganizationParentOrgNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOrganizationSubOrgsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOrganizationSubOrgsAggregationSelection'] = ResolversParentTypes['OrganizationOrganizationSubOrgsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationOrganizationSubOrgsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOrganizationSubOrgsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOrganizationSubOrgsNodeAggregateSelection'] = ResolversParentTypes['OrganizationOrganizationSubOrgsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOwnedByConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOwnedByConnection'] = ResolversParentTypes['OrganizationOwnedByConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationOwnedByRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOwnedByRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOwnedByRelationship'] = ResolversParentTypes['OrganizationOwnedByRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationParentOrgConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationParentOrgConnection'] = ResolversParentTypes['OrganizationParentOrgConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationParentOrgRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationParentOrgRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationParentOrgRelationship'] = ResolversParentTypes['OrganizationParentOrgRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPersonBoardAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPersonBoardAggregationSelection'] = ResolversParentTypes['OrganizationPersonBoardAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationPersonBoardNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPersonBoardNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPersonBoardNodeAggregateSelection'] = ResolversParentTypes['OrganizationPersonBoardNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPersonEmployeesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPersonEmployeesAggregationSelection'] = ResolversParentTypes['OrganizationPersonEmployeesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OrganizationPersonEmployeesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPersonEmployeesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPersonEmployeesNodeAggregateSelection'] = ResolversParentTypes['OrganizationPersonEmployeesNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationSubOrgsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationSubOrgsConnection'] = ResolversParentTypes['OrganizationSubOrgsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationSubOrgsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationSubOrgsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationSubOrgsRelationship'] = ResolversParentTypes['OrganizationSubOrgsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationsConnection'] = ResolversParentTypes['OrganizationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleConnection'] = ResolversParentTypes['PeopleConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  boards?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<PersonBoardsArgs, 'directed'>>;
  boardsAggregate?: Resolver<Maybe<ResolversTypes['PersonOrganizationBoardsAggregationSelection']>, ParentType, ContextType, RequireFields<PersonBoardsAggregateArgs, 'directed'>>;
  boardsConnection?: Resolver<ResolversTypes['PersonBoardsConnection'], ParentType, ContextType, RequireFields<PersonBoardsConnectionArgs, 'directed'>>;
  employers?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<PersonEmployersArgs, 'directed'>>;
  employersAggregate?: Resolver<Maybe<ResolversTypes['PersonOrganizationEmployersAggregationSelection']>, ParentType, ContextType, RequireFields<PersonEmployersAggregateArgs, 'directed'>>;
  employersConnection?: Resolver<ResolversTypes['PersonEmployersConnection'], ParentType, ContextType, RequireFields<PersonEmployersConnectionArgs, 'directed'>>;
  eugRoles?: Resolver<Array<ResolversTypes['EUG']>, ParentType, ContextType, RequireFields<PersonEugRolesArgs, 'directed'>>;
  eugRolesAggregate?: Resolver<Maybe<ResolversTypes['PersonEUGEugRolesAggregationSelection']>, ParentType, ContextType, RequireFields<PersonEugRolesAggregateArgs, 'directed'>>;
  eugRolesConnection?: Resolver<ResolversTypes['PersonEugRolesConnection'], ParentType, ContextType, RequireFields<PersonEugRolesConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projRoles?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<PersonProjRolesArgs, 'directed'>>;
  projRolesAggregate?: Resolver<Maybe<ResolversTypes['PersonProjectProjRolesAggregationSelection']>, ParentType, ContextType, RequireFields<PersonProjRolesAggregateArgs, 'directed'>>;
  projRolesConnection?: Resolver<ResolversTypes['PersonProjRolesConnection'], ParentType, ContextType, RequireFields<PersonProjRolesConnectionArgs, 'directed'>>;
  tagRoles?: Resolver<Array<ResolversTypes['TAG']>, ParentType, ContextType, RequireFields<PersonTagRolesArgs, 'directed'>>;
  tagRolesAggregate?: Resolver<Maybe<ResolversTypes['PersonTAGTagRolesAggregationSelection']>, ParentType, ContextType, RequireFields<PersonTagRolesAggregateArgs, 'directed'>>;
  tagRolesConnection?: Resolver<ResolversTypes['PersonTagRolesConnection'], ParentType, ContextType, RequireFields<PersonTagRolesConnectionArgs, 'directed'>>;
  tocRoles?: Resolver<Array<ResolversTypes['TOC']>, ParentType, ContextType, RequireFields<PersonTocRolesArgs, 'directed'>>;
  tocRolesAggregate?: Resolver<Maybe<ResolversTypes['PersonTOCTocRolesAggregationSelection']>, ParentType, ContextType, RequireFields<PersonTocRolesAggregateArgs, 'directed'>>;
  tocRolesConnection?: Resolver<ResolversTypes['PersonTocRolesConnection'], ParentType, ContextType, RequireFields<PersonTocRolesConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonAggregateSelection'] = ResolversParentTypes['PersonAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonBoardsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonBoardsConnection'] = ResolversParentTypes['PersonBoardsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonBoardsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonBoardsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonBoardsRelationship'] = ResolversParentTypes['PersonBoardsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEugEugRolesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEUGEugRolesAggregationSelection'] = ResolversParentTypes['PersonEUGEugRolesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PersonEUGEugRolesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEugEugRolesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEUGEugRolesNodeAggregateSelection'] = ResolversParentTypes['PersonEUGEugRolesNodeAggregateSelection']> = {
  eugId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEdge'] = ResolversParentTypes['PersonEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEmployersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEmployersConnection'] = ResolversParentTypes['PersonEmployersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonEmployersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEmployersRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEmployersRelationship'] = ResolversParentTypes['PersonEmployersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEugRolesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEugRolesConnection'] = ResolversParentTypes['PersonEugRolesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonEugRolesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEugRolesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEugRolesRelationship'] = ResolversParentTypes['PersonEugRolesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EUG'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonOrganizationBoardsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonOrganizationBoardsAggregationSelection'] = ResolversParentTypes['PersonOrganizationBoardsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PersonOrganizationBoardsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonOrganizationBoardsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonOrganizationBoardsNodeAggregateSelection'] = ResolversParentTypes['PersonOrganizationBoardsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonOrganizationEmployersAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonOrganizationEmployersAggregationSelection'] = ResolversParentTypes['PersonOrganizationEmployersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PersonOrganizationEmployersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonOrganizationEmployersNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonOrganizationEmployersNodeAggregateSelection'] = ResolversParentTypes['PersonOrganizationEmployersNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonProjRolesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonProjRolesConnection'] = ResolversParentTypes['PersonProjRolesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonProjRolesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonProjRolesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonProjRolesRelationship'] = ResolversParentTypes['PersonProjRolesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonProjectProjRolesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonProjectProjRolesAggregationSelection'] = ResolversParentTypes['PersonProjectProjRolesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PersonProjectProjRolesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonProjectProjRolesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonProjectProjRolesNodeAggregateSelection'] = ResolversParentTypes['PersonProjectProjRolesNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTagTagRolesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTAGTagRolesAggregationSelection'] = ResolversParentTypes['PersonTAGTagRolesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PersonTAGTagRolesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTagTagRolesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTAGTagRolesNodeAggregateSelection'] = ResolversParentTypes['PersonTAGTagRolesNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTocTocRolesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTOCTocRolesAggregationSelection'] = ResolversParentTypes['PersonTOCTocRolesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PersonTOCTocRolesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTocTocRolesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTOCTocRolesNodeAggregateSelection'] = ResolversParentTypes['PersonTOCTocRolesNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  tocId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTagRolesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTagRolesConnection'] = ResolversParentTypes['PersonTagRolesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonTagRolesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTagRolesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTagRolesRelationship'] = ResolversParentTypes['PersonTagRolesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TAG'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTocRolesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTocRolesConnection'] = ResolversParentTypes['PersonTocRolesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PersonTocRolesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTocRolesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonTocRolesRelationship'] = ResolversParentTypes['PersonTocRolesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TOC'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<ProjectCategoriesArgs, 'directed'>>;
  categoriesAggregate?: Resolver<Maybe<ResolversTypes['ProjectCategoryCategoriesAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectCategoriesAggregateArgs, 'directed'>>;
  categoriesConnection?: Resolver<ResolversTypes['ProjectCategoriesConnection'], ParentType, ContextType, RequireFields<ProjectCategoriesConnectionArgs, 'directed'>>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<ProjectLanguagesArgs, 'directed'>>;
  languagesAggregate?: Resolver<Maybe<ResolversTypes['ProjectLanguageLanguagesAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectLanguagesAggregateArgs, 'directed'>>;
  languagesConnection?: Resolver<ResolversTypes['ProjectLanguagesConnection'], ParentType, ContextType, RequireFields<ProjectLanguagesConnectionArgs, 'directed'>>;
  licenses?: Resolver<Array<ResolversTypes['License']>, ParentType, ContextType, RequireFields<ProjectLicensesArgs, 'directed'>>;
  licensesAggregate?: Resolver<Maybe<ResolversTypes['ProjectLicenseLicensesAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectLicensesAggregateArgs, 'directed'>>;
  licensesConnection?: Resolver<ResolversTypes['ProjectLicensesConnection'], ParentType, ContextType, RequireFields<ProjectLicensesConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projRoles?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<ProjectProjRolesArgs, 'directed'>>;
  projRolesAggregate?: Resolver<Maybe<ResolversTypes['ProjectPersonProjRolesAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectProjRolesAggregateArgs, 'directed'>>;
  projRolesConnection?: Resolver<ResolversTypes['ProjectProjRolesConnection'], ParentType, ContextType, RequireFields<ProjectProjRolesConnectionArgs, 'directed'>>;
  projectId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projectLevels?: Resolver<Array<ResolversTypes['ProjectPhase']>, ParentType, ContextType, RequireFields<ProjectProjectLevelsArgs, 'directed'>>;
  projectLevelsAggregate?: Resolver<Maybe<ResolversTypes['ProjectProjectPhaseProjectLevelsAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectProjectLevelsAggregateArgs, 'directed'>>;
  projectLevelsConnection?: Resolver<ResolversTypes['ProjectProjectLevelsConnection'], ParentType, ContextType, RequireFields<ProjectProjectLevelsConnectionArgs, 'directed'>>;
  tags?: Resolver<Array<ResolversTypes['TAG']>, ParentType, ContextType, RequireFields<ProjectTagsArgs, 'directed'>>;
  tagsAggregate?: Resolver<Maybe<ResolversTypes['ProjectTAGTagsAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectTagsAggregateArgs, 'directed'>>;
  tagsConnection?: Resolver<ResolversTypes['ProjectTagsConnection'], ParentType, ContextType, RequireFields<ProjectTagsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectAggregateSelection'] = ResolversParentTypes['ProjectAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCategoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCategoriesConnection'] = ResolversParentTypes['ProjectCategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectCategoriesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCategoriesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCategoriesRelationship'] = ResolversParentTypes['ProjectCategoriesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCategoryCategoriesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCategoryCategoriesAggregationSelection'] = ResolversParentTypes['ProjectCategoryCategoriesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectCategoryCategoriesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCategoryCategoriesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCategoryCategoriesNodeAggregateSelection'] = ResolversParentTypes['ProjectCategoryCategoriesNodeAggregateSelection']> = {
  categoryId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectEdge'] = ResolversParentTypes['ProjectEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLanguageLanguagesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLanguageLanguagesAggregationSelection'] = ResolversParentTypes['ProjectLanguageLanguagesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectLanguageLanguagesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLanguageLanguagesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLanguageLanguagesNodeAggregateSelection'] = ResolversParentTypes['ProjectLanguageLanguagesNodeAggregateSelection']> = {
  languageId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLanguagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLanguagesConnection'] = ResolversParentTypes['ProjectLanguagesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectLanguagesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLanguagesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLanguagesRelationship'] = ResolversParentTypes['ProjectLanguagesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLicenseLicensesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLicenseLicensesAggregationSelection'] = ResolversParentTypes['ProjectLicenseLicensesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectLicenseLicensesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLicenseLicensesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLicenseLicensesNodeAggregateSelection'] = ResolversParentTypes['ProjectLicenseLicensesNodeAggregateSelection']> = {
  licenseId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLicensesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLicensesConnection'] = ResolversParentTypes['ProjectLicensesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectLicensesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLicensesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLicensesRelationship'] = ResolversParentTypes['ProjectLicensesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['License'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPersonProjRolesAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPersonProjRolesAggregationSelection'] = ResolversParentTypes['ProjectPersonProjRolesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectPersonProjRolesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPersonProjRolesNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPersonProjRolesNodeAggregateSelection'] = ResolversParentTypes['ProjectPersonProjRolesNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhase'] = ResolversParentTypes['ProjectPhase']> = {
  projectPhase?: Resolver<ResolversTypes['ProjectPhases'], ParentType, ContextType>;
  projectPhaseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<ProjectPhaseProjectsArgs, 'directed'>>;
  projectsAggregate?: Resolver<Maybe<ResolversTypes['ProjectPhaseProjectProjectsAggregationSelection']>, ParentType, ContextType, RequireFields<ProjectPhaseProjectsAggregateArgs, 'directed'>>;
  projectsConnection?: Resolver<ResolversTypes['ProjectPhaseProjectsConnection'], ParentType, ContextType, RequireFields<ProjectPhaseProjectsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhaseAggregateSelection'] = ResolversParentTypes['ProjectPhaseAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectPhaseId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhaseEdge'] = ResolversParentTypes['ProjectPhaseEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProjectPhase'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseProjectProjectsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhaseProjectProjectsAggregationSelection'] = ResolversParentTypes['ProjectPhaseProjectProjectsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectPhaseProjectProjectsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseProjectProjectsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhaseProjectProjectsNodeAggregateSelection'] = ResolversParentTypes['ProjectPhaseProjectProjectsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseProjectsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhaseProjectsConnection'] = ResolversParentTypes['ProjectPhaseProjectsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectPhaseProjectsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhaseProjectsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhaseProjectsRelationship'] = ResolversParentTypes['ProjectPhaseProjectsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPhasesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPhasesConnection'] = ResolversParentTypes['ProjectPhasesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectPhaseEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectProjRolesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectProjRolesConnection'] = ResolversParentTypes['ProjectProjRolesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectProjRolesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectProjRolesRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectProjRolesRelationship'] = ResolversParentTypes['ProjectProjRolesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectProjectLevelsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectProjectLevelsConnection'] = ResolversParentTypes['ProjectProjectLevelsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectProjectLevelsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectProjectLevelsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectProjectLevelsRelationship'] = ResolversParentTypes['ProjectProjectLevelsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProjectPhase'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectProjectPhaseProjectLevelsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectProjectPhaseProjectLevelsAggregationSelection'] = ResolversParentTypes['ProjectProjectPhaseProjectLevelsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectProjectPhaseProjectLevelsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectProjectPhaseProjectLevelsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectProjectPhaseProjectLevelsNodeAggregateSelection'] = ResolversParentTypes['ProjectProjectPhaseProjectLevelsNodeAggregateSelection']> = {
  projectPhaseId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTagTagsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectTAGTagsAggregationSelection'] = ResolversParentTypes['ProjectTAGTagsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProjectTAGTagsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTagTagsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectTAGTagsNodeAggregateSelection'] = ResolversParentTypes['ProjectTAGTagsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTagsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectTagsConnection'] = ResolversParentTypes['ProjectTagsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectTagsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTagsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectTagsRelationship'] = ResolversParentTypes['ProjectTagsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TAG'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectsConnection'] = ResolversParentTypes['ProjectsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ProjectEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<QueryCategoriesArgs>>;
  categoriesAggregate?: Resolver<ResolversTypes['CategoryAggregateSelection'], ParentType, ContextType, Partial<QueryCategoriesAggregateArgs>>;
  categoriesConnection?: Resolver<ResolversTypes['CategoriesConnection'], ParentType, ContextType, Partial<QueryCategoriesConnectionArgs>>;
  cities?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType, Partial<QueryCitiesArgs>>;
  citiesAggregate?: Resolver<ResolversTypes['CityAggregateSelection'], ParentType, ContextType, Partial<QueryCitiesAggregateArgs>>;
  citiesConnection?: Resolver<ResolversTypes['CitiesConnection'], ParentType, ContextType, Partial<QueryCitiesConnectionArgs>>;
  eugs?: Resolver<Array<ResolversTypes['EUG']>, ParentType, ContextType, Partial<QueryEugsArgs>>;
  eugsAggregate?: Resolver<ResolversTypes['EUGAggregateSelection'], ParentType, ContextType, Partial<QueryEugsAggregateArgs>>;
  eugsConnection?: Resolver<ResolversTypes['EugsConnection'], ParentType, ContextType, Partial<QueryEugsConnectionArgs>>;
  industries?: Resolver<Array<ResolversTypes['Industry']>, ParentType, ContextType, Partial<QueryIndustriesArgs>>;
  industriesAggregate?: Resolver<ResolversTypes['IndustryAggregateSelection'], ParentType, ContextType, Partial<QueryIndustriesAggregateArgs>>;
  industriesConnection?: Resolver<ResolversTypes['IndustriesConnection'], ParentType, ContextType, Partial<QueryIndustriesConnectionArgs>>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType, Partial<QueryLanguagesArgs>>;
  languagesAggregate?: Resolver<ResolversTypes['LanguageAggregateSelection'], ParentType, ContextType, Partial<QueryLanguagesAggregateArgs>>;
  languagesConnection?: Resolver<ResolversTypes['LanguagesConnection'], ParentType, ContextType, Partial<QueryLanguagesConnectionArgs>>;
  licenses?: Resolver<Array<ResolversTypes['License']>, ParentType, ContextType, Partial<QueryLicensesArgs>>;
  licensesAggregate?: Resolver<ResolversTypes['LicenseAggregateSelection'], ParentType, ContextType, Partial<QueryLicensesAggregateArgs>>;
  licensesConnection?: Resolver<ResolversTypes['LicensesConnection'], ParentType, ContextType, Partial<QueryLicensesConnectionArgs>>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryMembersArgs>>;
  membersAggregate?: Resolver<ResolversTypes['MemberAggregateSelection'], ParentType, ContextType, Partial<QueryMembersAggregateArgs>>;
  membersConnection?: Resolver<ResolversTypes['MembersConnection'], ParentType, ContextType, Partial<QueryMembersConnectionArgs>>;
  membershipTypes?: Resolver<Array<ResolversTypes['MembershipType']>, ParentType, ContextType, Partial<QueryMembershipTypesArgs>>;
  membershipTypesAggregate?: Resolver<ResolversTypes['MembershipTypeAggregateSelection'], ParentType, ContextType, Partial<QueryMembershipTypesAggregateArgs>>;
  membershipTypesConnection?: Resolver<ResolversTypes['MembershipTypesConnection'], ParentType, ContextType, Partial<QueryMembershipTypesConnectionArgs>>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, Partial<QueryOrganizationsArgs>>;
  organizationsAggregate?: Resolver<ResolversTypes['OrganizationAggregateSelection'], ParentType, ContextType, Partial<QueryOrganizationsAggregateArgs>>;
  organizationsConnection?: Resolver<ResolversTypes['OrganizationsConnection'], ParentType, ContextType, Partial<QueryOrganizationsConnectionArgs>>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryPeopleArgs>>;
  peopleAggregate?: Resolver<ResolversTypes['PersonAggregateSelection'], ParentType, ContextType, Partial<QueryPeopleAggregateArgs>>;
  peopleConnection?: Resolver<ResolversTypes['PeopleConnection'], ParentType, ContextType, Partial<QueryPeopleConnectionArgs>>;
  projectPhases?: Resolver<Array<ResolversTypes['ProjectPhase']>, ParentType, ContextType, Partial<QueryProjectPhasesArgs>>;
  projectPhasesAggregate?: Resolver<ResolversTypes['ProjectPhaseAggregateSelection'], ParentType, ContextType, Partial<QueryProjectPhasesAggregateArgs>>;
  projectPhasesConnection?: Resolver<ResolversTypes['ProjectPhasesConnection'], ParentType, ContextType, Partial<QueryProjectPhasesConnectionArgs>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, Partial<QueryProjectsArgs>>;
  projectsAggregate?: Resolver<ResolversTypes['ProjectAggregateSelection'], ParentType, ContextType, Partial<QueryProjectsAggregateArgs>>;
  projectsConnection?: Resolver<ResolversTypes['ProjectsConnection'], ParentType, ContextType, Partial<QueryProjectsConnectionArgs>>;
  tags?: Resolver<Array<ResolversTypes['TAG']>, ParentType, ContextType, Partial<QueryTagsArgs>>;
  tagsAggregate?: Resolver<ResolversTypes['TAGAggregateSelection'], ParentType, ContextType, Partial<QueryTagsAggregateArgs>>;
  tagsConnection?: Resolver<ResolversTypes['TagsConnection'], ParentType, ContextType, Partial<QueryTagsConnectionArgs>>;
  tocs?: Resolver<Array<ResolversTypes['TOC']>, ParentType, ContextType, Partial<QueryTocsArgs>>;
  tocsAggregate?: Resolver<ResolversTypes['TOCAggregateSelection'], ParentType, ContextType, Partial<QueryTocsAggregateArgs>>;
  tocsConnection?: Resolver<ResolversTypes['TocsConnection'], ParentType, ContextType, Partial<QueryTocsConnectionArgs>>;
};

export type ServedInRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServedInRole'] = ResolversParentTypes['ServedInRole']> = {
  __resolveType: TypeResolveFn<'EUGRolePersonsRelationship' | 'PersonEugRolesRelationship' | 'PersonProjRolesRelationship' | 'PersonTagRolesRelationship' | 'PersonTocRolesRelationship' | 'ProjectProjRolesRelationship' | 'TAGRolePersonsRelationship' | 'TOCRolePersonsRelationship', ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
};

export type StringAggregateSelectionNonNullableResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringAggregateSelectionNonNullable'] = ResolversParentTypes['StringAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAG'] = ResolversParentTypes['TAG']> = {
  communityPersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<TagCommunityPersonsArgs, 'directed'>>;
  communityPersonsAggregate?: Resolver<Maybe<ResolversTypes['TAGPersonCommunityPersonsAggregationSelection']>, ParentType, ContextType, RequireFields<TagCommunityPersonsAggregateArgs, 'directed'>>;
  communityPersonsConnection?: Resolver<ResolversTypes['TAGCommunityPersonsConnection'], ParentType, ContextType, RequireFields<TagCommunityPersonsConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projectsInScope?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<TagProjectsInScopeArgs, 'directed'>>;
  projectsInScopeAggregate?: Resolver<Maybe<ResolversTypes['TAGProjectProjectsInScopeAggregationSelection']>, ParentType, ContextType, RequireFields<TagProjectsInScopeAggregateArgs, 'directed'>>;
  projectsInScopeConnection?: Resolver<ResolversTypes['TAGProjectsInScopeConnection'], ParentType, ContextType, RequireFields<TagProjectsInScopeConnectionArgs, 'directed'>>;
  rolePersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<TagRolePersonsArgs, 'directed'>>;
  rolePersonsAggregate?: Resolver<Maybe<ResolversTypes['TAGPersonRolePersonsAggregationSelection']>, ParentType, ContextType, RequireFields<TagRolePersonsAggregateArgs, 'directed'>>;
  rolePersonsConnection?: Resolver<ResolversTypes['TAGRolePersonsConnection'], ParentType, ContextType, RequireFields<TagRolePersonsConnectionArgs, 'directed'>>;
  tagId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGAggregateSelection'] = ResolversParentTypes['TAGAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagCommunityPersonsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGCommunityPersonsConnection'] = ResolversParentTypes['TAGCommunityPersonsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TAGCommunityPersonsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagCommunityPersonsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGCommunityPersonsRelationship'] = ResolversParentTypes['TAGCommunityPersonsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGEdge'] = ResolversParentTypes['TAGEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TAG'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagPersonCommunityPersonsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGPersonCommunityPersonsAggregationSelection'] = ResolversParentTypes['TAGPersonCommunityPersonsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TAGPersonCommunityPersonsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagPersonCommunityPersonsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGPersonCommunityPersonsNodeAggregateSelection'] = ResolversParentTypes['TAGPersonCommunityPersonsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagPersonRolePersonsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGPersonRolePersonsAggregationSelection'] = ResolversParentTypes['TAGPersonRolePersonsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TAGPersonRolePersonsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagPersonRolePersonsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGPersonRolePersonsNodeAggregateSelection'] = ResolversParentTypes['TAGPersonRolePersonsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagProjectProjectsInScopeAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGProjectProjectsInScopeAggregationSelection'] = ResolversParentTypes['TAGProjectProjectsInScopeAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TAGProjectProjectsInScopeNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagProjectProjectsInScopeNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGProjectProjectsInScopeNodeAggregateSelection'] = ResolversParentTypes['TAGProjectProjectsInScopeNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagProjectsInScopeConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGProjectsInScopeConnection'] = ResolversParentTypes['TAGProjectsInScopeConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TAGProjectsInScopeRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagProjectsInScopeRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGProjectsInScopeRelationship'] = ResolversParentTypes['TAGProjectsInScopeRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagRolePersonsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGRolePersonsConnection'] = ResolversParentTypes['TAGRolePersonsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TAGRolePersonsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagRolePersonsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['TAGRolePersonsRelationship'] = ResolversParentTypes['TAGRolePersonsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOC'] = ResolversParentTypes['TOC']> = {
  communityPersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<TocCommunityPersonsArgs, 'directed'>>;
  communityPersonsAggregate?: Resolver<Maybe<ResolversTypes['TOCPersonCommunityPersonsAggregationSelection']>, ParentType, ContextType, RequireFields<TocCommunityPersonsAggregateArgs, 'directed'>>;
  communityPersonsConnection?: Resolver<ResolversTypes['TOCCommunityPersonsConnection'], ParentType, ContextType, RequireFields<TocCommunityPersonsConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rolePersons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<TocRolePersonsArgs, 'directed'>>;
  rolePersonsAggregate?: Resolver<Maybe<ResolversTypes['TOCPersonRolePersonsAggregationSelection']>, ParentType, ContextType, RequireFields<TocRolePersonsAggregateArgs, 'directed'>>;
  rolePersonsConnection?: Resolver<ResolversTypes['TOCRolePersonsConnection'], ParentType, ContextType, RequireFields<TocRolePersonsConnectionArgs, 'directed'>>;
  tocId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCAggregateSelection'] = ResolversParentTypes['TOCAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  tocId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocCommunityPersonsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCCommunityPersonsConnection'] = ResolversParentTypes['TOCCommunityPersonsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TOCCommunityPersonsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocCommunityPersonsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCCommunityPersonsRelationship'] = ResolversParentTypes['TOCCommunityPersonsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCEdge'] = ResolversParentTypes['TOCEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TOC'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocPersonCommunityPersonsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCPersonCommunityPersonsAggregationSelection'] = ResolversParentTypes['TOCPersonCommunityPersonsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TOCPersonCommunityPersonsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocPersonCommunityPersonsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCPersonCommunityPersonsNodeAggregateSelection'] = ResolversParentTypes['TOCPersonCommunityPersonsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocPersonRolePersonsAggregationSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCPersonRolePersonsAggregationSelection'] = ResolversParentTypes['TOCPersonRolePersonsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TOCPersonRolePersonsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocPersonRolePersonsNodeAggregateSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCPersonRolePersonsNodeAggregateSelection'] = ResolversParentTypes['TOCPersonRolePersonsNodeAggregateSelection']> = {
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  personId?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocRolePersonsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCRolePersonsConnection'] = ResolversParentTypes['TOCRolePersonsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TOCRolePersonsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocRolePersonsRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['TOCRolePersonsRelationship'] = ResolversParentTypes['TOCRolePersonsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  rolePosition?: Resolver<ResolversTypes['ROLE_POSITION'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['ROLE_TYPE'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsConnection'] = ResolversParentTypes['TagsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TAGEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TocsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TocsConnection'] = ResolversParentTypes['TocsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TOCEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCategoriesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCategoriesMutationResponse'] = ResolversParentTypes['UpdateCategoriesMutationResponse']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCitiesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCitiesMutationResponse'] = ResolversParentTypes['UpdateCitiesMutationResponse']> = {
  cities?: Resolver<Array<ResolversTypes['City']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateEugsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateEugsMutationResponse'] = ResolversParentTypes['UpdateEugsMutationResponse']> = {
  eugs?: Resolver<Array<ResolversTypes['EUG']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateIndustriesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateIndustriesMutationResponse'] = ResolversParentTypes['UpdateIndustriesMutationResponse']> = {
  industries?: Resolver<Array<ResolversTypes['Industry']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateLanguagesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateLanguagesMutationResponse'] = ResolversParentTypes['UpdateLanguagesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  languages?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateLicensesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateLicensesMutationResponse'] = ResolversParentTypes['UpdateLicensesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  licenses?: Resolver<Array<ResolversTypes['License']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMembersMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMembersMutationResponse'] = ResolversParentTypes['UpdateMembersMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMembershipTypesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMembershipTypesMutationResponse'] = ResolversParentTypes['UpdateMembershipTypesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  membershipTypes?: Resolver<Array<ResolversTypes['MembershipType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrganizationsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrganizationsMutationResponse'] = ResolversParentTypes['UpdateOrganizationsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePeopleMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePeopleMutationResponse'] = ResolversParentTypes['UpdatePeopleMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProjectPhasesMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProjectPhasesMutationResponse'] = ResolversParentTypes['UpdateProjectPhasesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  projectPhases?: Resolver<Array<ResolversTypes['ProjectPhase']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProjectsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProjectsMutationResponse'] = ResolversParentTypes['UpdateProjectsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTagsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTagsMutationResponse'] = ResolversParentTypes['UpdateTagsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['TAG']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTocsMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateTocsMutationResponse'] = ResolversParentTypes['UpdateTocsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tocs?: Resolver<Array<ResolversTypes['TOC']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CategoriesConnection?: CategoriesConnectionResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryAggregateSelection?: CategoryAggregateSelectionResolvers<ContextType>;
  CategoryEdge?: CategoryEdgeResolvers<ContextType>;
  CategoryMemberMembersAggregationSelection?: CategoryMemberMembersAggregationSelectionResolvers<ContextType>;
  CategoryMemberMembersNodeAggregateSelection?: CategoryMemberMembersNodeAggregateSelectionResolvers<ContextType>;
  CategoryMembersConnection?: CategoryMembersConnectionResolvers<ContextType>;
  CategoryMembersRelationship?: CategoryMembersRelationshipResolvers<ContextType>;
  CategoryProjectProjectsAggregationSelection?: CategoryProjectProjectsAggregationSelectionResolvers<ContextType>;
  CategoryProjectProjectsNodeAggregateSelection?: CategoryProjectProjectsNodeAggregateSelectionResolvers<ContextType>;
  CategoryProjectsConnection?: CategoryProjectsConnectionResolvers<ContextType>;
  CategoryProjectsRelationship?: CategoryProjectsRelationshipResolvers<ContextType>;
  CitiesConnection?: CitiesConnectionResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  CityAggregateSelection?: CityAggregateSelectionResolvers<ContextType>;
  CityEdge?: CityEdgeResolvers<ContextType>;
  CityOrganizationOrganizationsAggregationSelection?: CityOrganizationOrganizationsAggregationSelectionResolvers<ContextType>;
  CityOrganizationOrganizationsNodeAggregateSelection?: CityOrganizationOrganizationsNodeAggregateSelectionResolvers<ContextType>;
  CityOrganizationsConnection?: CityOrganizationsConnectionResolvers<ContextType>;
  CityOrganizationsRelationship?: CityOrganizationsRelationshipResolvers<ContextType>;
  CreateCategoriesMutationResponse?: CreateCategoriesMutationResponseResolvers<ContextType>;
  CreateCitiesMutationResponse?: CreateCitiesMutationResponseResolvers<ContextType>;
  CreateEugsMutationResponse?: CreateEugsMutationResponseResolvers<ContextType>;
  CreateIndustriesMutationResponse?: CreateIndustriesMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateLanguagesMutationResponse?: CreateLanguagesMutationResponseResolvers<ContextType>;
  CreateLicensesMutationResponse?: CreateLicensesMutationResponseResolvers<ContextType>;
  CreateMembersMutationResponse?: CreateMembersMutationResponseResolvers<ContextType>;
  CreateMembershipTypesMutationResponse?: CreateMembershipTypesMutationResponseResolvers<ContextType>;
  CreateOrganizationsMutationResponse?: CreateOrganizationsMutationResponseResolvers<ContextType>;
  CreatePeopleMutationResponse?: CreatePeopleMutationResponseResolvers<ContextType>;
  CreateProjectPhasesMutationResponse?: CreateProjectPhasesMutationResponseResolvers<ContextType>;
  CreateProjectsMutationResponse?: CreateProjectsMutationResponseResolvers<ContextType>;
  CreateTagsMutationResponse?: CreateTagsMutationResponseResolvers<ContextType>;
  CreateTocsMutationResponse?: CreateTocsMutationResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  EUG?: EugResolvers<ContextType>;
  EUGAggregateSelection?: EugAggregateSelectionResolvers<ContextType>;
  EUGEdge?: EugEdgeResolvers<ContextType>;
  EUGMemberMembersAggregationSelection?: EugMemberMembersAggregationSelectionResolvers<ContextType>;
  EUGMemberMembersNodeAggregateSelection?: EugMemberMembersNodeAggregateSelectionResolvers<ContextType>;
  EUGMembersConnection?: EugMembersConnectionResolvers<ContextType>;
  EUGMembersRelationship?: EugMembersRelationshipResolvers<ContextType>;
  EUGPersonRolePersonsAggregationSelection?: EugPersonRolePersonsAggregationSelectionResolvers<ContextType>;
  EUGPersonRolePersonsNodeAggregateSelection?: EugPersonRolePersonsNodeAggregateSelectionResolvers<ContextType>;
  EUGRolePersonsConnection?: EugRolePersonsConnectionResolvers<ContextType>;
  EUGRolePersonsRelationship?: EugRolePersonsRelationshipResolvers<ContextType>;
  EugsConnection?: EugsConnectionResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IdAggregateSelectionNonNullableResolvers<ContextType>;
  IndustriesConnection?: IndustriesConnectionResolvers<ContextType>;
  Industry?: IndustryResolvers<ContextType>;
  IndustryAggregateSelection?: IndustryAggregateSelectionResolvers<ContextType>;
  IndustryEdge?: IndustryEdgeResolvers<ContextType>;
  IndustryOrganizationOrganizationsAggregationSelection?: IndustryOrganizationOrganizationsAggregationSelectionResolvers<ContextType>;
  IndustryOrganizationOrganizationsNodeAggregateSelection?: IndustryOrganizationOrganizationsNodeAggregateSelectionResolvers<ContextType>;
  IndustryOrganizationsConnection?: IndustryOrganizationsConnectionResolvers<ContextType>;
  IndustryOrganizationsRelationship?: IndustryOrganizationsRelationshipResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  LanguageAggregateSelection?: LanguageAggregateSelectionResolvers<ContextType>;
  LanguageEdge?: LanguageEdgeResolvers<ContextType>;
  LanguageProjectProjectsAggregationSelection?: LanguageProjectProjectsAggregationSelectionResolvers<ContextType>;
  LanguageProjectProjectsNodeAggregateSelection?: LanguageProjectProjectsNodeAggregateSelectionResolvers<ContextType>;
  LanguageProjectsConnection?: LanguageProjectsConnectionResolvers<ContextType>;
  LanguageProjectsRelationship?: LanguageProjectsRelationshipResolvers<ContextType>;
  LanguagesConnection?: LanguagesConnectionResolvers<ContextType>;
  License?: LicenseResolvers<ContextType>;
  LicenseAggregateSelection?: LicenseAggregateSelectionResolvers<ContextType>;
  LicenseEdge?: LicenseEdgeResolvers<ContextType>;
  LicenseProjectProjectsAggregationSelection?: LicenseProjectProjectsAggregationSelectionResolvers<ContextType>;
  LicenseProjectProjectsNodeAggregateSelection?: LicenseProjectProjectsNodeAggregateSelectionResolvers<ContextType>;
  LicenseProjectsConnection?: LicenseProjectsConnectionResolvers<ContextType>;
  LicenseProjectsRelationship?: LicenseProjectsRelationshipResolvers<ContextType>;
  LicensesConnection?: LicensesConnectionResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MemberAggregateSelection?: MemberAggregateSelectionResolvers<ContextType>;
  MemberCategoriesConnection?: MemberCategoriesConnectionResolvers<ContextType>;
  MemberCategoriesRelationship?: MemberCategoriesRelationshipResolvers<ContextType>;
  MemberCategoryCategoriesAggregationSelection?: MemberCategoryCategoriesAggregationSelectionResolvers<ContextType>;
  MemberCategoryCategoriesNodeAggregateSelection?: MemberCategoryCategoriesNodeAggregateSelectionResolvers<ContextType>;
  MemberCncfMembershipsConnection?: MemberCncfMembershipsConnectionResolvers<ContextType>;
  MemberCncfMembershipsRelationship?: MemberCncfMembershipsRelationshipResolvers<ContextType>;
  MemberEUGEndUserGroupsAggregationSelection?: MemberEugEndUserGroupsAggregationSelectionResolvers<ContextType>;
  MemberEUGEndUserGroupsNodeAggregateSelection?: MemberEugEndUserGroupsNodeAggregateSelectionResolvers<ContextType>;
  MemberEdge?: MemberEdgeResolvers<ContextType>;
  MemberEndUserGroupsConnection?: MemberEndUserGroupsConnectionResolvers<ContextType>;
  MemberEndUserGroupsRelationship?: MemberEndUserGroupsRelationshipResolvers<ContextType>;
  MemberMembershipTypeCncfMembershipsAggregationSelection?: MemberMembershipTypeCncfMembershipsAggregationSelectionResolvers<ContextType>;
  MemberMembershipTypeCncfMembershipsNodeAggregateSelection?: MemberMembershipTypeCncfMembershipsNodeAggregateSelectionResolvers<ContextType>;
  MemberOrganizationOrganizationsAggregationSelection?: MemberOrganizationOrganizationsAggregationSelectionResolvers<ContextType>;
  MemberOrganizationOrganizationsNodeAggregateSelection?: MemberOrganizationOrganizationsNodeAggregateSelectionResolvers<ContextType>;
  MemberOrganizationsConnection?: MemberOrganizationsConnectionResolvers<ContextType>;
  MemberOrganizationsRelationship?: MemberOrganizationsRelationshipResolvers<ContextType>;
  MembersConnection?: MembersConnectionResolvers<ContextType>;
  MembershipType?: MembershipTypeResolvers<ContextType>;
  MembershipTypeAggregateSelection?: MembershipTypeAggregateSelectionResolvers<ContextType>;
  MembershipTypeEdge?: MembershipTypeEdgeResolvers<ContextType>;
  MembershipTypeMemberMembersAggregationSelection?: MembershipTypeMemberMembersAggregationSelectionResolvers<ContextType>;
  MembershipTypeMemberMembersNodeAggregateSelection?: MembershipTypeMemberMembersNodeAggregateSelectionResolvers<ContextType>;
  MembershipTypeMembersConnection?: MembershipTypeMembersConnectionResolvers<ContextType>;
  MembershipTypeMembersRelationship?: MembershipTypeMembersRelationshipResolvers<ContextType>;
  MembershipTypesConnection?: MembershipTypesConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationAggregateSelection?: OrganizationAggregateSelectionResolvers<ContextType>;
  OrganizationBoardConnection?: OrganizationBoardConnectionResolvers<ContextType>;
  OrganizationBoardRelationship?: OrganizationBoardRelationshipResolvers<ContextType>;
  OrganizationCityHeadquartersAggregationSelection?: OrganizationCityHeadquartersAggregationSelectionResolvers<ContextType>;
  OrganizationCityHeadquartersNodeAggregateSelection?: OrganizationCityHeadquartersNodeAggregateSelectionResolvers<ContextType>;
  OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
  OrganizationEmployeesConnection?: OrganizationEmployeesConnectionResolvers<ContextType>;
  OrganizationEmployeesRelationship?: OrganizationEmployeesRelationshipResolvers<ContextType>;
  OrganizationHeadquartersConnection?: OrganizationHeadquartersConnectionResolvers<ContextType>;
  OrganizationHeadquartersRelationship?: OrganizationHeadquartersRelationshipResolvers<ContextType>;
  OrganizationIndustriesConnection?: OrganizationIndustriesConnectionResolvers<ContextType>;
  OrganizationIndustriesRelationship?: OrganizationIndustriesRelationshipResolvers<ContextType>;
  OrganizationIndustryIndustriesAggregationSelection?: OrganizationIndustryIndustriesAggregationSelectionResolvers<ContextType>;
  OrganizationIndustryIndustriesNodeAggregateSelection?: OrganizationIndustryIndustriesNodeAggregateSelectionResolvers<ContextType>;
  OrganizationMemberOwnedByAggregationSelection?: OrganizationMemberOwnedByAggregationSelectionResolvers<ContextType>;
  OrganizationMemberOwnedByNodeAggregateSelection?: OrganizationMemberOwnedByNodeAggregateSelectionResolvers<ContextType>;
  OrganizationOrganizationParentOrgAggregationSelection?: OrganizationOrganizationParentOrgAggregationSelectionResolvers<ContextType>;
  OrganizationOrganizationParentOrgNodeAggregateSelection?: OrganizationOrganizationParentOrgNodeAggregateSelectionResolvers<ContextType>;
  OrganizationOrganizationSubOrgsAggregationSelection?: OrganizationOrganizationSubOrgsAggregationSelectionResolvers<ContextType>;
  OrganizationOrganizationSubOrgsNodeAggregateSelection?: OrganizationOrganizationSubOrgsNodeAggregateSelectionResolvers<ContextType>;
  OrganizationOwnedByConnection?: OrganizationOwnedByConnectionResolvers<ContextType>;
  OrganizationOwnedByRelationship?: OrganizationOwnedByRelationshipResolvers<ContextType>;
  OrganizationParentOrgConnection?: OrganizationParentOrgConnectionResolvers<ContextType>;
  OrganizationParentOrgRelationship?: OrganizationParentOrgRelationshipResolvers<ContextType>;
  OrganizationPersonBoardAggregationSelection?: OrganizationPersonBoardAggregationSelectionResolvers<ContextType>;
  OrganizationPersonBoardNodeAggregateSelection?: OrganizationPersonBoardNodeAggregateSelectionResolvers<ContextType>;
  OrganizationPersonEmployeesAggregationSelection?: OrganizationPersonEmployeesAggregationSelectionResolvers<ContextType>;
  OrganizationPersonEmployeesNodeAggregateSelection?: OrganizationPersonEmployeesNodeAggregateSelectionResolvers<ContextType>;
  OrganizationSubOrgsConnection?: OrganizationSubOrgsConnectionResolvers<ContextType>;
  OrganizationSubOrgsRelationship?: OrganizationSubOrgsRelationshipResolvers<ContextType>;
  OrganizationsConnection?: OrganizationsConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PeopleConnection?: PeopleConnectionResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonAggregateSelection?: PersonAggregateSelectionResolvers<ContextType>;
  PersonBoardsConnection?: PersonBoardsConnectionResolvers<ContextType>;
  PersonBoardsRelationship?: PersonBoardsRelationshipResolvers<ContextType>;
  PersonEUGEugRolesAggregationSelection?: PersonEugEugRolesAggregationSelectionResolvers<ContextType>;
  PersonEUGEugRolesNodeAggregateSelection?: PersonEugEugRolesNodeAggregateSelectionResolvers<ContextType>;
  PersonEdge?: PersonEdgeResolvers<ContextType>;
  PersonEmployersConnection?: PersonEmployersConnectionResolvers<ContextType>;
  PersonEmployersRelationship?: PersonEmployersRelationshipResolvers<ContextType>;
  PersonEugRolesConnection?: PersonEugRolesConnectionResolvers<ContextType>;
  PersonEugRolesRelationship?: PersonEugRolesRelationshipResolvers<ContextType>;
  PersonOrganizationBoardsAggregationSelection?: PersonOrganizationBoardsAggregationSelectionResolvers<ContextType>;
  PersonOrganizationBoardsNodeAggregateSelection?: PersonOrganizationBoardsNodeAggregateSelectionResolvers<ContextType>;
  PersonOrganizationEmployersAggregationSelection?: PersonOrganizationEmployersAggregationSelectionResolvers<ContextType>;
  PersonOrganizationEmployersNodeAggregateSelection?: PersonOrganizationEmployersNodeAggregateSelectionResolvers<ContextType>;
  PersonProjRolesConnection?: PersonProjRolesConnectionResolvers<ContextType>;
  PersonProjRolesRelationship?: PersonProjRolesRelationshipResolvers<ContextType>;
  PersonProjectProjRolesAggregationSelection?: PersonProjectProjRolesAggregationSelectionResolvers<ContextType>;
  PersonProjectProjRolesNodeAggregateSelection?: PersonProjectProjRolesNodeAggregateSelectionResolvers<ContextType>;
  PersonTAGTagRolesAggregationSelection?: PersonTagTagRolesAggregationSelectionResolvers<ContextType>;
  PersonTAGTagRolesNodeAggregateSelection?: PersonTagTagRolesNodeAggregateSelectionResolvers<ContextType>;
  PersonTOCTocRolesAggregationSelection?: PersonTocTocRolesAggregationSelectionResolvers<ContextType>;
  PersonTOCTocRolesNodeAggregateSelection?: PersonTocTocRolesNodeAggregateSelectionResolvers<ContextType>;
  PersonTagRolesConnection?: PersonTagRolesConnectionResolvers<ContextType>;
  PersonTagRolesRelationship?: PersonTagRolesRelationshipResolvers<ContextType>;
  PersonTocRolesConnection?: PersonTocRolesConnectionResolvers<ContextType>;
  PersonTocRolesRelationship?: PersonTocRolesRelationshipResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectAggregateSelection?: ProjectAggregateSelectionResolvers<ContextType>;
  ProjectCategoriesConnection?: ProjectCategoriesConnectionResolvers<ContextType>;
  ProjectCategoriesRelationship?: ProjectCategoriesRelationshipResolvers<ContextType>;
  ProjectCategoryCategoriesAggregationSelection?: ProjectCategoryCategoriesAggregationSelectionResolvers<ContextType>;
  ProjectCategoryCategoriesNodeAggregateSelection?: ProjectCategoryCategoriesNodeAggregateSelectionResolvers<ContextType>;
  ProjectEdge?: ProjectEdgeResolvers<ContextType>;
  ProjectLanguageLanguagesAggregationSelection?: ProjectLanguageLanguagesAggregationSelectionResolvers<ContextType>;
  ProjectLanguageLanguagesNodeAggregateSelection?: ProjectLanguageLanguagesNodeAggregateSelectionResolvers<ContextType>;
  ProjectLanguagesConnection?: ProjectLanguagesConnectionResolvers<ContextType>;
  ProjectLanguagesRelationship?: ProjectLanguagesRelationshipResolvers<ContextType>;
  ProjectLicenseLicensesAggregationSelection?: ProjectLicenseLicensesAggregationSelectionResolvers<ContextType>;
  ProjectLicenseLicensesNodeAggregateSelection?: ProjectLicenseLicensesNodeAggregateSelectionResolvers<ContextType>;
  ProjectLicensesConnection?: ProjectLicensesConnectionResolvers<ContextType>;
  ProjectLicensesRelationship?: ProjectLicensesRelationshipResolvers<ContextType>;
  ProjectPersonProjRolesAggregationSelection?: ProjectPersonProjRolesAggregationSelectionResolvers<ContextType>;
  ProjectPersonProjRolesNodeAggregateSelection?: ProjectPersonProjRolesNodeAggregateSelectionResolvers<ContextType>;
  ProjectPhase?: ProjectPhaseResolvers<ContextType>;
  ProjectPhaseAggregateSelection?: ProjectPhaseAggregateSelectionResolvers<ContextType>;
  ProjectPhaseEdge?: ProjectPhaseEdgeResolvers<ContextType>;
  ProjectPhaseProjectProjectsAggregationSelection?: ProjectPhaseProjectProjectsAggregationSelectionResolvers<ContextType>;
  ProjectPhaseProjectProjectsNodeAggregateSelection?: ProjectPhaseProjectProjectsNodeAggregateSelectionResolvers<ContextType>;
  ProjectPhaseProjectsConnection?: ProjectPhaseProjectsConnectionResolvers<ContextType>;
  ProjectPhaseProjectsRelationship?: ProjectPhaseProjectsRelationshipResolvers<ContextType>;
  ProjectPhasesConnection?: ProjectPhasesConnectionResolvers<ContextType>;
  ProjectProjRolesConnection?: ProjectProjRolesConnectionResolvers<ContextType>;
  ProjectProjRolesRelationship?: ProjectProjRolesRelationshipResolvers<ContextType>;
  ProjectProjectLevelsConnection?: ProjectProjectLevelsConnectionResolvers<ContextType>;
  ProjectProjectLevelsRelationship?: ProjectProjectLevelsRelationshipResolvers<ContextType>;
  ProjectProjectPhaseProjectLevelsAggregationSelection?: ProjectProjectPhaseProjectLevelsAggregationSelectionResolvers<ContextType>;
  ProjectProjectPhaseProjectLevelsNodeAggregateSelection?: ProjectProjectPhaseProjectLevelsNodeAggregateSelectionResolvers<ContextType>;
  ProjectTAGTagsAggregationSelection?: ProjectTagTagsAggregationSelectionResolvers<ContextType>;
  ProjectTAGTagsNodeAggregateSelection?: ProjectTagTagsNodeAggregateSelectionResolvers<ContextType>;
  ProjectTagsConnection?: ProjectTagsConnectionResolvers<ContextType>;
  ProjectTagsRelationship?: ProjectTagsRelationshipResolvers<ContextType>;
  ProjectsConnection?: ProjectsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ServedInRole?: ServedInRoleResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  TAG?: TagResolvers<ContextType>;
  TAGAggregateSelection?: TagAggregateSelectionResolvers<ContextType>;
  TAGCommunityPersonsConnection?: TagCommunityPersonsConnectionResolvers<ContextType>;
  TAGCommunityPersonsRelationship?: TagCommunityPersonsRelationshipResolvers<ContextType>;
  TAGEdge?: TagEdgeResolvers<ContextType>;
  TAGPersonCommunityPersonsAggregationSelection?: TagPersonCommunityPersonsAggregationSelectionResolvers<ContextType>;
  TAGPersonCommunityPersonsNodeAggregateSelection?: TagPersonCommunityPersonsNodeAggregateSelectionResolvers<ContextType>;
  TAGPersonRolePersonsAggregationSelection?: TagPersonRolePersonsAggregationSelectionResolvers<ContextType>;
  TAGPersonRolePersonsNodeAggregateSelection?: TagPersonRolePersonsNodeAggregateSelectionResolvers<ContextType>;
  TAGProjectProjectsInScopeAggregationSelection?: TagProjectProjectsInScopeAggregationSelectionResolvers<ContextType>;
  TAGProjectProjectsInScopeNodeAggregateSelection?: TagProjectProjectsInScopeNodeAggregateSelectionResolvers<ContextType>;
  TAGProjectsInScopeConnection?: TagProjectsInScopeConnectionResolvers<ContextType>;
  TAGProjectsInScopeRelationship?: TagProjectsInScopeRelationshipResolvers<ContextType>;
  TAGRolePersonsConnection?: TagRolePersonsConnectionResolvers<ContextType>;
  TAGRolePersonsRelationship?: TagRolePersonsRelationshipResolvers<ContextType>;
  TOC?: TocResolvers<ContextType>;
  TOCAggregateSelection?: TocAggregateSelectionResolvers<ContextType>;
  TOCCommunityPersonsConnection?: TocCommunityPersonsConnectionResolvers<ContextType>;
  TOCCommunityPersonsRelationship?: TocCommunityPersonsRelationshipResolvers<ContextType>;
  TOCEdge?: TocEdgeResolvers<ContextType>;
  TOCPersonCommunityPersonsAggregationSelection?: TocPersonCommunityPersonsAggregationSelectionResolvers<ContextType>;
  TOCPersonCommunityPersonsNodeAggregateSelection?: TocPersonCommunityPersonsNodeAggregateSelectionResolvers<ContextType>;
  TOCPersonRolePersonsAggregationSelection?: TocPersonRolePersonsAggregationSelectionResolvers<ContextType>;
  TOCPersonRolePersonsNodeAggregateSelection?: TocPersonRolePersonsNodeAggregateSelectionResolvers<ContextType>;
  TOCRolePersonsConnection?: TocRolePersonsConnectionResolvers<ContextType>;
  TOCRolePersonsRelationship?: TocRolePersonsRelationshipResolvers<ContextType>;
  TagsConnection?: TagsConnectionResolvers<ContextType>;
  TocsConnection?: TocsConnectionResolvers<ContextType>;
  UpdateCategoriesMutationResponse?: UpdateCategoriesMutationResponseResolvers<ContextType>;
  UpdateCitiesMutationResponse?: UpdateCitiesMutationResponseResolvers<ContextType>;
  UpdateEugsMutationResponse?: UpdateEugsMutationResponseResolvers<ContextType>;
  UpdateIndustriesMutationResponse?: UpdateIndustriesMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateLanguagesMutationResponse?: UpdateLanguagesMutationResponseResolvers<ContextType>;
  UpdateLicensesMutationResponse?: UpdateLicensesMutationResponseResolvers<ContextType>;
  UpdateMembersMutationResponse?: UpdateMembersMutationResponseResolvers<ContextType>;
  UpdateMembershipTypesMutationResponse?: UpdateMembershipTypesMutationResponseResolvers<ContextType>;
  UpdateOrganizationsMutationResponse?: UpdateOrganizationsMutationResponseResolvers<ContextType>;
  UpdatePeopleMutationResponse?: UpdatePeopleMutationResponseResolvers<ContextType>;
  UpdateProjectPhasesMutationResponse?: UpdateProjectPhasesMutationResponseResolvers<ContextType>;
  UpdateProjectsMutationResponse?: UpdateProjectsMutationResponseResolvers<ContextType>;
  UpdateTagsMutationResponse?: UpdateTagsMutationResponseResolvers<ContextType>;
  UpdateTocsMutationResponse?: UpdateTocsMutationResponseResolvers<ContextType>;
};

