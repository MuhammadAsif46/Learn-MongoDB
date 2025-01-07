# MongoDB Overview

## What is a Database?
A database is an organized collection of data, offering methods to manipulate and access information efficiently.

## What is MongoDB?
MongoDB is a **NoSQL database** that stores data in flexible, JSON-like documents, making it easy to scale and handle large volumes of unstructured data.

## MongoDB Structure

MongoDB stores data in collections and documents:

- **Collection**: A group of MongoDB documents (similar to a table in relational databases).
- **Document**: A record within a collection (similar to a row in relational databases).
- **Field**: A key-value pair in a document (similar to a column in relational databases).

### Example Document:
```json
{
  "_id": 1,
  "name": "abc",
  "email": "abc@gmail.com",
  "age": 18,
  "address": {
    "street": "123 block",
    "city": "San Francisco",
    "zip": "123"
  },
  "hobbies": ["acting", "gaming"]
}
```

## Brief History and Background
MongoDB was first released in **2009**. It was developed by a company called **10gen**, which later rebranded as **MongoDB, Inc.**

# MongoDB Features

1. **Scalable**: Easy to distribute data across multiple machines as data grows.
2. **Flexible**: Each document can have a different number and types of fields.
3. **High Performance**: Optimized for high-speed read and write operations, ideal for real-time data processing and analytics.

# SQL vs NoSQL

## Schema Flexibility
- **NoSQL**: Schema-less design allows for easy storage of diverse and rapidly changing data without needing to alter the schema.
- **SQL**: Requires a predefined schema. Altering the schema (e.g., adding new columns) can be complex and time-consuming, especially with large datasets.

## Performance
- **NoSQL**: Optimized for high-speed read and write operations, making it ideal for real-time data processing and analytics.
- **SQL**: Though performant, it can suffer from slower read/write operations when dealing with very large volumes of data due to ACID transaction overhead and complex joins.

## Handling Unstructured Data
- **NoSQL**: Efficiently handles unstructured or semi-structured data, which is common in real-time analytics (e.g., varied user activity types).
- **SQL**: Best suited for structured data. Handling unstructured data requires complex transformations or additional systems (e.g., storing JSON data in columns).
