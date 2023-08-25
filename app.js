const apiKey = "5d3288680e61bdc34e2244b5dcbbcbb2";
const imgApi = "https://image.tmdb.org/t/p/w1280";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const form = document.getElementById('search-form')
const query = document.getElementById('search-input')
const result = document.getElementById('result')

let page = 1
let isSeraching = false

