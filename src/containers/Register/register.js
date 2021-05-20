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
import moment from "moment";
import { NotificationManager } from "react-notifications";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      roll_No: "",
      address: "",
      schoolName: "",
      schoolAddress: "",
      dateOfBirth: new Date(),
      password: "",
      confirmPassword: "",
      changed: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ changed: true });
    this.setState({ [event.target.name]: event.target.value });
    console.log(moment().format("YYYY-MM-DD"));
  };

  dateInputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      NotificationManager.error("Password Mismatch");
    } else {
      const dataBody = {
        email: this.state.email,
        fullName: this.state.fullname,
        rollNo: this.state.roll_No,
        address: this.state.address,
        schoolName: this.state.schoolName,
        schoolAddress: this.state.schoolAddress,
        dateOfBirth: this.state.dateOfBirth,
        password: this.state.password,
      };
      axios({
        method: "POST",
        url: "/registerProfile",
        data: dataBody,
      })
        .then((response) => {
          if (response.data.ack === 1) {
            NotificationManager.success(response.data.message);
            setTimeout(() => {
              window.location.href = "/login";
            }, 500);
          } else if (response.data.ack === 0) {
            NotificationManager.error(response.data.message);
          }
        })
        .catch((err) => {
          NotificationManager.error(err.message);
        });
    }
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
                      <h1>Register</h1>
                      <p className="text-muted">Fill up the Details</p>
                      <h6>Your Personal Email</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-envelope-open-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="email"
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <h6>Your Name</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="fullname"
                          placeholder="Full Name"
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <h6>Your Roll No.</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-id-card"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="roll_No"
                          placeholder="Roll No."
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <h6>Residential Address</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-address-book"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Address"
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <h6>Date of Birth</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="cui-calendar icons"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="date"
                          name="dateOfBirth"
                          onChange={this.dateInputHandler}
                          min={moment().subtract(60,'years').format("YYYY-MM-DD")}
                          max={moment().format("YYYY-MM-DD")}
                          required
                        />
                      </InputGroup>
                      <h6>Your School Name</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-bandcamp"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="schoolName"
                          placeholder="School Name"
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <h6>Your School Address</h6>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-address-book"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="schoolAddress"
                          placeholder="School Address"
                          onChange={this.inputHandler}
                          required
                        />
                      </InputGroup>
                      <h6>New Password</h6>
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
                      <h6>Confirm Password</h6>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="confirmPassword"
                          placeholder="Retype Password"
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
                            Sign Up
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <NavLink href="/login"> Sign In</NavLink>
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
export default Register;
