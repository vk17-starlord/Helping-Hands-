export const baseURL = "http://localhost:5000";

export const userRoute = "/api/v1/user";
export const companyRoute = "/api/v1/company";
export const adminRoute = "/api/v1/admin";
export const jobRoute = "/api/v1/job";
export const questionRouter ='/api/v1/question'
export const getHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const getMultiFormHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
};
