import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from '../src/components/PrivateRoute';
import Dashboard from '../src/components/dashboard';
// import Login from '../src/components/login';
// import AddNew from '../'

class App extends React.Component {
	render() {
		return (
			<div className="app">
				{/* <PrivateRoute exact path="/" component={Dashboard} /> */}
				{/* <Route exact path="/login" component={Login} /> */}
				<Dashboard/>
<p> test </p>
			</div>
		)
	}
}

export default App;
