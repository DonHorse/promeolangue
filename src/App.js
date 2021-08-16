import './App.css';
import Welcome from "./Welcome";
import Articles from "./Article";
import ArticleMaker from "./ArticleMaker";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";
import Questionnaire from "./Questionnaire";
import QuestionnaireMaker from "./QuestionnaireMaker";
import Header from "./Header";
import Footer from "./Footer";
import AdminForm from "./Admin-Modification";


import{BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Router forceRefresh={true}
        >

            <Header />
            <br/>
            <br/>
            <br/>

            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/Article" component={Articles}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Questionnaire" component={Questionnaire}/>
                <Route path="/Questionnaire/:slug" component={Questionnaire}/>
                <Route path="/QuestionnaireMaker" component={QuestionnaireMaker}/>
                <Route path="/ArticleMaker" component={ArticleMaker}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Administration" component={AdminForm}/>
                <Route path="/" component={() => <div className="Erreur 404">ERREUR 404</div>}/>
            </Switch>

            <Footer />
        </Router>

      </div>
  );
}

export default App;
