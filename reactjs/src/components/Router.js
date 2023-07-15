import Companies from "./modules/companies/Companies";
import Home from "./modules/main/Home";
import Notes from "./modules/notes/Notes";
import NotFound from "./modules/NotFound";
import Reports from "./modules/reports/Reports";
import Settings from "./modules/settings/Settings";
import Users from "./modules/users/Users";

export default function Router({ url }) {
  switch (url) {
    case "/":
      return <Home />;

    case "/companies/":
      return <Companies />;

    case "/notes/":
      return <Notes />;

    case "/reports/":
      return <Reports />;

    case "/settings/":
      return <Settings />;

    case "/users/":
      return <Users />;

    default:
      return <NotFound />;
  }
}
