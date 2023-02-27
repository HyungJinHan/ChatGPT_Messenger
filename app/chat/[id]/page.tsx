"use client";

import * as React from "react";
import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  const scrollRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} scrollRef={scrollRef} />
      <ChatInput chatId={id} scrollRef={scrollRef} />
    </div>
  );
};

export default ChatPage;
