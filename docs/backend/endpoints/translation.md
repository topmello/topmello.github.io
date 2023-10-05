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


### **Translate Texts**

- **URL**: `/translate/`
- **Method**: `POST`
- **Description**: 
  This endpoint allows users to translate a list of texts. Users provide a list of texts, and the service returns the translated versions of those texts.
- **Request Body**:
  - `texts` (list of strings): The list of texts that need to be translated, as specified in the `schemas.TranslateQuery` model.

- **Response**: 
  The response will be a JSON object containing the translated texts. The structure of the response is given by the `schemas.TranslateRes` model, which primarily consists of the `results` attribute. The `results` attribute holds the list of translated texts corresponding to the input texts provided.
