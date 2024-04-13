// Urls de la API al que apunta mi NodeJS
const apiUrl = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_BACKEND_URL : 'http://localhost:3901';

export const Global = {
    url: `${apiUrl}/api/user/`,
    urlAdmin: `${apiUrl}/api/admin/`,
    urlCursos: `${apiUrl}/api/curso/`
}
