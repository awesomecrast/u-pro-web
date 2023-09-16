import axios from 'axios';

const useClasses= () => {
  const handleGetDataClasses = async (page=1) => {
    try {
      const response = await axios.get('https://academia.urbisfx.com/next/json/?page='+page);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetDataClasses };
};

export default useClasses;
