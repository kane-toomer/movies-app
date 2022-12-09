import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import MovieDetail from "./components/MovieDetail";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/signin" element={<SignIn />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/browse" element={<Dashboard />} />
				<Route exact path="/movie/details" element={<MovieDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
