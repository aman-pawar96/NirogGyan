import {  BrowserRouter as Router,  Route} from "react-router-dom";
import Medication from './pages/Medication'

function App() {
  return (
    <Router>
        <Route exact path="/medication">
          <Medication/>
        </Route>
    </Router>
    );
}

export default App;
