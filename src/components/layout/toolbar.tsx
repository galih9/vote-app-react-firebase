import { FC, memo, ReactNode } from "react";
import { logoutFirebase } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = memo(({ children }) => {
  const navigate = useNavigate();

  const { getUserName } = useUser();
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-cyan-400 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 cursor-pointer">
              <a
              className="text-white"
                onClick={() => {
                  navigate("/vote");
                }}
              >
                Voty Vote App
              </a>{" "}
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li></li>
              </ul>
            </div>
            <a href="" className="mr-3 text-white">
              {getUserName()}
            </a>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://placehold.co/400"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Candidates List
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        navigate("/voter");
                      }}
                    >
                      Check voter status
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a
                      onClick={async () => {
                        logoutFirebase();
                        navigate("/");
                        toast.success("Logout Successfully.");
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Content here  */}
          <div>{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
});

export default Layout;
