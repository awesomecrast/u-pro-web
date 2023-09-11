import axios from 'axios';

const useProfilePublic = () => {
  const handleGetDataProfilePublic = async () => {
    try {
      const response = await axios.get('https://academia.urbisfx.com/u/6v0k4d/?json=true');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetDataProfilePublic };
};

export default useProfilePublic;
