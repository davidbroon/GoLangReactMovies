import { MovieProps } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// type Props = {};

const Movie = () => {
	const [movie, setMovie] = useState<MovieProps>();
	const { id } = useParams();

	useEffect(() => {
		const myMovie = {
			id: 1,
			title: "Highlander",
			release_date: "1986-03-07",
			runtime: 116,
			mpaa_rating: "R",
			description: "Some long description",
		};
		setMovie(myMovie);
	}, [id]);
	return (
		<>
			{movie ? (
				<div>
					<h2>Movie: {movie.title}</h2>
					<small>
						<em>
							{movie.release_date}, {movie.runtime} minutes, Rated{" "}
							{movie.mpaa_rating}
						</em>
					</small>
					<hr />
					<p>{movie.description}</p>
				</div>
			) : (
				<div>Unable to Load movie</div>
			)}
		</>
	);
};

export default Movie;
