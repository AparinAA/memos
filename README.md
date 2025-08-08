# My Voice Memos

My Voice Memos is a React application that allows users to create/edit delete memos using either voice or keyboard input. The application provides a user friendly interface for managing notes and utilizes the SpeechRecognition API for voice input functionality.

## Features

- Create new voice memos using voice or keyboard input.
- View a list of all saved memos.
- Edit existing memos.
- Delete memos.
- Store memos in LocalStorage for persistence.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd memos
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:

```
npm run dev
```

This will launch the app in your default web browser.

## Project structure

- components: isolated reusable components with CSS modules.
- pages: route-level containers that compose components and handle navigation.
- services: data access, validation, and storage abstractions (LocalStorage/IndexedDB).
- store: global application state.
- shared: common hooks and utilities shared across the project.
- assets: static files (SVGs, images).
- @types: type/module declarations

## Technologies Used

- React
- SpeechRecognition API
- LocalStorage
