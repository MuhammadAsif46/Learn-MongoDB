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
        $match: { size: "medium" }
    },
    {
        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    }
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
            totalCars: { $sum: 1 }
        }
    }
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