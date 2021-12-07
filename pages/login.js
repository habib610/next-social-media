import React, { useEffect, useState } from "react";
import {
    Button,
    Divider,
    Form,
    Grid,
    Header,
    Image,
    Segment,
} from "semantic-ui-react";
import {
    FooterMessage,
    HeaderMessage,
} from "../components/common/WelcomeMessage";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = user;
    const [showPass, setShowPass] = useState(false);

    const handleFieldChange = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };
    const [disableButton, setDisableButton] = useState(true);

    const handleSubmit = (e) => {};

    useEffect(() => {
        const isUser = Object.values(user).every((item) => Boolean(item));
        isUser ? setDisableButton(false) : setDisableButton(true);
    }, [user]);
    return (
        <div>
            <Grid columns={2} divided="vertically" stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header
                            as="h1"
                            textAlign="center"
                            color="violet"
                            content="User Login "
                        />
                        <Image alt="Signup Image" src="./images/login.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Form autoComplete="off">
                                <HeaderMessage />
                                <Divider />
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
                                <Button
                                    content="Login"
                                    color="purple"
                                    size="large"
                                    disabled={disableButton}
                                />
                            </Form>
                            <Divider hidden />
                            <FooterMessage />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default Login;
