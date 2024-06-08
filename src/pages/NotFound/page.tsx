import { useLocation } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout";

export default function PageNotFound() {
  const location = useLocation();
  return (
    <MainLayout
      className={`flex flex-col w-full h-full items-center justify-center`}
    >
      <div className={`font-bold text-5xl`}>404</div>
      <div className={`mt-1 text-xl`}>{location.pathname} Not Found</div>
    </MainLayout>
  );
}
