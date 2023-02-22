import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

/**
 *./pages/index.tsx를 지운 후, app 디렉토리 생성 후 해당 파일을 만들고 서버를 재실행하면,
 * head.tsx와 layout.tsx를 자동으로 만들어주고 layout에 children 요소로써 해당 페이지를 출력
 * Your page app/page.tsx did not have a root layout. We created app\layout.tsx and app\head.tsx for you.
 *
 * /styles/globals.css에서 Tailwind CSS를 활용한 스타일링 작업 진행
 * -> p-4 bg-gray-700/50 rounded-lg max-w-[300px]
 */
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20 animate-pulse">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 animate-pulse" />
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

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 animate-pulse" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 animate-pulse" />
            <h2>Limitation</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
