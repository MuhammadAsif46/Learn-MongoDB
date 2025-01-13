# MongoDB Guide

## Cursor Methods

Cursor methods allow you to manipulate and manage the output of your queries. Below are some commonly used cursor methods:

### Use Case:

How to find the number of records/documents?

### **Count:**

```javascript
db.testing.find().count();
db.testing.find({ fuel_type: "Diesel" }).count();
```

### **Sort:**

Sort documents based on a specific field in ascending or descending order.

```javascript
db.testing.find({}, { _id: 0, model: 1 }).sort({ model: 1 }); // sort by ascending
db.testing.find({}, { _id: 0, model: 1 }).sort({ model: -1 }); // sort by descending
```

### **Limit:**

Limit the number of documents returned by the query.

```javascript
db.testing.find().limit(2);
```

### **Skip:**

Skip a specified number of documents in the query result.

```javascript
db.testing.find().skip(2);
```

### **Commonly Used Cursor Methods:**

1. **forEach:**
   Iterate through each document in the cursor.
   
   ```javascript
   db.testing.find().forEach(doc => {
       printjson(doc);
   });
   ```

2. **map:**
   Apply a transformation to each document and return the results as an array.
   
   ```javascript
   db.testing.find().map(doc => doc.model);
   ```

3. **Batch Size:**
   Specify the number of documents to return in each batch.
   
   ```javascript
   db.testing.find().batchSize(5);
   ```

4. **Projection:**
   Specify which fields to include or exclude in the result set.
   
   ```javascript
   db.testing.find({}, { model: 1, _id: 0 });
   ```

5. **Hint:**
   Force the query to use a specific index.
   
   ```javascript
   db.testing.find().hint({ model: 1 });
   ```

6. **Explain:**
   Get details about the query plan used by the database.
   
   ```javascript
   db.testing.find().explain("executionStats");
   ```
