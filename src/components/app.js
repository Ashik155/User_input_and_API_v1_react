import React from 'react';
import SearchBar from "./searchBar";
import unsplash from '../Apis/unsplash'
import ImageList from './ImageList';

class App extends React.Component{


    state = { images : []}

    onSubmit = async (term) => {
       
    const response =   await  unsplash.get('/search/photos', {
          
            params : {
                query : term
            },
        });

        this.setState({
            images : response.data.results
        })
    }

    
    
    

    render(){
        return (
            <div className="ui container" style={{marginTop :'20px'}}>
                <SearchBar runWhenUserSubmit={this.onSubmit}/>
                <h2>We got {this.state.images.length} of images according to your search </h2>
                <ImageList images = {this.state.images} />
            </div>
        )
    }
} 
    

export default App;