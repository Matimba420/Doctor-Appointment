PGDMP         7                z            Doctor    14.1    14.1 '    #           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
    dr_id integer
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
    is_available boolean
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
          public          postgres    false    217            �            1259    16768    doctor    TABLE     n  CREATE TABLE public.doctor (
    id integer NOT NULL,
    dr_name character varying(50),
    occupation character varying(50),
    experience integer,
    company character varying(60),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200),
    is_active boolean DEFAULT true,
    picture character varying(200)
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
    department character varying(50),
    images character varying(200)
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
       public          postgres    false    212    211    212            �           2604    16785    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            ~           2604    16771 	   doctor id    DEFAULT     f   ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);
 8   ALTER TABLE public.doctor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    16778    pets id    DEFAULT     b   ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);
 6   ALTER TABLE public.pets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            {           2604    16757    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210                      0    16761    address 
   TABLE DATA           O   COPY public.address (id, street_name, surburb, postal_code, dr_id) FROM stdin;
    public          postgres    false    212   �)                  0    16782    appointment 
   TABLE DATA           h   COPY public.appointment (id, dr_id, pet_id, appoint_date, user_id, time_slot, is_available) FROM stdin;
    public          postgres    false    218   �)                 0    16768    doctor 
   TABLE DATA           |   COPY public.doctor (id, dr_name, occupation, experience, company, cell_no, email, password, is_active, picture) FROM stdin;
    public          postgres    false    214   **                 0    16775    pets 
   TABLE DATA           E   COPY public.pets (id, pet_name, fee, department, images) FROM stdin;
    public          postgres    false    216   n,                 0    16754    user 
   TABLE DATA           ^   COPY public."user" (id, firstname, lastname, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    210   �-       ,           0    0    address_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.address_id_seq', 1, false);
          public          postgres    false    211            -           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 1, true);
          public          postgres    false    217            .           0    0    doctor_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.doctor_id_seq', 6, true);
          public          postgres    false    213            /           0    0    pets_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.pets_id_seq', 17, true);
          public          postgres    false    215            0           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
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
       public            postgres    false    210                  x������ � �          =   x�3�4�4�4202�50�54r�t��$g	�1HM�X�!D�!�zӸb���� T         4  x���As�0���W��U[@OeH2iH�4�p����(Ȓ+m��weHjf�L.���~�{�"9�g7
��K.��<�+T^[�l³�|�?KgS���I�g�����HJo�.+Ц']��#�q�`�B�×4�=��H�R)~ϦKL/�V�4;�d��A�~Q�-0Xx-�2���e�*z�Mjg�g�S�%�TǖB`+0�&,���zO���EƉ�'��;]<ٵ��BGc��[`Y.F�
�*����.��k����X�$:O��:
d+Nc�g��^��[��r����Z�B�j@�	�2�[�/UC6h�Je�2.���c��3t���EN����n/y��:OYi�A-TF��!��[Z�vB�� ��"��ne��ɔ��5s��c����X�Eĉ�F�8b�Os|�7�����g�o4o�5�!�R�u��^��<����C��O$�����n]��^�U��qX>(�e~��������M�T����&�2�f���d�:�;���=���+^���/��Z�I���6�b�#�[�J"�TIi���hۘ���t� �xm         }  x���]r�0��/��j��hŪ�LǪ�c�/!D�(���LW_쳰��s�=�!Q����1��J	���b�DrR�I��zC�x��@coR��%��gp.3˱!����k�mx�����<lq�h��V��\Z�5�~�L^��l%�x}���0��
�<k.lN��0�$Ώ��J���aS��O1�kp���Ҝq��?]م�ܮ�Y��ۧ�҈0̤���%�y�*��|�)��Q��Z�����U�Ot4��0�9�5]-��JQF0�2սv���p�;����j_��oF�5B��m�;}��BȊ�g�XI��'�I�����$	oW�5�R;��H�x�&�/iJ����*p�����|,��X�Y         �   x�3���/N-��t�L�/��40426153���L�8��&f��%��rB�8K��8���]<8]<����9�z8��ԫ%��%��z{�8�G�yZ����������'�T�z��g[��f�Xm����� �,�     