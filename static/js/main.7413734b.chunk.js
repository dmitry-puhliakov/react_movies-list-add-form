(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),m=(a(16),a(10)),o=a(1),s=a(2),c=a(5),d=a(4),h=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,n=e.imgUrl,r=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:n,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:r},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return i.a.createElement("div",null,i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(h,Object.assign({key:e.imdbId},e))}))))};p.defaultProps={movies:[]};var u=a(3),g=a(6),v=(a(20),{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={newMovie:v},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState((function(e){return{newMovie:Object(g.a)(Object(g.a)({},e.newMovie),{},Object(u.a)({},n,i))}}))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.newMovie),e.setState({newMovie:v})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.newMovie,t=e.title,a=e.imgUrl,n=e.imdbUrl,r=e.imdbId,l=e.description;return i.a.createElement("form",null,"Put the form here",i.a.createElement("input",{className:"form-element",type:"text",placeholder:"Enter movie title here",name:"title",value:t,onChange:this.handleChange}),i.a.createElement("textarea",{className:"form-element",rows:"4",type:"text",name:"description",placeholder:"Enter movie description here",value:l,onChange:this.handleChange}),i.a.createElement("input",{className:"form-element",type:"text",placeholder:"Enter image URL here",name:"imgUrl",value:a,onChange:this.handleChange}),i.a.createElement("input",{className:"form-element",type:"text",placeholder:"Enter imdb URL here",name:"imdbUrl",value:n,onChange:this.handleChange}),i.a.createElement("input",{className:"form-element",type:"text",placeholder:"Enter imdb id here",name:"imdbId",value:r,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"add movie"))}}]),a}(n.Component),f=a(9),M=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(p,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(b,{onAdd:this.addMovie})))}}]),a}(n.Component);l.a.render(i.a.createElement(M,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.7413734b.chunk.js.map