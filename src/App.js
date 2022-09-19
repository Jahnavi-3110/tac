import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import Footer from "./Components/Footer";
import GraphicsDesign from "./Components/GraphicsDesign";
import DashboardMain from "./Components/DashboardMain";
import SocialMarketing from "./Components/Social-Marketing";
import TACWorkspace from "./Components/TACWorkspace";
import TAC_Business from "./Components/TAC_Business";
import TAC_Community from "./Components/TAC_Community";
import home1 from "./Components/home1";

function App() {
	return (
	<Router>
			<Routes>
				<Route exact path="/" element={<Home user={true} />} />
				<Route exact path="/home" element={<Home user={true} />} />
				<Route exact path="/socialmarketing" element={<SocialMarketing />} />
				<Route exact path="/Graphics&Design" element={<GraphicsDesign />} />
				<Route exact path="/TACworkspace" element={<TACWorkspace />} />
				<Route exact path="/DashBoardMain" element={<DashboardMain />} />
				<Route exact path="/TAC_Business" element={<TAC_Business />} />
				<Route exact path="/TAC_Community" element={<TAC_Community />} />
			</Routes>
			<Footer />
	</Router>
	
	);
}

export default App;
