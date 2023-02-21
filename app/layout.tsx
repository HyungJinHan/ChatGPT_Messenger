import Sidebar from "../components/SideBar";
import "../styles/globals.css";
// 위의 import를 통해 지정된 globals.css 스타일링 가져와서 적용시키기

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto">
            {/* Sidebar */}
            <Sidebar />
          </div>
          {/* ClientProvider - Notification */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
