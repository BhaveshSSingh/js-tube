import Body from "./components/Body";
import Nav from "./components/Nav";
import Panel from "./components/Panel";
import DataPage from "./pages/DataPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <div>
      {/* <LoginPage /> */}

      <Nav />
      <div className="flex ">
        <Panel />
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
