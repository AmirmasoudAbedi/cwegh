import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <head>
        <title>Coding With Enjoy | برنامه نویسی با لذت</title>
      </head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
