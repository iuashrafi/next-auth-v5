"use client";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
const SettingsPage = () => {
  const session = useSession();
  const onClick = () => {
    signOut();
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
