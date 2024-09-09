import { useRouteError } from "react-router-dom";

// type Props = {}
interface RouteError {
	statusText?: string;
	message: string;
}

const ErrorPage = () => {
	const error = useRouteError() as RouteError;
	return (
		<div className="container">
			<div className="row">
				{" "}
				<div className="colmd-6 offset-md-3">
					<h1 className="mt-3">Oops!</h1>
					<p>Sorry, an unexpected error has occured.</p>
					<p>
						<em>{error.statusText || error.message}</em>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
