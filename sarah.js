let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const leftBtn = document.querySelector('.pagin .left');
        const rightBtn = document.querySelector('.pagin .right');
        const perspectiveText = document.getElementById('perspective-text');

        // Define colors for each image
        const colors = ['#FF6B6B', '#6e7272', '#fa2d2d', '#95E1D3', 'rgba(192, 185, 185, 0.47)', '#813f02', '#73b9f3', '#6e7272', '#5d95ea', '#C7CEEA', '#FFDAB9', '#e5eaec9a', '#f50707', '#535756', '#f1d257d1','#AA96DA'
            ];

        function updatePerspectiveColor() {
            const color = colors[currentSlide % colors.length];
            perspectiveText.style.color = color;
        }

        // Show first image on load
        slides[currentSlide].classList.add('active');
        updatePerspectiveColor();

        // Right button - next image
        rightBtn.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            updatePerspectiveColor();
        });

        // Left button - previous image
        leftBtn.addEventListener('click', () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            updatePerspectiveColor();
        });

        const h4Element = document.getElementById('typewriter-text');
        const textSegments = [
            'Welcome to Sarah\'s Perspective News, your go to source for insightful and thought provoking news coverage.',
            'We are dedicated to providing you with a unique perspective on current events,',
            'delving deeper into the stories that matter most.',
            'Our team of passionate journalists and analysts work tirelessly to bring you in-depth analysis, compelling narratives, and a fresh take on the news.',
            'Join us as we explore the world through Sarah\'s perspective, offering you a new lens to understand the complexities of our ever-changing world.'
        ];
        
        let currentSegmentIndex = 0;
        let currentCharIndex = 0;
        let htmlContent = '';
        
        function typewriterEffect() {
            if (currentSegmentIndex < textSegments.length) {
                const currentSegment = textSegments[currentSegmentIndex];
                
                if (currentCharIndex < currentSegment.length) {
                    htmlContent += currentSegment[currentCharIndex];
                    h4Element.textContent = htmlContent;
                    currentCharIndex++;
                    setTimeout(typewriterEffect, 50);
                } else {
                    // Move to next segment
                    currentSegmentIndex++;
                    currentCharIndex = 0;
                    setTimeout(typewriterEffect, 500);
                }
            }
        }
        
        // Start animation after h1 fades in
        setTimeout(typewriterEffect, 2000);