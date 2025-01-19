# Schema Validation in MongoDB

Schema validation in MongoDB uses a JSON Schema format to enforce rules and constraints on documents in a collection. This allows for greater control over the structure and content of your data.

---

## Key Features of Schema Validation

1. **Validation Rules**: Define constraints like required fields, data types, and value ranges.
2. **Validation Levels**: Control the strictness of schema enforcement.
3. **Validation Actions**: Determine how MongoDB handles invalid documents.

---

## Adding Validation to a New Collection

You can specify validation rules while creating a collection using the `validator` option.

### Example
```javascript
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        price: {
          bsonType: "double",
          minimum: 0,
          description: "must be a non-negative double and is required"
        },
        category: {
          bsonType: "string",
          description: "must be a string if the field exists"
        }
      }
    }
  },
  validationLevel: "strict",  // Validation level
  validationAction: "error"   // Validation action
});
```

---

## Adding Validation to an Existing Collection

You can update an existing collection to include validation rules using the `collMod` command.

### Example
```javascript
db.runCommand({
  collMod: "products",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        price: {
          bsonType: "double",
          minimum: 0,
          description: "must be a non-negative double and is required"
        }
      }
    }
  },
  validationLevel: "moderate", // Validation level for partial enforcement
  validationAction: "warn"     // Allows operations but logs warnings
});
```

---

## Validation Levels

### 1. **Strict**
- Fully enforces schema validation rules.
- If a document does not comply, the insert or update operation is rejected.

### 2. **Moderate**
- Validates only new documents or modified fields in existing documents.
- Useful for legacy systems or gradual schema enforcement.

---

## Validation Actions

### 1. **Error**
- Rejects the insert or update operation if the document does not comply with the schema validation rules.

### 2. **Warn**
- Logs a warning message when a document does not meet the schema validation rules but still allows the operation to proceed.

---

## Advanced Example: Enforcing Validation on Nested Fields

```javascript
db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["orderID", "items"],
      properties: {
        orderID: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        items: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["productID", "quantity"],
            properties: {
              productID: {
                bsonType: "string",
                description: "must be a string and is required"
              },
              quantity: {
                bsonType: "int",
                minimum: 1,
                description: "must be an integer of at least 1 and is required"
              }
            }
          }
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});
```

---

By using schema validation, you can ensure data consistency, enforce constraints, and manage the quality of data stored in MongoDB collections effectively.


- Document: https://www.mongodb.com/docs/manual/core/schema-validation