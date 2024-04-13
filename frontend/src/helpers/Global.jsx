// Urls de la API al que apunta mi NodeJS
const apiUrl = import.meta.env.VITE_NODE_ENV === 'development' ? 'http://localhost:3901' : import.meta.env.VITE_BACKEND_URL;
console.log(process.env.VITE_BACKEND_URL);

export const Global = {
    url: `${apiUrl}/api/user/`,
    urlAdmin: `${apiUrl}/api/admin/`,
    urlCursos: `${apiUrl}/api/curso/`
}
