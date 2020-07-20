import React, { Component } from "react";
import { connect } from "react-redux";
import HomePresenter from "./HomePresenter";

export class HomeContainer extends Component {
	render() {
		return <HomePresenter />;
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
