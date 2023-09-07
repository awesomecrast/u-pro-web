import axios from "axios";

const useCourses = () => {
  const handleGetAllCourses = async () => {
    try {
      const response = await axios(
        "https://academia.urbisfx.com/u-pro/api/home/"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetAllCourses };
};

export default useCourses;
