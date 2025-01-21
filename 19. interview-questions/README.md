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