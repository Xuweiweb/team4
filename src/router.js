import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from "./routes/login"
import Home from "./routes/home"

function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={() => {
					return <Redirect to="/login" />
				}} />
				<Route path="/login" component={Login} />
				<Route path="/page" component={IndexPage} />
				<Route path="/home" component={Home} />
			</Switch>
		</Router>
	);
}

export default RouterConfig;
