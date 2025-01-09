# MongoDB CRUD Operations

This folder covers MongoDB's core CRUD operations with examples and commands.

---

## Overview of CRUD Operations

### **Create**
- `insertOne()`
- `insertMany()`

### **Read**
- `find()`
- `findOne()`

### **Update**
- `updateOne()`
- `updateMany()`

### **Delete**
- `deleteOne()`
- `deleteMany()`

---

## CREATE Operations

### `insertOne()`
Insert a single document into a collection.

```javascript
// Example of insertOne()
db.cars.insertOne({
  maker: "Tata",
  model: "Nexon",
  fuel_type: "Petrol",
  transmission: "Automatic",
  engine: {
    type: "Turbocharged",
    cc: 1199,
    torque: "170 Nm",
  },
  features: ["Touchscreen", "Reverse Camera", "Bluetooth Connectivity"],
  sunroof: false,
  airbags: 2,
});
```

### `insertMany()`
Insert multiple documents into a collection.

```javascript
// Example of insertMany()
db.cars.insertMany([
  {
    maker: "Hyundai",
    model: "Creta",
    fuel_type: "Diesel",
    transmission: "Manual",
    engine: {
      type: "Naturally Aspirated",
      cc: 1493,
      torque: "250 Nm",
    },
    features: [
      "Sunroof",
      "Leather Seats",
      "Wireless Charging",
      "Ventilated Seats",
      "Bluetooth",
    ],
    sunroof: true,
    airbags: 6,
  },
  {
    maker: "Maruti Suzuki",
    model: "Baleno",
    fuel_type: "Petrol",
    transmission: "Automatic",
    engine: {
      type: "Naturally Aspirated",
      cc: 1197,
      torque: "113 Nm",
    },
    features: ["Projector Headlamps", "Apple CarPlay", "ABS"],
    sunroof: false,
    airbags: 2,
  },
]);
```

---

## READ Operations

### `find()`
Fetch multiple documents from a collection.

```javascript
// Retrieve all documents
db.cars.find();

// Fetch specific fields
db.cars.find({}, { model: 1 }); // Include only 'model'
db.cars.find({}, { model: 1, _id: 0 }); // Exclude '_id'
```

### `findOne()`
Fetch a single document matching the query.

```javascript
// Retrieve the first matching document
db.cars.findOne();
db.cars.findOne({ fuel_type: "Diesel" }); // Filter by fuel type
```

---

## UPDATE Operations

### `updateOne()`
Update a single document matching the filter.

```javascript
// Add a new field
db.cars.updateOne(
  { model: "Nexon" },
  { $set: { color: "Blue" } }
);

// Add a new value to an array
db.cars.updateOne(
  { model: "Nexon" },
  { $push: { features: "Heated Seats" } }
);
```

### `updateMany()`
Update multiple documents matching the filter.

```javascript
// Add a field to all documents
db.cars.updateMany({}, { $set: { color: "Black" } });

// Use upsert to update or insert
db.cars.updateMany(
  { name: "John" },
  { $set: { age: 23, course: "Mathematics" } },
  { upsert: true }
);
```

---

## DELETE Operations

### `deleteOne()`
Delete a single document matching the filter.

```javascript
// Remove one document
db.cars.deleteOne({ maker: "Tata" });
```

### `deleteMany()`
Delete multiple documents matching the filter.

```javascript
// Remove all documents with specific condition
db.cars.deleteMany({ fuel_type: "Diesel" });
```

---

### Example Data Structure

```json
{
  "maker": "Tata",
  "model": "Nexon",
  "fuel_type": "Petrol",
  "transmission": "Automatic",
  "engine": {
    "type": "Turbocharged",
    "cc": 1199,
    "torque": "170 Nm"
  },
  "features": ["Touchscreen", "Reverse Camera", "Bluetooth Connectivity"],
  "sunroof": false,
  "airbags": 2
}
