--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE guruprasad;
--
-- Name: guruprasad; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE guruprasad WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';




SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.category (
    id integer NOT NULL,
    category_name character varying(255) NOT NULL,
    description character varying
);


--
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- Name: message; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.message (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone_number text,
    message character varying NOT NULL,
    messaged_at timestamp without time zone DEFAULT now(),
    read boolean DEFAULT false
);


--
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contact_id_seq OWNED BY public.message.id;


--
-- Name: item; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.item (
    id integer NOT NULL,
    item_name character varying(255) NOT NULL,
    price double precision,
    active boolean DEFAULT true,
    category_id integer
);


--
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- Name: category id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- Name: item id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- Name: message id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);


--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.category (id, category_name, description) FROM stdin;
4	Beverages	\N
3	Supper	12pm to 7.30pm
1	Early Breakfast	6.30am to 12pm
2	Breakfast	7.30am to 6.30pm
\.


--
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.item (id, item_name, price, active, category_id) FROM stdin;
1	Idli	50	t	1
2	Vada	30	t	1
3	Buns	35	t	1
4	Uppittu	50	t	1
5	Ksheera	25	t	1
7	Poori	55	t	2
9	Kali Dosa	40	t	2
11	Plain Dosa	40	t	2
14	Poori Meal	115	t	3
15	Golibhaje	25	t	3
19	Lemon Tea	40	t	4
16	Coffee	30	t	4
18	Badam Milk	40	t	4
8	Masala Dosa	100	t	2
20	Black Tea	40	t	4
21	Cold Lemon Soda 	45	t	4
13	Parata Meal	110	t	3
6	Parota	60	t	2
17	Tea	30	t	4
10	Set Dosa	45	t	2
12	Meal	90	t	3
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.message (id, name, email, phone_number, message, messaged_at, read) FROM stdin;
30	testing	test@gamil.com	1234567890	t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum	2022-11-08 19:38:13.928906	f
31	vani	vani@gmail.com		On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.	2022-11-10 14:23:41.126648	f
34	Sihi	sihi@gmail.com		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v	2022-11-14 12:18:40.829278	f
\.


--
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.category_id_seq', 4, true);


--
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contact_id_seq', 34, true);


--
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.item_id_seq', 40, true);


--
-- Name: category category_category_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_category_name_key UNIQUE (category_name);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: message contact_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


--
-- Name: item item_item_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_item_name_key UNIQUE (item_name);


--
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- Name: item fk_category; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- PostgreSQL database dump complete
--

