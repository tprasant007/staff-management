# Staff Management Application

This is a MERN stack application that helps care home managers manage employee schedules efficiently. The application allows managers to assign shifts, view employee details, and edit schedules using a user-friendly interface.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **CSS**: Custom CSS for styling

  ## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/tprasant007/staff-management.git
   cd staff-management

2. **Install dependencies**
    navigate to backend and frontend and install dependencies<br />
   cd backend<br />
   npm install<br />

   cd frontend<br />
   npm install<br />

3. **Environmental Variable Setup**
    Create .env file in the backend folder and add following variables:<br />
   MONGO_URI=your-mongodb-connection-string<br />
    PORT=8000<br />

4. **Run the servers**
    for backend:<br />
   cd backend<br />
    npm start<br />


   for frontend<br />
   cd frontend<br />
   npm run dev<br />
   
5. **Run the application**
   open the browser and navigate to following url to view application<br />
   http://localhost:5173/<br />

   There are 2 pages: Dashboard and Employees<br />
   Dashboard displays all the employees name and their schedule<br />
   Employees displays all employees' detail and new employee and schedule can be added from this page<br />
   Employees details can be updated from this page and by clicking the link "view schedule", employees' schedule page opens, where new schedule can be added if there is none and schedule can be updated as well.

## API Endpoints
  GET /api/employees - Get all employees<br />
  POST /api/employees - Add a new employee<br />
  PATCH /api/employees/- Update employee details<br />
  DELETE /api/employees/- Delete an employee and their schedule<br />
  GET /api/schedule - Get all schedules<br />
  POST /api/schedule - Create a new schedule<br />
  PATCH /api/schedule/- Update schedule by employee ID<br />
  
## Folder Structure
  frontend/ - Contains React components and pages
  backend/ - Contains Express routes, controllers, and models
  hooks/ - Contains custom React hooks
  context/ - Global state management for employees and schedules
   
