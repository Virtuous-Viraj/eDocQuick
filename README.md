# eDocQuick
eDocQuick is a doctor appointment booking website developed to address the issue of unnecessary crowding at doctors' offices, both during and after the pandemic. The website provides a platform where users can easily find and book appointments with the right doctors based on their specialization, while ensuring that appointments do not overlap. The system differentiates between three user categories: admin, normal user, and doctor, each with their own set of functionalities.

## Key Features : 
### • User Registration and Login: 
Users can create an account and log in to access the website's features.
### • User Roles: 
Users are categorized as admin, normal user, or doctor, with different privileges and access levels.
### • Doctor Listing: 
Users can view a list of available doctors, including their specialization and profile information.
### • Doctor Search: 
Users can search for doctors based on their specialization to find the right one for their needs.
### • Doctor Appointment Requests: 
Users can request appointments with doctors based on their availability.
### • Doctor Approval/Rejection: 
Doctors can approve or reject appointment requests from users.
### • Appointment Notification: 
Doctors receive notifications when users book appointments, and users are notified when their appointment requests are approved.
### • Appointment Scheduling: 
Appointments are scheduled in fixed time slots, and overlapping appointments are not allowed.
### • User Profile: 
Doctors and users have their own profiles with relevant information, including name, address, specialization, and fees.
### • Admin Controls: 
The admin has access to all activities and can approve user requests to become doctors, block users or doctors, and manage notifications.
# Screenshots
Here are some screenshots showcasing the different functionalities of the eDocQuick website:

### • User Side
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/c3d9664e-4e33-4259-a8c3-1f5023244be7)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/d9a691ae-2442-4811-96ff-1649d33ba2b3)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/f1dd2f2f-b5e4-439e-bd58-790164f6dac5)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/b30c5150-35e5-4b85-ad7a-b9b94f42a0ab)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/659637d8-0a8a-480c-93ef-9c650689d7b6)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/6a4f1dd5-62c5-43f1-8480-d10fb6592799)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/a022fce4-51fe-471f-9e1a-c48e3ceec93e)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/7102d431-880e-454d-bb38-7a1bb825b111)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/f84dc736-7b93-4d23-a87d-0cd2c6b84c04)

### • Doctor Side
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/077bd0eb-e9be-4659-94c5-9d87a00b93b2)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/fcff1e9b-4765-4bbf-bd18-7a58c2790ccd)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/633d7756-03bb-49c1-9a5f-2120001728dc)
Once Approved or Rejected User will recieve notification
### ● Admin 
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/e488c4c1-3c48-4264-b242-81713eb42424)
![image](https://github.com/Virtuous-Viraj/eDocQuick/assets/90627072/0fbc6bed-b643-470f-b353-2feaf3f588ef)

# Technologies Used
* Frontend: React, Ant Design, Redux-Toolkit
* Backend: Node.js, Express
* Database: MongoDB
* UI Framework: Bootstrap

# Getting Started
To get a local copy of the project up and running, follow these steps:

### Clone the repository:
`git clone https://github.com/your-username/eDocQuick.git`

Install the dependencies for both the frontend and backend:
### Frontend
```
cd client
npm install
```

### Backend
```
npm install
```
Configure the backend and MongoDB with connection string.

## Run the application:

### Start the backend server:
```
cd backend
nodemon server.js
```
### Start the frontend development server:
```
cd frontend
npm start
```
The application should now be accessible at http://localhost:3000.

## Deployment
The eDocQuick website is deployed on Vercel. You can access it at (https://e-docquick.vercel.app/).

I have also seperated client and server sides for convenience : 
* [frontend](https://github.com/Virtuous-Viraj/eDocQuick_client)
* [backend]( https://github.com/Virtuous-Viraj/edocquick-backend)
## Contributing
Contributions are welcome! If you'd like to contribute to the eDocQuick project, please follow these guidelines:
* Fork the repository.
* Create a new branch for your feature/bug fix.
* Commit your changes with descriptive commit messages.
* Push your changes to your fork.
* Submit a pull request detailing your changes.
