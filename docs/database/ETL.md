---
sidebar_position: 4
---
# ETL Process

## Prerequisites

- Python 3.8 or above and Pip should be installed on the local machine.
- Access to to the project repository and clone the Git repository using the command: 
  ```bash
  git clone https://github.com/topmello/settle-aid-data-wrangling.git

- Or downloading and extracting the ZIP file of the repository.

## Data Collection

In order to collect the open data, the following datasets are accessed from the [Melbourne Open Data Platform](https://data.melbourne.vic.gov.au/) using CSV format which require to download manually:

| Name                                                                                                                                                    | Frequency of Updates | License |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|------------|
| [Landmarks and places of interest](https://data.melbourne.vic.gov.au/explore/dataset/landmarks-and-places-of-interest-including-schools-theatres-health-services-spor/information/)                        | Monthly              | CC BY      |
| [Business establishments location and industry classification](https://data.melbourne.vic.gov.au/explore/dataset/business-establishments-with-address-and-industry-classification/information/) | Annually             | CC BY      |
| [Café, restaurant, bistro seats](https://data.melbourne.vic.gov.au/explore/dataset/cafes-and-restaurants-with-seating-capacity/information/)                          | Annually             | CC BY      |

## Data Processing

After the data is collected, the data should be store in the ./data folder in the project directory. Then, the data processing can be done by running each scipt related to the location type including restaurant, landmark, grocery, and pharmacy.

Noted that this step will take a long time to finish and it can be skipped to run backend server directly if the data is not updated and already processed.

## Data Ingestion

The processed data is stored in the ./data folder in the project directory as JSON file. The data is then ingested into the database by copying to JSON file to backend repository and running the ingestion script.

