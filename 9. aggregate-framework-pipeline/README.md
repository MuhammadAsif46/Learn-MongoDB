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

---

## $project

**Description**:  
`$project` is used to include or exclude specific fields in the output. It reshapes the document by specifying the fields you want to see.

### Example:

Show only `maker`, `model`, and `fuel_type` for Hyundai cars.

```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
]);
```

---

## $sort

**Description**:  
`$sort` is used to arrange documents in ascending (`1`) or descending (`-1`) order based on a field.

### Example:

Sort Hyundai cars based on the `model` field.

```javascript
db.cars.aggregate([
  { $match: { maker: "Hyundai" } },
  { $project: { maker: 1, model: 1, fuel_type: 1, _id: 0 } },
  { $sort: { model: 1 } },
]);
```

---

## $sortByCount

**Description**:  
`$sortByCount` groups documents by a specified field and then sorts the output by the count of documents in each group. It combines `$group` and `$sort` functionality.

### Example:

Group cars by their `maker` and sort the makers based on the number of cars they have.

```javascript
db.cars.aggregate([{ $sortByCount: "$maker" }]);
```

---

## $unwind

**Description**:  
`$unwind` deconstructs an array field in a document into multiple documents, each containing one element from the array. It is useful for working on individual array elements.

### Example:

If each car has multiple `owners`, `$unwind` creates a separate document for each owner.

```javascript
db.cars.aggregate([{ $unwind: "$owners" }]);
```
