import {Fragment} from "react";
import './App.css';
import List from "./containers/List"

function App() {
	  return (
	  	<Fragment>
	  	<nav className="navbar navbar-dark bg-dark border-bottom border-white" >
	  	<a href="/" className="navbar-brand" >
	  	Movie App lezkouu
	  	</a>
	  	</nav>
	  	<main className="bg-dark">
	    <div className="container">
	      <List />
	    </div>
	    </main>
	    </Fragment>
  );
}

export default App;
