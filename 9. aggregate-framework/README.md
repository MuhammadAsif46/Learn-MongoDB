# Aggregate Framework

Aggregation is a powerful framework for complex operations like filtering, grouping, sorting, reshaping, and summarizing data in a flexible way via a pipeline.

```javascript
db.collection.aggregate(
       [
         { stage1 },
         { stage2 },
         ...
       ], { option }
     );
```

### Example:

```javascript
db.orders.aggregate([
  {
    $match: { size: "medium" },
  },
  {
    $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } },
  },
]);
```

## Most Commonly Used Stages in MongoDB Aggregation

- **$match**
- **$group**
- **$project**
- **$sort**
- **$limit**
- **$unwind**
- **$lookup**
- **$addFields**
- **$count**
- **$skip**

### Group

Groups input documents by a specified identifier (\_id) and applies aggregation expressions like $sum, $avg, $min, $max, etc., to the grouped data.

Example:

#### Use Case: Number of Cars of Each Brand (Maker)

```javascript
db.cars.aggregate([
  {
    $group: {
      _id: "$maker",
      totalCars: { $sum: 1 },
    },
  },
]);
```

#### Output:

```json
[
  { "_id": "Honda", "totalCars": 3 },
  { "_id": "Indus", "totalCars": 4 },
  { "_id": "Suzuki", "totalCars": 3 },
  { "_id": "SigmaMotors", "totalCars": 3 },
  { "_id": "HinoPak", "totalCars": 1 }
]
```

### Syntax of ‘group’

```javascript
db.collection.aggregate([
  {
    $group: {
      _id: "$category",
      totalAmount: { $sum: "$amount" },
      averageAmount: { $avg: "$amount" },
      minAmount: { $min: "$amount" },
      maxAmount: { $max: "$amount" },
      amountsList: { $push: "$amount" },
      uniqueAmounts: { $addToSet: "$amount" },
    },
  },
]);
```

- Print all the car brands..

```javascript
db.cars.aggregate([{ $group: { _id: "$maker" } }]);
```

---

- Find no. of cars of each brand (we have to group)

```JavaScript
db.cars.aggregate([
    {
        $group: {
            _id: "$maker",
            TotalCars: { $sum: 1 }
        },
    },
]);
```

The $sum: 1 operation counts the number of documents in each group

---

- Find no. of cars of different fuel_type

```javascript
db.cars.aggregate([
  {
    $group: {
      _id: "$fuel_type",
      TotalCars: { $sum: 1 },
    },
  },
]);
```

## MATCH

Filters documents to pass only those that match the specified condition(s) to the next stage.

Example:

- Hyundai cars having engine of more than 1200cc

```JavaScript
db.cars.aggregate([
    {
        $match: {
            maker:"Hyundai",
            "engine.cc":{$gt:1000}
        }
    },
]);
```

---

## COUNT

Counts the number of documents passing through the pipeline and outputs the count.

Example:

- Print Total no. of Hyundai cars

```JavaScript
db.cars.aggregate([
    { $match: {maker:"Hyundai"} },
    { $count: "Total_cars"},
]);
```

- Count no. of diesel and petrol cars of Hyundai brand

```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  {
    $group: {
      _id: "$fuel_type",
      Totalcars: { $sum: 1 },
    },
  },
]);
```

## Project

Find all the Hyundai cars and only show Maker, Model and
Fuel_type details

```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
]);
```

## SORT

For the previous output, sort the data based on Model

```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
  { $sort: { model: 1 } },
]);
```


