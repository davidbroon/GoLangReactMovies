import Ticket from "@/assets/movie_tickets.jpg";
import { Link } from "react-router-dom";
// type Props = {};

const Home = () => {
	return (
		<div className="text-center">
			<h2>Find a movie to watch tonight</h2>
			<hr />
			<Link to="movies">
				<img src={Ticket} alt="movie tickets"></img>
			</Link>
		</div>
	);
};

export default Home;
