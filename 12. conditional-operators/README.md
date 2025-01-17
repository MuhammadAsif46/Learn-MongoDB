# MongoDB Aggregation Operators

## Introduction

MongoDB's aggregation framework is a robust tool that allows for data processing and transformation. It works through a pipeline where each stage processes documents and passes them to the next stage. This README covers common operators and stages used in aggregation.

---

## Conditional Operators

### $cond

The `$cond` operator acts as a ternary conditional operator. It evaluates a condition and returns one of two specified values based on whether the condition evaluates to `true` or `false`.

**Syntax:**

```javascript
{ $cond: [ <condition>, <true-case>, <false-case> ] }
```

**Example:**
Categorize cars into 'Petrol Car' and 'Non-Petrol Car' based on their `fuel_type`:

```javascript
db.cars.aggregate([
  {
    $project: {
      _id: 0,
      maker: 1,
      model: 1,
      fuelCategory: {
        $cond: {
          if: { $eq: ["$fuel_type", "Petrol"] },
          then: "Petrol Car",
          else: "Non-Petrol Car",
        },
      },
    },
  },
]);
```

---

### $ifNull

The `$ifNull` operator provides a default value if the specified field is `null` or does not exist.

**Syntax:**

```javascript
{ $ifNull: [ <expression>, <default-value> ] }
```

**Example:**
Ensure that every car has a `fuel_type`, and assign "Unknown" to cars without one:

```javascript
db.cars.aggregate([
  {
    $project: {
      _id: 0,
      maker: 1,
      model: 1,
      fuel_type: { $ifNull: ["$fuel_type", "Unknown"] },
    },
  },
]);
```

---

### $switch

The `$switch` operator evaluates multiple conditions and returns a value based on the first condition that evaluates to `true`. If no condition matches, it returns a default value.

**Syntax:**

```javascript
{
  $switch: {
    branches: [
      { case: <condition1>, then: <result1> },
      { case: <condition2>, then: <result2> },
      ...
    ],
    default: <defaultResult>
  }
}
```

**Example:**
Categorize cars into "Budget," "Midrange," and "Premium" based on their price:

```javascript
db.cars.aggregate([
  {
    $project: {
      _id: 0,
      maker: 1,
      model: 1,
      priceCategory: {
        $switch: {
          branches: [
            { case: { $lt: ["$price", 500000] }, then: "Budget" },
            {
              case: {
                $and: [
                  { $gte: ["$price", 500000] },
                  { $lt: ["$price", 1000000] },
                ],
              },
              then: "Midrange",
            },
            { case: { $gte: ["$price", 1000000] }, then: "Premium" },
          ],
          default: "Unknown",
        },
      },
    },
  },
]);
```

---

### Use Cases

- **$cond:** Conditional logic for creating new fields or categorizing data.
- **$ifNull:** Assign default values to missing or null fields.
- **$switch:** Complex multi-branch logic for categorizing data based on multiple conditions.

---

- Document:  https://www.mongodb.com/docs/manual/reference/operator/aggregation/#conditional-expression-operators
