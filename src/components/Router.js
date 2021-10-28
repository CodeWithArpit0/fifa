import { Route, Switch } from "react-router";
import Profile from "./Profile";
import Search from "./Search";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/profile/:name" component={Profile} />
    </Switch>
  );
}
