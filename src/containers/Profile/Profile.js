import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Form, Row, Col } from "reactstrap";
// core components
// import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "../../axiosConfig";
import { NotificationManager } from "react-notifications";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      email: "",
      fullname: "",
      roll_No: "",
      address: "",
      schoolName: "",
      schoolAddress: "",
      dateOfBirth: "",
      password: "",
      changed: false,
    };
  }

  fetchProfileDetails() {
    axios({
      method: "GET",
      url: "/getProfileByID",
      params: { userID: this.state.userInfo.id },
       headers: {"Authorization" : `Bearer ${this.state.userInfo.token}`} 
    })
      .then((response) => {
        const responseData = response.data.data;
        console.log(response);
        this.setState({ email: responseData.email });
        this.setState({ fullname: responseData.fullName });
        this.setState({ roll_No: responseData.rollNo });
        this.setState({ address: responseData.address });
        this.setState({ schoolName: responseData.schoolName });
        this.setState({ schoolAddress: responseData.schoolAddress });
        this.setState({ dateOfBirth: responseData.dob });
      })
      .catch((err) => {
        NotificationManager.error(err.message);
      });
  }

  componentDidMount() {
    this.fetchProfileDetails();
  
  }

  inputHandler = (event) => {
    this.setState({ changed: true });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        {/* <PanelHeader size="sm" /> */}
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title"> My Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Full Name : </label>
                        <span> {this.state.fullname} </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Email : </label>
                        <span> {this.state.email} </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Roll No. : </label>
                        <span> {this.state.roll_No} </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Address : </label>
                        <span> {this.state.address} </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>School Name : </label>
                        <span> {this.state.schoolName} </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>School Address : </label>
                        <span> {this.state.schoolAddress} </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <label>Date Of Birth : </label>
                        <span> {this.state.dateOfBirth} </span>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
