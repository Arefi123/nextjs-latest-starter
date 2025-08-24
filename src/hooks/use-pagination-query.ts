import { parseAsInteger, useQueryState } from "nuqs";

export function usePaginationQuery() {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [perPage, setPerPage] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(10),
  );

  return {
    page,
    setPage,
    perPage,
    setPerPage,
  };
}
