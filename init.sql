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
-- Name: stops; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stops (
    stop_id integer NOT NULL,
    train_id integer,
    station_id integer,
    arrival_time character varying(50),
    departure_time character varying(50),
    fare integer
);


ALTER TABLE public.stops OWNER TO postgres;

--
-- Name: stops_stop_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stops_stop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stops_stop_id_seq OWNER TO postgres;

--
-- Name: stops_stop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stops_stop_id_seq OWNED BY public.stops.stop_id;


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
-- Name: stops stop_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops ALTER COLUMN stop_id SET DEFAULT nextval('public.stops_stop_id_seq'::regclass);


--
-- Name: stations Stations_primary_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stations
    ADD CONSTRAINT "Stations_primary_key" PRIMARY KEY (station_id);


--
-- Name: stops Stops_primary_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops
    ADD CONSTRAINT "Stops_primary_key" PRIMARY KEY (stop_id);


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
-- Name: stops Stops_station_id_fKey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops
    ADD CONSTRAINT "Stops_station_id_fKey" FOREIGN KEY (station_id) REFERENCES public.stations(station_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: stops Stops_train_id_fKey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops
    ADD CONSTRAINT "Stops_train_id_fKey" FOREIGN KEY (train_id) REFERENCES public.trains(train_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

