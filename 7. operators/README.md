# MongoDB Operators

## Relational Operators

Relational operators are used to compare values in MongoDB queries. Below are the commonly used operators:

### Comparison Operators

| Operator | Meaning       | Example          |
|----------|---------------|------------------|
| `$eq`    | Equal to      | `{age: {$eq: 25}}` |
| `$lt`    | Less than     | `{age: {$lt: 25}}` |
| `$gt`    | Greater than  | `{age: {$gt: 25}}` |
| `$lte`   | Less or equal | `{age: {$lte: 25}}` |
| `$gte`   | Greater or equal | `{age: {$gte: 25}}` |
| `$ne`    | Not equal     | `{age: {$ne: 25}}` |

### Case Example: Find the cars with engine more than 1400cc

```javascript
// Query:
db.cars.find({"engine.cc": {$gt: 1400}});
```

### `$in` and `$nin` Operators

- `$in`: Matches any of the specified values in an array.
- `$nin`: Excludes specified values in an array.

#### Example: Find cars with engine sizes 1498cc and 2179cc

```javascript
// Query:
db.cars.find({"engine.cc": {$in: [1498, 2179]}});