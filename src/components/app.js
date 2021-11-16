import React from 'react';
import SearchBar from "./searchBar";

class App extends React.Component{


    onSubmit = (term) =>{
        console.log("from the parent", term)
    }

    render(){
        return (
            <div className="ui container" style={{marginTop :'20px'}}>
                <SearchBar runWhenUserSubmit={this.onSubmit}/>
            </div>
        )
    }
} 
    

export default App;