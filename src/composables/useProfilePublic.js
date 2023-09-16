import axios from 'axios';

const useProfilePublic = () => {
  const handleGetDataProfilePublic = async (username = null) => {
    try {
      const response = await axios.get('https://academia.urbisfx.com/u/' + username + '/?json=true');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetDataProfilePublic };
};

export default useProfilePublic;
