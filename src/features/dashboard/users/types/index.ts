// User-related types for the dashboard
export interface User {
  id: number;
  name: string;
  bannerImage?: string | null;
  bans?: unknown[];
  createdAt: number;
  avatar?: {
    large?: string;
    medium?: string;
    __typename?: string;
  };
  isBlocked?: boolean;
  siteUrl?: string;
  options?: {
    timezone?: string | null;
    __typename?: string;
  };
  __typename?: string;
}

export interface CreateUserInput {
  name: string;
  bannerImage?: string;
  siteUrl?: string;
  timezone?: string;
}

export interface UpdateUserInput {
  name?: string;
  bannerImage?: string;
  siteUrl?: string;
  timezone?: string;
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface GetUsersData {
  Page: {
    pageInfo: PageInfo;
    users: User[];
  };
}

export interface GetUserData {
  User: User;
}

export interface CreateUserData {
  createUser: User;
}

export interface UpdateUserData {
  updateUser: User;
}

export interface DeleteUserData {
  deleteUser: boolean;
}
