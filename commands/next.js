const NextSetup = () => {
    return {
        name: "NextJS Project",
        version: "1.0.0",
        description: "A new NextJS project",
        commands: {
            "vanilla-next": "npx create-next-app@latest my-app",
            "next-ts": "npx create-next-app@latest my-app --typescript",
            "next-3js": "npx create-next-app@latest my-app && cd my-app && npm install three",
            "next-mui": "npx create-next-app@latest my-app && cd my-app && npm install @mui/material @emotion/react @emotion/styled",
            "next-shadcn": "npx create-next-app@latest my-app && cd my-app && npm install @shadcn/ui",
            "next-redux": "npx create-next-app@latest my-app && cd my-app && npm install react-redux @reduxjs/toolkit",
            "next-tailwind": "npx create-next-app@latest my-app && cd my-app && npm install tailwindcss postcss autoprefixer && npx tailwindcss init -p",
        },
        "additional-packages": {
            "@mui/material": "npm install @mui/material @emotion/react @emotion/styled",
            "@shadcn/ui": "npm install @shadcn/ui",
            "three": "npm install three",
            "react-redux": "npm install react-redux @reduxjs/toolkit",
            "tailwindcss": "npm install tailwindcss postcss autoprefixer && npx tailwindcss init -p",
        }
    };
};

module.exports = NextSetup;