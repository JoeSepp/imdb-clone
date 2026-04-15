

const apiKey = import.meta.env.VITE_API_KEY;


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
};

export default options