import { DataTablePaginationControls } from "@/components/ui/data-table-pagination-and-search";
export default function CustomPagination({
  totalPages,
  totalItems,
}: {
  totalPages: number;
  totalItems: number;
}) {
  return (
    <DataTablePaginationControls
      totalPages={totalPages}
      totalFilteredItems={totalItems}
    />
  );
}
