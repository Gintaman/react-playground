let Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
					{this.props.children}
			</div>
		);
	}
});

let CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one comment.</Comment>
				<Comment author="Jordan Walke">This is another comment.</Comment>
			</div>
		);
	}
});

let CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
			</div>
		);
	}
});

let CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList></CommentList>
				<CommentForm></CommentForm>
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox></CommentBox>,
	document.getElementById('content')
);
