/**
 *./pages/index.tsx를 지운 후, app 디렉토리 생성 후 해당 파일을 만들고 서버를 재실행하면,
 * head.tsx와 layout.tsx를 자동으로 만들어주고 layout에 children 요소로써 해당 페이지를 출력
 * Your page app/page.tsx did not have a root layout. We created app\layout.tsx and app\head.tsx for you.
 */
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me!"</p>
            <p className="infoText">
              "What is the difference between a dog and cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
