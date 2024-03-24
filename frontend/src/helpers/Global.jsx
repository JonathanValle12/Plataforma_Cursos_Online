// Urls de la API al que apunta mi NodeJS
let apiUrl ;

if (process.env.NODE_ENV === 'development') { 
    apiUrl = 'http://localhost:3901'
} else {
    apiUrl = 'http://localhost:3901';
}
export const Global = {
    url: `${apiUrl}/api/`,
    urlAdmin: `${apiUrl}/admin/`,
    urlCursos: `${apiUrl}/cursos/`
}