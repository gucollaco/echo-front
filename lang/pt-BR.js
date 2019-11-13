// // lang/[lang].js

// export default (context) => {
//   return new Promise(function (resolve) {
//     resolve({
//       welcome: 'Welcome'
//     })
//   });
// }
// // or
// export default {
//   welcome: 'Welcome'
// }

export default {
  welcome: "Bem Vindo",
  login: {
    email: "Email",
    password: "Senha",
    signin: "Entrar",
    rules: {
      email: "Insira seu email Unifesp",
      password: "Insira a senha de seu email Unifesp"
    }
  },
  pages: {
    food: "Rango",
    calendar: "Agenda",
    home: "Página Inicial",
    classes: "Aulas",
    profile: "Perfil"
  }
}
