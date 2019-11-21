# 🎬 Welcome to FakeFlixAPI !

This is a student project to test the creation of a REST API in JS with express and knex. This is an API of a fake Netflix that returns movies, series, episodes and genres in JSON

> **Base API url :** localhost:3000/api

## 💻 Run the project

To launch the API you have to :

- run `npm install`
- create `fake_film` database
- import `db_update.sql` into fake_film database
- copy/paste `.env` file and update db variables
- run `npm run start`

## 📖 Endpoints

|ENDPOINT                |PARAM                          |DESCRIPTION                         |
|----------------|-------------------------------|-----------------------------|
|movies|`/movies/:id`            |return list of all movies / return movie by id         |
|series          |`/series/:id`            |return list of all series / return serie by id            |
|episodes          |`/episodes/:id`|return list of all episodes / return episode by id|
|          |`/episodes/fromSerie/:serie_id`|return list of all episodes from a serie|
|genres|`genres/:id/:type`|return list of all genres / return genre by id / return series or movies by genre|
||`genres/:type/:id`|return genres of a serie or movie|
|order|`/order/:type/:column/:order`|return series, movies, episodes or genres order by id / `:column` is an optional parameter defining the column to be sorted (default : id) / `:order` is an optional parameter defining the sort order (default : asc) |
|search|`/search/:type/:search/:column`|return series, movies, episodes or genres containing the search / `:search` is the parameter defining the string or number you looking for / `:column` is an optional parameter that defines the column in which to search (default : name) |

## 🤝 Author

[@Math-R](https://github.com/Math-R)  
[@DorianMB](https://github.com/DorianMB)
[@nicolas-pm](https://github.com/nicolas-pm)
