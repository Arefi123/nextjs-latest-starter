import { useId } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

export default function UsersLoading({
  cols,
  rows = 10,
}: {
  cols: number;
  rows: number;
}) {
  const key = useId();
  return Array.from({ length: rows }).map((_, index) => (
    <TableRow key={`${key + index}`}>
      {Array.from({ length: cols }).map((_, index) => (
        <TableCell key={`${key + index}-${index}`}>
          <Skeleton className="h-4 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));
}
