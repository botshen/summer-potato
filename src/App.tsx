import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { history } from "./config/history";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import SignUp from "./views/SignUp";

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
