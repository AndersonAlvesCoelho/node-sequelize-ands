CREATE EXTENSION IF NOT EXISTS "uuid-ossp"


CREATE TABLE profile_level (
	pl_uuid uuid PRIMARY key  DEFAULT gen_random_uuid(),
	pl_name varchar(200) NOT null,
	pl_cod varchar(200) NOT null,
	pl_created_at timestamptz NOT null default CURRENT_TIMESTAMP,
	pl_updated_at timestamptz NOT null default CURRENT_TIMESTAMP
);

CREATE TABLE users (
   	use_uuid uuid PRIMARY key  DEFAULT gen_random_uuid(),
   	use_name varchar(200) NOT null,
	use_email varchar(200) UNIQUE NOT null,
	use_password varchar(20) NOT null,
	pl_uuid uuid NOT null,
	use_created_at timestamptz NOT null default CURRENT_TIMESTAMP,
	use_updated_at timestamptz NOT null default CURRENT_TIMESTAMP,
	CONSTRAINT pl_uuid_profile_level FOREIGN KEY (pl_uuid) REFERENCES profile_level (pl_uuid)
);

CREATE TABLE cnpj_json (
	cj_uuid uuid PRIMARY key  DEFAULT gen_random_uuid(),
	cj_cnpj varchar(200) NOT null,
	cj_data varchar(200) NOT null,
	cj_created_at timestamptz NOT null default CURRENT_TIMESTAMP,
	cj_updated_at timestamptz NOT null default CURRENT_TIMESTAMP
);

CREATE TABLE cna_cnae (
	cna_uuid uuid PRIMARY key  DEFAULT gen_random_uuid(),
	cna_section char,
	cna_division int,
	cna_group varchar(5),
	cna_class varchar(8),
	cna_subclass varchar(10),
	cna_name varchar(200) not null,
	cna_created_at timestamptz NOT null default CURRENT_TIMESTAMP,
	cna_updated_at timestamptz NOT null default CURRENT_TIMESTAMP
);

