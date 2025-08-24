"use client";

import { AlertCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { CustomModal } from "@/components/common/custom-modal";
import { Button } from "@/components/ui/button";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { cn } from "@/lib/utils";
import { useAlertModalStore } from "@/stores/alert-modal-store";

export function AlertModalProvider({ children }: { children: ReactNode }) {
  const isRTL = useIsRTL();
  const t = useTranslations("alertModal");
  // Get state and actions from Zustand store
  const { isOpen, options, handleConfirm, handleCancel, hideAlert } =
    useAlertModalStore();

  return (
    <>
      {children}
      <CustomModal
        openState={isOpen}
        onModalClose={hideAlert}
        title=""
        panelClassName="sm:!max-w-md"
        contentClassName="!p-0 max"
      >
        <div className="relative" dir={isRTL ? "rtl" : "ltr"}>
          <div
            className={` size-12 bg-[#FEF3F2] rounded-full flex items-center justify-center`}
          >
            <div className="size-8 bg-[#FEE4E2] rounded-full flex items-center justify-center">
              <AlertCircleIcon className="size-4 text-red-600" />
            </div>
          </div>
          <div
            className={cn(
              "pt-2 text-lg font-semibold",
              isRTL ? "text-right" : "text-left",
            )}
          >
            {options.title || ""}
          </div>
          {options.description && (
            <div
              className={cn(
                "text-gray-600",
                isRTL ? "text-right" : "text-left",
              )}
            >
              {options.description}
            </div>
          )}

          <div className="flex gap-2 justify-end mt-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="w-fit bg-transparent cursor-pointer"
            >
              {options.cancelText || t("cancel")}
            </Button>
            <Button
              variant={options.variant || "destructive"}
              onClick={handleConfirm}
              className="w-fit cursor-pointer"
            >
              {options.confirmText || t("confirm")}
            </Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
}

// Export the hook for components to use
export { useAlertModalStore as useAlertModal };
