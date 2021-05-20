import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  NavLink,
} from "reactstrap";
import axios from "../../axiosConfig";
import { NotificationManager } from "react-notifications";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      id: "",
      changed: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ changed: true });
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/loginProfile",
      data: { email: this.state.email, password: this.state.password },
    })
      .then((response) => {
        if (response.data.ack === 1) {
          NotificationManager.success("Login successful!");
          const userInfo = { ...response.data, authorized: true };
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          localStorage.setItem("token", response.data.token);
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 500);
        }
        if (response.data.ack === 0) {
          NotificationManager.warning(response.data.message);
        }
      })
      .catch((err) => {
        NotificationManager.error("Network Error");
      });
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.submitHandler}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="email"
                          placeholder="Email"
                          autoComplete="email"
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={this.inputHandler}
                          autoComplete="current-password"
                          required
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            type="submit"
                            color="primary"
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <NavLink href="/register">
                            Create a New Account
                          </NavLink>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;
