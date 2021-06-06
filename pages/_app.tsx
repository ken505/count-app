import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const MyApp = (props: AppProps) => {
  return (
      <props.Component {...props.pageProps} />
  );
};

export default MyApp;
