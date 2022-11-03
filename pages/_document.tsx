import Document, {Html ,Head , Main, NextScript} from "next/document";

export default function MyDocument() {
    console.log("DOCUMENT IS RUNNING");
    return (
      <Html lang="ko">
        <Head>
        <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
};