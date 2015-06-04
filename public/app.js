var MadLibs = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			adj: '',
			noun: '',
		}
	},
	handleSubmit: function(event) {
		event.preventDefault();
		this.setState({
			adj: React.findDOMNode(this.refs.adj).value
		})
		console.log('hello', this.state.adj)
	},
	render: function() {
		return (
			<div className="madLibs">
			<form className="storyForm" onSubmit={this.handleSubmit}>
				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj" valueLink={this.linkState('adj')} />
				<label>Noun</label>
				<input type="text" placeholder="Noun" ref="noun" valueLink={this.linkState('noun')} />
				<input type="Submit" value="Submit" />
				<MadLibsStory adj={this.state.adj} noun={this.state.noun} />
			</form>
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