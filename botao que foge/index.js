const botao = document.querySelector('.botao-fugitivo');

botao.addEventListener('mouseover', () => {
    // Obtém as dimensões da janela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Gera posições aleatórias dentro da janela visível
    // Deixando uma margem de 100px para evitar que o botão saia da tela
    const novoX = Math.random() * (windowWidth - 200) + 100;
    const novoY = Math.random() * (windowHeight - 200) + 100;
    
    // Aplica a nova posição ao botão
    botao.style.position = 'fixed';
    botao.style.left = `${novoX}px`;
    botao.style.top = `${novoY}px`;
});

// Quando finalmente conseguir clicar no botão
botao.addEventListener('click', () => {
    alert('Parabéns! Você me pegou! 🎉');
    // Retorna o botão para o centro
    botao.style.position = 'static';
});