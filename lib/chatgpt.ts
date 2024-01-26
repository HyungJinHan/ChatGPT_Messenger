import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "pk-ZSbtFupYCdfXsoUxYbUtMrJVDqqYHsYreobgDOmmhQgbNSKJ",
  basePath: "https://api.pawan.krd/v1",
});

const openai = new OpenAIApi(configuration);

export default openai;
