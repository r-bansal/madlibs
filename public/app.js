var MadLibs = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			adj: '',
			noun: '',
			showMadLibsStory: false,
		}
	},
	handleSubmit: function(event) {
		event.preventDefault();
		this.setState({
			adj: React.findDOMNode(this.refs.adj).value,
			showMadLibsStory: true,
		})
		console.log('hello', this.state.adj)
	},
	resetMadLibs: function() {
		this.setState({
			adj: '',
			noun: '',
			showMadLibsStory: false
		})
	},
	render: function() {
		return (
			<div className="madLibs">
				{ this.state.showMadLibsStory ? <div><MadLibsStory adj={this.state.adj} noun={this.state.noun} /><button type="submit" onClick={this.resetMadLibs}>Play Again!</button></div> : <form className="storyForm" ref="StoryForm" onSubmit={this.handleSubmit}>
				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj" valueLink={this.linkState('adj')} />
				<label>Noun</label>
				<input type="text" placeholder="Noun" ref="noun" valueLink={this.linkState('noun')} />
				<input type="Submit" value="Submit" />
			</form> }
			</div>
		)
	}
})


var MadLibsStory = React.createClass({
	getInitialState: function() {
		return {
			show: false
		}
	},
	render: function() {
		return(
			<h3>Today I feel {this.props.adj}. It was a {this.props.noun} day.</h3>
			)
	}
})

React.render(
	<MadLibs />, document.getElementById('content')
	)