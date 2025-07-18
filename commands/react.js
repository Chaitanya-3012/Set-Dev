const ReactSetup = () => {
    return {
        name: "React Project",
        version: "1.0.0",
        description: "A new React project",
        commands: {
            "vanilla-react": "npx create-react-app my-app",
            "vite-react": "npm init vite@latest my-app --template react",
            "vite-react-3js": "npm init vite@latest my-app --template react && cd my-app && npm install three",
            "vite-react-mui": "npm init vite@latest my-app --template react && cd my-app && npm install @mui/material @emotion/react @emotion/styled",
            "vite-react-shadcn": "npm init vite@latest my-app --template react && cd my-app && npm install @shadcn/ui",
            "vite-react-router": "npm init vite@latest my-app --template react && cd my-app && npm install react-router-dom",
            "vite-react-redux": "npm init vite@latest my-app --template react && cd my-app && npm install react-redux @reduxjs/toolkit",
            "vite-react-tailwind": "npm init vite@latest my-app --template react && cd my-app && npm install tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "vite-react-eslint": "npm init vite@latest my-app --template react && cd my-app && npm install eslint eslint-plugin-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks && npx eslint --init",
        },
        "additional-packages": {
            "@mui/material": "npm install @mui/material @emotion/react @emotion/styled",
            "@shadcn/ui": "npm install @shadcn/ui",
            "three": "npm install three",
            "react-router-dom": "npm install react-router-dom",
            "react-redux": "npm install react-redux @reduxjs/toolkit",
            "tailwindcss": "npm install tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "eslint": "npm install eslint eslint-plugin-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks && npx eslint --init",
        }
    };
};

module.exports = ReactSetup;