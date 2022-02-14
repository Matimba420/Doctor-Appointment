CREATE TABLE public.user
(
    id SERIAL PRIMARY KEY,
    firstname character varying(50),
    lastname character varying(50),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200)
);

CREATE TABLE public.address
(
   id SERIAL PRIMARY KEY, 
   street_name character varying(60),
   surburb character varying(50),
   postal_code  character(30),
   user_id integer
);

CREATE TABLE public.doctor
(
    id SERIAL PRIMARY KEY,
    dr_name character varying(50),
    occupation character varying(50),
    experience integer,
    company character varying(60),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200)
);


CREATE TABLE public.pets
(
    id SERIAL PRIMARY KEY,
    pet_name character varying(50),
    fee integer,
    department character varying(50)
);


CREATE TABLE public.appointment
(
    id SERIAL PRIMARY KEY,
    dr_id integer,
    pet_id integer,
    appoint_date date,
    user_id integer,
    time_slot character varying(20),
    is_available character varying(5)
);




/*CREATE TABLE public.user
(
    id SERIAL PRIMARY KEY,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    cell_no character varying(15),
    email character varying(100) UNIQUE NOT NULL,
    password character varying(200)
);

CREATE TABLE public.address
(
   id SERIAL PRIMARY KEY, 
   street_name character varying(60) NOT NULL,
   surburb character varying(50) NOT NULL,
   postal_code  character(30),
   user_id integer NOT NULL
);

CREATE TABLE public.doctor
(
    id SERIAL PRIMARY KEY,
    dr_name character varying(50) NOT NULL,
    occupation character varying(50) NOT NULL,
    experience integer NOT NULL,
    company character varying(60),
    cell_no character varying(15),
    email character varying(100) UNIQUE NOT NULL,
    password character varying(200)
);


CREATE TABLE public.pets
(
    id SERIAL PRIMARY KEY,
    pet_name character varying(50) NOT NULL,
    fee integer NOT NULL,
    department character varying(50) NOT NULL
);


CREATE TABLE public.appointment
(
    id SERIAL PRIMARY KEY,
    dr_id integer NOT NULL,
    pet_id integer NOT NULL,
    appoint_date date NOT NULL,
    user_id integer,
    time_slot character varying(20) NOT NULL,
    is_available boolean DEFAULT true 

);


ALTER TABLE public.address
ADD FOREIGN KEY (user_id)
REFERENCES public.user (id)
ON DELETE CASCADE;

ALTER TABLE public.appointment
ADD FOREIGN KEY (user_id)
REFERENCES public.user (id)
ON DELETE CASCADE;

ALTER TABLE public.appointment
ADD FOREIGN KEY (dr_id)
REFERENCES public.doctor (id)
ON DELETE CASCADE;

ALTER TABLE public.appointment
ADD FOREIGN KEY (pet_id)
REFERENCES public.pets (id)
ON DELETE CASCADE;

ALTER TABLE public.user
ADD is_active boolean DEFAULT true;

ALTER TABLE public.doctor
ADD is_active boolean DEFAULT true;

ALTER TABLE doctor
ADD COLUMN picture character varying(200);

INSERT INTO public.pets(
	id, pet_name, fee, department)
	VALUES (1, 'Cat', 750, 'Companion Veterinarian),
	(2, 'Dog', 100, 'Companion Veterinarian'),
    (3, 'Rabit', 500, 'Companion Veterinarian'),
	(4, 'Farret', 450, 'Companion Veterinarian'),
    (5, 'Frog', 150, 'Exotic Veterinarian'),
	(6, 'Snake', 2500, 'Exotic Veterinarian'),
	(7, 'Lizard', 150, 'Exotic Veterinarian'),
	(8, 'Bird', 250, 'Exotic Veterinarian'),
	(9, 'Cameleon', 200, 'Exotic Veterinarian'),
	(10, 'Crocodile', 2500, 'Exotic Veterinarian'),
    (11, 'Cattle', 2750, 'Livestock Veterinarian'),
	(12, 'Sheep', 600, 'Livestock Veterinarian'),
	(13, 'Pig', 750, 'Livestock Veterinarian'),
	(14, 'Goat', 500, 'Livestock Veterinarian'),
	(15, 'Horse', 3000, 'Livestock Veterinarian');


    INSERT INTO public.doctor(
	 id, dr_name, occupation, experience, company, cell_no, email, password, picture)
	VALUES (5,'Dr Letswalo', 'Exotic Veterinarian', 12, 'DA Veteranian Clinic', '0123210245', 'drletswalo@gmail.com', '481216', 'https://i.ibb.co/c6ZKCgt/Friendly-and-attractive-of-a-african-american-woman-practitioner-standing-in-a-glass-hall-office-of.jpg'),
	(2,'Dr Ali','Exotic Veterinarian',6, 'DA Veterinary Clinic','0123456789','drali@gmail.com','246810','https://i.ibb.co/m5CK7yR/A-Japanese-doctor-working-at-her-computer-in-a-Tokyo-Hospital-looking-over-a-patients-x-rays-in-orde.jpg'),
	(1,'Dr Khan','Companion Veterinarian',7,'DA Veterinary Clinic','0123456789','drkhan@gmail.com','123456','https://i.ibb.co/31VxS11/Doctor-man-sitting-at-the-desk-at-his-working-place-and-smiling-at-camera-Perfect-medical-service-in.jpg'),
	(3,'Dr Adel','Livestock Veterinarian',5, 'DA Veterinary Clinic','0123456789','dradel@gmail.com','654321','https://i.ibb.co/26txF1m/Portrait-of-female-African-American-doctor-standing-in-her-office-at-clini.jpg' ),
	(4,'Dr Johnson','Companion Veterinarian', 8,'DA Veteranian Clinic','0609696081','drjohn@gmail.com','369121','https://i.ibb.co/MsSLczS/Portrait-of-adult-female-doctor-sitting-at-desk-in-office-clini.jpg');
    
    
 ===============Query===============   
    
    select dr_name, cell_no,email, occupation,fee, experience, pet_name, doctor.id
from pets, doctor
where department=occupation
and is_active='true'
and pets.id=(select pets.id where pet_name = 'Lizard');*/
