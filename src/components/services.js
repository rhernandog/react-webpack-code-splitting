import React from "react";
// get images
import serviceImg1 from "../img/services-1.jpg";
import serviceImg2 from "../img/services-2.jpg";
import serviceImg3 from "../img/services-3.jpg";


const servicesContent = [
	{
		"title": "Super Trekking Adventure",
		"image": serviceImg1,
		"content": [
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ut, odio. Totam nemo quos non sed maiores? Quod fuga dolore ea! Placeat beatae qui, molestiae officia ut dicta eveniet sint.","Enim aliquid tempora, illum veniam numquam eaque soluta inventore, rerum, totam reiciendis alias sapiente facere nobis quos aperiam? Harum, vero.Mollitia repellat, qui quidem porro inventore, ex repudiandae sunt reprehenderit."
		]
	}, // service 1
	{
		"title": "Mega Trekking Walkathon",
		"image": serviceImg2,
		"content": [
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nesciunt facere est rem sit eum dolorem aut dignissimos, itaque harum possimus distinctio fuga quaerat maiores culpa officia tenetur ducimus velit fugiat laudantium sunt blanditiis. Atque?"
		]
	}, // service 2
	{
		"title": "Once In A Lifetime Trekking",
		"image": serviceImg3,
		"content": [
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Rerum veritatis est ab accusamus, enim amet doloremque, omnis quaerat, aliquid perferendis, nostrum at tenetur tempora distinctio?","Repudiandae hic explicabo cumque earum officiis, laudantium incidunt quis dolorem, quia perferendis distinctio, repellat dicta nostrum rerum! Delectus quisquam dolores nemo, incidunt molestias reprehenderit at."
		]
	}
];


const renderService = (e,i) => 
	<div key={`service${i}`} className="row" style={{marginTop:"10px"}}>
		<div className="col-12 col-md-4">
			<img className="img-fluid img-thumbnail" src={e.image} alt="" />
		</div>
		<div className="col-12 col-md-8">
			<h3 className="text-center">{e.title}</h3>
			{e.content.map((text,i)=><p key={`text${i}`}>{text}</p>)}
		</div>
	</div>;


const Services = () =>
	<div className="col-12">
		<h3 className="text-center">Our Services</h3>
		<hr/>
		{servicesContent.map(renderService)}
	</div>;

export default Services;