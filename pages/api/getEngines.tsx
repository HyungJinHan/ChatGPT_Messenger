import { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({
    modelOptions,
  });
};

export default handler;
