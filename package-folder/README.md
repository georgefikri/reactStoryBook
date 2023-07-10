# My Storybook

This is a Storybook project that showcases the Button and Input components.

## Getting Started

Follow these steps to set up and run the Storybook project locally.

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Navigate to the project directory:
   cd my-storybook

3. Install the dependencies:
   npm install

4. Run the Storybook server:
   npm run storybook

5. Open your browser and navigate to http://localhost:6006/ to view the Storybook.

## Components

### Button

- The Button component is a primary UI component for user interaction.

- Props

* primary (boolean, optional): Determines if the button is the principal call to action.
* backgroundColor (string, optional): The background color of the button.
* size (string, optional): The size of the button. Available options: "small", "medium", "large".
* label (string, required): The label or text content of the button.
* onClick (function, optional): The optional click handler for the button.

### Input

- The Input component is used for user input and interaction ( default , password, email, number)

- Props

* placeholder (string, optional): The placeholder text for the input.
* value (string, optional): The value of the input.
* onChange (function, optional): The optional change handler for the input.
