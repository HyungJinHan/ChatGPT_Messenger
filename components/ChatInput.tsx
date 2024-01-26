"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";
import ModelSelection from "./ModelSelection";

type Props = {
  chatId: string;
  scrollRef: any;
};

const ChatInput = ({ chatId, scrollRef }: Props) => {
  const [prompt, setPrompt] = useState<string>("");
  const { data: session } = useSession();

  // useSWR to get model
  const model = "gpt-4";
  // Open AI의 GPT 모델의 종류

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https:ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    // Toast Notification to say Loading...
    const notification = toast.loading("ChatGPT is thinking...");

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

    // Toast Notification
    await fetch("/api/askQuestion", {
      method: "POST",
      headers : {
        Authorization : `${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
    },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // Toast Notification to say successful
      toast.success("ChatGPT has responded!", {
        id: notification,
      });
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />

        <button
          className="bg-[#74AA9C] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!prompt || !session}
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div className="md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
};

export default ChatInput;
