import axios from 'axios';

const useClasses = () => {
  const handleGetDataClasses = async (cert_id) => {
    try {
      const response = await axios.get('https://academia.urbisfx.com/u-pro/cert/' + cert_id + '/?json=true');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPublications = async () => {
    try {
      const response = await axios.get('https://academia.urbisfx.com/next/json/');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetDataClasses, handleGetPublications };
};

export default useClasses;
