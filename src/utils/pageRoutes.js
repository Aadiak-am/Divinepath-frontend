// src/utils/pageRoutes.js

const ADMIN_BASE = "/admin";

const pageRoutes = {
  adminDashboard: `${ADMIN_BASE}/dashboard`,
  managePujas: `${ADMIN_BASE}/manage-pujas`,
  bookings: `${ADMIN_BASE}/bookings`,
  users: `${ADMIN_BASE}/users`,
  feedback: `${ADMIN_BASE}/feedback`,
  login: "/login",

  // 👉 Future me yahan aur bhi add kar sakte ho, jaise:
  // userDashboard: "/user/dashboard",
  // userProfile: "/user/profile",
};

export default pageRoutes;
