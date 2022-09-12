CREATE TABLE people (
     id bigserial PRIMARY KEY,
     avatar VARCHAR (100) NOT NULL,
     city VARCHAR (255) NULL,
     company VARCHAR (100) NULL,
     created_date VARCHAR (100) NOT NULL,
     is_contact boolean,
     is_favorite boolean,
     name VARCHAR (150) NOT NULL,
     position VARCHAR (255) NOT NULL,
     social_networks VARCHAR (255) NOT NULL
);

INSERT INTO people(
	id,
	avatar,
	city,
	company,
	created_date,
	is_contact,
	is_favorite,
	name,
	position,
	social_networks
)
VALUES(
	1,
	'img/img1.jpg',
	'Ukraine, Kyiv',
	'Logical',
	'1661312418872',
	false,
	false,
	'Valentina Delaney',
	'Web Designer',
	'{"facebook":"https://www.facebook.com/","instagram":"https://www.instagram.com/","twitter":"https://twitter.com/","youtube":"https://www.youtube.com/"}'
	);

INSERT INTO people(
	id,
	avatar,
	city,
	company,
	created_date,
	is_contact,
	is_favorite,
	name,
	position,
	social_networks
)
VALUES(
	2,
	'img/img2.jpg',
	'Ukraine, Kyiv',
	'Logical',
	'1661312418872',
	false,
	false,
	'Valentina Delaney2',
	'Web Designer2',
	'{"facebook":"https://www.facebook.com/","instagram":"https://www.instagram.com/","twitter":"https://twitter.com/","youtube":"https://www.youtube.com/"}'
	);

INSERT INTO people(
	id,
	avatar,
	city,
	company,
	created_date,
	is_contact,
	is_favorite,
	name,
	position,
	social_networks
)
VALUES(
	3,
	'img/img2.jpg',
	'Ukraine, Kyiv',
	'Logical',
	'1661312418872',
	false,
	false,
	'Valentina Delaney2',
	'Web Designer2',
	'{"facebook":"https://www.facebook.com/","instagram":"https://www.instagram.com/","twitter":"https://twitter.com/","youtube":"https://www.youtube.com/"}'
	);


=========== Drop table ==============
