import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	EditMovie,
	ErrorPage,
	Genres,
	GraphQL,
	Home,
	Login,
	ManageCatalogue,
	Movie,
	Movies,
} from "@/components";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/movies", element: <Movies /> },
			{ path: "/movies/:id", element: <Movie /> },
			{ path: "/genres", element: <Genres /> },
			{ path: "/admin/movie/0", element: <EditMovie /> },
			{ path: "/graphql", element: <GraphQL /> },
			{ path: "/login", element: <Login /> },
			{ path: "/managecatalogue", element: <ManageCatalogue /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
