# MongoDB Basic Queries

## List All Databases
```
show dbs
```

## Switch to a Specific Database or Create a New One
```
use school
```

## Insert a Document into a Collection
```
db.students.insertOne({name: "Ali", age: 24})
```

## Retrieve All Documents from a Collection
```
db.students.find()
