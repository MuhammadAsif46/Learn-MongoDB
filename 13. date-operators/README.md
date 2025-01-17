# MongoDB Date Operators

Date operators in MongoDB are used to perform various operations on date values, such as adding or subtracting time, calculating differences, or extracting specific components like month or year.

## Commonly Used Date Operators

### 1. `$dateAdd`
Adds a specified amount of time to a date.

#### Syntax:
```javascript
{
  $dateAdd: {
    startDate: <date>,
    unit: <string>, // e.g., "day", "month", "year"
    amount: <number>
  }
}
```

#### Example:
Add 7 days to a given date:
```javascript
db.collection.aggregate([
  {
    $project: {
      newDate: { 
        $dateAdd: {
          startDate: new Date("2024-08-29"),
          unit: "day",
          amount: 7
        }
      }
    }
  }
]);
```
**Description:** This example adds 7 days to `2024-08-29` and outputs the resulting date as `newDate`.

---

### 2. `$dateDiff`
Calculates the difference between two dates.

#### Syntax:
```javascript
{
  $dateDiff: {
    startDate: <date>,
    endDate: <date>,
    unit: <string> // e.g., "day", "hour"
  }
}
```

#### Example:
Calculate the difference in days between two dates:
```javascript
db.collection.aggregate([
  {
    $project: {
      differenceInDays: {
        $dateDiff: {
          startDate: new Date("2024-08-29"),
          endDate: new Date("2024-09-05"),
          unit: "day"
        }
      }
    }
  }
]);
```
**Description:** This example calculates the difference in days between `2024-08-29` and `2024-09-05`.

---

### 3. `$month`
Extracts the month from a date.

#### Syntax:
```javascript
{
  $month: <date>
}
```

#### Example:
Extract the month from a date:
```javascript
db.collection.aggregate([
  {
    $project: {
      month: { $month: "$dateField" }
    }
  }
]);
```
**Description:** This example extracts the month component (e.g., `8` for August) from `dateField`.

---

### 4. `$year`
Extracts the year from a date.

#### Syntax:
```javascript
{
  $year: <date>
}
```

#### Example:
Extract the year from a date:
```javascript
db.collection.aggregate([
  {
    $project: {
      year: { $year: "$dateField" }
    }
  }
]);
```
**Description:** This example extracts the year component from `dateField`.

---

### 5. `$hour`
Extracts the hour from a date.

#### Syntax:
```javascript
{
  $hour: <date>
}
```

#### Example:
Extract the hour from a date:
```javascript
db.collection.aggregate([
  {
    $project: {
      hour: { $hour: "$dateField" }
    }
  }
]);
```
**Description:** This example extracts the hour component from `dateField`.

---

### 6. `$dateOfMonth`
Extracts the day of the month from a date.

#### Syntax:
```javascript
{
  $dateOfMonth: <date>
}
```

#### Example:
Extract the day of the month:
```javascript
db.collection.aggregate([
  {
    $project: {
      dayOfMonth: { $dateOfMonth: "$dateField" }
    }
  }
]);
```
**Description:** This example extracts the day of the month from `dateField`.

---

### 7. `$dayOfYear`
Extracts the day of the year from a date.

#### Syntax:
```javascript
{
  $dayOfYear: <date>
}
```

#### Example:
Extract the day of the year:
```javascript
db.collection.aggregate([
  {
    $project: {
      dayOfYear: { $dayOfYear: "$dateField" }
    }
  }
]);
```
**Description:** This example extracts the day of the year (e.g., `241` for August 29 in a non-leap year) from `dateField`.

---

These date operators enable powerful date manipulations and calculations in MongoDB, making it easier to work with time-based data.

- Document: https://www.mongodb.com/docs/manual/reference/operator/aggregation/#date-expression-operators