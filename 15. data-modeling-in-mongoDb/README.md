# Data Modeling

## Relations

MongoDB is a NoSQL database, it doesn't
enforce strict schema relationships like foreign
keys in relational databases. 

We can still model relationships between documents in
MongoDB using a few approaches. 

- The two main types of relationships are:

1. Embedded Documents (Denormalization)
2. Referenced Documents (Normalization)

- Types of Relationship

1. One to One
2. One to Many
3. Many to Many

- How can we maintain relationship in MongoDB?


Embedded Documents                  | {
    - userA                         |   "_id": "user1",
        - orderA                    |   "name": "Amit Sharma",
        - orderB                    |   "email": "amit.sharma@example.com",
                                    |
                                    |   "orders": [
                                    |       {
                                    |            "_id": "order1",
                                    |            "product": "Laptop",
                                    |            "amount": 50000,
                                    |            "order_date": "2024-08-01"
                                    |       },
                                    |       {
                                    |           "_id": "order2",
                                    |           "product": "Mobile Phone",
                                    |           "amount": 15000,
                                    |           "order_date": "2024-08-05"
                                    |       },  
                                    |    ]
                                    | }
                                    |  