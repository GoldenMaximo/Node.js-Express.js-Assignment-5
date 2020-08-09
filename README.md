# Node.js-Express.js-Assignment-5

Store user login on an Express Session (through cookies) that gets stored in a MongoDB collection. Section 14 Assignment 5 of NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno).

Since the user is stored on the session, it's stored as a plain object, not a mongoose object. Therefore some methods like getting the cart will fail.

## Installation

*Make sure to have [Git](http://git-scm.com/) and [Node.js](http://nodejs.org/) 10.0.0 (or higher) installed.*

1. Clone it or fork it.

2. Once you have your local copy, install its dependencies using either Yarn:

```
yarn
```

or npm:

```
npm install
```

or the best:

```
pnpm install
```

3. Create an .env file with the following properties according to your MongoDB configuration:

```
DB_USER=*
DB_NAME=*
DB_PASS=*
```


## Running

After installed, you can start the application by running it with Yarn:

```
yarn start
```

or npm:

```
npm run start
```

or pnpm:

```
pnpm start
```

*This will start the server at `localhost:3000`. You can monitor the DB using [MongoDB Compass](https://www.mongodb.com/products/compass)*
<!-- (if you didn't change the `PORT` property on `.env`) -->

## Meta

Gustavo Máximo – gfmaximo97@gmail.com

## Contributing

I'm not currently accepting pull requests as this is an assignment.
Feel free to fork it however.

## License

This repository is licensed under [MIT](https://opensource.org/licenses/MIT)
