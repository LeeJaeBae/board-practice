import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoardContainer from "../Routes/Board/";
import HomeContainer from "../Routes/Home/";
import { AuthenticationContainer } from "../Routes/Authentication/AuthenticationContainer";

function App() {
	return (
		<Router>
			<Route path="/" exact component={HomeContainer}></Route>
			<Route path="/:id" component={BoardContainer}></Route>

			<Route path="/user" component={AuthenticationContainer}>
				<Route path=":id" component={HomeContainer} />
			</Route>
		</Router>
	);
}

export default App;
