import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Panel from "./components/Panel";
import ThemeProvider from "./context/ThemeContext";
import DataPage from "./pages/DataPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* <LoginPage /> */}

      <Nav />
      <div className="flex">
        <Panel />
        <Outlet />
        {/* <Body /> */}
        {/* <WatchPage /> */}

        {/* <ProfilePage /> */}

        {/* Make this later  */}
        {/* <DataPage
          pageName={"Saved Videos"}
          noOfVideos={3}
          videos={"video data"}
        /> */}
      </div>
    </div>
  );
}

export default App;
