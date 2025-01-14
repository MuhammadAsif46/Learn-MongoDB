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

### Example of Grouping

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

###Syntax of ‘group’

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
        { $group:
                       { _id: "$maker",
                          TotalCars: { $sum: 1 }
                        }
                   }] )
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
