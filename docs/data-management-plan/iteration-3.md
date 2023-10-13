# Iteration 3 - Recommendations and Challenges

In iteration 3, significant enhancements were made to augment user interaction and engagement within the application. A global feed feature was introduced, allowing users to publish and share routes with the broader user community. The application now recommends these shared routes to users, enhancing the exploratory experience within the app. Additionally, a challenge system was established to incentivize user activity by tracking various interactions and ranking users on a leaderboard.

## User Data Collection

**Published Routes:**
The system records data regarding routes published by users. This data includes the route details (start, end, waypoints, and duration) and metadata (number of likes, etc.).

**Challenges:**
Challenges data, including the number of walking steps, are collected for each user. This data is used to monitor user progress in challenges and award points accordingly.

## User Data Application

**Published Routes:**
User-published route data is utilized to populate the global feed, making these routes available to all application users. It is also used to manage route availability (expiry after one day) and inform the route recommendation system.

**Challenges Data:**
Challenges data, including walking steps, is used to rank users on the leaderboard, providing incentives for further interaction with the application.

### Foresight - Future Utilisation of User Data and Open Data for Enhanced Personalisation

**Current Scenario:**
At present, the system utilizes a basic model for route recommendations, primarily sorting based on likes and time. This method is practical given the current user base and serves the purpose of offering some level of personalization to users.

**Future Enhancements:**
As the application grows and the user base expands, there is a discernible pathway to enhance the recommendation system. The extensive user data collected, coupled with external open data, will be pivotal in this enhancement.

- **Personalised Recommender System potentials:**
    - Utilising Location Embeddings: Existing location embeddings can be leveraged as item features to provide more personalized route recommendations.
    - Users' historical data and preferences can be analyzed to make the recommendations more tailored.
    - Integration with Open Data: Integrating open data sources (like weather data, traffic data, and event data) will allow the system to provide even more contextual and relevant route recommendations.
    - Machine Learning Algorithms: Employing machine learning algorithms and collaborative filtering can significantly improve the recommendation engine.

## Database Design

The database is designed to efficiently store and manage both user and route data.

**Redis:**
- Used for storing the global feed of published routes.
- Employed for managing route expiry through TTL (Time-To-Live).
- Utilised for storing leaderboard data.

### Redis
**routes_feed:**
The routes_feed object in the database is used for storing published routes that users wish to share within the application.

**Functionality associated with routes_feed includes:**
- `publish_route_in_redis`: This function adds a route to a Redis ZSET with a computed score, combining the number of votes and a normalized timestamp, ensuring freshness and popularity in the feed. The route is given an expiration time of one day (86400 seconds).
- `cleanup_expired_routes`: This function removes routes from the ZSET in Redis that have expired, ensuring that the routes_feed remains fresh and relevant.

**challenge_leaderboard:**
The challenge_leaderboard object in the database is used to keep track of user scores and rankings based on their interactions and challenges completed within the application.

**Functionality associated with challenge_leaderboard includes:**
- `get_leaderboard`: This function fetches the top users from Redis for the current week based on scores, offering a real-time leaderboard for user challenges.

**PostgreSQL:**
- Used for storing detailed user data, including challenges data and walking steps.
- Handles other persistent data necessary for the application.

**Challenge Table Attributes:**
- `id, name, type, grade, score`

**User_Challenge Table Attributes:**
- `user_id, challenge_id, year, month, day, created_at, progress, score_added`

### Archiving
**TTL (Time-To-Live):**
Published routes have a TTL of one day in the Redis database, ensuring that the global feed remains fresh and manageable.

**Backup:**
The prodrigestivill/postgres-backup-local image is employed for the daily backup of the PostgreSQL database.

### Implications for Database Design
- **Efficiency:** The use of Redis for managing routes_feed and challenge_leaderboard ensures high-speed data retrieval, enhancing the user experience by providing quick access to published routes and leaderboard rankings.
- **Scalability:** The system is designed for efficient data handling, allowing it to effectively manage an increasing volume of user data and published routes.
- **Reliability:** Regular cleanup of expired routes and daily backups of PostgreSQL ensure the reliability and integrity of the stored data.

## Data Quality
Validation checks are implemented to ensure that only valid and complete route data is accepted when a user publishes a route.

**Request Data Validation:**
Each endpoint receives data which is validated using Pydantic models.

**Score Calculation:**
Each challenge type has a unique calculator function. Calculates progress based on the provided data and challenge grade. Ensures progress does not exceed 1.0. Updates the user's score in Redis upon completion of the challenge.

## OpenAI's CLIP Integration for Enhanced Image-Text Alignment:

Integrating OpenAI's CLIP model enhances the bridge between textual prompts and visual content. This allow the application to provide more relevant images related to user queries, improving the user experience.


- Dynamic Image Processing: Images are categorized into groups like landmarks, restaurants, groceries, and pharmacies. When a textual prompt is entered, the system scans relevant image directories, ensuring specificity in results.

- Intelligent Image Retrieval: Upon receiving a text input, the most fitting image in the database is identified and matched, optimizing search relevance.

- Optimized Routing with Visuals: When a route is requested, it's paired with associated images by correlating user queries with specific location categories, thus providing a comprehensive visual representation.


## Conclusion

In conclusion, the third iteration introduced a global feed and a challenge system to the application. These features facilitate social and exploratory dimensions, and the leaderboard system adds a competitive element, potentially increasing user engagement. Detailed data collection and application contribute to the functionality and future enhancement possibilities of the application. Efficient database design and a focus on data quality and integrity ensure the reliable operation of these new features, promoting a consistent and user-friendly experience.
