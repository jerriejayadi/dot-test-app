import MainLayout from "../../components/Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout className={`flex items-center justify-center w-full`}>
      <div className={`text-5xl font-bold`}>Welcome</div>
    </MainLayout>
  );
}
