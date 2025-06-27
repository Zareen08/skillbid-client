SkillBid

A dynamic task-posting and bidding platform where users can post tasks and freelancers can browse and place bids.

Live Site
[ Visit SkillBid Live](https://skillbid-3db67.web.app/)

Features

Authentication System  
  Users can sign up, log in, and log out. Private routes are protected and only accessible when logged in.

Task Posting  
  Logged-in users can add tasks with title, category, description, deadline, and budget.

Browse Tasks
  Anyone can browse all posted tasks, shown in a clean, table-based or card layout.

Place Bids 
  Users can place bids on task details. Bid count updates instantly using local state.

User Dashboard  
  View tasks you've posted from the "My Posted Tasks" page.

Modern UI  
  Built using Tailwind CSS and DaisyUI for a responsive and clean interface.

Loading Spinner & Error Pages 
  Custom loading indicator and error page for better UX.


NPM Dependencies

| Package           | Purpose                                                      |
|-------------------|--------------------------------------------------------------|
| react-router-dom  | Client-side routing for navigation                           |
| react-toastify    | Toast notifications (success/error messages)                 |
| react-slick       | Carousel/slider used for showcasing content                  |
| sweetalert2       | Popup alerts for task success/error feedback                 |
| firebase          | Authentication and user state management                     |
| daisyui           | Pre-built Tailwind CSS UI components                         |
| tailwindcss       | Utility-first CSS framework                                  |
| axios             | API requests (used in some pages)                            |
| express           | Backend server with routing                                  |
| cors              | Enable cross-origin requests                                 |
| dotenv            | Secure environment variables                                 |
| mongodb           | MongoDB Node.js driver for connecting to the database        |
| nodemon           | Auto-reloads the server during development                   |




Tech Stack

-Frontend: React, Tailwind CSS, DaisyUI  
-Routing: React Router DOM  
-Authentication: Firebase  
-UI Enhancements: React Toastify, SweetAlert2, React Slick  
-Backend : Node.js + Express + MongoDB 


How to Run SkillBid Locally
1. Clone the Repository

```bash
git clone https://github.com/your-username/skillbid.git
2. Navigate into the Project
bash
Copy
Edit
cd skillbid
3. Install Dependencies



