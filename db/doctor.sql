PGDMP     ;                    z            doctor    14.1    14.1 '    #           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            $           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            %           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            &           1262    16434    doctor    DATABASE     Q   CREATE DATABASE doctor WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE doctor;
                postgres    false            �            1259    16517    address    TABLE     �   CREATE TABLE public.address (
    id integer NOT NULL,
    street_name character varying(60),
    surburb character varying(50),
    postal_code character(30),
    user_id integer
);
    DROP TABLE public.address;
       public         heap    postgres    false            �            1259    16520    address_id_seq    SEQUENCE     �   CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.address_id_seq;
       public          postgres    false    209            '           0    0    address_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
          public          postgres    false    210            �            1259    16521    appointment    TABLE     �   CREATE TABLE public.appointment (
    id integer NOT NULL,
    dr_id integer,
    pet_id integer,
    appoint_date date,
    user_id integer,
    time_slot character varying(20),
    is_available boolean DEFAULT true
);
    DROP TABLE public.appointment;
       public         heap    postgres    false            �            1259    16524    appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          postgres    false    211            (           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          postgres    false    212            �            1259    16525    doctor    TABLE     J  CREATE TABLE public.doctor (
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
       public         heap    postgres    false            �            1259    16529    doctor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.doctor_id_seq;
       public          postgres    false    213            )           0    0    doctor_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;
          public          postgres    false    214            �            1259    16530    pets    TABLE     �   CREATE TABLE public.pets (
    id integer NOT NULL,
    pet_name character varying(50),
    fee integer,
    department character varying(50)
);
    DROP TABLE public.pets;
       public         heap    postgres    false            �            1259    16533    pets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.pets_id_seq;
       public          postgres    false    215            *           0    0    pets_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.pets_id_seq OWNED BY public.pets.id;
          public          postgres    false    216            �            1259    16534    user    TABLE       CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200),
    is_active boolean DEFAULT true
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16538    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    217            +           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    218            z           2604    16539 
   address id    DEFAULT     h   ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
 9   ALTER TABLE public.address ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            {           2604    16540    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            ~           2604    16541 	   doctor id    DEFAULT     f   ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);
 8   ALTER TABLE public.doctor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213                       2604    16542    pets id    DEFAULT     b   ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);
 6   ALTER TABLE public.pets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    16543    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217                      0    16517    address 
   TABLE DATA           Q   COPY public.address (id, street_name, surburb, postal_code, user_id) FROM stdin;
    public          postgres    false    209   C)                 0    16521    appointment 
   TABLE DATA           h   COPY public.appointment (id, dr_id, pet_id, appoint_date, user_id, time_slot, is_available) FROM stdin;
    public          postgres    false    211   `)                 0    16525    doctor 
   TABLE DATA           s   COPY public.doctor (id, dr_name, occupation, experience, company, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    213   �)                 0    16530    pets 
   TABLE DATA           =   COPY public.pets (id, pet_name, fee, department) FROM stdin;
    public          postgres    false    215   �*                 0    16534    user 
   TABLE DATA           ^   COPY public."user" (id, firstname, lastname, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    217   �+       ,           0    0    address_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.address_id_seq', 1, false);
          public          postgres    false    210            -           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 3, true);
          public          postgres    false    212            .           0    0    doctor_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.doctor_id_seq', 8, true);
          public          postgres    false    214            /           0    0    pets_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.pets_id_seq', 16, true);
          public          postgres    false    216            0           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 8, true);
          public          postgres    false    218            �           2606    16545    address address_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pkey;
       public            postgres    false    209            �           2606    16547    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            postgres    false    211            �           2606    16549    doctor doctor_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.doctor DROP CONSTRAINT doctor_pkey;
       public            postgres    false    213            �           2606    16551    pets pets_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.pets DROP CONSTRAINT pets_pkey;
       public            postgres    false    215            �           2606    16553    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    217                  x������ � �         B   x�3�4���4202�50�54�u�8K��J(�*��9A
�F�F@I]�TW� ��         �   x����N�@���,X���0�ڔF�M��Xc��ʕaFaB�O�&�.L���|9�e�?/+��0T�5E�?U��@��F1�濗��P��@�P�<)*;����V�
�"G�d=r��k�,L�!5}�'W���O�����M�{�/ξ�>��<�X�;b�3���xz��������|E�ĥ;W����{�~bT�crs��K��Eދ�+g���0�U�=0�2_J���	U��;;�n�.�<�!�         �   x�}��n�@���S��w��i!
��T4�Y�p������
���O3��sJ7%�z�R�oN%P
E��%�)M�Ƃb�ڶi�������&i����N�c��X�/Ń�0�Lz����g� oD��|�Vr~SĹ�X�H^m-w�%mO/����|Ũ��
_��K���c{i��xcT�y|�����ݰ(�?4h��         �  x�u�ɒ�@���sxF��[ۈ"��f̥XD��B�����	�32��?���)�g��,�P��H����\���DU��@;�A��p^�<�zXe~ȯŷ�1��;�in�2��$Ǩ�Pd�rd���w�ng��r6�-t�:Yt����/��w,(���ݔ	�T�=b�b����n����/�=�^-�mEZZ~G= ��39~G2B�н�k*y�y�Cj�KG���j)9�1��<֭��f-`��I$t|��K��9,yGAg���O&�N5�h��vd牻Z���V��<v�HZ��i3�HO>�C��f�8<d��������0�Y�;��T�bMsh�8=��Zb�˒k�������إk��н�{{r�h�@�s�M��s%�sY�����l�����D�_��Y"����b\W������Ǡ����ATᱎ`�V�q�[�4�3�~3B�:     