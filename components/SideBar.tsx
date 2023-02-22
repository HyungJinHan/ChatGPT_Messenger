"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the Chat Rows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="profilePic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-700 ease-out"
        />
      )}
    </div>
  );
};

export default Sidebar;
