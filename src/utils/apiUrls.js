const BASE_URL = "http://localhost:5000/api";

const apiUrls = {
  // =================== Auth ===================
  login: `${BASE_URL}/auth/login`,
  register: `${BASE_URL}/auth/register`,

  // =================== User ===================
  getUserProfile: `${BASE_URL}/users/getUserProfile`,
  updateUserProfile: `${BASE_URL}/users/updateUserProfile`,
  deleteUser: `${BASE_URL}/users/deleteUser`,
  myBookings: `${BASE_URL}/users/my-bookings`,
  getAllUsers: `${BASE_URL}/users/getAllUsers`, // for admin

  // =================== Pooja ===================
  createPooja: `${BASE_URL}/pooja/create`,
  getAllUserPoojas: `${BASE_URL}/pooja/getAllUserPoojas`,
  updatePooja: (id) => `${BASE_URL}/pooja/update/${id}`,
  deletePooja: (id) => `${BASE_URL}/pooja/delete/${id}`,
  adminBookings: `${BASE_URL}/pooja/admin/bookings`,
  getAllPujas: `${BASE_URL}/pooja/getAllUserPoojas`, // duplicate se bachane ke liye same hi hai

  // =================== Temple ===================
  addTemple: `${BASE_URL}/temple/add`,
  getAllTemples: `${BASE_URL}/temple/getAll`,
  updateTemple: `${BASE_URL}/temple/update`,
  deleteTemple: `${BASE_URL}/temple/delete`,

  // =================== Admin ===================
  adminLogin: `${BASE_URL}/admin/login`,
  adminStats: `${BASE_URL}/admin/stats`,

  // =================== Feedback ===================
  feedbacks: `${BASE_URL}/feedbacks`,
};

export default apiUrls;
