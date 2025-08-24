import { CheckCircle, Globe, UserIcon, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
export default function UserStates() {
  const tUser = useTranslations("user");
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">
                {tUser("states.totalUsers")}
              </p>
              <p className="text-2xl font-bold">450</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-muted-foreground">
                {tUser("states.active")}
              </p>
              <p className="text-2xl font-bold">400</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-sm text-muted-foreground">
                {tUser("states.blocked")}
              </p>
              <p className="text-2xl font-bold">50</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground">
                {tUser("states.withWebsite")}
              </p>
              <p className="text-2xl font-bold">150</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
