---
sidebar_position: 3
---


# Redis


Redis, a highly performant in-memory data structure store, serves as a secondary database within our platform. Its primary role is for caching data, offering rapid data retrieval compared to traditional databases. Due to its in-memory nature, Redis ensures ultra-fast data access, making it an ideal choice for caching scenarios where speed is paramount.

## Functionality

The application utilises Redis mainly for data management with Time-To-Live (TTL). TTL ensures that cached data has an expiration time, optimising cache performance and data relevance. By automatically invalidating stale or outdated data, the system can maintain fresh data in the cache, ensuring users receive the most up-to-date information while reducing unnecessary database queries.

## Implementation Details

- **Refresh Token Management**: Redis efficiently handles refresh tokens for users. These tokens are crucial for maintaining user sessions, and having them in Redis allows for swift access and validation. 

- **Room Data**: Redis aids in generating unique room PINs, ensuring these are stored promptly and can be quickly fetched or validated.

- **Feed & Logs**: Activities such as user actions or system logs are also cached in Redis. This offers an efficient way to monitor and log user activities, and system events, in real-time.

- **Data Fetching Strategy**: The platform employs a strategy where it first attempts to fetch data from Redis. If the data is unavailable (due to cache misses or TTL expiry), it resorts to the primary PostgreSQL database. Once fetched, the data is then stored in Redis for subsequent swift access. This layered approach ensures that the system capitalizes on the speed of Redis while maintaining the reliability of PostgreSQL.

## Enhancements & Best Practices

Using decorators like `@async_retry()`, the platform ensures resilience in its Redis operations, retrying operations that might initially fail due to transient issues. Async context managers, such as `redis_room_db_context()`, ensure that Redis connections are efficiently managed, opened when needed, and closed after operations conclude, optimizing resource usage.

**Conclusion**

Redis, with its blazing speed and TTL capabilities, complements the PostgreSQL database, ensuring users get swift responses while reducing the load on the primary database. This synergy between databases ensures that the platform remains scalable, performant, and user-friendly.
