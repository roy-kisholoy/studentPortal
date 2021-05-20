import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";
import PropTypes from "prop-types";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import image from "../../assets/img/brand/salesplash.png";
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: image,
    };
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: image,
            width: 90,
            height: 50,
            alt: "Logo",
            padding: 45,
          }}
          minimized={{
            src: image,
            width: 40,
            height: 40,
            alt: "Logo",
          }}
        />

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                style={{ height: 50, width: 70 }}
                src={this.state.profilePic}
                className="img-avatar"
                alt="admin"
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                style={{ color: "#6fa8bc" }}
                onClick={(e) => this.props.onLogout(e)}
              >
                <i className="fa fa-sign-out"></i> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
