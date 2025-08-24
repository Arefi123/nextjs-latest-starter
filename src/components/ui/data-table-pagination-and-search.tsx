import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsRTL } from "@/hooks/use-is-rtl";
import { usePaginationQuery } from "@/hooks/use-pagination-query";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId } from "react";


interface DataTablePaginationControlsProps {
  totalPages: number;
  totalFilteredItems: number;
}

export function DataTablePaginationControls({
  totalPages,
  totalFilteredItems,
}: DataTablePaginationControlsProps) {
  const t = useTranslations("pagination");
  const { page, setPage, perPage, setPerPage } = usePaginationQuery();
  const isRTL = useIsRTL();
  const currentItemsStart = (page - 1) * perPage + 1;
  const currentItemsEnd = Math.min(
    page * perPage,
    totalFilteredItems,
  );
  const randomId = useId();

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, last page, current page, and neighbors
      if (page <= 3) {
        // Near start: show 1, 2, 3, ..., last
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        if (totalPages > 4) {
          pages.push("ellipsis");
        }
        pages.push(totalPages);
      } else if (page >= totalPages - 2) {
        // Near end: show 1, ..., last-2, last-1, last
        pages.push(1);
        if (totalPages > 4) {
          pages.push("ellipsis");
        }
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        pages.push(page - 1);
        pages.push(page);
        pages.push(page + 1);
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center flex-col sm:flex-row justify-between space-x-2 space-y-4 pt-4 border-t border-border">
      <div className="flex items-center gap-2 shrink-0">
        <p className="text-sm text-muted-foreground">
          {t("showing")} {currentItemsStart}-{currentItemsEnd} {t("of")} {totalFilteredItems} {t("entries")}.
        </p>
        <Select
          onValueChange={(value) => setPerPage(Number(value))}
          value={perPage.toString()}
        >
          <SelectTrigger className="h-8 w-[80px] cursor-pointer">
            <SelectValue placeholder={perPage} />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 50, 100].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()} className="cursor-pointer">
                {pageSize}
              </SelectItem>
            ))}
            <SelectItem value={totalFilteredItems.toString()}>{t("all")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Pagination className="flex md:justify-end">
        <PaginationContent>
          <PaginationItem>
          <PaginationLink
            aria-label={t("goToPreviousPage")}
            size="default"
            className={cn("gap-1 px-2.5 sm:pl-2.5 cursor-pointer")}
            onClick={handlePreviousPage}
          >
            <ChevronLeftIcon className={cn(isRTL && "rotate-180")} />
            <span className="hidden sm:block">{t("previous")}</span>
          </PaginationLink>
          </PaginationItem>

          {getPageNumbers().map((pageNumber, index) => (
            <PaginationItem key={`page-${index}-${randomId}`}>
              {pageNumber === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => setPage(Number(pageNumber))}
                  isActive={page === pageNumber}
                  size="sm"
                  className={cn("cursor-pointer border", page === pageNumber && "bg-primary text-primary-foreground")}
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
          <PaginationLink
            aria-label={t("goToNextPage")}
            size="default"
            className={cn("gap-1 px-2.5 sm:pr-2.5 cursor-pointer")}
            onClick={handleNextPage}
          >
            <span className="hidden sm:block">{t("next")}</span>
            <ChevronRightIcon className={cn(isRTL && "rotate-180")} />
          </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
