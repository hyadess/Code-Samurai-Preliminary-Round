--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5 (Ubuntu 15.5-1.pgdg22.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg22.04+1)

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
-- Name: stations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stations (
    station_id integer NOT NULL,
    station_name character varying(50),
    longitude double precision,
    latitude double precision
);


ALTER TABLE public.stations OWNER TO postgres;

--
-- Name: trains; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trains (
    train_id integer NOT NULL,
    train_name character varying(50),
    capacity integer
);


ALTER TABLE public.trains OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name character varying(50),
    balance integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: stations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stations (station_id, station_name, longitude, latitude) FROM stdin;
\.


--
-- Data for Name: trains; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trains (train_id, train_name, capacity) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, user_name, balance) FROM stdin;
\.


--
-- Name: stations Stations_primary_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stations
    ADD CONSTRAINT "Stations_primary_key" PRIMARY KEY (station_id);


--
-- Name: trains Trains_primary_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trains
    ADD CONSTRAINT "Trains_primary_key" PRIMARY KEY (train_id);


--
-- Name: users Users_primary_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "Users_primary_key" PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

