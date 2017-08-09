import React from "react";

const Contact = () =>
	<div className="row">
		<div className="col-12 col-md-8 offset-md-2">
			
			<form>
			
				<div className="form-group">
					<label htmlFor="nameInput">Name</label>
					<input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
				</div>

				<div className="form-group">
					<label htmlFor="mailInput">Email</label>
					<input type="mail" className="form-control" id="mailInput" placeholder="Enter your mail" />
				</div>

				<div className="form-group">
					<label htmlFor="commentsArea">Comments</label>
					<textarea className="form-control" id="commentsArea" rows="5"></textarea>
				</div>

				<div className="row">
					<div className="col-6 text-center">
						<button className="btn btn-success">Submit</button>
					</div>
					<div className="col-6 text-center">
						<button className="btn btn-danger">Reset</button>
					</div>
				</div>
			
			</form>

		</div>
	</div>;

export default Contact;