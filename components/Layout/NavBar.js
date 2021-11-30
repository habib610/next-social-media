import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";

const NavBar = () => {
  const router = useRouter();

  const activePath = (path) => router.pathname === path;
  return (
    <Menu>
      <Container>
        <Link href="/login" passHref>
          <Menu.Item header active={activePath("/login")}>
            <Icon size="large" name="sign in" />
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup" passHref>
          <Menu.Item header active={activePath("/signup")}>
            <Icon size="large" name="signup" />
            Signup
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

export default NavBar;
