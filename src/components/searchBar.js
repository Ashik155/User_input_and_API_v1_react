import React from 'react';



class SearchBar extends React.Component{

state ={term:'search anything'}
    render(){
        console.log("updated Term :", this.state.term)
        return (
            <div className="ui segment">
               <form className="ui form"> 
                <div className="ui field">
                    <label>Serach Images...</label>
                    
                    <input  value={this.state.term} type="text" onChange={e=>{
                        this.setState({
                            term:e.target.value
                        })
                    } }></input>
                </div>
               </form>
            </div>
        )
    }
}


export default SearchBar;