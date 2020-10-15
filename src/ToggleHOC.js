import React,{Component} from 'react'


export default function WithToggle(HocComponent,data){
  return class extends Component{
      constructor(props) {
        super(props)         
      }
       
      render(){ 
        return (
          <HocComponent 
            toggle={this.toggle}
            toggleStatus={this.state.toggleStatus}
            data = {data}
          />
        )
      }
  } 
}