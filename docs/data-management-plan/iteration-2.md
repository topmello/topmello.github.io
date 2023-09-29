# Iteration 2 - History and Safety

In the second iteration of our project, the primary objective is to enhance the user experience by offering features that allow users to track, review, and share their travel routes. This iteration is designed to make the cultural navigation process more personalized and interactive. By introducing functionalities like travel route history review, scheduling, real-time tracking, and route sharing, we aim to create a platform where users can not only navigate through the city but also share their experiences and learn from others.

## Data Tech Stacks:

- **PostgreSQL**: Serving as our primary relational database, PostgreSQL stores user-specific data, including generated routes, prompts used, and room-related information. Its robustness and scalability ensure the efficient handling of user interactions and data.
- **Redis**: Integrated for its superior performance in managing data with short lifespans, Redis excels in real-time data retrieval. Its capabilities extend to session management, location tracking, and log streaming, all while ensuring optimal storage and enhanced security through its TTL feature.
- **FastAPI**: Adopted for its performance and Pythonic nature, FastAPI aids in creating a seamless user interface. It employs Pydantic for data validation, ensuring the quality and integrity of user data inputs.
- **Open Data Melbourne**: Leveraging datasets from Melbourne's open data platform, our platform gains access to a wealth of city-specific information, ranging from infrastructure to cultural landmarks. This data integration enhances the platform's accuracy and relevance when offering route suggestions or city insights to users.
- **SocketIO**: Facilitating real-time communication, especially for location tracking features, SocketIO ensures instantaneous data transmission, offering users a real-time interactive experience.
- **MapBox, Google Translate & Google Location APIs**: These external APIs are integrated to enrich the platform's functionalities. MapBox assists in generating routes, Google Translate aids in user input translation, and the Google API is pivotal for location search, all culminating in a comprehensive user experience.
- **Huggingface's Sentence Transformers**: This AI-powered integration enhances the platform's semantic search capabilities, allowing for deeper comprehension of user inputs and more contextually relevant responses.

## User Data Collection:

The current iteration of our platform places a pronounced emphasis on the effective and responsible collection and management of user data. This section of the Data Management Plan outlines our approach to handling user data, with a focus on the route history, route sharing, and route favoriting features, while simultaneously upholding the users' privacy and data rights.

We capture the following user-specific data points:

- Route Generated: This pertains to the specific paths users choose or generate within the application.
- Prompts Used: These are the prompts or messages that users interact with during their navigation experience.
- Rooms Created: Every time a user opts to share their route, a unique room is created, and this interaction is recorded.
- Route Favoriting: Details of routes that users mark as their favourites are stored, providing insights into preferred paths.

## User Data Application:

- **Route History**: Enables users to reflect on their past navigational choices and perhaps rediscover routes they found valuable.
- **Route Sharing**: Users can instantaneously share their selected route with another user.
- **Route Favoriting**: This feature allows for easy and quick access to routes that users find particularly useful or enjoyable.
- **Real time user location tracking**: By leveraging SocketIO, users can securely and instantaneously share their current route and location with another user without the need for location storage.

## API Integration:

To further enhance user experience and accuracy, we have integrated several external APIs:

- **MapBox API**: For precise route generation, we utilise the MapBox API which thrives on open location data, providing users with the most accurate and efficient routes.
- **Google Translate API**: Understanding that our user base might be diverse, the Google Translate API assists in translating user inputs, ensuring seamless interaction for users of various linguistic backgrounds.
- **Google API for Location Search**: To bolster accuracy in location search and provide users with comprehensive results, we have incorporated the Google API, renowned for its precise location-based services.

## AI Integration for Enhanced Semantic Search:

In our continuous pursuit to revolutionise the user experience, integrating cutting-edge AI capabilities remains central to our platform's evolution. A particularly significant enhancement in this iteration is the incorporation of Huggingface's sentence transformers. This advancement allows us to encode user inputs into embeddings, providing the foundation for a rich semantic search experience.

The integration of Huggingface's sentence transformers offers a twofold advantage:

1. **Precision & Relevance**: By understanding the deeper, semantic intent behind user inputs, the platform can provide search results or suggestions that are profoundly accurate and tailored to the user's implied needs.
2. **Efficiency**: Encoding textual data into embeddings facilitates quicker comparisons and searches, ensuring that users receive instantaneous responses without compromising on the quality or relevance of the results.

## Database Design and Data Migration:

**PostgreSQL**:
To support these features, a robust database design is essential. Therefore, the tables will be created as follow:

- The `ROUTE` table is the heart of the travel route functionalities. Each route is uniquely identified by a `route_id`. This table also contains a foreign key, `created_by_user_id`, linking to the user who travelled the route.
- The `ROUTE_PROMPT` table is designed to store prompts or messages related to specific routes. Each prompt has a unique id and is linked to prompt and route via a foreign key, `prompt_id` and `route_id`. The prompt related to the route is stored in the `prompt` column as an array of strings.
- Lastly, the `USER_ROUTE_VOTE` table acts as a bridge, connecting users to their preferred routes and prompts.

**Redis**:
Moreover, we are adding Redis as a part of our database architecture because of its unparalleled performance and efficiency in handling data with defined lifespans. Redis, an in-memory data structure store, ensures rapid data retrieval, which is crucial for features that require real-time response, such as location tracking and session management. Additionally, its support for various data structures, like strings, hashes, and lists, ensures flexibility in storing and managing various data types. It's time-to-live (TTL) feature makes it ideal for data that needs automatic expiry after a set period, like room numbers and refresh tokens. This built-in expiry mechanism not only optimises storage but also contributes to security by ensuring that transient data isn’t available indefinitely.

## Data Security and Privacy:

our platform, which revolves around personal travel routes and real-time location sharing. Therefore, data security and privacy concerns can be paramount. Below is an in-depth exploration of our approach to ensuring both security and privacy:

- **Authentication via Refresh Tokens**: The refresh token table plays a pivotal role in user authentication. By employing refresh tokens: We enable users to maintain prolonged sessions without the need for frequent re-authentications, thereby enhancing user experience. At the same time, the periodic expiration of these tokens (TTL of 7 days) ensures that the possibility of unauthorized access due to token compromise is limited.
- **SocketIO for Real-time Tracking**: Real-time tracking will be implemented using socketIO and the user must be opt-in, ensuring users have control over their privacy.
- **Route Sharing**: The Room IDs will be stored with a time-to-live (TTL) mechanism, ensuring data security by automatically deleting room information after a set period. This minimises the window of vulnerability where unauthorized individuals might attempt to access shared routes.

## Data Quality and Assurance:

In ensuring the highest standards of data quality and assurance, we have incorporated various mechanisms:

- **Type Safety**: With Pydantic, every input or output model is type-annotated, ensuring that the application handles only valid data types, mitigating the risk of type-related errors and enhancing overall data quality.
- **Automatic Data Validation**: With Pydantic models, we have implemented automatic data validation, ensuring that all incoming data meets defined standards and specifications.
- **Data Transformation**: Pydantic models can automatically transform incoming data into the desired format, further enhancing data quality and consistency, and ensuring that the stored data is clean, consistent, and usable.

## Archiving and Preservation:

To ensure the secure and efficient archiving and preservation of user data, we have employed various strategies:

- **Room IDs**: Stored with a time-to-live (TTL) mechanism, Room IDs are automatically deleted after a set period, enhancing security and optimising storage.
- **Refresh Tokens**: Stored in Redis and come with a TTL of 7 days. This approach limits the exposure window of each token, further enhancing the platform’s security. 
- **Location Data**: Not stored within our databases, ensuring that users' real-time locations are never at risk of unauthorized access.

## Conclusion:

Our data management strategy for user data underscores the balance between offering tailored, responsive features and upholding data privacy and integrity. Through careful and thoughtful planning, we are confident that our platform will continue to provide exceptional, seamless experiences to users, all while ensuring the utmost standards of data security and protection.
