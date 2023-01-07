import { CgLogOut } from "react-icons/cg";

const ProfilePage = () => {
  return (
    <div className="p-24">
      <div className="fixed top-0 left-0 w-screen h-screen  p-2">
        <div className="z-10 absolute top-1/4 left-1/2 -translate-x-2/4 -translate-y-1/4 rounded-xl w-10/12 h-max p-2 xl:w-[700px] break-all border border-blue-200 shadow-md shadow-blue-200">
          <div className="flex p-2 justify-between items-center border-b border-blue-300">
            <h1 className="">My Profile</h1>
          </div>

          <div>
            <div className="flex justify-between p-2">
              <div className="m-2">
                <h1>Name : User Name</h1>

                <p>Email: user@user.com</p>

                <h1>
                  Liked Videos : 100 <button>Link to liked page</button>
                </h1>

                <p>
                  Watch later: 30 videos <button>link to saved page</button>
                </p>
              </div>
            </div>
            <div className="m-2">
              <button className=" p-2 rounded-md border border-blue-400 hover:bg-red-400 hover:text-white hover:border-red-400 hover:shadow-md hover:shadow-red-500 flex items-center">
                Logout <CgLogOut className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
