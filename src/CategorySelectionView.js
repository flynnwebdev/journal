import React from "react"
import { Link } from "react-router-dom";

export default class CategorySelectionView extends React.Component {
    render() {
        return (
          <div>
            <h1>Category Selection View</h1>
            <ul>
                {
                    this.props.categories.map((item, index) => {
                        return (
                            <li>
                                <Link to={`/entry/${index}`}>{item}</Link>
                            </li>
                        )    
                    })        
                }        
            </ul>
          </div>
        );
    }
}