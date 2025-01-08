# MongoDB Basic CRUD Operations

## Database Operations

### Creating a Database
To create a database, use the following command:
```javascript
use database_name
```

### Listing Databases
To list all the databases:
```javascript
show dbs
```

### Dropping a Database
To drop a database:
```javascript
db.dropDatabase()
```

## Collection Operations

### Creating a Collection
To create a new collection in the database:
```javascript
db.createCollection("myCollection")
```

### Listing Collections
To list all collections in the current database:
```javascript
show collections
```

### Dropping a Collection
To drop a collection:
```javascript
collection_name.drop()
```

## CRUD Operations

### Create - Inserting Data
To insert data into a collection:
```javascript
db.collection_name.insertOne({ key: "value" })
```

### Read - Querying Data
To retrieve data from a collection:
```javascript
db.collection_name.find()
```

### Update - Modifying Data
To update existing data in a collection:
```javascript
db.collection_name.updateOne(
  { filter_criteria },
  { $set: { key: "new_value" } }
)
```

### Delete - Removing Data
To delete data from a collection:
```javascript
db.collection_name.deleteOne({ filter_criteria })
