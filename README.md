# CodingTest
Using **React + TypeScript**, build a small interface with the following backend and frontend components:

### **Backend Task: Create a simple backend API proxy**
Build a small server (Node/Express):
- Add route: **GET `/api/users`**
- This route:
    - Fetches from `https://jsonplaceholder.typicode.com/users`
    - Adds basic error handling
    - Returns the data to the frontend

### Frontend Tasks:
### **1. Fetches a list of users from your backend**
```
GET http://localhost:3000/api/users
```
### **2. Displays the users in a searchable, filterable list**
- Show: name, email, company name
- Add a search box that filters by **name** (client-side)
- Should update results as you type (debounced: 300ms)
### **3. When a user is clicked, show their details in a side panel**
Display:
- Name
- Email
- Phone
- Website
- Address (street, city)
- Company name
### **4. Add the ability to “favorite” a user**
- Clicking a ⭐ icon toggles the user as favorited
- Store favorites in **React state (not localStorage)**
- Show a “Favorites Only” toggle filter

### Submission Instructions:
- git clone this repository on your github.
- Share your github repository url with us.
- Connect and deploy your github repository to vercel
- Ensure to regularly push your code, it should run a redeployment on vercel
- Share the live deployment vercel link
