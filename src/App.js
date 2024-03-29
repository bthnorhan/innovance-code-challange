import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

import NotFoundPage from './pages/NotFoundPage';
import UpcomingLaunchesPage from './pages/UpcomingLaunchesPage';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import LaunchDetailPage from './pages/LaunchDetailPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoadingPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/logout" component={LogoutPage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/upcoming" component={UpcomingLaunchesPage} />
				<Route exact path="/launch/:id" component={LaunchDetailPage} />
				<PrivateRoute exact path="/profile" component={ProfilePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	);
}

export default App;
