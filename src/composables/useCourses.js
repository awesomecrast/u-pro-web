import axios from 'axios';

const useCourses = () => {
  const handleGetAllCourses = async () => {
    try {
      const response = await axios('https://academia.urbisfx.com/u-pro/api/home/');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPlayer = async (id) => {
    try {
      const response = await axios(`https://academia.urbisfx.com/play/json/${id}/`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const sendLikeComment = async (id) => {
    try {
      const response = await axios.post(`https://academia.urbisfx.com/sendLike/`, {
        id,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createCommentInPlayer = async (id, comment) => {
    // id video
    try {
      const response = await axios.post(`https://academia.urbisfx.com/createComment/`, {
        text: comment,
        id,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createCommentResponseInPlayer = async (id, comment) => {
    // id comentario
    try {
      const response = await axios.post(`https://academia.urbisfx.com/createComment/`, {
        respuesta: true,
        text: comment,
        id,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleGetAllCourses,
    handleGetPlayer,
    sendLikeComment,
    createCommentInPlayer,
    createCommentResponseInPlayer,
  };
};

export default useCourses;
