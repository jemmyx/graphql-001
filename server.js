var { graphql } = require("graphql");
var schema = require("./graphql/schema");
var root = require("./graphql/resolver");

// run
graphql(schema, "{hello}", root).then((response) => console.log(response));
