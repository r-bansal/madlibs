var MadLibs = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			adj: '',
			nationality: '',
			person: '',
			noun: '',
			adj2: '',
			noun2: '',
			adj3: '',
			adj4: '',
			noun3: '',
			noun4: '',
			num: '',
			shapes: '',
			food: '',
			food2: '',
			num2: '',
			showMadLibsStory: false,
		}
	},
	handleSubmit: function(event) {
		event.preventDefault();
		this.setState({
			showMadLibsStory: true,
		})
	},
	resetMadLibs: function() {
		this.setState({
			adj: '',
			nationality: '',
			person: '',
			noun: '',
			adj2: '',
			noun2: '',
			adj3: '',
			adj4: '',
			noun3: '',
			noun4: '',
			num: '',
			shapes: '',
			food: '',
			food2: '',
			num2: '',
			showMadLibsStory: false
		})
	},
	getContent: function() {
		if(this.state.showMadLibsStory) {
			return(
				<div>
				<MadLibsStory  adj={this.state.adj} nationality={this.state.nationality} person={this.state.person} noun={this.state.noun} adj2={this.state.adj2} noun2={this.state.noun2} adj3={this.state.adj3} adj4={this.state.adj4} noun3={this.state.noun3} noun4={this.state.noun4} num={this.state.num} shapes={this.state.shapes} food={this.state.food} food2={this.state.food2} num2={this.state.num2} />
				<button type="submit" className="btn" onClick={this.resetMadLibs}>Play Again!</button>
				</div>
			)
		} else {
			return(<form className="storyForm" ref="StoryForm" onSubmit={this.handleSubmit}>
			
				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj" valueLink={this.linkState('adj')} />

				<label>Nationality</label>
				<input type="text" placeholder="Nationality" ref="nationality" valueLink={this.linkState('nationality')} />

				<label>Person</label>
				<input type="text" placeholder="Person" ref="person" valueLink={this.linkState('person')} />

				<label>Noun</label>
				<input type="text" placeholder="Noun" ref="noun" valueLink={this.linkState('noun')} />

				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj2" valueLink={this.linkState('adj2')} />

				<label>Noun</label>
				<input type="text" placeholder="Noun" ref="noun2" valueLink={this.linkState('noun2')} />

				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj3" valueLink={this.linkState('adj3')} />

				<label>Adjective</label>
				<input type="text" placeholder="Adjective" ref="adj4" valueLink={this.linkState('adj4')} />

				<label>Plural Noun</label>
				<input type="text" placeholder="Plural Noun" ref="noun3" valueLink={this.linkState('noun3')} />

				<label>Noun</label>
				<input type="text" placeholder="Noun" ref="noun4" valueLink={this.linkState('noun4')} />

				<label>Number</label>
				<input type="text" placeholder="Number" ref="num" valueLink={this.linkState('num')} />

				<label>Shapes</label>
				<input type="text" placeholder="Shapes" ref="shapes" valueLink={this.linkState('shapes')} />

				<label>Food</label>
				<input type="text" placeholder="Food" ref="food" valueLink={this.linkState('food')} />

				<label>Food</label>
				<input type="text" placeholder="Food" ref="food2" valueLink={this.linkState('food2')} />

				<label>Number</label>
				<input type="text" placeholder="Number" ref="num2" valueLink={this.linkState('num2')} />

				<input className="btn" type="Submit" value="Mad Libs!" />
			</form>)
		}
	},
	render: function() {
		return (
			<div className="madLibs">
				{this.getContent()}
			</div>
		)
	}
})



var MadLibsStory = React.createClass({
	render: function() {
		return(
			<div>
			<h1>Pizza</h1>
			<h3>Pizza was invented by a {this.props.adj} {this.props.nationality} chef named {this.props.person}. To make a pizza, you need to take a lump of {this.props.noun}, and make a thin, round {this.props.adj2} {this.props.noun2}. Then you cover it with {this.props.adj3} sauce, {this.props.adj4} cheese, and fresh chopped {this.props.noun3}. Next you have to bake it in a very hot {this.props.noun4}. When it is done, cut it into {this.props.num} {this.props.shapes}. Some kids like {this.props.food} pizza the best, but my favorite is the {this.props.food2} pizza. If I could, I would eat pizza {this.props.num2} times a day!</h3>
			</div>
			)
	}
})

React.render(
	<MadLibs />, document.getElementById('content')
	)