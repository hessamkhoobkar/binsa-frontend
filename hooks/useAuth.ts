import { AuthContextType } from "@/context/AuthContext";
import { useAuth as useAuthContext } from "@/context/AuthContext";

export const useAuth = (): AuthContextType => {
  return useAuthContext();
};
