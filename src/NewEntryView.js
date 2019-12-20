import React from "react"

export default class NewEntryView extends React.Component {
    state = {
        category: "none",
        entry: ""
    }

    componentDidMount() {
        const { cat_id } = this.props.match.params
        this.setState({ category: this.props.categories[cat_id] })
    }

    onTextChange = (event) => {
        this.setState({ entry: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onEntrySubmit(this.state.entry)
    }

    render() {
        return (
          <>
            <h1>New {this.state.category} Entry</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <textarea value={this.state.entry} onChange={this.onTextChange}></textarea>
              </div>
              <button>Create New Entry</button>
            </form>
          </>
        );
    }
}