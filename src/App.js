import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

import Rating from "./routes/Rating";
import DownloadCount from "./routes/DownloadCount";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/movie" exact component={Home} />
          <Route path="/rating" component={Rating} />
          <Route path="/downloadcount" component={DownloadCount} />
          <Route path="/movie/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;