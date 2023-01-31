## Referência

https://www.youtube.com/watch?v=S8AGpWn9qrM

## Upload de Imagem para o Firebase Storage

Este é um tutorial passo a passo sobre como fazer o upload de uma imagem para o Firebase Storage usando o Firebase SDK.

### Pré-requisitos

1 - Ter uma conta no Firebase
2 - Ter um projeto Firebase criado
3 - Ter o Firebase SDK instalado em seu ambiente de desenvolvimento

### Explicação simples do Código usado:

`` Este código é um exemplo de uma tela de upload de imagem em React Native que usa o Firebase Storage como sua plataforma de armazenamento. O código importa vários componentes do React Native, incluindo `View`, `Text`, `StyleSheet`, `TouchableOpacity`, `SafeAreaView`, `Alert` e `Image`. Também importa a biblioteca de imagem expo-image-picker e o arquivo de configuração do Firebase. ``

`` O componente principal, `UploadScreen`, contém dois estados: `image` e `uploading`. `Image` armazena a imagem selecionada pelo usuário, enquanto `uploading` indica se a imagem está sendo carregada. ``

`` O método `pickerImage` é chamado quando o usuário toca no botão "Pick an Image" e abre a biblioteca de imagens do dispositivo para seleção. O resultado é salvo no estado `image`. ``

`` O método `uploadingImage` é chamado quando o usuário toca no botão "Upload Image". Ele define o estado `uploading` como verdadeiro, carrega a imagem como um blob e o salva no Firebase Storage com o nome da última parte do caminho da imagem. Em caso de erro, o erro é exibido no console. Quando o `upload` é concluído, o estado `uploading` é definido como falso e uma mensagem de alerta é exibida para o usuário. O estado `image` é então definido como nulo. ``

`` Os estilos são definidos no objeto `estilos` e são aplicados aos componentes na tela de upload de imagem. ``
