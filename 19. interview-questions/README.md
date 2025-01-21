## Interview Questions:

- What is MongoDB, and how is it different from a relational database?

**Answer**: MongoDB is a NoSQL database that stores data
in flexible, JSON-like documents, allowing for schema-
less data storage. Unlike relational databases, which use
tables and rows, MongoDB uses collections and
documents. This allows for more flexible and scalable
data models.

---

- Explain the structure of a MongoDB document. What are its key components?

**Answer**: A MongoDB document is a BSON (Binary JSON)
object that consists of field-value pairs. The key
components include fields (which are similar to columns in
relational databases) and values (which can be of various
data types, such as strings, numbers, arrays, or even nested
documents).

---

- What are the advantages of using MongoDB over traditional RDBMS systems?

**Answer**: Advantages include:
- Flexibility in schema design.
- Horizontal scalability via sharding.
- High availability through replica sets.
- Easier to manage unstructured or semi-structured data.
- Rich querying and aggregation capabilities.

---

- How does MongoDB store data? Explain the concept of collections and documents.

**Answer**: MongoDB stores data in BSON format within
documents. These documents are grouped into collections,
which are analogous to tables in relational databases. Each
document within a collection can have a different structure,
allowing for flexible data modeling.

---

- What is a replica set in MongoDB? How does it help in ensuring high availability?

**Answer**: A replica set in MongoDB is a group of mongod
instances that maintain the same data set. One node acts as
the primary node, and others are secondary nodes. The
replica set ensures high availability by automatically failing
over to a secondary node if the primary node goes down.

---

- What is a sharded cluster in MongoDB, and why is it used?

**Answer**: A sharded cluster in MongoDB is a method for
distributing data across multiple servers. Sharding is used to
handle large datasets and high-throughput operations by
distributing data and load across multiple machines.

---

- Explain the differences between a find() query and an aggregate() query in MongoDB.

**Answer**: The find() query is used to retrieve documents from a
collection based on certain criteria. The aggregate() query, on
the other hand, is used for more complex data processing,
allowing for data transformation and computation through an
aggregation pipeline.

---

- How does MongoDB handle indexing, and what are the types of indexes available?

**Answer**: MongoDB supports various types of indexes to improve
query performance, including:

- Single field index
- Compound index (multiple fields)
- Multikey index (for arrays)
- Text index (for searching text)
- Geospatial index (for querying geographical data)
- TTL index (for automatic deletion of documents after a certain period)

---

- What is the role of the _id field in MongoDB? Can it be modified or removed?

**Answer**: The _id field is a unique identifier for each
document in a MongoDB collection. It is mandatory and
cannot be removed. However, it can be modified if
necessary, though this is not recommended as it may lead to
data inconsistency.

---

- What is the difference between insert() and insertMany() operations in MongoDB?

**Answer**: insert() is used to insert a single document into a
collection, while insertMany() allows for the insertion of
multiple documents in a single operation. insertMany() is
more efficient for bulk inserts.

---

- Explain how MongoDB's aggregation framework works. What are some common stages used in an aggregation pipeline?

**Answer**: The aggregation framework in MongoDB allows for
processing data in a pipeline, where each stage transforms the data.
Common stages include:

- $match: Filters documents based on a condition.
- $group: Groups documents by a specified key and performs aggregation operations.
- $sort: Sorts documents.
- $project: Reshapes the documents by including/excluding fields.
- $lookup: Performs a left join with another collection.

---

- How does MongoDB handle transactions, and what is the significance of multi-document transactions?

**Answer**: MongoDB supports multi-document transactions,
which allow for ACID-compliant operations across multiple
documents or collections. This ensures that either all
operations within a transaction are applied, or none are,
providing consistency and reliability in complex operations.

---

- What are the pros and cons of embedding documents versus using references in MongoDB?

Embedding (Pros):
- Better performance for read operations.
- Simpler queries.

Embedding (Cons):
- Can lead to large documents and duplication of data.

References (Pros):
- More normalized data structure.
- Reduces duplication.

References (Cons):
- Requires additional queries (joins) which can be slower.

---

- What is the difference between updateOne(), updateMany(), and replaceOne() in MongoDB?

**Answer**:

- updateOne(): Updates the first document that matches the query criteria.
- updateMany(): Updates all documents that match the query criteria.
- replaceOne(): Replaces the entire document with a new one, based on the query criteria.

---

- How does MongoDB handle concurrency and ensure data consistency?

**Answer**: MongoDB handles concurrency using a combination of locks
(e.g., collection-level locks) and journaling. It uses the WiredTiger
storage engine, which provides document-level locking, allowing for
higher concurrency. Consistency is maintained through replica sets
and transactions.

---

- What are the different types of data modeling strategies in MongoDB?

**Answer**: Common data modeling strategies include:

- Embedding documents for data that is frequently accessed together.
- Referencing documents to normalize data and avoidduplication.
- Hybrid models that combine embedding and referencing for different use cases.

---

- Explain the concept of TTL (Time to Live) indexes in MongoDB and when they might be useful.

**Answer**: TTL indexes automatically delete documents from a
collection after a specified period. This is useful for data that
becomes irrelevant after a certain time, such as session logs,
temporary data, or caching.

---

- How would you optimize a MongoDB query for better performance?

**Answer**: To optimize a MongoDB query:

- Use indexes effectively.
- Avoid full collection scans by using selective queries.
- Limit the amount of data returned by using projections.
- Use the explain() method to analyze query performance.
- Consider denormalization to reduce the number of joins.

---

- Explain how to perform a backup and restore operation in a MongoDB
database.

**Answer**:

**Backup**: Use mongodump to create a binary backup of the database.
**Restore**: Use mongorestore to restore the data from a backup.
Additionally, for cloud deployments, MongoDB Atlas provides
automated backups.

---


- Describe the process of migrating data from a relational database to MongoDB. What challenges might you face?

**Answer**: The migration process involves:

- Analyzing the relational schema.
- Designing a MongoDB schema, often using denormalization and embedding.
- Exporting data from the relational database (e.g., using SQL queries).
- Importing data into MongoDB (e.g., using mongoimport or custom scripts).
- Challenges: Schema design differences, handling joins, data type conversion, and ensuring data consistency during migration.

---

- What are MongoDB's limitations, and how can you work around them?

**Answer**: Limitations include:

- No built-in support for joins (use aggregation or manual joins).
- Limited support for multi-document ACID transactions (introduced in later versions).
- Large documents can impact performance (use references to mitigate).
- Working around limitations often involves thoughtful schema design,
indexing, and understanding MongoDB's strengths.

---

- How does MongoDB Atlas differ from running MongoDB on-premises?

**Answer**: MongoDB Atlas is a fully managed cloud database service that
automates deployment, scaling, and backups. It offers built-in security
features and integration with other cloud services. Running MongoDB
on-premises requires manual management of hardware, scaling,
backups, and security.

---

- Explain the role of journaling in MongoDB. How does it help in ensuring
durability?

**Answer**: Journaling in MongoDB is a mechanism that logs write
operations to a journal file before applying them to the database. In
case of a crash, MongoDB can use the journal to recover to a consistent
state, ensuring durability of write operations.

---


- How would you handle schema versioning in a MongoDB
application?

**Answer**: Schema versioning can be handled by:
- Embedding a version field in each document.
- Using a migration script to update existing documents to the new schema version.
- Designing the application to handle multiple schema versions
during the transition period.

---
