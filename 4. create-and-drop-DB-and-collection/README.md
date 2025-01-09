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




