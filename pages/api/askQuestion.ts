// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "../../firebaseAdmin";
import query from "../../lib/queryApi";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    createAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
