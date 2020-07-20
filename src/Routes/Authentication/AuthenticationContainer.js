import React, { Component } from "react";
import { connect } from "react-redux";
import AuthenticationPresenter from "./AuthenticationPresenter";

export class AuthenticationContainer extends Component {
	render() {
		return <AuthenticationPresenter />;
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer);
