import { VFC } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// const MyApp: VFC = ({ Component, pageProps }: AppProps) => {
//   return <Component {...pageProps} />;
// };

// 👆👇どっちがいいのだろう？🤔 両方とも型定義できていて暗黙の Children は渡せない感じがするけれど・・。しかも👇に VFC は追記可能でエラーもでない。よくわからん。

const MyApp: VFC = (props: AppProps) => {
  return <props.Component {...props.pageProps} />;
};
export default MyApp;
