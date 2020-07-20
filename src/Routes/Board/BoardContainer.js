import React, { Component } from "react";
import { connect } from "react-redux";
import BoardPresenter from "./BoardPresenter";

export class BoardContainer extends Component {
	render() {
		return <BoardPresenter />;
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
