---
sidebar_position: 2
---
# PostgreSQL

## Implementation

The core database is designed using PostgreSQL, chosen particularly for its prowess in handling vector-based and geo-spatial queries. These functionalities are essential for many modern applications that rely on location data and vector operations. To streamline the setup process and ensure consistency across different environments, a Dockerised approach has been adopted. The ankane/pgvector Docker image is leveraged, given its preinstalled pgvector extension. Additionally, to enhance the geo-spatial querying capabilities, the postgresql-15-postgis-3 extension is integrated. This combination provides a solid foundation for building scalable and efficient data-driven applications, allowing for intricate data operations, ranging from location-based services to advanced vector computations.


## Extensions

- Vector Extension (pgvector): pgvector provides efficient vector operations within PostgreSQL. It facilitates operations like similarity searches and nearest neighbor searches. Its integration ensures that vector-based computations are not only feasible but also optimized for peak performance.
- Geo-Spatial Extension (PostGIS): PostGIS enhances PostgreSQL, transforming it into a database that understands location and spatial relationships. It's essential for applications needing spatial databases.

## Tables
The primary database is structured using SQLAlchemy, With the integration of specialized modules like geoalchemy2 and pgvector, the database harnesses advanced capabilities, ensuring spatial data management and embedding functionalities are efficient and robust. This section offers a brief description of each table, describing its purpose, structure, and relationship within the database.


- **User**: Captures the essential user information, including unique identifiers, usernames, passwords, and account creation timestamps.

- **RefreshToken**: Stores refresh tokens for users, facilitating secure session management and associated expiration times.

- **Prompt**: Contains data about prompts created by users, encompassing arrays of prompts, negative prompts, location types, and creation timestamps.

- **Route**: Holds the details of routes, including arrays of locations, latitudes, longitudes, instructions, durations, and associated user creators.

- **User_Route_Vote**: A junction table that registers user votes for different routes, ensuring user engagement is tracked.

- **Prompt_Route**: Links prompts with routes, reinforcing the connection between user-generated content and available routes.

- **Landmark, Restaurant, Grocery, and Pharmacy**: These tables store respective location details, including names and geographical coordinates. Furthermore, they have an 'embedding' column which facilitates location recommendation.

- **Prompt_Landmark, Prompt_Restaurant, Prompt_Grocery, and Prompt_Pharmacy**: These tables bridge the association between prompts and various location types, ensuring each user-generated prompt can be linked to specific landmarks, restaurants, groceries, or pharmacies.

- **Challenge**: Centralizes information about challenges, encapsulating their names, types, grades, scores, and associated user challenges.

- **User_Challenge**: Manages user interactions with challenges, detailing the user, challenge identifiers, the year, month, day of interaction, progress made, and if the score was added.
              
