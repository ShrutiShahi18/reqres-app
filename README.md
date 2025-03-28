📘 Reqres User Management App

A React-based user management application that interacts with the Reqres API to perform user authentication, display a paginated user list, and allow editing and deleting users.

📋 Features

✅ User Authentication (Login)✅ Paginated User List (Fetch from Reqres API)✅ Edit and Delete User Functionality✅ Glassmorphism UI with Tailwind CSS✅ React Router Navigation✅ API Error Handling and User Feedback

🛠️ Tech Stack

Frontend: React (with Vite for fast builds)

Routing: React Router

HTTP Client: Axios

Styling: Tailwind CSS (with Glassmorphism Design)

📂 Project Structure

reqres-app/
├── public/
├── src/
│   ├── components/
│   │    ├── LoginForm.jsx
│   │    ├── UserList.jsx
│   │    ├── UserCard.jsx
│   │    └── EditUserForm.jsx
│   ├── pages/
│   │    ├── LoginPage.jsx
│   │    ├── UserListPage.jsx
│   │    └── EditUserPage.jsx
│   ├── App.jsx
│   ├── api.js
│   ├── routes.jsx
│   └── main.jsx
└── package.json

🚀 Getting Started

1. Clone the repository

git clone https://github.com/yourusername/reqres-app.git
cd reqres-app

2. Install dependencies

npm install

3. Run the development server

npm run dev

The app should be running on http://localhost:5173

🔐 Authentication

Use the following credentials to log in:

Email: eve.holt@reqres.in

Password: cityslicka

📊 API Endpoints

Login: POST https://reqres.in/api/login

Get Users: GET https://reqres.in/api/users?page=1

Update User: PUT https://reqres.in/api/users/{id}

Delete User: DELETE https://reqres.in/api/users/{id}

📖 Usage

Login Page: Enter credentials to access the user list.

User List Page: View, edit, and delete users. Supports pagination.

Edit User Page: Modify user details (first name, last name, and email).

📦 Build for Production

npm run build

📤 Deployment

You can deploy the built application to any static hosting provider (e.g., Vercel, Netlify).

Build the project:

npm run build

Deploy the contents of the dist/ folder.

🐞 Troubleshooting

Ensure all dependencies are installed: npm install

Check for errors in the browser console (Ctrl + Shift + J)

Restart the development server: Ctrl + C, then npm run dev

📃 License

This project is licensed under the MIT License.

💙 Made with ❤️ using React and Tailwind CSS.

