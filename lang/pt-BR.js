import ptBR from "./pt-BR"

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

// {{ $t("profile.settings.") }}

export default {
  welcome: "Bem Vindo",
  general: {
    notification: "notificação | notificações",
    other: "outro | outros",
    download: "Baixar"
  },
  home: {
    notifications: "Você tem novas notificações",
    curated_by: "Oferecimento",
    holiday: "Feriado"
  },
  login: {
    email: "Email Unifesp",
    password: "Senha",
    signin: "Entrar",
    rules: {
      email: "Insira seu email Unifesp",
      password: "Insira a senha de seu email Unifesp"
    }
  },
  profile: {
    hello: "Olá",
    settings: {
      name: "Configurações",
      allow_notifications: "Permitir notificações",
      about: "Quem Somos?",
      signout: "Sair"
    },
    certificate: "Atestado",
    history: "Histórico"
  },
  pages: {
    food: "Refeição",
    calendar: "Agenda",
    home: "Início",
    classes: "Aulas",
    profile: "Perfil"
  },
  unifesp: {
    courses: {
      bcc: "Bacharelado em Ciência da Computação"
    }
  }
}
