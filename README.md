
# 🌐 Query API

API and CLIENT API for FiveM to externalize database responsibilities.


## FAQ

#### Is the project finished?

Definitely NOT, this is a first version of both the api and the client api.

#### What databases are supported?

Basically any one, just adapt, but the version in this repository is working with mariadb.


## API Documentation

#### Run a query on the database

```http
  POST /query
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `query` | `string` | **Required**. The query to be executed. |
| `params` | `Array<any>` | **Required**. The parameters for the query to be executed. |
| `resource` | `string` | **Required**. The resource that originalized the query. |

The return will be the one generated by the database.


## Usage/Examples

- Javascript:

![TS/JS Example](https://cdn.discordapp.com/attachments/990609554188419075/993935507090313317/code.png)

- Lua:

![Lua Example](https://cdn.discordapp.com/attachments/990609554188419075/993936187326738553/code2.png)


## Support

For support, call me on discord thiagoo#2695.


## Reference

 - [Fivem typescript resource boilerplate](https://github.com/OddoAkbar/fivem-cli)


## Author

- [@thiagodev17](https://www.github.com/thiagodev17)


## License

[MIT](https://choosealicense.com/licenses/mit/)
