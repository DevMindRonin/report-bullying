import { usePathname } from "next/navigation";

export const useCurrentLang = () => {
  return usePathname().split("/")[1];
};

export default useCurrentLang;
