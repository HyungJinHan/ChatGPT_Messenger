/**
 *./pages/index.tsx를 지운 후, app 디렉토리 생성 후 해당 파일을 만들고 서버를 재실행하면,
 * head.tsx와 layout.tsx를 자동으로 만들어주고 layout에 children 요소로써 해당 페이지를 출력
 * Your page app/page.tsx did not have a root layout. We created app\layout.tsx and app\head.tsx for you.
 */
const HomePage = () => {
  return (
    <div>
      <h1>ChatGPT Messenger</h1>
    </div>
  );
};

export default HomePage;
