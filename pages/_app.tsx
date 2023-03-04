import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
const Description =
  "Notionでカウントダウンを行うウィジェットを作成するためのサイトです。手順はたったの3ステップです。日時を入力し、生成されたURLをNotionに貼り付けるだけ。";
const Title = "Notionでカウントダウンするためのウィジェットメーカー";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>{Title} - 大事な予定をカウントダウンしよう</title>
        <meta name="description" content={Description}></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Description} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_URL}/ogp.png`}
        />
        ;
        <meta property="og:site_name" content={Title} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={process.env.NEXT_PUBLIC_URL} />
        <meta name="twitter:site" content="@cohu_dev" />
      </Head>
    </>
  );
}

export default MyApp;
