import { useRouter } from "next/router";
import nProgress from "nprogress";
import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import HeadTags from "./HeadTags";
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(url);
      nProgress.start();
    };
    const handleStop = () => {
      nProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <HeadTags />
      <NavBar />
      <Container text style={{ paddingTop: "1rem" }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
