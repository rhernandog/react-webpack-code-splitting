import React from "react";
import { Link } from "react-router-dom";

const CreateLink = (props) => {
	const {path, to, text} = props;
	return(
		<Link
			className="btn btn-primary"
			replace={(()=>to===path)()}
			to={to} style={{marginRight:"5px"}}
		>
			{text}
		</Link>
	);
};

const Header = (props) => {
	const { pathname } = props.location;
	return(
		<div className="col-12">
			<h1 className="text-center">React, React Router v4, Webpack Code Splitting</h1>
			<CreateLink path={pathname} to="/" text="Home" />
			<CreateLink path={pathname} to="/services" text="services" />
			<CreateLink path={pathname} to="/images" text="Images" />
			<CreateLink path={pathname} to="/contact" text="contact" />
			<hr/>
		</div>
	);
};

export default Header;





/*
<Link
	className="btn btn-secondary"
	replace={(() => "/" === pathname)()}
	style={{marginRight:"5px"}} to="/"
>
	Home
</Link>
<Link
	className="btn btn-secondary"
	replace={(()=>"/services" === pathname)()}
	style={{marginRight:"5px"}} to="/services"
>
	Services
</Link>
<Link
	className="btn btn-secondary"
	replace={(() => "/images" === pathname)()}
	style={{marginRight:"5px"}} to="/images"
>
	Images
</Link>
<Link
	className="btn btn-secondary"
	replace={(() => "/contact" === pathname)()}
	style={{marginRight:"5px"}} to="/contact"
>
	Contact
</Link>
*/