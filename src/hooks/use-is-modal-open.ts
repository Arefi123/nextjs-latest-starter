import { parseAsBoolean, useQueryState } from "nuqs";

export function useIsModalOpen(key: string) {
  const [isModalOpen, setIsModalOpen] = useQueryState(
    key,
    parseAsBoolean.withDefault(false),
  );

  return {
    isModalOpen,
    setIsModalOpen,
  };
}
