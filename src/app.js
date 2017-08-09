import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// get header
import Header from "./components/header";
// get routes
import Routes from "./routes";

const App = () =>
	<Router>
		<div className="row">
			
			<Route route="/" component={Header} />

			<Routes />
			
		</div>
	</Router>;

ReactDOM.render(
	<App />, document.getElementById("app")
);
