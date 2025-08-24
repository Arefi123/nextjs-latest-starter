import { useMutation, useQuery } from "@apollo/client/react";
import { toast } from "sonner";
import type { GetUsersData } from "../types";
import {
  CREATE_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./user.graphql";

export const useGetUsersQuery = ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  return useQuery<GetUsersData>(GET_USERS, {
    variables: {
      page,
      perPage,
      sort: ["ID_DESC"],
    },
  });
};

export const useCreateUserMutation = () => {
  return useMutation(CREATE_USER, {
    onCompleted: () => {
      toast.success("کاربر با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("خطا در ثبت کاربر");
    },
    refetchQueries: ["Users"],
  });
};

export const useUpdateUserMutation = () => {
  return useMutation(UPDATE_USER, {
    onCompleted: () => {
      toast.success("کاربر با موفقیت ویرایش شد");
    },
    onError: () => {
      toast.error("خطا در ویرایش کاربر");
    },
    refetchQueries: ["Users"],
  });
};

export const useDeleteUserMutation = () => {
  return useMutation(DELETE_USER, {
    onCompleted: () => {
      toast.success("کاربر با موفقیت حذف شد");
    },
    onError: () => {
      toast.error("خطا در حذف کاربر");
    },
    refetchQueries: ["Users"],
  });
};
