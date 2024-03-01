import { auth } from "@/auth";

// for server page
export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};
