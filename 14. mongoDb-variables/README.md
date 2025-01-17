# MongoDB Variables

## System Generated Variables

MongoDB provides several system variables that are automatically set and can be used within aggregation pipelines. These variables include:

- `$$NOW`: Represents the current date and time.
- `$$ROOT`: Represents the root document of the pipeline.
- `$$CURRENT`: Represents the current document being processed.
- `$$REMOVE`: Used to conditionally exclude a field from the result.

### Example 1: Using `$$NOW`

```javascript
db.cars.aggregate([
  {
    $project: {
      _id: 0,
      model: 1,
      currentDate: "$$NOW" // Adds the current date and time to each document
    }
  }
]);
```
**Description:** This pipeline projects the `model` field and appends a `currentDate` field containing the current date and time.

### Example 2: Using `$$ROOT`

```javascript
db.cars.aggregate([
  {
    $project: {
      _id: 0,
      fullDocument: "$$ROOT" // Includes the entire original document
    }
  }
]);
```
**Description:** This pipeline projects a `fullDocument` field that contains the entire original document.

---

## User-Defined Variables

User-defined variables enable you to store intermediate values and reuse them within the same pipeline, improving readability and efficiency.

### Example 1: Storing and Reusing a Computed Value

```javascript
db.cars.aggregate([
  {
    $set: {
      priceWithTax: { $multiply: ["$price", 1.18] } // Adding 18% tax
    }
  },
  {
    $project: {
      _id: 0,
      model: 1,
      priceWithTax: 1
    }
  }
]);
```
**Description:** This pipeline calculates a new field `priceWithTax` by adding 18% tax to the `price` field, and then projects the model and the calculated field.

### Example 2: Defining a Variable for Reuse

```javascript
db.cars.aggregate([
  {
    $addFields: {
      avgPrice: { $avg: "$service_history.cost" }
    }
  },
  {
    $project: {
      _id: 0,
      model: 1,
      avgPrice: 1
    }
  }
]);
```
**Description:** This pipeline calculates the average service cost for each car and projects the `model` and the calculated `avgPrice` field.

---

### Benefits of Using Variables
- **Readability:** Makes pipelines easier to understand by reducing repetition.
- **Efficiency:** Avoids recalculating the same value multiple times.
- **Flexibility:** Allows conditional logic and intermediate computations.
