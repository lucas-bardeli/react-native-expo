<img align="left" src="assets/images/icon.png" alt="Logo do Links" width="150" hspace="20" />

<h1>🔗 React Native com Expo</h1>
<p>Um app mobile para organizar seus links por categoria, feito com React Native e Expo.</p>
<p>
	<img src="https://img.shields.io/badge/Expo-57.0-000020?logo=expo&logoColor=000067" alt="Expo 57" />
	<img src="https://img.shields.io/badge/React_Native-0.86-61DAFB?logo=react&logoColor=61DAFB" alt="React Native 0.86" />
	<img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=3178C6" alt="TypeScript 6.0" />
</p>

## ✨ Funcionalidades

- Organização por categorias: curso, projeto, site, artigo, vídeo e documentação.
- Cadastro de links com nome, URL e categoria.
- Abertura dos links diretamente no celular.
- Exclusão de links com confirmação.
- Persistência local dos dados com AsyncStorage.

## 📥 Como rodar

Pré-requisitos: Node.js instalado e o app [Expo Go](https://expo.dev/go) no celular.

```bash
npm install
npx expo start
```

Com o servidor iniciado:

1. Conecte o celular e o computador à mesma rede Wi-Fi.
2. Abra o Expo Go e escaneie o QR Code exibido no terminal ou no navegador.
3. Aguarde o bundle carregar para abrir o app.

> No Android, use a opção de leitura de QR Code do próprio Expo Go. No iPhone, também é possível escanear pela câmera do sistema.

## 📲 Como usar

Na tela inicial, selecione uma categoria para ver seus links. Toque em `+` para adicionar um novo item, preencha os campos e toque em **Adicionar**. Toque em um link para abrir os detalhes, onde você pode abrir a URL ou excluí-la.
