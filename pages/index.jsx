import Head from "next/head";
import { useCallback, useState } from "react";
import { InfoModal } from "../components/InfoModal";
import { Minus } from "../components/Minus";
import { Pulus } from "../components/Pulus";
import { SnsShare } from "../components/SnsShare";

const Home = () => {
  //     👇 配列の分割代入
  // const count = array[0]
  // const setCount = array[1] と同義
  const [count, setCount] = useState(0);
  //                                 👆 初期値

  const handleClickPulus = useCallback(
    (e) => {
      if (count < 9999) setCount((count) => count + 1);
    },
    [count]
  );

  const handleClickMinus = useCallback(
    (e) => {
      if (count > -9999) setCount((count) => count - 1);
    },
    [count]
  );

  const handleClickReset = useCallback(
    (e) => {
      setCount((count) => 0);
    },
    [count]
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-green-400 dark:from-gray-900 to-blue-400 dark:to-purple-800">
      <Head>
        <title>Count App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://count-app.vercel.app/" />
        <meta property="og:title" content="Count - App" />
        <meta
          property="og:description"
          content="This counter is beautiful and easy to use. ✨"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/68226398/120092109-90253e80-c14b-11eb-9d1f-9b838f2c7ab1.jpg"
        />
      </Head>
      <InfoModal />
      <h1 className="text-4xl text-white dark:text-gray-400 font-bold select-none">
        Count - App
      </h1>
      <h1
        onClick={handleClickReset}
        className="h-16 w-40 bg-gradient-to-tr from-green-300 dark:from-indigo-700 to-blue-300 dark:to-purple-500 shadow-2xl flex hover:opacity-70 cursor-pointer justify-center items-center rounded-2xl mt-14 text-4xl text-white dark:text-gray-400 font-bold select-none"
      >
        Clear
      </h1>
      <h1 className="h-30 w-40 m-28 text-8xl text-white dark:text-gray-400 text-center font-bolditems-center select-none">
        {count}
      </h1>

      <div className="flex">
        <div onClick={handleClickMinus}>
          <Minus />
        </div>
        <div onClick={handleClickPulus}>
          <Pulus />
        </div>
      </div>

      <div className="fixed bottom-4">
        <SnsShare url={"https://count-app.vercel.app/"} title={"Count - App"} />
      </div>
    </div>
  );
};
export default Home;
