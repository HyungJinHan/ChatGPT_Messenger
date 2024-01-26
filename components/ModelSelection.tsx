"use client";

// const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

/**
 * AI Model을 선택해서 고를 수 있는 컴포넌트
 */
const ModelSelection = () => {
  // const { data: models, isLoading } = useSWR("models", fetchModels);
  // const { data: model, mutate: setModel } = useSWR("model", {
  //   fallbackData: "gpt-4",
  // });

  return (
    <div className="mt-2">
      <input className="mt-2" placeholder={"gpt-4"} defaultValue={"gpt-4"} />
    </div>
  );
};

export default ModelSelection;
