import React  , {Component} from 'react';


//const Search = ({handleChangeSearch, searchText}) => {
 //   console.log(handleChangeSearch)
 //   return (
 //       <p>
         
  //          Search: <input onChange={handleChangeSearch} value={searchText}></input>
  //      </p>
  //  )
//}

class Search extends Component {
 constructor(props){
     super(props)
     this.state={
        searchText: ''
     }
 }
    
    handleChangeSearch = e => {
       this.setSearch(
          e.target.value
       )
    }
    
    render(){

       
        return(
            <p>
         
            Search: <input onChange={this.handleChangeSearch} value={this.props.searchText}></input>
        </p>
        )
    }
}
export default Search