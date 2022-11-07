import React from "react";
import Head from "next/head";
import { NextPage } from "next";

interface LayoutProps {
    seoTitle:string;
}

const Phead: NextPage<LayoutProps> = ({seoTitle}) => {
  return (
        <div>
          <Head>
            <title>포켓몬 | {seoTitle}</title>
          </Head>
        </div>
    )
}

export default Phead