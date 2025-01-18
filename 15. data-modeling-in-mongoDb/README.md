# Data Modeling

## Relations

MongoDB is a NoSQL database, it doesn't
enforce strict schema relationships like foreign
keys in relational databases.

We can still model relationships between documents in
MongoDB using a few approaches.

- The two main types of relationships are:

1. Embedded Documents (Denormalization)
2. Referenced Documents (Normalization)

- Types of Relationship

1. One to One
2. One to Many
3. Many to Many

- How can we maintain relationship in MongoDB?

### Embedded Documents

- userA
  - orderA
  - orderB

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

### Referenced Documents:

```json
{
"_id": "user1",
"name": "Amit Sharma",
"email": "amit.sharma@example.com",
"phone": "+91-987654210",
"address": "MG Road, Mumbai, Maharashtra"
},
{
"_id": "user2",
"name": "Priya Verma",
"email": "priya.verma@example.com",
"phone": "+91-987654211",
"address": "Nehru Place, New Delhi, Delhi"
}
```

-

```json
{
"_id": "order1",
"user_id": "user1",
"product": "Laptop",
"amount": 50000,
"order_date": "2024-08-01"
},
{
"_id": "order2",
"user_id": "user2",
"product": "Mobile Phone",
"amount": 15000,
"order_date": "2024-08-05"
}
```

### JOIN with $lookup:

```javascript
db.users.aggregate([
  {
    $lookup: {
      from: "orders", // The target collection to join with
      localField: "_id", // The field from the 'users' collection
      foreignField: "user_id", // The field from the 'orders' collection
      as: "orders", // The name of the new array field to add to the 'users'
    },
  },
]);
```
