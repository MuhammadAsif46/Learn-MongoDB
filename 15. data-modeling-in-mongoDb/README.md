# Data Modeling in MongoDB

## Overview
MongoDB provides flexibility in data modeling, allowing developers to choose between embedding and referencing based on the use case. Relationships in MongoDB are not as strictly enforced as in relational databases, but they can still be modeled effectively to suit various application requirements.

---

## Types of Relationships

1. **One-to-One**
2. **One-to-Many**
3. **Many-to-Many**

---

## Approaches to Maintaining Relationships

### 1. Embedded Documents (Denormalization)
- Suitable for small datasets or when related data is frequently accessed together.
- Reduces the number of queries since data is stored in the same document.

#### Example:
```json
{
  "_id": "user1",
  "name": "Ahmed Ali",
  "email": "ahmed.ali@example.com",
  "orders": [
    {
      "_id": "order1",
      "product": "Laptop",
      "amount": 50000,
      "order_date": "2024-08-01"
    },
    {
      "_id": "order2",
      "product": "Mobile Phone",
      "amount": 15000,
      "order_date": "2024-08-05"
    }
  ]
}
```

---

### 2. Referenced Documents (Normalization)
- Useful for large or frequently updated related data.
- Requires additional queries or joins using `$lookup`.

#### Example:
- **Users Collection:**
```json
{
  "_id": "user1",
  "name": "Amit Sharma",
  "email": "amit.sharma@example.com",
  "phone": "+91-987654210",
  "address": "MG Road, Mumbai, Maharashtra"
}
```

- **Orders Collection:**
```json
{
  "_id": "order1",
  "user_id": "user1",
  "product": "Laptop",
  "amount": 50000,
  "order_date": "2024-08-01"
}
```

---

## Using `$lookup` for Referenced Documents

### Basic Example:
```javascript
db.users.aggregate([
  {
    $lookup: {
      from: "orders", // The target collection to join with
      localField: "_id", // The field from the 'users' collection
      foreignField: "user_id", // The field from the 'orders' collection
      as: "orders" // The name of the new array field to add to 'users'
    }
  }
]);
```

### Advanced Example with Conditions:
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      let: { userId: "$user_id" },
      pipeline: [
        { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
        { $project: { name: 1, email: 1, _id: 0 } }
      ],
      as: "userDetails"
    }
  }
]);
```

---

## Additional Considerations for Modeling

- **One-to-One Example (Embedded):**
```json
{
  "_id": "user1",
  "name": "John Doe",
  "profile": {
    "dob": "1990-01-01",
    "address": "123 Elm Street"
  }
}
```

- **One-to-Many Example (Referenced):**
  - **Users Collection:**
    ```json
    {
      "_id": "user1",
      "name": "Jane Doe"
    }
    ```
  - **Orders Collection:**
    ```json
    {
      "_id": "order1",
      "user_id": "user1",
      "product": "Tablet",
      "price": 20000
    }
    ```

- **Many-to-Many Example:**
  - **Authors Collection:**
    ```json
    {
      "_id": "author1",
      "name": "Author A"
    }
    ```
  - **Books Collection:**
    ```json
    {
      "_id": "book1",
      "title": "Book A",
      "author_ids": ["author1", "author2"]
    }
    
