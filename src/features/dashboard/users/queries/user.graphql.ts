import { gql } from "@apollo/client";

// GraphQL Queries for AniList API
// Note: AniList API doesn't have a direct "get all users" endpoint
// We'll use a search query to get multiple users with pagination
export const GET_USERS = gql`
  query Users($page: Int, $perPage: Int, $sort: [UserSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      users(sort: $sort) {
        id
        name
        bannerImage
        bans
        createdAt
        avatar {
          large
          medium
        }
        isBlocked
        siteUrl
        options {
          timezone
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query User($id: Int!) {
    User(id: $id) {
      id
      name
      bannerImage
      bans
      createdAt
      avatar {
        large
        medium
      }
      isBlocked
      siteUrl
      options {
        timezone
      }
    }
  }
`;

// Note: AniList API is read-only, so we'll simulate mutations for demo purposes
// In a real application, you'd need a backend that supports these operations

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    # This is a placeholder - AniList API doesn't support creating users
    # In a real app, this would create a user
    createUser(input: $input) {
      id
      name
      createdAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $input: UpdateUserInput!) {
    # This is a placeholder - AniList API doesn't support updating users
    # In a real app, this would update a user
    updateUser(id: $id, input: $input) {
      id
      name
      siteUrl
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    # This is a placeholder - AniList API doesn't support deleting users
    # In a real app, this would delete a user
    deleteUser(id: $id)
  }
`;
