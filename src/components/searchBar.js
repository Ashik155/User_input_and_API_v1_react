import React from 'react';



class SearchBar extends React.Component{

    //using modern Js it won;t throw error so this below functions works totally fine. 
    onSubmitUsingModernes15JS = (e)=> {
        e.preventDefault();
        // console.log("submitting DaTA FROM THE CHILD, and from here i will PASS DATA TO PARENT, PARENT WILL CONDSOLE THERE")
        this.props.runWhenUserSubmit(this.state.term)
        // console.log("the Submitted Term", this.state.term)
    }

    // onSubmitUsingPlainJs(e) {
    //     e.preventDefault();
    //     console.log("the Submitted Term", this.state.term)
    // }



//State Initialisation goes here instead using constructor
state ={term:'search anything'}

//cumpulsory Render method here...   
    render(){
        // console.log("updated Term :", this.state.term)
        return (
            <div className="ui segment">
               <form onSubmit={this.onSubmitUsingModernes15JS}     className="ui form"> 
                <div className="ui field">
                    <label>Serach Images...</label>
                    
                    <input  value={this.state.term} type="text" 
                    onChange={e=>{
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