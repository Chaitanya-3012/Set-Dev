const ExpressSetup = () => {
    return {
        name: "Express Project",
        version: "1.0.0",
        description: "A new Express project",
        commands: {
            "vanilla-express": "npm init -y && npm install express",
            "express-ts": "npm init -y && npm install express typescript @types/node @types/express ts-node && npx tsc --init",
            "express-mongoose": "npm init -y && npm install express mongoose",
            "express-mysql": "npm init -y && npm install express mysql2",
            "express-postgres": "npm init -y && npm install express pg",
            "express-redis": "npm init -y && npm install express redis",
            "express-cors": "npm init -y && npm install express cors",
            "express-helmet": "npm init -y && npm install express helmet",
            "express-rate-limit": "npm init -y && npm install express rate-limit",
            "express-middleware": "npm init -y && npm install express cors helmet rate-limit",
            "express-nodemon": "npm init -y && npm install express nodemon --save-dev",
        },
        "additional-packages": {
            "express": "npm install express",
            "typescript": "npm install typescript @types/node @types/express ts-node",
            "mongoose": "npm install mongoose",
            "mysql2": "npm install mysql2",
            "pg": "npm install pg",
            "redis": "npm install redis",
            "cors": "npm install cors",
            "helmet": "npm install helmet",
            "rate-limit": "npm install rate-limit",
            "nodemon": "npm install nodemon --save-dev",
        }
    };
};

module.exports = ExpressSetup;