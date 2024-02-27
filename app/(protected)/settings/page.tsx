"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
const SettingsPage = () => {
  const session = useSession();
  const onClick = () => {
    logout();
  };
  return (
    <div>
      Settings Page <br />
      {JSON.stringify(session)}
      <Button type="submit" onClick={onClick}>
        Sign out
      </Button>
    </div>
  );
};

export default SettingsPage;
