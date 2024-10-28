# SpendWise: Expense Tracking App 💰

SpendWise is a user-friendly expense tracking application developed with ReactJS, JavaScript, and CSS. It empowers users to manage their budgets effectively, offering a distinctive UI and offline data access to keep track of expenses anytime.

---

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Project Setup and Execution](#project-setup-and-execution)
- [Instructions to Run](#instructions-to-run)
- [Step-by-Step Process](#step-by-step-process)
- [License](#license)

---

## ✨ Features

- **Intuitive Expense Tracking**: Track individual budgets and view overall expense summaries in real-time.
- **Offline Access**: Local storage allows users to view and manage their expense data offline.
- **React Router**: Smooth navigation between sections, enhancing the user experience.
- **Visual Interface**: Custom styling for a distinctive and engaging UI.

---

## 🚀 Tech Stack

- **ReactJS**: Frontend library for building responsive and dynamic interfaces.
- **JavaScript**: For application functionality and core logic.
- **CSS**: Custom styling for a clean and appealing design.
- **React Router**: For smooth navigation between components.
- **Local Storage**: For offline data persistence and access.

---

## 📦 Dependencies

Ensure the following dependencies are installed in your environment:

- **Node.js** (v14 or above)
- **NPM** (Node Package Manager, generally comes with Node.js)

Additional libraries required:

- **React**: Frontend library for UI components
- **React Router**: For navigation between different sections
- **FontAwesome**: For icons and design elements

### Installation of Dependencies
To install the required dependencies, run:

```bash
npm install
```
# ⚙️ Project Setup and Execution

To set up the **SpendWise Expense Tracking Application** on your local machine, follow these detailed steps:

### 1. Clone the Repository
First, download the project files to your local environment by cloning the GitHub repository. This creates a local copy of the project.
```bash
git clone https://github.com/yourusername/SpendWise.git
cd SpendWise
```
### 2. Install Dependencies
After navigating to the project directory, install all the dependencies. These include ReactJS and other supporting packages specified in package.json. The following command will download and install all required modules.
```bash
npm install
```
### 3. Set Up Environment (Optional)
If the project has environment-specific variables (e.g., for storing sensitive keys or configuration options), create a .env file in the root directory. Currently, this is optional but recommended for future scalability.

### 4. Run the Application
To launch the application locally:

```bash
npm start
```
The npm start command initiates the development server, usually running on port 3000, and opens the application in your default browser.

### 6. Access the Application
Once the server starts, navigate to:
http://localhost:3000
This link opens the SpendWise app, where you can interact with its features, such as adding and tracking expenses.

# 🏃 Instructions to Run

To ensure smooth execution, follow this checklist before running SpendWise:

### 1. Ensure Node.js and NPM are Installed
Check if Node.js and npm (Node Package Manager) are installed by running the following commands:

```bash
node -v
npm -v
```

These commands display the installed versions of Node.js and npm. If either is missing, download and install the latest version of Node.js from nodejs.org.

### 2. Launch the Development Server
In the SpendWise project directory, start the server with the following command:

```bash
npm start
```
This launches the React development server, which will automatically open the SpendWise app in your browser at http://localhost:3000.

### 4. Verify Offline Functionality
SpendWise uses the browser’s local storage to store expense data, enabling offline access. After entering some expense data, disconnect from the internet and refresh the app to verify that data persists offline.
This functionality allows users to continue using SpendWise without an internet connection, making it ideal for tracking expenses on the go.


# 🔍 Step-by-Step Process

Below is a detailed, step-by-step breakdown of the SpendWise application functionality:

### 1. Data Collection and Storage
- **Data Entry**: Users enter essential expense details such as the amount, category, and date of each expense.
- **Data Storage**: All expense data is stored in the browser’s local storage, enabling:
  - **Offline Access**: Users can continue to access their data even when offline.
  - **Data Persistence**: Data remains available even if the browser is closed or the system is restarted.

### 2. Navigation Using React Router
SpendWise leverages **React Router** to facilitate seamless navigation between pages:
- **Home Page**: Offers an overview of all expenses, including a breakdown by category and the total spending summary.
- **Add Expense Page**: Provides a form for users to enter new expenses, with input validation to ensure accuracy.
- **Budget Page**: Allows users to set monthly budgets and view budget statuses to monitor their spending, helping prevent overspending.

### 3. Expense Tracking and Management
SpendWise allows users to manage expenses efficiently:
- **Add Expense**: Users can enter individual expenses, specifying:
  - **Amount**: The total expense amount.
  - **Category**: Select from categories such as food, entertainment, etc.
  - **Date**: Date of the expense.
- **Edit and Delete**: Users can edit or delete previously entered expenses, offering flexibility for updating records.
- **Data Validation**: The app validates all inputs to prevent incorrect entries (e.g., negative values or missing fields).

### 4. Data Visualization
SpendWise provides visual insights to help users understand their spending patterns:
- **Expense Summary**: Displays total expenses and compares them against the user’s budget for better financial tracking.
- **Category Breakdown**: Offers a visual representation of spending by category using charts (e.g., bar or pie charts), enabling users to quickly identify their spending habits.

### 5. Offline Accessibility
The SpendWise app is designed to function seamlessly offline:
- **Local Storage**: All user data is stored in the browser’s local storage, so users can:
  - Access and modify data without needing an internet connection.
  - Continue to use the app with previously stored data when offline.
- **Data Retrieval**: Upon returning to the app, the data is loaded directly from local storage, ensuring continuity without any manual intervention.

### 6. Testing and Debugging
To ensure the app runs smoothly, perform the following tests:
- **Test Expense Addition**: Enter sample expenses and verify they appear accurately in the summary section.
- **Offline Test**: Disconnect from the internet and reload the app to confirm that all data persists offline.
- **Edge Case Testing**: Test scenarios to handle special cases, such as:
  - Entering negative amounts.
  - Adding exceptionally large values.
  - Using invalid or future dates.

### 7. Deployment Preparation (Optional)
If you plan to deploy SpendWise for public access, follow these steps:
- **Build for Production**: Create a production-ready build by running:
  ```bash
  npm run build
  ```

# 📄 License
This project is licensed under the **MIT License**. For more details, refer to the `LICENSE` file in the repository.

Happy hacking with SpendWise! 🎉



