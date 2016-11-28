# TDD Bookstore TEAM NAME: #INCREDIBLE-BOA

SPECS:
- [x] Setup API to get JSON responses
- [x] Ping should return Pong /ping
- [x] Drop Database and create database using default books.JSON
- [x] GET all books /api/books
- [x] POST a book /api/books
- [x] GET 10 books /api/books
- [x] GET books by author /api/books?author=PhiLip
- [x] GET books by title /api/books?title=World 
- [x] GET books by year /api/books?year=1953


Your goal is to get to this:

```
$ yarn test
> mocha ./test/setup.js --recursive test/

  HTTP Server
    GET /ping
      ✓ should respond with "pong"
    POST /api/books
      ✓ should create a book
      when missing title
        ✓ should render 400 bad request
    with fixture data
      GET /api/books
        ✓ should render 10 books
      GET /api/books?page=2
        ✓ should render the next 10 books
      GET /api/books?author=phILip
        ✓ should render books with authors named "Philip" (case insensitive)
      GET /api/books?title=wORld
        ✓ should render books with a title including "world" (case insensitive)
      GET /api/books?year=1953
        ✓ should render books published in 1953
      GET /api/books?year=1953&title=th
        ✓ should render books published in 1953 and with a title that includes the string "th"
      GET /api/authors
        ✓ should render 10 authors
      

**Get All The Tests To Pass! :D**

Your task is to make [all these tests](https://github.com/GuildCrafts/tdd-bookstore/blob/master/test/server_test.js) pass by designing a database schema and writing code within `/server`.

## Setup

```sh
npm i -g yarn
yarn install
```

## Red... Green... Refactor

```sh
yarn test
# Identify one broken test
# Change the code in /server to make the test pass
# Refactor your code (clean it up)
# Rinse and repeat until all tests pass
```

**WARNING: DO NOT EDIT ANY FILES WITHIN /test**

## Pro Tips

- You must use an express server
- Feel free to `yarn add` any packages you might need
- You should use a database of some kind
- You need to make the HTTP endpoint for resetting your database
- The tests only interact with your code via HTTP requests to your express app
- `yarn test -- --watch` to run your tests after any change


## Error? Questions?

![](https://lh3.googleusercontent.com/-r7k2j4tHMF4/U8Uxk0ttZGI/AAAAAAAAD2s/o-VioN21Jpo/w506-h380/when-all-tests-pass-fs8.png)

Jared wrote this :P
