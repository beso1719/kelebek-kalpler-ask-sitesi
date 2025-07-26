class LoveWebsite {
    constructor() {
        this.loveMessages = [
            "Sen benim kalbimin tek sahibisin 💖",
            "Gözlerin yıldızlar gibi parlıyor ✨",
            "Seninle her an bir masal gibi 🌹",
            "Kalbim sadece senin için atıyor 💕",
            "Sen benim hayatımın anlamısın 🦋",
            "Aşkımız sonsuzluğa kadar sürecek ∞",
            "Sen benim rüyalarımın prensesisin 👑",
            "Seninle dünya daha güzel 🌍💖"
        ];
        this.loveCounter = 0;
        this.messageInterval = 5000; // 5 seconds
        
        this.initializeElements();
        this.startLoveAnimation();
    }

    initializeElements() {
        this.elements = {
            loveMessage: document.getElementById('loveMessage'),
            counterValue: document.getElementById('counterValue'),
            sendLoveBtn: document.getElementById('sendLoveBtn'),
            newMessageBtn: document.getElementById('newMessageBtn'),
            loveCard: document.querySelector('.love-card')
        };
        
        // Add event listeners
        this.elements.sendLoveBtn.addEventListener('click', () => this.sendLove());
        this.elements.newMessageBtn.addEventListener('click', () => this.changeMessage());
    }

    startLoveAnimation() {
        this.changeMessage();
        this.updateCounter();
        
        // Set up periodic message changes
        setInterval(() => {
            this.changeMessage();
        }, this.messageInterval);
        
        // Increment love counter periodically
        setInterval(() => {
            this.incrementLoveCounter();
        }, 2000);
    }

    changeMessage() {
        const randomIndex = Math.floor(Math.random() * this.loveMessages.length);
        const newMessage = this.loveMessages[randomIndex];
        
        // Animate message change
        this.elements.loveMessage.style.opacity = '0';
        
        setTimeout(() => {
            this.elements.loveMessage.querySelector('.message-text').textContent = newMessage;
            this.elements.loveMessage.style.opacity = '1';
        }, 300);
        
        // Add sparkle effect
        this.createSparkleEffect();
    }

    sendLove() {
        this.loveCounter += 100;
        this.updateCounter();
        this.createHeartExplosion();
        
        // Show love sent message
        this.showLoveNotification('💖 Aşk gönderildi! 💖');
    }

    incrementLoveCounter() {
        this.loveCounter++;
        this.updateCounter();
    }

    updateCounter() {
        if (this.loveCounter > 999) {
            this.elements.counterValue.textContent = '∞';
        } else {
            this.elements.counterValue.textContent = this.loveCounter;
        }
    }

    createSparkleEffect() {
        const sparkles = ['✨', '💫', '⭐', '🌟'];
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
                sparkle.style.cssText = `
                    position: absolute;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    font-size: ${Math.random() * 20 + 15}px;
                    animation: sparkleFloat 2s ease-out forwards;
                    pointer-events: none;
                    z-index: 1000;
                `;
                
                this.elements.loveCard.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }, i * 200);
        }
    }

    createHeartExplosion() {
        const hearts = ['💖', '💕', '💝', '💗', '💙', '💜'];
        
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.cssText = `
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    font-size: ${Math.random() * 30 + 20}px;
                    animation: heartExplosion 3s ease-out forwards;
                    pointer-events: none;
                    z-index: 1000;
                    transform: translate(-50%, -50%);
                `;
                
                // Random direction for explosion
                const angle = (360 / 12) * i;
                heart.style.setProperty('--angle', angle + 'deg');
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    }

    showLoveNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b9d, #ff9ff3);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(255, 107, 157, 0.4);
            z-index: 1001;
            animation: slideInRight 0.5s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

}

// Add CSS animations for love effects
const loveAnimations = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
    
    @keyframes heartExplosion {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2) rotate(calc(var(--angle) * 2));
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(200px, 0) scale(0.3) rotate(calc(var(--angle) * 4));
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = loveAnimations;
document.head.appendChild(style);

// Additional butterfly animation effects
function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 5;
    `;
    document.body.appendChild(heartsContainer);

    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: 100%;
            font-size: ${Math.random() * 20 + 10}px;
            animation: floatUp 4s linear forwards;
            opacity: 0.7;
        `;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 3000);
}

// Add floating hearts animation
const floatUpCSS = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = floatUpCSS;
document.head.appendChild(style);

// Initialize the love website
document.addEventListener('DOMContentLoaded', () => {
    new LoveWebsite();
    createFloatingHearts();
    
    // Add some interactive effects
    document.querySelector('.love-card').addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.03)';
    });
    
    document.querySelector('.love-card').addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effects to feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
});

// Console message for love website
console.log(`
🦋💖 Kelebek Kalpler - Aşk Sitesi 💖🦋

Sonsuz aşk ve mutluluk dolu bir deneyim!

✨ Özellikler:
- Dinamik aşk mesajları
- Interaktif kalp efektleri
- Kelebek animasyonları
- Romantik şiirler

Aşkınız sonsuz olsun! 💖
`);
