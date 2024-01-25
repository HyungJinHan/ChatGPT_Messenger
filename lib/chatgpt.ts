import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  basePath: "https://api.pawan.krd/v1/models",
});

const openai = new OpenAIApi(configuration);

export default openai;
