# MongoDB Aggregation and String Operators

## String Operators

String operators in MongoDB allow you to manipulate and process string fields in your collections. Below are some common string operators and examples of their usage.

### $concat
The `$concat` operator concatenates multiple strings into a single string.

```javascript
db.collection.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      // Concatenates firstName and lastName with a space
    },
  },
]);
```

#### Example: List all Hyundai cars and display their names as "Maker + Model"
```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { _id: 0, CarName: { $concat: ["$maker", " ", "$model"] } } },
]);
```

#### Example: Convert the concatenated name to uppercase
```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { _id: 0, CarName: { $toUpper: { $concat: ["$maker", " ", "$model"] } } } },
]);
```

### $toUpper and $toLower
The `$toUpper` and `$toLower` operators convert strings to uppercase and lowercase, respectively.

### $regexMatch
The `$regexMatch` operator performs a regular expression (regex) pattern matching and returns `true` or `false` based on the match.

#### Syntax:
```javascript
{
  $regexMatch: {
    input: <string_expression>,
    regex: <regex_pattern>,
    options: "<options>" // optional, e.g., "i" for case-insensitive
  }
}
```

#### Example: Add a flag `is_diesel` to indicate whether each car is diesel-powered
```javascript
db.cars.aggregate([
  {
    $project: {
      model: 1,
      _id: 0,
      is_diesel: { $regexMatch: { input: "$fuel_type", regex: "Die" } },
    },
  },
]);
```

### $ltrim
The `$ltrim` operator removes leading whitespace or specified characters from a string.

### $split
The `$split` operator splits a string into an array of substrings based on a specified delimiter.

## OUT
The `$out` stage allows you to store the results of an aggregation pipeline into a new collection. This is useful for saving transformed data for later use.

#### Example: Store aggregated results of Hyundai cars into a new collection `hyundai_cars`
```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  {
    $project: {
      _id: 0,
      CarName: { $concat: ["$maker", " ", "$model"] },
    },
  },
  { $out: "hyundai_cars" },
]);
```

- Document: https://www.mongodb.com/docs/manual/reference/operator/aggregation/#string-expression-operators