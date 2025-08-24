import { Plus, UserIcon, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  type PageInfo,
  type User,
  UserEditModal,
  type UserFormData,
  useDeleteUserMutation,
  useGetUsersQuery,
} from "@/features/dashboard/users";
import { useIsModalOpen } from "@/hooks/use-is-modal-open";
import { usePaginationQuery } from "@/hooks/use-pagination-query";
import { useAlertModal } from "@/providers/alert-modal-provider";
import type {} from "../types";
import { UserCreateModal } from "./user-create-modal";
import UserStates from "./user-states";
import { UsersTable } from "./users-table";

export function UsersManagement() {
  const {
    isModalOpen: isCreateModalOpen,
    setIsModalOpen: setIsCreateModalOpen,
  } = useIsModalOpen("create-user-modal");
  const { isModalOpen: isEditModalOpen, setIsModalOpen: setIsEditModalOpen } =
    useIsModalOpen("edit-user-modal");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { page, perPage } = usePaginationQuery();
  const [deleteUser] = useDeleteUserMutation();
  const { showAlert } = useAlertModal();
  const t = useTranslations("user");
  const { data, loading, error } = useGetUsersQuery({
    page,
    perPage,
  });
  const users = data?.Page?.users || [];
  const pageInfo: PageInfo | null = data?.Page?.pageInfo || null;

  if (error)
    return <div className="p-6 text-red-500">Error: {error.message}</div>;

  const handleEditUser = async (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = async (userId: number) => {
    await showAlert({
      title: t("deleteUser"),
      description: t("deleteUserDescription"),
      variant: "destructive",
      onConfirm: async () => {
        try {
          await deleteUser({ variables: { id: userId } });
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      },
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <UserIcon className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">{t("users")}</h1>
          <p className="text-muted-foreground">{t("usersManagement")}</p>
        </div>
      </div>

      {/* Stats */}
      <UserStates />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <h2 className="text-2xl font-bold">{t("usersManagement")}</h2>
          </div>
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span>{t("addUser")}</span>
          </Button>
        </div>

        {/* Users Table */}
        <UsersTable
          users={users}
          pageInfo={pageInfo}
          onEdit={handleEditUser}
          onDelete={handleDeleteClick}
          loading={loading}
        />

        {/* Create User Modal */}
        {isCreateModalOpen && <UserCreateModal />}

        {/* Edit User Modal */}
        {isEditModalOpen && selectedUser && (
          <UserEditModal
            initialData={selectedUser as UserFormData}
            userId={selectedUser.id}
          />
        )}
      </div>
    </div>
  );
}
