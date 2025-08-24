import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Ban,
  Calendar,
  Clock,
  Edit,
  Globe,
  Trash2,
  UserIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CustomPagination from "@/components/common/custom-pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { cn } from "@/lib/utils";
import type { PageInfo, User } from "../types";
import UsersLoading from "./users-loading";

interface UsersTableProps {
  users: User[];
  pageInfo?: PageInfo | null;
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
  loading?: boolean;
}

type SortField = "name" | "id" | "createdAt" | "timezone";
type SortDirection = "asc" | "desc";

export function UsersTable({
  users,
  pageInfo,
  onEdit,
  onDelete,
  loading = false,
}: UsersTableProps) {
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const tUser = useTranslations("user");
  const tDataTable = useTranslations("data-table");
  const isRTL = useIsRTL();

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
    return sortDirection === "asc" ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusBadge = (isBlocked?: boolean) => {
    if (isBlocked) {
      return (
        <Badge variant="destructive" className="text-xs">
          {tUser("states.blocked")}
        </Badge>
      );
    }
    return (
      <Badge variant="default" className="text-xs">
        {tUser("states.active")}
      </Badge>
    );
  };

  if (users.length === 0 && !loading) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <UserIcon className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-muted-foreground mb-2">
          {tDataTable("noData")}
        </h3>
        <p className="text-muted-foreground">{tUser("noUsersFound")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Table */}
      <Table dir={isRTL ? "rtl" : "ltr"}>
        <TableHeader>
          <TableRow>
            <TableHead className={cn(isRTL ? "text-right" : "text-left")}>
              <Button
                variant="ghost"
                onClick={() => handleSort("name")}
                className="h-auto !p-0 font-medium hover:bg-transparent"
              >
                {tUser("username")} {getSortIcon("name")}
              </Button>
            </TableHead>
            <TableHead className={cn(isRTL ? "text-right" : "text-left")}>
              {tDataTable("status")}
            </TableHead>
            <TableHead className={cn(isRTL ? "text-right" : "text-left")}>
              <Button
                variant="ghost"
                onClick={() => handleSort("timezone")}
                className="h-auto !p-0 font-medium hover:bg-transparent"
              >
                {tUser("timezone")} {getSortIcon("timezone")}
              </Button>
            </TableHead>
            <TableHead className={cn(isRTL ? "text-right" : "text-left")}>
              {tUser("websiteUrl")}
            </TableHead>
            <TableHead className={cn(isRTL ? "text-right" : "text-left")}>
              <Button
                variant="ghost"
                onClick={() => handleSort("createdAt")}
                className="h-auto !p-0 font-medium hover:bg-transparent"
              >
                {tUser("joined")} {getSortIcon("createdAt")}
              </Button>
            </TableHead>
            <TableHead className={cn(isRTL ? "text-left" : "text-right")}>
              {tDataTable("actions")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <UsersLoading cols={6} rows={10} />
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar?.medium} alt={user.name} />
                      <AvatarFallback>
                        <UserIcon className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ID: {user.id}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(user.isBlocked)}
                    {user.bans && user.bans.length > 0 && (
                      <div className="flex items-center space-x-1 text-xs text-red-600">
                        <Ban className="h-3 w-3" />
                        <span>{user.bans.length}</span>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {user.options?.timezone ? (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{user.options.timezone}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Not set
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {user.siteUrl ? (
                    <a
                      href={user.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:underline"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Visit</span>
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      No website
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {formatDate(user.createdAt)}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    {onEdit && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEdit(user)}
                        className="h-8 w-8 p-0 cursor-pointer"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDelete(user.id)}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      {pageInfo && (
        <CustomPagination
          totalPages={pageInfo?.lastPage || 0}
          totalItems={pageInfo?.total || 0}
        />
      )}
    </div>
  );
}
