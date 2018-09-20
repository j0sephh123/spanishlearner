import axios from 'axios';


const verbs = {
  namespaced: true,
  state: {    
    verbs: [
      {"id":1,  name: "ser", meaning   :"to be ", type: "irregular"},
      {"id":2,  name: "haber", meaning: "to have (to do something, auxiliary verb) ", type: "irregular"},
      {"id":3,  name: "estar", meaning: "to be (health, location, state) ", type: "irregular"},
      {"id":4,  name: "tener", meaning: "to have ", type: "irregular"},
      {"id":5,  name: "hacer", meaning: "", type: "irregular"},
      {"id":6,  name: "poder", meaning: "", type: "irregular"},
      {"id":7,  name: "decir", meaning: "to say, tell ", type: "irregular"},
      {"id":8,  name: "to", meaning: "go ", type: "irregular"},
      {"id":9,  name: "ver", meaning:  "to see", type: "irregular"}, 
      {"id":10, name: "dar", meaning:  "to give", type: "irregular"}, 
      {"id":11, name: "saber", meaning: "to know (information)", type: "irregular"},
      {"id":12, name: "querer", meaning: "to want, love ", type: "irregular"},
      {"id":13, name: "llegar", meaning: "to arrive, come, reach ", type: "irregular"},
      {"id":14, name: "pasar", meaning: "to pass, to spend (time), to happen ", type: "regular"},
      {"id":15, name: "deber", meaning: "to owe, must, should, ought to ", type: "regular"},
      {"id":16, name: "poner", meaning: "to put, place, set ", type: "irregular"},
      {"id":17, name: "parecer", meaning: "to seem, appear ", type: "irregular"},
      {"id":18, name: "quedar", meaning: "to stay, remain ", type: "regular"},
      {"id":19, name: "creer", meaning: "to believe ", type: "irregular"},
      {"id":20, name: "hablar", meaning: "to speak ", type: "regular"},
      {"id":21, name: "llevar", meaning: "to carry, bring ", type: "regular"},
      {"id":22, name: "dejar", meaning: "to leave, abandon, to let, allow ", type: "regular"},
      {"id":23, name: "seguir", meaning: "to follow, continue ", type: "irregular"},
      {"id":24, name: "encontrar", meaning: "to find, encounter ", type: "irregular"},
      {"id":25, name: "llamar", meaning: "to call, to name ", type: "regular"},
      {"id":26, name: "venir", meaning: "", type: "irregular"},
      {"id":27, name: "pensar", meaning: "to think ", type: "irregular"},
      {"id":28, name: "salir", meaning: "to leave, go out ", type: "irregular"},
      {"id":29, name: "volver", meaning: "to return, go back ", type: "irregular"},
      {"id":30, name: "tomar", meaning: "to take, drink ", type: "regular"},
      {"id":31, name: "conocer", meaning: "to know (people, places) ", type: "irregular"},
      {"id":32, name: "vivir", meaning: "to live ", type: "regular"},
      {"id":33, name: "sentir", meaning: "to feel, regret ", type: "irregular"},
      {"id":34, name: "tratar", meaning: "to treat, handle ", type: "regular"},
      {"id":35, name: "mirar", meaning: "to watch, look at ", type: "regular"},
      {"id":36, name: "contar", meaning: "to count, relate, tell ", type: "irregular"},
      {"id":37, name: "empezar", meaning: "to begin, start ", type: "irregular"},
      {"id":38, name: "esperar", meaning: "to wait for, to hope ", type: "regular"},
      {"id":39, name: "buscar", meaning: "to search for, look for ", type: "irregular"},
      {"id":40, name: "existir", meaning: "to exist ", type: "regular"},
      {"id":41, name: "entrar", meaning: "to enter, go in, come in ", type: "regular"},
      {"id":42, name: "trabajar", meaning: "to work ", type: "regular"},
      {"id":43, name: "escribir", meaning: "to write ", type: "irregular"},
      {"id":44, name: "perder", meaning: "to lose ", type: "irregular"},
      {"id":45, name: "producir", meaning: "to produce ", type: "irregular"},
      {"id":46, name: "ocurrir", meaning: "to occur, happen ", type: "irregular"},
      {"id":47, name: "entender", meaning: "to understand ", type: "irregular"},
      {"id":48, name: "pedir", meaning: "to request, ask for ", type: "irregular"},
      {"id":49, name: "recibir", meaning: "to receive, to welcome, greet ", type: "regular"},
      {"id":50, name: "recordar", meaning: "to remember, remind ", type: "irregular"},
      {"id":51, name: "terminar", meaning: "to finish, end ", type: "regular"},
      {"id":52, name: "permitir", meaning: "to permit, allow ", type: "regular"},
      {"id":53, name: "aparecer", meaning: "to appear, show up ", type: "irregular"},
      {"id":54, name: "conseguir", meaning: "to get, obtain ", type: "irregular"},
      {"id":55, name: "comenzar", meaning: "to begin, start, commence ", type: "irregular"},
      {"id":56, name: "servir", meaning: "to serve ", type: "irregular"},
      {"id":57, name: "sacar", meaning: "to take out, stick out ", type: "irregular"},
      {"id":58, name: "necesitar", meaning: "to need, require ", type: "regular"},
      {"id":59, name: "mantener", meaning: "to maintain, get ", type: "irregular"},
      {"id":60, name: "resultar", meaning: "to turn out (to be) ", type: "regular"},
      {"id":61, name: "leer", meaning: "to read ", type: "irregular"},
      {"id":62, name: "caer", meaning: "to fall ", type: "irregular"},
      {"id":63, name: "cambiar", meaning: "to change ", type: "regular"},
      {"id":64, name: "presentar", meaning: "to introduce ", type: "regular"},
      {"id":65, name: "crear", meaning: "to create, to make ", type: "regular"},
      {"id":66, name: "abrir", meaning: "to open ", type: "irregular"},
      {"id":67, name: "considerar", meaning: "to consider ", type: "regular"},
      {"id":68, name: "to", meaning: "hear ", type: "irregular"},
      {"id":69, name: "acabar", meaning: "to finish, end ", type: "regular"},
      {"id":70, name: "convertir", meaning: "to convert, change ", type: "irregular"},
      {"id":71, name: "ganar", meaning: "to win, gain, earn, get, acquire ", type: "regular"},
      {"id":72, name: "formar", meaning: "to form, shape, fashion, make ", type: "regular"},
      {"id":73, name: "traer", meaning: "to bring, to get, fetch, to carry ", type: "irregular"},
      {"id":74, name: "partir", meaning: "to divide, to leave ", type: "regular"},
      {"id":75, name: "morir", meaning: "to die ", type: "irregular"},
      {"id":76, name: "aceptar", meaning: "to accept, approve, to agree to ", type: "regular"},
      {"id":77, name: "realizar", meaning: "to achieve, attain, accomplish ", type: "irregular"},
      {"id":78, name: "suponer", meaning: "to suppose ", type: "irregular"},
      {"id":79, name: "comprender", meaning: "to understand, comprehend ", type: "regular"},
      {"id":80, name: "lograr", meaning: "to get, obtain, to achieve, attain ", type: "regular"},
      {"id":81, name: "explicar", meaning: "to explain ", type: "irregular"},
      {"id":82, name: "preguntar", meaning: "to ask, inquire ", type: "regular"},
      {"id":83, name: "tocar", meaning: "to touch, to play (an instrument) ", type: "irregular"},
      {"id":84, name: "reconocer", meaning: "to recognize ", type: "irregular"},
      {"id":85, name: "estudiar", meaning: "to study ", type: "irregular"},
      {"id":86, name: "alcanzar", meaning: "to reach, catch up ", type: "regular"},
      {"id":87, name: "nacer", meaning: "to be born ", type: "irregular"},
      {"id":88, name: "dirigir", meaning: "to direct ", type: "irregular"},
      {"id":89, name: "correr", meaning: "to run ", type: "regular", type: "irregular"},
      {"id":90, name: "utilizar", meaning: "to use, utilize ", type: "irregular"},
      {"id":91, name: "pagar", meaning: "to pay, pay for ", type: "irregular"},
      {"id":92, name: "ayudar", meaning: "to help ", type: "regular", type: "irregular"},
      {"id":93, name: "gustar", meaning: "to please, be pleasing ", type: "regular"},
      {"id":94, name: "jugar", meaning: "to play (a game or sport) ", type: "irregular"},
      {"id":95, name: "escuchar", meaning: "to listen, hear ", type: "regular"},
      {"id":96, name: "cumplir", meaning: "to fulfil, carry out ", type: "regular"},
      {"id":97, name: "ofrecer", meaning: "to offer ", type: "irregular"},
      {"id":98, name: "descubrir", meaning: "to discover ", type: "regular"},
      {"id":99, name: "levantar", meaning: "to raise, to lift ", type: "regular"}
    ],
    search: '',
    filter: '',
    loading: false,
    redirect: false,
    watchedVideos: [
      {id: 1, link: 'https://www.youtube.com/watch?v=bUC_IwIEi68', 
        title: 'Noticias Telemundo, 15 de septiembre de 2018 | Noticiero | Telemundo', 
        type: 'noticias'},
      {id: 2, link: 'https://www.youtube.com/watch?v=f7emtj58YeM', 
        title: '103- Los 10 hábitos de un buen estudiante de español [podcast]', 
        type: 'espanol automatico'},
      {id: 3, link: 'https://www.youtube.com/watch?v=zMYQHkuLZv4', 
        title: '104- 9 razones por las que aún no hablas español con fluidez [podcast]', 
        type: 'espanol automatico'},
    ]
  },
  mutations: {
    search(state, val) {
      state.search = val;
    },
    setFilter(state, filter) {
      if(state.filter === filter) {
        state.filter = '';
      } else {
        state.filter = filter;
      }
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    loading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    setFilter({commit}, filter) {
      commit('setFilter', filter);
    },
    async submit({commit}, data) {
      const result = await axios.post('http://localhost:1337/verb', data);
      console.log(result)
    },
    redirect({commit}, {redirectBool}) {
      commit('redirect', redirectBool);
    },
    loading({commit}, {loadingBool}) {
      commit('loading', loadingBool);
    },
  },
  getters: {
    verbs: state => {
      switch(state.filter) {
        case 'regular': 
          return state.verbs.filter(verb => verb.type === 'regular');
        case 'irregular':
          return state.verbs.filter(verb => verb.type === 'irregular')
        default: return state.verbs;
      }
    },
    search: state => state.search,
    filter: state => state.filter,
  }
}

export default verbs