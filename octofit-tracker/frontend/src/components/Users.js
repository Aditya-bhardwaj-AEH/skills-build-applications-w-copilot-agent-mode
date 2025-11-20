// Users.js
const codespaceName = process.env.REACT_APP_CODESPACE_NAME || 'localhost';
const API_URL = `https://${codespaceName}-8000.app.github.dev/api/users/`;

export default API_URL;
