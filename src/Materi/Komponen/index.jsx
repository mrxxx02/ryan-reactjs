import React from "react"; 
import ClassComponent from "./pembahasan/ClassComponent";

export default class Component extends React.Component{

    render() {
        return (
            <div>
                <ClassComponent nama="Muhammad Ryan Prayogi" />
                <functionalComponent nama="Muhammad Ryan Prayogi" />
            </div>
        )
    }
}