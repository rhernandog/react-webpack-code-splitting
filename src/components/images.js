import React from "react";

import img1 from "../img/image-1.jpg";
import img2 from "../img/image-2.jpg";
import img3 from "../img/image-3.jpg";

const Images = () =>
	<div className="col-12">
		<h3 className="text-center">Images</h3>
		<div className="row">
			
			<div className="col-12 col-md-4">
				<div className="card">
					<div className="card-block">
						<img className="img-fluid rounded" src={img1} alt="" />
					</div>
				</div>
			</div>
			
			<div className="col-12 col-md-4">
				<div className="card">
					<div className="card-block">
						<img className="img-fluid rounded" src={img2} alt="" />
					</div>
				</div>
			</div>
			
			<div className="col-12 col-md-4">
				<div className="card">
					<div className="card-block">
						<img className="img-fluid rounded" src={img3} alt="" />
					</div>
				</div>
			</div>
		
		</div>
	</div>;

export default Images;