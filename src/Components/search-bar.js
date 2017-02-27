import React,{Component} from 'react';
export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:''};
    this.onInputChange=this.onInputChange.bind(this);
      this.onFormSubmit=this.onFormSubmit.bind(this);
  }
 onInputChange(event){
   this.setState({term:event.target.value});
   

}
onFormSubmit(event){
  event.preventDefault();
  const city = this.state.term
  this.setState({term:''});
  this.props.onCitySubmit(city)
}
  render(){
    return (
      <form  onSubmit={this.onFormSubmit} className="input-group">

      <input value={this.state.term}
             onChange={this.onInputChange}
             placeholder="Get a five day forecast of a city"
             className="form-control" />
      <span className="input-group-btn">
      <button type="submit" className="btn btn-secondary">Search</button></span>
       </form>
    );
  }
}

