#  **Foodie.in – Food Ordering Website**

## 🚀 **Overview**
Foodie.in is a full-stack food ordering website that allows users to browse food items, add them to a cart, and complete their purchase using an integrated payment system. It includes an admin panel for managing the database and supports user authentication with login and registration features.


<img width="1920" height="1080" alt="Screenshot 2025-07-24 200321" src="https://github.com/user-attachments/assets/53de9ff4-89dc-48f2-b0f0-2edc4cc77dad" />

## 🛠️ **Tech Stack**
- **Frontend:** JavaScript, React (Vite)
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** bcrypt
- **Development Tools:** nodemon (for running the backend and frontend)

## 🌟 **Features**
- **Home Page:** Displays available food items sorted into categories.  
- **User Authentication:**  
  - Login and registration pages for new and existing users.  
  - Passwords are securely hashed using bcrypt.  
- **Cart and Payment:**  
  - Add and remove food items from the cart.  
  - Secure checkout using Stripe.  
- **Admin Panel:**  
  - Manage food items and categories.  
  - View and update orders.  
- **Responsive Design:** Optimized for both desktop and mobile devices.

- **Screenshots** :

- <img width="1920" height="1080" alt="Screenshot 2025-07-24 200331" src="https://github.com/user-attachments/assets/f8ac2348-5929-4730-8506-cfc99f01c6c9" />
- <img width="1920" height="1080" alt="Screenshot 2025-07-24 200404" src="https://github.com/user-attachments/assets/c608dbe0-578d-4c7d-aa43-60cdecaab5ec" />
- <img width="1920" height="1080" alt="Screenshot 2025-07-24 200510" src="https://github.com/user-attachments/assets/eb885897-91cc-400d-a715-ef2d8516a5e9" />

## ⚙️ **Installation Instructions**
To run this project locally, follow these steps:

1. **Clone the repository:**
```bash
git clone <repo-url>
cd foodie-in
```

 2.**Install dependencies:** Install the required node packages
```bash
npm install
```
 3.**Connect MongoDB:** Replace the connection string in db.js with your MongoDB connection string.

 4.**Run the project:** Start the backend and frontend using nodemon - 
```bash
nodemon backend/index.js  
nodemon frontend/index.js  
```

## 👥 **Contributors**
- Satya Karthik. R
- Sandeep Kumar Jena
- Shamanth S Joshi
- Sudhanva H Rao

