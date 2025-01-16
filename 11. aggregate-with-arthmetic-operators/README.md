# MongoDB Aggregation Operators and Examples

## Arithmetic Operators

MongoDB provides arithmetic operators to perform calculations during aggregation pipelines. These include:

- `$add` : Adds numbers.
- `$subtract` : Subtracts numbers.
- `$divide` : Divides numbers.
- `$multiply` : Multiplies numbers.
- `$round` : Rounds numbers.
- `$abs` : Returns the absolute value.
- `$ceil` : Rounds a number up to the nearest integer.

### Example: Adding Numbers
```javascript
db.collection.aggregate([
  {
    $project: {
      sum: { $add: [2, 3] } // 2 + 3
    }
  }
]);
```

### Example: Adding Hike to Car Prices
Print all the car models and prices with a hike of 55,000:
```javascript
db.cars.aggregate([
  {
    $project: {
      model: 1, 
      _id: 0,
      price: { $add: ["$price", 55000] }
    }
  }
]);
```

---

## `$addFields` / `$set`

The `$addFields` stage adds new fields to documents, while `$set` is an alias for `$addFields`. These operators allow you to dynamically compute new fields based on existing data.

### Example: Add Price in Lakhs
Print details of cars with prices in lakhs (e.g., 15 lakhs):
```javascript
db.cars.aggregate([
  { $project: { model: 1, _id: 0, price: 1 } },
  {
    $addFields: {
      price_in_lakhs: { $divide: ["$price", 100000] }
    }
  }
]);
```

### Example: Calculate Total Service Cost for Hyundai Cars
Calculate the total service cost of each Hyundai car:
```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  {
    $set: { total_service_cost: { $sum: "$service_history.cost" } }
  },
  {
    $project: { model: 1, maker: 1, _id: 0, total_service_cost: 1 }
  }
]);
```
