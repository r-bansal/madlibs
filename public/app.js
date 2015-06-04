var MadLibs = React.createClass({
	getInitialState: function() {
		return {
			adj: ''
		}
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.setState({
			adj: e.target.value
		})

	},
	render: function() {
		var adj = this.state.adj;
		return (
			<div className="madLibs">
			<form className="storyForm" onSubmit={this.handleSubmit}>
				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj" value={adj} />
				<input type="Submit" value="Submit" />
			</form>
			<MadLibsStory adj={this.state.adj}/>
			</div>
		)
	}
})



var MadLibsStory = React.createClass({
	render: function() {
		return(
			<h3>Today I feel {this.props.children}</h3>
			)
	}
})

React.render(
	<MadLibs />, document.getElementById('content')
	)