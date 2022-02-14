PGDMP         7                z            Doctor    14.1    14.1 '    #           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            $           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            %           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            &           1262    16492    Doctor    DATABASE     ]   CREATE DATABASE "Doctor" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE "Doctor";
                postgres    false            �            1259    16761    address    TABLE     �   CREATE TABLE public.address (
    id integer NOT NULL,
    street_name character varying(60),
    surburb character varying(50),
    postal_code character(30),
    user_id integer
);
    DROP TABLE public.address;
       public         heap    postgres    false            �            1259    16760    address_id_seq    SEQUENCE     �   CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.address_id_seq;
       public          postgres    false    212            '           0    0    address_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
          public          postgres    false    211            �            1259    16782    appointment    TABLE     �   CREATE TABLE public.appointment (
    id integer NOT NULL,
    dr_id integer,
    pet_id integer,
    appoint_date date,
    user_id integer,
    time_slot character varying(20),
    is_available character varying(5)
);
    DROP TABLE public.appointment;
       public         heap    postgres    false            �            1259    16781    appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          postgres    false    218            (           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          postgres    false    217            �            1259    16768    doctor    TABLE     J  CREATE TABLE public.doctor (
    id integer NOT NULL,
    dr_name character varying(50),
    occupation character varying(50),
    experience integer,
    company character varying(60),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200),
    is_active boolean DEFAULT true
);
    DROP TABLE public.doctor;
       public         heap    postgres    false            �            1259    16767    doctor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.doctor_id_seq;
       public          postgres    false    214            )           0    0    doctor_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;
          public          postgres    false    213            �            1259    16775    pets    TABLE     �   CREATE TABLE public.pets (
    id integer NOT NULL,
    pet_name character varying(50),
    fee integer,
    department character varying(50)
);
    DROP TABLE public.pets;
       public         heap    postgres    false            �            1259    16774    pets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.pets_id_seq;
       public          postgres    false    216            *           0    0    pets_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.pets_id_seq OWNED BY public.pets.id;
          public          postgres    false    215            �            1259    16754    user    TABLE       CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200),
    is_active boolean DEFAULT true
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16753    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    210            +           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    209            }           2604    16764 
   address id    DEFAULT     h   ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
 9   ALTER TABLE public.address ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �           2604    16785    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            ~           2604    16771 	   doctor id    DEFAULT     f   ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);
 8   ALTER TABLE public.doctor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            �           2604    16778    pets id    DEFAULT     b   ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);
 6   ALTER TABLE public.pets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            {           2604    16757    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210                      0    16761    address 
   TABLE DATA           Q   COPY public.address (id, street_name, surburb, postal_code, user_id) FROM stdin;
    public          postgres    false    212   z)                  0    16782    appointment 
   TABLE DATA           h   COPY public.appointment (id, dr_id, pet_id, appoint_date, user_id, time_slot, is_available) FROM stdin;
    public          postgres    false    218   �)                 0    16768    doctor 
   TABLE DATA           s   COPY public.doctor (id, dr_name, occupation, experience, company, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    214   �)                 0    16775    pets 
   TABLE DATA           =   COPY public.pets (id, pet_name, fee, department) FROM stdin;
    public          postgres    false    216   *                 0    16754    user 
   TABLE DATA           ^   COPY public."user" (id, firstname, lastname, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    210   V+       ,           0    0    address_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.address_id_seq', 1, false);
          public          postgres    false    211            -           0    0    appointment_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.appointment_id_seq', 1, false);
          public          postgres    false    217            .           0    0    doctor_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.doctor_id_seq', 4, true);
          public          postgres    false    213            /           0    0    pets_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.pets_id_seq', 16, true);
          public          postgres    false    215            0           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 1, true);
          public          postgres    false    209            �           2606    16766    address address_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pkey;
       public            postgres    false    212            �           2606    16787    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            postgres    false    218            �           2606    16773    doctor doctor_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.doctor DROP CONSTRAINT doctor_pkey;
       public            postgres    false    214            �           2606    16780    pets pets_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.pets DROP CONSTRAINT pets_pkey;
       public            postgres    false    216            �           2606    16759    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    210                  x������ � �             x������ � �         �   x��б�0���<i)�I�E��\ zRZ���[0ALX�����K(:/�j'z��`��;�CݑQ)����rM�J�"�a�q�B�)��][E�/m�2001�ǛSr�>�!k�x�o\�#��#~�7�ۿ~2�.Tf����"O���X�S1=L�h���T�aܲ������܋�� �Msp         �   x�}��n�@���S��w��i!
��T4�Y�p������
���O3��sJ7%�z�R�oN%P
E��%�)M�Ƃb�ڶi�������&i����N�c��X�/Ń�0�Lz����g� oD��|�Vr~SĹ�X�H^m-w�%mO/����|Ũ��
_��K���c{i��xcT�y|�����ݰ(�?4h��         :   x�3���/N-��t�L�/��40426153���L�8��&f��%��rB�8K�b���� ���     