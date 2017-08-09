import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./components/home";






class LoadingComponent extends Component {

	constructor(props){
		super(props);
		this.state = {loaded: false, module: null};
	}

	componentDidMount(){
		this.props.routePromise.then(module=>{
			setTimeout(()=>{
				this.setState({ loaded: true, module: module.default });
			},300);
		});
	}

	render(){
		const isLoaded = this.state.loaded;

		if( this.state.loaded ) {
			return <this.state.module {...this.props} />
		} else {
			return <div><h4>COMPONENT STILL LOADING</h4></div>
		}
	}
}






const Routes = () => 
	<div className="col-12">
		<Route exact path="/"component={Home} />

		<Route path ="/contact"
			component={
				props => 
					<LoadingComponent {...props} routePromise={import(/*webpackChunkName: "contact"*/"./components/contact")} />
			}
		/>
		
		<Route path="/images"
			component={
				props =>
					<LoadingComponent {...props} routePromise={import(/*webpackChunkName: "images"*/"./components/images")} />
			}
		/>
		<Route path="/services"
			component={
				props =>
					<LoadingComponent {...props} routePromise={import(/*webpackChunkName: "contact"*/"./components/services")} />
			}
		/>
		
	</div>;

export default Routes;