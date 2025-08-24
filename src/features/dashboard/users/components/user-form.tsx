import { zodResolver } from "@hookform/resolvers/zod";
import { Save, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createUserFormSchema,
  type UserFormData,
  useCreateUserMutation,
} from "@/features/dashboard/users";
import { useIsModalOpen } from "@/hooks/use-is-modal-open";

export function UserForm({
  mode = "create",
  initialData,
  userId,
}: {
  mode: "create" | "edit";
  initialData?: UserFormData;
  userId?: number;
}) {
  const t = useTranslations("user");
  const tForm = useTranslations("form");
  const tValidation = useTranslations("validation");
  const userFormSchema = createUserFormSchema(tValidation);
  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues:
      mode === "create"
        ? {
            name: "",
            timezone: "",
            bannerImage: "",
            siteUrl: "",
          }
        : {
            name: initialData?.name || "",
            timezone: initialData?.timezone || "",
            bannerImage: initialData?.bannerImage || "",
            siteUrl: initialData?.siteUrl || "",
          },
  });
  const [createUser, { loading: isCreating }] = useCreateUserMutation();
  const [updateUser, { loading: isUpdating }] = useCreateUserMutation();
  const { setIsModalOpen } = useIsModalOpen(`${mode}-user-modal`);

  const onSubmit = (data: UserFormData) => {
    if (mode === "create") {
      createUser({ variables: { input: data } });
    } else {
      updateUser({ variables: { id: userId, input: data } });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("username")}</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("timezone")}</FormLabel>
                  <FormControl>
                    <Input placeholder="UTC" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="bannerImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("bannerImageUrl")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/banner.jpg"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="siteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("websiteUrl")}</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsModalOpen(false)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
            {tForm("cancel")}
          </Button>
          <Button
            type="submit"
            disabled={isCreating || isUpdating}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            {isCreating || isUpdating
              ? tForm("saving")
              : mode === "create"
                ? t("createUser")
                : t("updateUser")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
