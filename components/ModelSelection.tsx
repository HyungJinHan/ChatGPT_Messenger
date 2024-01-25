"use client";

import Select from "react-select";
import useSWR from "swr";

const fetchModels = () => fetch("/models", {
  headers : {
    Authorization : process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    Accept: "application/json",
    "Content-Type": "application/json",
}
}).then((res) => res.json());

/**
 * AI Model을 선택해서 고를 수 있는 컴포넌트
 */
const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinchi-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        placeholder={model}
        defaultValue={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434653] border-[#434654]",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
