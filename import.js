// import $ from 'jquery'
// import jQuery from 'jquery'
//
// const data = $.getJSON("books.json", (json) => {
//     console.log(json); // this will show the info it in firebug console
// });

mongoimport --db test --collection <books> --type json --file ../test/books.json
--jsonArray
