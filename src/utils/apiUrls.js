 

const apiUrls = {
  // =================== Auth ===================
  login: `${process.env.BASE_URL}/auth/login`,
  register: `${process.env.BASE_URL}/auth/register`,

  // =================== User ===================
  getUserProfile: `${process.env.BASE_URL}/users/getUserProfile`,
  updateUserProfile: `${process.env.BASE_URL}/users/updateUserProfile`,
  deleteUser: `${process.env.BASE_URL}/users/deleteUser`,
  myBookings: `${process.env.BASE_URL}/users/my-bookings`,
  getAllUsers: `${process.env.BASE_URL}/users/getAllUsers`, // for admin

  // =================== Pooja ===================
  createPooja: `${process.env.BASE_URL}/pooja/create`,
  getAllUserPoojas: `${process.env.BASE_URL}/pooja/getAllUserPoojas`,
  updatePooja: (id) => `${process.env.BASE_URL}/pooja/update/${id}`,
  deletePooja: (id) => `${process.env.BASE_URL}/pooja/delete/${id}`,
  adminBookings: `${process.env.BASE_URL}/pooja/admin/bookings`,
  getAllPujas: `${process.env.BASE_URL}/pooja/getAllUserPoojas`, // duplicate se bachane ke liye same hi hai

  // =================== Temple ===================
  addTemple: `${process.env.BASE_URL}/temple/add`,
  getAllTemples: `${process.env.BASE_URL}/temple/getAll`,
  updateTemple: `${process.env.BASE_URL}/temple/update`,
  deleteTemple: `${process.env.BASE_URL}/temple/delete`,

  // =================== Admin ===================
  adminLogin: `${process.env.BASE_URL}/admin/login`,
  adminStats: `${process.env.BASE_URL}/admin/stats`,

  // =================== Feedback ===================
  feedbacks: `${process.env.BASE_URL}/feedbacks`,
};

export default apiUrls;
