import React from 'react'

export class TodoList extends React.Component{
   
    
    render(){
        const items_left = 0;
        const items = this.props.myTasks.map((elem, i) =>{
            return(
                <li className = "form-control list" key = {i}>
                    <span className="id">{i+1}</span>
                    <span className="title">{elem}</span>
                    <span className="type" />
                    <button className="delete circle fa fa-trash" />

                    
                </li>
            )

        });
        return(
            <div className = "todo-list">
              
                <ul>
                {items}
                </ul>
            
            <div className = "row">
            
            <div className ="left col-sm-2">
              <span className="items form-control">{items_left} items left</span>
            
            </div>
            
            <div className="right col-sm-10 ">
            <ul className="filter form-control">
                <li ><button className="active ">All</button></li>
                <li><button className="active ">Active</button></li>
                <li><button className="active ">Completed</button></li>
            </ul>
            </div>
            </div>
            </div>
            
            
            
            
            
            
           
            
        )
    }
}