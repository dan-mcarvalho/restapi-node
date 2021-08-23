create table users(
	id serial primary key,
	username varchar(50) not null,
	email varchar(100) UNIQUE not null, 
	password varchar(50) not null
	);

create table tasks(
	id serial primary key,
	user_id int not null,
	title varchar(50) not null,
	description varchar(255) not null,
	foreign key(user_id) references users(id)
);
