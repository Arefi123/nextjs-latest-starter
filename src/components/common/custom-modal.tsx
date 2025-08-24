"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "../ui/visually-hidden";

export function CustomModal({
  title = "",
  openState = false,
  onModalClose,
  children,
  contentClassName = "",
  panelClassName = "",
}: {
  title?: string;
  openState: boolean;
  onModalClose(): void;
  children: React.ReactNode;
  contentClassName?: string;
  panelClassName?: string;
}) {
  const isRTL = useIsRTL();
  return (
    <Dialog
      open={openState}
      onOpenChange={(open) => {
        if (!open) {
          onModalClose();
        }
      }}
    >
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className={cn(
          "bg-card flex max-h-[90vh] w-full max-w-[90vw] flex-col rounded-2xl p-4 sm:max-w-lg sm:p-6 md:max-w-xl lg:max-w-2xl",
          panelClassName,
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {title ? (
          <DialogHeader className="border-border mb-3 flex items-center justify-between border-b pb-3">
            {title && (
              <DialogTitle className="text-foreground text-lg leading-7 font-bold">
                {title}
              </DialogTitle>
            )}
          </DialogHeader>
        ) : (
          <VisuallyHidden>
            <DialogTitle>{title}</DialogTitle>
          </VisuallyHidden>
        )}
        <div
          className={cn(
            "flex grow flex-col overflow-y-auto p-2 sm:p-4",
            contentClassName,
          )}
        >
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
