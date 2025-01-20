## MongoDB Advanced Concepts: Transactions, Replication, and Sharding

### Transactions

A transaction in MongoDB is a sequence of operations that are executed as a single unit. Transactions ensure that all operations within the sequence either complete successfully or are fully rolled back in case of an error. This maintains ACID properties (Atomicity, Consistency, Isolation, Durability) across multiple documents and collections.

### Key Features:

- Supported in replica sets and sharded clusters.
- Provides the ability to perform multi-document transactions.
- Ensures data integrity during complex operations.

Example: Multi-Document Transaction

Suppose you need to transfer money from one account to another, requiring updates to two documents within a single transaction.

```javascript
const session = db.getMongo().startSession();
const accountsCollection = session.getDatabase("bank").accounts;

try {
  session.startTransaction();

  accountsCollection.updateOne(
    { _id: "account1" },
    { $inc: { balance: -100 } }
  );

  accountsCollection.updateOne({ _id: "account2" }, { $inc: { balance: 100 } });

  session.commitTransaction();
  console.log("Transaction committed successfully.");
} catch (error) {
  session.abortTransaction();
  console.error("Transaction aborted due to an error:", error);
} finally {
  session.endSession();
}
```

**Best Practices:**

- Keep transactions short-lived to minimize locks.
- Avoid long-running transactions to prevent performance bottlenecks.
- Use read and write concerns to specify data consistency and durability levels.

---

### Replication

Replication in MongoDB ensures high availability, redundancy, and data durability by maintaining identical copies of data across multiple servers. It uses a replica set, which consists of:

- **Primary Node**: Handles all write operations.
- **Secondary Nodes**: Replicate data from the primary and handle read operations (if enabled).
- **Arbiter Node**: Participates in elections but does not store data.

**Key Features**:

- **Automatic failover**: If the primary node goes down, a new primary is elected from the secondaries.
- Supports read scaling by directing read queries to secondary nodes.

Example: Creating a Replica Set

1. Initialize a replica set:

```javascript
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" },
  ],
});
```

2. Check the replica set status:

```javascript
rs.status();
```

**Benefits:**

- Provides data redundancy.
- Improves read scalability.
- Ensures automatic recovery in case of node failure.

---

### Sharding

Sharding is a method of distributing data across multiple servers (shards) to enable horizontal scaling. It allows MongoDB to handle large datasets and high-throughput operations efficiently.

**Key Components**:

- **Shard**: A subset of the data.
- **Config Server**: Stores metadata and configuration information.
- **Query Router (mongos)**: Routes client queries to the appropriate shards.

**Sharding Strategy**:

MongoDB uses a shard key to determine how data is distributed across shards. The shard key can be:

- **Hashed**: Distributes data evenly but loses range query efficiency.
- **Ranged**: Supports range queries but may lead to uneven data distribution.

Example: Enabling Sharding

1. Enable sharding on a database:

```javascript
sh.enableSharding("ecommerce");
```

2. Shard a collection:

```javascript
sh.shardCollection("ecommerce.orders", { userId: 1 });
```

3. Verify sharding:

```javascript
sh.status();
```

**Benefits**:

- **Scalability**: Handles large datasets by distributing them across multiple servers.
- **High Throughput**: Allows parallel query execution.
- **Fault Tolerance**: Ensures data availability even if some shards fail.

**Best Practices**:

- Choose a shard key carefully to avoid data skew.
- Monitor shard utilization to maintain balanced data distribution.
- Use hashed shard keys for uniform distribution in write-heavy workloads.
