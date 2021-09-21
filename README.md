# NEST REST API With Sequelize and MySQL


`Setup MySQL Container`

```
 docker run --name mysql2 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=test -d -p 3306:3306 mysql:latest
```

`Generate Controller`

```
nest g controller users
```