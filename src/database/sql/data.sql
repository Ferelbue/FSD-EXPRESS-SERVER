USE fsd_library_online;


--ROLES crear roles (3 roles)
insert into roles (id, name) values (1, 'user');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'super-admin');


--USUARIOS crear usuarios en el sistema (10 usuarios)
insert into users (id, name, email, password, role_id) values (1, 'user', 'user@user.com', '$08$9X7A0PvGLimQKJLfAWQai.WiLutOMfc2nsi3BdCzS854AZr83Wob6', 1);
insert into users (id, name, email, password, role_id) values (2, 'admin', 'admin@admin.com', '$08$9X7A0PvGLimQKJLfAWQai.WiLutOMfc2nsi3BdCzS854AZr83Wob6', 2);
insert into users (id, name, email, password, role_id) values (3, 'super-admin', 'super-admin@super-admin.com', '$08$9X7A0PvGLimQKJLfAWQai.WiLutOMfc2nsi3BdCzS854AZr83Wob6', 3);


-- hay que hacer cuatro  bloques como estos en total para el proyecto


