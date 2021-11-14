import React from 'react';



class SearchBar extends React.Component{


    render(){
        return (
            <div className="ui segment">
               <form className="ui form"> 
                <div classname="ui field">
                    <label>Serach Images...</label>
                    <input type="text" className=""></input>
                </div>
               </form>
            </div>
        )
    }
}


export default SearchBar;