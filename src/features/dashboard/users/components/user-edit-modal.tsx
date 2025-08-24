import { useTranslations } from "next-intl";
import { CustomModal } from "@/components/common/custom-modal";
import { UserForm } from "@/features/dashboard/users";
import type { UserFormData } from "@/features/dashboard/users/schema/user-form.schema";
import { useIsModalOpen } from "@/hooks/use-is-modal-open";
export function UserEditModal({
  initialData,
  userId,
}: {
  initialData: UserFormData;
  userId: number;
}) {
  const { isModalOpen, setIsModalOpen } = useIsModalOpen("edit-user-modal");
  const t = useTranslations("user");

  return (
    <CustomModal
      openState={isModalOpen}
      onModalClose={() => setIsModalOpen(false)}
      title={t("editUser")}
    >
      <UserForm mode="edit" initialData={initialData} userId={userId} />
    </CustomModal>
  );
}
