import React, { createRef, useEffect, useState } from "react";
import { Divider, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import {
    FooterMessage,
    HeaderMessage,
} from "../components/common/WelcomeMessage";
import UploadImage from "../components/UploadImage";

const regExUser = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

//  checking git 
const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        bio: "",
    });
    const btnRef = createRef();
    const { name, email, password, bio, username } = user;
    const handleFieldChange = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };
    const [showPass, setShowPass] = useState(false);
    const [loadingUsername, setLoadingUserName] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [disableButton, setDisableButton] = useState(true);

    const handleUserName = (e) => {
        setLoadingUserName(true);

        const { value } = e.target;
        if (regExUser.test(value)) {
            setLoadingUserName(false);
            setUserNameError(false);
        } else {
            setLoadingUserName(false);
            setUserNameError(true);
        }
    };

    useEffect(() => {
        const isUser = Object.values({
            name,
            email,
            password,
            bio,
            username,
        }).every((item) => Boolean(item));
        isUser ? setDisableButton(false) : setDisableButton(true);
    }, [name, email, password, bio, username]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Grid columns={2} divided="vertically" stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header
                            as="h1"
                            textAlign="center"
                            color="violet"
                            content="User Registration"
                        />
                        <Image alt="Signup Image" src="./images/home.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Form>
                                <HeaderMessage />
                                <UploadImage />
                                <Divider />

                                <Form.Input
                                    required
                                    label="Name"
                                    placeholder="Name"
                                    name="name"
                                    fluid
                                    icon="user"
                                    autoComplete="off"
                                    iconPosition="left"
                                    value={name}
                                    onChange={handleFieldChange}
                                />
                                <Form.Input
                                    required
                                    label="Email"
                                    name="email"
                                    fluid
                                    icon="envelope"
                                    iconPosition="left"
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={handleFieldChange}
                                />
                                <Form.Input
                                    loading={loadingUsername}
                                    error={userNameError}
                                    // error={{
                                    //   content: "Please enter a valid email address",
                                    //   pointing: "below",
                                    // }}
                                    required
                                    label="Username"
                                    placeholder="Username"
                                    fluid
                                    name="username"
                                    icon={userNameError ? "close" : "check"}
                                    // icon="close"
                                    iconPosition="left"
                                    value={username}
                                    onChange={(e) => {
                                        handleFieldChange(e);
                                        handleUserName(e);
                                    }}
                                />
                                <Form.Input
                                    required
                                    label="Password"
                                    name="password"
                                    type={showPass ? "text" : "password"}
                                    fluid
                                    icon={{
                                        name: "eye",
                                        circular: true,
                                        link: true,
                                        onClick: () => setShowPass(!showPass),
                                    }}
                                    iconPosition="left"
                                    placeholder="Password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={handleFieldChange}
                                />
                                {/* <Form.TextArea
                  required
                  label="Bio"
                  name="bio"
                  placeholder="Bio"
                  value={bio}
                  onChange={handleFieldChange}
                /> */}
                                {/* <Button
                                    content="Login"
                                    color="purple"
                                    size="large"
                                    // disabled={disableButton}
                                /> */}
                            </Form>
                            <button
                                icon="signup"
                                type="submit"
                                color="orange"
                                disabled={disableButton}
                                onClick={handleSubmit}
                            >
                                Signup
                            </button>
                            <Divider hidden />
                            <FooterMessage />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default Signup;
