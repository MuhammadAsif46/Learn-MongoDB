# Indexes in MongoDB

Indexes in MongoDB are a data structure that improves the efficiency of query operations by enabling the database to quickly locate and access the required data without scanning every document in a collection. They store indexed fields in a sorted order and include pointers to the actual documents in the collection.

## Creating Indexes

### Basic Syntax:

```javascript
// Syntax to create an index
// <field1>, <field2>: Fields to be indexed
// <type1>, <type2>: Type of index (1 for ascending, -1 for descending)
db.collection.createIndex(
    { <field1>: <type1>, <field2>: <type2>, ... },
    { <options> }
)
```

### Example:

```javascript
// Create an index on the 'maker' field in ascending order
db.cars.createIndex({ maker: 1 });

// Create a unique index on the 'model' field
db.cars.createIndex({ model: 1 }, { unique: true });
```

### Managing Indexes:

```javascript
// Drop an index
db.cars.dropIndex("maker");

// View all indexes in a collection
db.cars.getIndexes();
```

---

## Types of Indexes

1. **Single Field Index:**

   - Created on a single field to optimize queries involving that field.
   - Example:
     ```javascript
     db.cars.createIndex({ maker: 1 });
     ```

2. **Compound Index:**

   - Involves multiple fields in a single index to optimize queries involving those fields.
   - Example:
     ```javascript
     db.cars.createIndex({ maker: 1, model: 1 });
     ```

3. **Unique Index:**

   - Ensures no two documents have the same value for the indexed field.
   - Example:
     ```javascript
     db.cars.createIndex({ vin: 1 }, { unique: true });
     ```

4. **TTL (Time to Live) Index:**
   - Automatically removes documents after a specified period.
   - Example:
     ```javascript
     db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
     ```

---

## Performance Considerations

1. **Impact on Write Operations:**

   - Indexes speed up read operations but can slow down insertions, updates, and deletions because the index must be updated whenever the indexed field is modified.

2. **Indexing Large Collections:**

   - Indexing large collections can consume significant RAM and storage. The size of the index depends on the number of documents and the indexed fields.

3. **Proper Indexing Strategy:**
   - Carefully select which fields to index based on query patterns to avoid unnecessary overhead.

---

## Use Case Example

### Index Based on Name:

```javascript
// Data: Names stored in a collection
// Example: Searching for names like "Baburao", "Raju", "Sham"
db.names.createIndex({ name: 1 });

// Query using the index
db.names.find({ name: "Baburao" });
```

### TTL Index Example:

```javascript
// Automatically remove logs after 24 hours
db.logs.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 } // 24 hours
);
```

---

Indexes are a powerful feature in MongoDB that enhance the efficiency of data retrieval operations. However, they must be used judiciously to maintain a balance between query performance and system resources.
