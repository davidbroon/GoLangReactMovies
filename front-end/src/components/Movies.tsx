// type Props = {};

import { MovieProps } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
	const [movies, setMovies] = useState<MovieProps[]>([]);
	useEffect(() => {
		const headers = new Headers();
		headers.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: headers,
		};
		(async () => {
			try {
				const response = await fetch(`/api/movies`, requestOptions);
				const data = await response.json();
				console.log(data);
				setMovies(data);
			} catch (error) {
				console.error("Error:", error);
			}
		})();
	}, []);

	return (
		<div>
			<h2>Movies</h2>
			<hr />
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Movie</th>
						<th>Release Date</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>
					{movies.map((m) => (
						<tr key={m.id}>
							<td>
								<Link to={`/movies/${m.id}`}>{m.title}</Link>
							</td>
							<td>{m.release_date}</td>
							<td>{m.mpaa_rating}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Movies;
