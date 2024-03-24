// Urls de la API al que apunta mi NodeJS
const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3901' : process.env.VERCEL_URL;

export const Global = {
    url: `${apiUrl}/api/user/`,
    urlAdmin: `${apiUrl}/api/admin/`,
    urlCursos: `${apiUrl}/api/cursos/`
}
