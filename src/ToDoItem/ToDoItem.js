import React from 'react';
import './ToDoItem.css'

const ToDoItem = props => {
    const resolvedClass = {
    textDecoration : 'line-through'
    }
    return(
        <div className="ToDoItem">
            <div className="descriptiom-wraper">
                <p style={props.complit == true ? resolvedClass:{}}>
                {props.descript}
                </p>
            </div>
            <div className="descriptiom-wraper">
                <input type="checkbox"
                 defaultChecked = {props.complit}
                 onChange = {props.handelChange}
                 />
            </div>
        </div>
    );
}

export default ToDoItem;