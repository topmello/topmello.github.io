# Translation

This module provides an endpoint for translating text using the Google Cloud Translation API.

## Dependencies

- fastapi: The main framework used for building the API.
- schemas, oauth2, translation: Internal modules containing data schemas, OAuth2 utilities, and translation functions respectively.
- google.cloud: Used to interact with the Google Cloud Translation API.

## Utility Functions

- translate_text(text: str) -> dict: Translates a single text into the target language and returns the translated text.
- translate_list(text_list: list[str]) -> list[str]: Translates a list of texts into the target language and returns a list of translated texts.

## Configuration

- The Google Cloud Translation API requires authentication. The path to the authentication credentials is specified in the credential_path variable. Ensure that the google_application_credentials.json file is present in the specified path and contains valid credentials.
- The environment variable GOOGLE_APPLICATION_CREDENTIALS is set to the path of the authentication credentials to authenticate the API requests.

## Endpoints

### Translate Endpoint (/)

- Method: POST
- Input: query (containing a list of texts to be translated)
- Output: Translated texts.
- Description: Translates a list of texts into the target language (English) using the Google Cloud Translation API.
