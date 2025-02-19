document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let position = 0;
    const cardWidth = 300; // Largura do card + gap

    function moveCarousel(direction) {
        // Adiciona a transição suave
        carousel.style.transition = 'transform 0.5s ease-in-out';
        
        const containerWidth = carousel.parentElement.clientWidth;
        const scrollWidth = carousel.scrollWidth;
        const maxScroll = scrollWidth - containerWidth;
        const visibleCards = Math.floor(containerWidth / cardWidth);
        const moveAmount = cardWidth * visibleCards;

        if (direction === 'next') {
            position -= moveAmount;
            if (position < -maxScroll) {
                position = -maxScroll;
            }
        } else {
            position += moveAmount;
            if (position > 0) {
                position = 0;
            }
        }

        carousel.style.transform = `translateX(${position}px)`;
    }

    // Adiciona eventos para os botões
    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));

    // Adiciona funcionalidade de arrastar
    let isDragging = false;
    let startPosition = 0;
    let startX = 0;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPosition = position;
        startX = e.pageX;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const moved = e.pageX - startX;
        position = startPosition + moved;
        
        // Limita o arrasto
        const containerWidth = carousel.parentElement.clientWidth;
        const maxScroll = carousel.scrollWidth - containerWidth;
        
        if (position > 0) position = 0;
        if (position < -maxScroll) position = -maxScroll;
        
        carousel.style.transform = `translateX(${position}px)`;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.transition = 'transform 0.5s ease-in-out';
    });

    carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }
    });

    // Previne o comportamento padrão de arrastar imagens
    carousel.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Novo código para o slider de serviços
    const servicosSlider = document.querySelector('.servicos-slider');
    const prevServico = document.querySelector('.prev-servico');
    const nextServico = document.querySelector('.next-servico');
    
    let servicoPosition = 0;
    const servicoCardWidth = 320; // Largura do card + gap

    function moveServicosSlider(direction) {
        servicosSlider.style.transition = 'transform 0.5s ease-in-out';
        
        const containerWidth = servicosSlider.parentElement.clientWidth;
        const scrollWidth = servicosSlider.scrollWidth;
        const maxScroll = scrollWidth - containerWidth;
        const visibleCards = Math.floor(containerWidth / servicoCardWidth);
        const moveAmount = servicoCardWidth * visibleCards;

        if (direction === 'next') {
            servicoPosition -= moveAmount;
            if (servicoPosition < -maxScroll) {
                servicoPosition = -maxScroll;
            }
        } else {
            servicoPosition += moveAmount;
            if (servicoPosition > 0) {
                servicoPosition = 0;
            }
        }

        servicosSlider.style.transform = `translateX(${servicoPosition}px)`;
    }

    prevServico.addEventListener('click', () => moveServicosSlider('prev'));
    nextServico.addEventListener('click', () => moveServicosSlider('next'));

    // Chatbot
    const chatToggle = document.getElementById('chatToggle');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    const chatMessages = document.getElementById('chatMessages');
    const chatOptions = document.getElementById('chatOptions');
    
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    // Toggle do chat
    chatToggle.addEventListener('click', () => {
        chatPopup.classList.add('active');
        // Inicia o chat apenas se não houver mensagens
        if (chatMessages.children.length === 0) {
            initChat();
        }
    });

    closeChat.addEventListener('click', () => {
        chatPopup.classList.remove('active');
    });

    const chatbotFlow = {
        inicio: {
            message: "Olá! Sou o assistente virtual da PROFIZ. Como posso ajudar você hoje?",
            options: [
                { text: "Orçamento de conserto", next: "orcamento" },
                { text: "Comprar produtos", next: "produtos" },
                { text: "Suporte técnico", next: "suporte" },
                { text: "Horário de funcionamento", next: "horario" }
            ]
        },
        orcamento: {
            message: "Para orçamentos, precisamos de algumas informações. Qual serviço você precisa?",
            options: [
                { text: "Troca de tela", next: "whatsapp" },
                { text: "Bateria", next: "whatsapp" },
                { text: "Problemas de software", next: "whatsapp" },
                { text: "Outros problemas", next: "whatsapp" }
            ]
        },
        produtos: {
            message: "Que tipo de produto você procura?",
            options: [
                { text: "Películas", next: "whatsapp" },
                { text: "Carregadores", next: "whatsapp" },
                { text: "Capas", next: "whatsapp" },
                { text: "Outros acessórios", next: "whatsapp" }
            ]
        },
        suporte: {
            message: "Qual tipo de suporte você precisa?",
            options: [
                { text: "Dúvidas sobre garantia", next: "whatsapp" },
                { text: "Status do conserto", next: "whatsapp" },
                { text: "Problemas técnicos", next: "whatsapp" }
            ]
        },
        horario: {
            message: "Nosso horário de funcionamento é:\nSegunda a Sexta: 9h às 18h\nSábado: 9h às 13h",
            options: [
                { text: "Falar com atendente", next: "whatsapp" },
                { text: "Voltar ao início", next: "inicio" }
            ]
        },
        whatsapp: {
            message: "Ótimo! Vou te encaminhar para um de nossos atendentes no WhatsApp. Clique no botão abaixo para continuar.",
            options: [
                { text: "Ir para o WhatsApp", next: "redirect" }
            ]
        }
    };

    async function addMessage(text, isBot = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showOptions(options) {
        chatOptions.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.addEventListener('click', () => handleOption(option));
            chatOptions.appendChild(button);
        });
    }

    async function handleOption(option) {
        await addMessage(option.text, false);
        
        if (option.next === 'redirect') {
            window.open('https://wa.me/5511999999999', '_blank');
            return;
        }

        await delay(500);
        const nextStep = chatbotFlow[option.next];
        await addMessage(nextStep.message);
        await delay(500);
        showOptions(nextStep.options);
    }

    function initChat() {
        addMessage(chatbotFlow.inicio.message);
        showOptions(chatbotFlow.inicio.options);
    }
});