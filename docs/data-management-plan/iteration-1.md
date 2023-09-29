# Iteration 1 - Cultural Navigation based on Itinerary

## Data Analytics and Storage

### Hindsight

While the open data sources pertaining to 'Landmarks and places of interest', 'Business establishments location and industry classification', and 'Café, restaurant, and bistro seats' in Melbourne can offer invaluable insights, it's essential to be aware of potential exceptions and limitations:

- Open data may not always reflect real-time information due to the nature of frequency of sources updates and the data set are too large to include business opened in every year established
- Not all places or businesses may be covered. For instance, smaller or newer establishments might be underrepresented in the data, while larger, more established entities might dominate.
- Some data might not be directly relevant to the migrant integration cause. For instance, the data does not indicate its cultural inclusivity or how migrant-friendly it might be.

### Insight

#### Data acquisition

- **Data Access Method**: Navigated to official websites to locate datasets.
- **Data Formats**: Datasets downloaded in CSV formats for ease of processing and analysis.
- **Duplicates Removal**: Identified and removed any redundant entries.
- **Knowledge extraction**: Transformed the search results of each entry into embedding to represent the data.
- **Data Integration**: Ensured consistent classification and terminology across all integrated data.
- **Data Storage**: Used a secure SQL-based database for structured data storage.
- **Compliance and Confidentiality**: Ensured data usage adhered to the terms and conditions of each open data.

### Data Exploration and Visualisation

Before diving into visualisation, it's essential to understand the datasets and how they align with the migrant experience. For instance, landmarks could indicate cultural hubs, while grocery stores and pharmacies are essential services.

- **Number of Theme of Landmarks in Melbourne**: This visualisation can indicate cultural and historical hubs. A diverse range of landmarks means there are varied cultural touchpoints that migrants can connect with. Understanding which themes dominate can help in directing migrants to places where they might feel a sense of familiarity or learn more about Victorian culture.

- **Top 20 Industries in Terms of Land Uses**: While this might seem more economical than cultural, understanding the dominant industries can provide insights into job opportunities, industrial communities, or areas in the city. Knowing where these industries are located can help non-English speaking migrants find job opportunities that might not require strong English skills initially.

- **Top 10 Grocery Stores**: Grocery stores are essential for daily life. Identifying the major ones can help migrants locate where they can get their daily essentials. Moreover, if some of these grocery stores cater to international or ethnic foods, it can be comforting for migrants.

- **Top 10 Pharmacies**: Health is a primary concern, especially for newcomers unfamiliar with the environment. Directing migrants to the top pharmacies ensures they have access to medical supplies when needed. It also helps if some of these pharmacies have staff who speak multiple languages.

- **Visualisation of Embeddings**: t-SNE can be used to understand the clustering of different establishments or services in the city.

### Machine Learning

In the first Iteration machine learning will be mainly used for semantic search. This allows the user to input contextual information which will be transformed into embeddings and compare the similarity with the locations in the database using embeddings of description.

The model for transforming text is `sentence-transformers/all-MiniLM-L6-v2` from Hugging Face. It maps sentences & paragraphs to a 384-dimensional dense vector space and can be used for tasks like clustering or semantic search.

### Foresight

The datasets will be updated according to the frequency specified which will help in increasing the coverage of the area and allow more flexibility to the application.

### Wrangling and Storage

The data wrangling process begins by importing necessary libraries and reading datasets related to different location types: supermarkets, pharmacies, restaurants, and landmarks. For each location type, the data is filtered to focus on recent entries, ensuring relevance and accuracy. The datasets are then processed to extract specific columns, generate coordinates, and produce embeddings. These embeddings, which are numerical representations of text data, capture the semantic meaning of the location descriptions. By utilising embeddings, the system can facilitate semantic searches, allowing users to find locations not just based on keywords, but also based on the contextual and semantic relevance of their queries. This ensures a more intuitive and efficient search experience across all four location categories. Following the data wrangling process, every dataset for the different location types is stored in a JSON format. This structured format ensures that the data is easily readable and can be seamlessly integrated into the database.

The data is then inserted into the database using the script shown. It maps location types, such as landmarks and restaurants, to their respective database models and JSON data files. For each location type, the script reads the corresponding JSON file, loads its content, and prepares it for database insertion. Using SQLAlchemy, it inserts the data, handling any potential conflicts to maintain data integrity. This ensures that processed location data is efficiently stored in the database for future use.

