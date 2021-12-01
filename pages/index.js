import Link from "next/link";
import React from "react";
import { Button, Grid, Header, Image } from "semantic-ui-react";

const Index = () => {
    return (
        <>
            <Header
                style={{ paddingTop: "1rem" }}
                as="h1"
                textAlign="center"
                color="violet"
                content="Welcome to NextBook"
            />
            ;
            <Grid centered>
                <Grid.Row>
                    <Grid.Column mobile="12" largeScreen="3">
                        <Image src="./images/home.png" alt="home" />
                    </Grid.Column>
                    <Grid.Column mobile="12" largeScreen="3" textAlign="center">
                        <p>Login and connect to your friends and family...</p>
                        <Link href="/login" passHref>
                            <Button content="Get Started" color="violet" />
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Index;
