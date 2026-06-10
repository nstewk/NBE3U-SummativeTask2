tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Lora', 'serif'],
            },
            colors: {
                brand: {
                    black: '#0a0a0a',
                    dark: '#121212',
                    charcoal: '#1e1e1e',
                    gray: '#a1a1aa',
                    light: '#f4f4f5',
                    accent: '#8b2e2e', // Muted, solemn red
                }
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            }
        }
    }
}