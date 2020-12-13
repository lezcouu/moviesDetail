import React, {Fragment} from "react";
import Card from "../components/Card"

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=1c4e25b6"

class List extends React.Component{
	
	constructor(){
		super();
		this.state = {
			data: [],
			searchTerm: "",
			error: "",
			loading: true
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	async componentDidMount(){
		const res= await fetch(`${API}&s=batman`)
		const resJSON = await res.json()
		this.setState({
			data: resJSON.Search,
			loading: false
		})
	}

	async handleSubmit(e) {
	
		e.preventDefault();
		
		if(!this.state.searchTerm){
			return this.setState({
				error: "Por favor escribe un texto valido"
			})
		}
		
		const res = await fetch(`${API}&s=${this.state.searchTerm}`)
		const data = await res.json();
		if(!data.Search){
			return this.setState({
				error:"no hay resultados"
			})
		}
		
		this.setState({
			data: data.Search,
			error: "",
			searchTerm: ""
		})
	
	}

	render(){
		const { data, loading } = this.state;
		if(loading){
			return (
			<div>
				<h3 className="text-white">
				Cargando...
				</h3>
			</div>
			)
		}
	    return (
	    	<Fragment>
	    	<div className="row">
	    	<div className="col-md-4 offset-md-4 p-4">
	    	<form onSubmit={this.handleSubmit}>
	    		<input
    		        className="form-control"
    		        placeholder="Seach" 
    		        type="text"
    		        onChange={
    		        	e => this.setState({searchTerm: e.target.value})
    		        }
    		        value= {this.state.searchTerm}
    		        autoFocus
	    		    />
	    	</form>	  
	    	<p className="text-white">{this.state.error ? this.state.error : ""}</p>  		
	    	</div>	    		
	    	</div>
		    <div className="row">
		          { 
		          	data.map((movie, i) => {
		          	return <Card movie={movie} key={i}/>
		          })
		          }
		    </div>
		    </Fragment>
	    )
    }
}

export default List;