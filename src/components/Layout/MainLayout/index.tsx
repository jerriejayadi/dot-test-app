import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HambergerMenu, LogoutCurve } from "iconsax-react";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const NAV_MENU = [
  {
    path: "/products",
    name: "Posts List",
    icon: "",
  },
  {
    path: "/users",
    name: "Users List",
    icon: "",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "",
  },
];

export default function MainLayout({ children, className }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const handleLogout = () => {
    localStorage.removeItem("secret_token");
    window.location.reload();
  };

  useEffect(() => {
    window.location.pathname.includes("/products");
  }, []);
  return (
    <main className={`max-w-screen min-h-screen flex md:flex-row sm:flex-co`}>
      {/* Navbar */}
      <div className={`sm:hidden fixed w-full top-0 bg-slate-700 px-4 py-3 `}>
        <div
          onClick={() => {
            setSidebar(true);
          }}
          className={`active:border active:border-white w-fit p-1 rounded-sm`}
        >
          <HambergerMenu className={`text-white `} />
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`transition-all duration-500 ${
          sidebar ? "w-72 translate-x-0" : "w-0 -translate-x-72"
        } fixed md:w-72 sm:translate-x-0 md:sticky top-0 bg-slate-700 h-screen  text-white flex shrink-0 flex-col justify-between`}
      >
        <div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={`text-3xl font-semibold p-6 hover:cursor-pointer`}
          >
            Dashboard
          </div>
          {/* menu */}
          <div className={`flex flex-col gap-3 mt-6 px-3`}>
            {NAV_MENU.map((rows, index) => (
              <Link
                onClick={() => {
                  setSidebar(false);
                }}
                key={index}
                to={rows.path}
                className={`${
                  location.pathname.includes(rows.path) && "bg-gray-500"
                } px-5 py-2`}
              >
                {rows.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={`p-5`}>
          <button
            onClick={() => {
              handleLogout();
            }}
            className={`text-[16px] py-[64px] sm:py-[8px] flex items-center gap-2`}
          >
            <LogoutCurve className={` text-white w-5 h-5`} /> Logout
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          setSidebar(false);
        }}
        className={`${
          className ?? ""
        } p-8 bg-slate-100 w-screen  min-h-screen mt-14 sm:mt-0`}
      >
        {children}
      </div>
    </main>
  );
}
