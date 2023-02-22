"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

const Sidebar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the Chat Rows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <img
          onClick={() => {
            signOut();
            router.replace("/");
          }}
          src={session.user?.image!}
          alt="profilePic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 transition-all duration-700 ease-out"
        />
      )}
    </div>
  );
};

export default Sidebar;
