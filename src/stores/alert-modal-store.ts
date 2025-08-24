import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AlertModalOptions {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "destructive" | "default";
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  isLoading?: boolean;
}

interface AlertModalState {
  isOpen: boolean;
  options: AlertModalOptions;
  resolvePromise: ((value: boolean) => void) | null;
  isLoading: boolean;
  // Actions
  showAlert: (options: AlertModalOptions) => Promise<boolean>;
  hideAlert: () => void;
  handleConfirm: () => Promise<void>;
  handleCancel: () => void;
}

export const useAlertModalStore = create<AlertModalState>()(
  devtools(
    (set, get) => ({
      isOpen: false,
      options: {},
      resolvePromise: null,
      isLoading: false,

      showAlert: (alertOptions: AlertModalOptions): Promise<boolean> => {
        return new Promise((resolve) => {
          set({
            options: alertOptions,
            resolvePromise: resolve,
            isOpen: true,
            isLoading: true,
          });
        });
      },

      hideAlert: () => {
        set({ isOpen: false });
        set({ isLoading: false });
      },

      handleConfirm: async () => {
        const { options, resolvePromise } = get();

        if (options.onConfirm) {
          await options.onConfirm();
        }

        set({ isOpen: false });

        if (resolvePromise) {
          resolvePromise(true);
          set({ resolvePromise: null });
        }
        set({ isLoading: false });
      },

      handleCancel: () => {
        const { options, resolvePromise } = get();

        if (options.onCancel) {
          options.onCancel();
        }

        set({ isOpen: false });

        if (resolvePromise) {
          resolvePromise(false);
          set({ resolvePromise: null });
        }
        set({ isLoading: false });
      },
    }),
    { name: "alert-modal-store" },
  ),
);
