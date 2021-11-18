import React from 'react';


class ImageCard extends React.Component{


    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state  = {span:0}
    }


    componentDidMount(){
     this.imageRef.current.addEventListener('load', e=>{
        const h = (this.imageRef.current.clientHeight)
        const s = Math.ceil(h/150)

        this.setState({span:s})
     })
    }
  render(){
      return(
          <div style={{gridRowEnd:`span ${this.state.span}`}}>
              <img ref={this.imageRef} src={this.props.image.urls.regular} />
          </div>
      )
  }
}
export default ImageCard;