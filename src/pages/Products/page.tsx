import { useEffect } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { useRequest } from "ahooks";
import { getObject } from "../../api/object";

export default function Products() {
  const { runAsync, data, loading } = useRequest(getObject, { manual: true });
  const fetchData = () => {
    runAsync().then((value) => {
      console.log(value);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainLayout className={`flex flex-col gap-8`}>
      {/* title */}
      <div className={`text-4xl font-semibold`}>Posts</div>

      {/* Content */}
      <div>
        <div className={`grid md:grid-cols-2 gap-8`}>
          {loading
            ? [1, 2, 3].map(() => (
                <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md flex shrink-0 items-start gap-3">
                  <div className={`shrink-0`}>
                    <img
                      className={`w-12 h-12 rounded-[100%] object-cover`}
                      src={`/images/anonymous.jpg`}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-xl font-semibold w-[60px] h-[30px] bg-gray-400 animate-pulse`}
                    />
                    <div
                      className={`flex items-center justify-center flex-wrap mt-3 w-[150px] h-[30px] bg-gray-400 animate-pulse `}
                    />
                  </div>
                </div>
              ))
            : data?.map((rows) => (
                <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md flex shrink-0 items-start gap-3">
                  <div className={`shrink-0`}>
                    <img
                      className={`w-12 h-12 rounded-[100%] object-cover`}
                      src={`/images/anonymous.jpg`}
                    />
                  </div>
                  <div>
                    <div className={`text-xl font-semibold`}>{rows.title}</div>
                    <div
                      className={`flex items-center justify-center flex-wrap mt-3 `}
                    >
                      {rows.body}
                    </div>
                  </div>
                </div>
              ))}
          {}
        </div>
      </div>
    </MainLayout>
  );
}
