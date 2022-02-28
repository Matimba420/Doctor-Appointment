PGDMP         ;                z            doctor    14.1    14.1 .    -           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            .           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            /           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            0           1262    16434    doctor    DATABASE     Q   CREATE DATABASE doctor WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE doctor;
                postgres    false            �            1259    16556    address    TABLE     �   CREATE TABLE public.address (
    id integer NOT NULL,
    street_name character varying(60),
    surburb character varying(50),
    postal_code character(30),
    dr_id integer
);
    DROP TABLE public.address;
       public         heap    postgres    false            �            1259    16559    address_id_seq    SEQUENCE     �   CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.address_id_seq;
       public          postgres    false    209            1           0    0    address_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
          public          postgres    false    210            �            1259    16599    admin    TABLE       CREATE TABLE public.admin (
    id integer NOT NULL,
    admin_name character varying(50),
    admin_surname character varying(50),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200),
    is_active boolean DEFAULT true
);
    DROP TABLE public.admin;
       public         heap    postgres    false            �            1259    16598    admin_id_seq    SEQUENCE     �   CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.admin_id_seq;
       public          postgres    false    220            2           0    0    admin_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;
          public          postgres    false    219            �            1259    16560    appointment    TABLE     �   CREATE TABLE public.appointment (
    id integer NOT NULL,
    dr_id integer,
    pet_id integer,
    appoint_date date,
    user_id integer,
    time_slot character varying(20),
    is_available boolean
);
    DROP TABLE public.appointment;
       public         heap    postgres    false            �            1259    16563    appointment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          postgres    false    211            3           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          postgres    false    212            �            1259    16564    doctor    TABLE     n  CREATE TABLE public.doctor (
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
       public         heap    postgres    false            �            1259    16570    doctor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.doctor_id_seq;
       public          postgres    false    213            4           0    0    doctor_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;
          public          postgres    false    214            �            1259    16571    pets    TABLE     �   CREATE TABLE public.pets (
    id integer NOT NULL,
    pet_name character varying(50),
    fee integer,
    department character varying(50),
    images character varying(200)
);
    DROP TABLE public.pets;
       public         heap    postgres    false            �            1259    16574    pets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.pets_id_seq;
       public          postgres    false    215            5           0    0    pets_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.pets_id_seq OWNED BY public.pets.id;
          public          postgres    false    216            �            1259    16575    user    TABLE       CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    cell_no character varying(15),
    email character varying(100),
    password character varying(200),
    is_active boolean DEFAULT true
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16579    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    217            6           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    218                       2604    16580 
   address id    DEFAULT     h   ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
 9   ALTER TABLE public.address ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    16602    admin id    DEFAULT     d   ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);
 7   ALTER TABLE public.admin ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    16581    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    16582 	   doctor id    DEFAULT     f   ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);
 8   ALTER TABLE public.doctor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    16583    pets id    DEFAULT     b   ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);
 6   ALTER TABLE public.pets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    16584    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217                      0    16556    address 
   TABLE DATA           O   COPY public.address (id, street_name, surburb, postal_code, dr_id) FROM stdin;
    public          postgres    false    209   N1       *          0    16599    admin 
   TABLE DATA           c   COPY public.admin (id, admin_name, admin_surname, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    220   k1       !          0    16560    appointment 
   TABLE DATA           h   COPY public.appointment (id, dr_id, pet_id, appoint_date, user_id, time_slot, is_available) FROM stdin;
    public          postgres    false    211   -2       #          0    16564    doctor 
   TABLE DATA           |   COPY public.doctor (id, dr_name, occupation, experience, company, cell_no, email, password, is_active, picture) FROM stdin;
    public          postgres    false    213   x2       %          0    16571    pets 
   TABLE DATA           E   COPY public.pets (id, pet_name, fee, department, images) FROM stdin;
    public          postgres    false    215   �4       '          0    16575    user 
   TABLE DATA           ^   COPY public."user" (id, firstname, lastname, cell_no, email, password, is_active) FROM stdin;
    public          postgres    false    217   I6       7           0    0    address_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.address_id_seq', 1, false);
          public          postgres    false    210            8           0    0    admin_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.admin_id_seq', 5, true);
          public          postgres    false    219            9           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 6, true);
          public          postgres    false    212            :           0    0    doctor_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.doctor_id_seq', 10, true);
          public          postgres    false    214            ;           0    0    pets_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.pets_id_seq', 17, true);
          public          postgres    false    216            <           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 10, true);
          public          postgres    false    218            �           2606    16586    address address_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pkey;
       public            postgres    false    209            �           2606    16604    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            postgres    false    220            �           2606    16588    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            postgres    false    211            �           2606    16590    doctor doctor_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.doctor DROP CONSTRAINT doctor_pkey;
       public            postgres    false    213            �           2606    16592    pets pets_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.pets DROP CONSTRAINT pets_pkey;
       public            postgres    false    215            �           2606    16594    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    217                  x������ � �      *   �   x��ͻ�0 й�
��[䵙PKEM\E�j�}�]��p q=�.�C�jﲫU7�fN,�q=T���s+�9�L@��k+����EJE$�~�A��BU�C�bo�oVV�ㅎK2�艭�B�M�)yg ym��;1�N{� �M�6��]zz`T�#� �8C�      !   ;   x�Uʱ� �ڿ�#�}�,��H:�>C0L;��@A�d�S+�
�?|턷E���      #   4  x���As�0���W��U[@OeH2iH�4�p����(Ȓ+m��weHjf�L.���~�{�"9�g7
��K.��<�+T^[�l³�|�?KgS���I�g�����HJo�.+Ц']��#�q�`�B�×4�=��H�R)~ϦKL/�V�4;�d��A�~Q�-0Xx-�2���e�*z�Mjg�g�S�%�TǖB`+0�&,���zO���EƉ�'��;]<ٵ��BGc��[`Y.F�
�*����.��k����X�$:O��:
d+Nc�g��^��[��r����Z�B�j@�	�2�[�/UC6h�Je�2.���c��3t���EN����n/y��:OYi�A-TF��!��[Z�vB�� ��"��ne��ɔ��5s��c����X�Eĉ�F�8b�Os|�7�����g�o4o�5�!�R�u��^��<����C��O$�����n]��^�U��qX>(�e~��������M�T����&�2�f���d�:�;���=���+^���/��Z�I���6�b�#�[�J"�TIi���hۘ���t� �xm      %   }  x���]r�0��/��j��hŪ�LǪ�c�/!D�(���LW_쳰��s�=�!Q����1��J	���b�DrR�I��zC�x��@coR��%��gp.3˱!����k�mx�����<lq�h��V��\Z�5�~�L^��l%�x}���0��
�<k.lN��0�$Ώ��J���aS��O1�kp���Ҝq��?]م�ܮ�Y��ۧ�҈0̤���%�y�*��|�)��Q��Z�����U�Ot4��0�9�5]-��JQF0�2սv���p�;����j_��oF�5B��m�;}��BȊ�g�XI��'�I�����$	oW�5�R;��H�x�&�/iJ����*p�����|,��X�Y      '   �  x�e�M��@E���p�G�D�4�A(�@(A��������}�9�y,7��@�ox(���
򯴌ȅ�i	�0����
�)m+�U����@軔���vŤ�/\~�ҮW�B�<�5�D��m2�0��1hqK
8YTdI�����53�VH��� �U^�WZ���ެ��������3|Lt8�q�a�q�'2X��hT���A�o_��8���=k�����IP�x��.��`��sb,D�!B�U{���P�y������䔎���O�%�j��"KT�N�"8���S�̔U�n����y�_?�ñľKZ>�*q ���O)���p�=ӳl9̨&"{8H�_p��-�3���6�W�k�o�:���k����\�V$p:�9'�X��hN���|�0\g��;�_;�0���/� �"     