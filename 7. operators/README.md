# MongoDB Operators

## Relational Operators

Relational operators are used to compare values in MongoDB queries. Below are the commonly used operators:

### Comparison Operators

| Operator | Meaning          | Example             |
| -------- | ---------------- | ------------------- |
| `$eq`    | Equal to         | `{age: {$eq: 25}}`  |
| `$lt`    | Less than        | `{age: {$lt: 25}}`  |
| `$gt`    | Greater than     | `{age: {$gt: 25}}`  |
| `$lte`   | Less or equal    | `{age: {$lte: 25}}` |
| `$gte`   | Greater or equal | `{age: {$gte: 25}}` |
| `$ne`    | Not equal        | `{age: {$ne: 25}}`  |

### Case Example: Find the cars with engine more than 1400cc

```javascript
// Query:
db.cars.find({ "engine.cc": { $gt: 1400 } });
```

### `$in` and `$nin` Operators

- `$in`: Matches any of the specified values in an array.
- `$nin`: Excludes specified values in an array.

#### Example: Find cars with engine sizes 1498cc and 2179cc

```javascript
// Query:
db.cars.find({ "engine.cc": { $in: [1498, 2179] } });
```

## Logical Operators

Logical operators allow combining multiple query conditions. Below are the commonly used ones:

| Operator | Description           | Example                                                               |
| -------- | --------------------- | --------------------------------------------------------------------- |
| `$and`   | Logical AND condition | `{ $and: [ { fuel_type: "Diesel" }, { "engine.cc": {$gt: 1500} } ] }` |
| `$or`    | Logical OR condition  | `{ $or: [ { maker: "Honda" }, { maker: "Hyundai" } ] }`               |
| `$not`   | Negates the query     | `{ fuel_type: { $not: { $eq: "Diesel" } } }`                          |
| `$nor`   | Logical NOR condition | `{ $nor: [ { maker: "Honda" }, { maker: "Hyundai" } ] }`              |

## Combined Case: I want a car which is Diesel, has a Sunroof, and a Turbocharged Engine

To query for a car with all these features, you can use `$and`:

```javascript
// Query:
db.cars.find({
  $and: [
    { fuel_type: "Diesel" },
    { sunroof: true },
    { "engine.type": "Turbocharged" },
  ],
});
```

### Case: I want a car which is Diesel, Sunroof & Turbocharged Engine

Find cars with all these features:

```javascript
db.cars.find({
  $and: [
    { "engine.type": "Turbocharged" },
    { sunroof: true },
    { fuel_type: "Diesel" },
  ],
});
```

### $and, $or, $nor, $not:

#### Example 1: $or Operator

Find cars that are either Turbocharged or Diesel:

```javascript
db.cars.find({
  $or: [{ "engine.type": "Turbocharged" }, { fuel_type: "Diesel" }],
});
```

#### Example 2: $nor Operator

Find cars that are neither Turbocharged nor Diesel:

```javascript
db.cars.find({
  $nor: [{ "engine.type": "Turbocharged" }, { fuel_type: "Diesel" }],
});
```

## Element Operators:

- **$exists**

```javascript
{
  age: {
    $exists: true;
  }
}
```

- **$type**
  Here we can filter the content based on BASON
  type like string, bool etc
  This can be useful to find field with null values

```javascript
{
  name: {
    $type: "string";
  }
}
```

- **$exists:**

```javascript
db.cars.find({ fuel_Type: { $exists: true } });
```

- **$type:**

```javascript
db.cars.find({ fuel_Type: { $type: "string" } });
```

---

## Array Operators

- **$size:**
  Return all documents that match specified array size

```javascript
db.collection.find({ hobbies: { $size: 4 } });
db.cars.find({ features: { $size: 5 } });
```

- **$all**
  Return all documents that match the pattern
  (all user with hobbies of play and read)

```javascript
db.collection.find({ hobbies: { $all: ["play", "read"] } });
db.cars.find({ features: { $all: ["sunroof", "bluetooth"] } });
```
