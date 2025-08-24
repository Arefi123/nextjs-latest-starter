import { useTranslations } from "next-intl";
import { CustomModal } from "@/components/common/custom-modal";
import { useIsModalOpen } from "@/hooks/use-is-modal-open";
import { UserForm } from "./user-form";
export function UserCreateModal() {
  const { isModalOpen, setIsModalOpen } = useIsModalOpen("create-user-modal");
  const t = useTranslations("user");
  return (
    <CustomModal
      openState={isModalOpen}
      onModalClose={() => setIsModalOpen(false)}
      title={t("createUser")}
    >
      <UserForm mode="create" />
    </CustomModal>
  );
}
