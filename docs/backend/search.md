# Query

Allow three types of search (Required authentication)

1. Search by prompt with current location

Input Example:

{"query":"Boring","location_type":"landmark","longitude":144.9549,"latitude":-37.81803,"distance_threshold":10000,"similarity_threshold":0.1}

2. Create best route in terms of similarity using input as like of prompt

3. Sample route using probabilities from similarity

Input Example:

{"query":["Chinese","Chinese","Chinese"],"location_type":["landmark","restaurant","restaurant"],"longitude":144.9549,"latitude":-37.81803,"distance_threshold":1000,"similarity_threshold":0}