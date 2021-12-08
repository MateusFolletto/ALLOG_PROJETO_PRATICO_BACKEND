export default {
    dialect: 'postgres',
    url: 'postgres://xkvbatxhcoannw:47d88f446bfe84a15a1e6778af7cc973c51b42896985313d0c827442833772e6@ec2-3-95-130-249.compute-1.amazonaws.com:5432/dcchp1bu7gerr8',
    host: 'ec2-3-95-130-249.compute-1.amazonaws.com',
    database: 'dcchp1bu7gerr8',
    username: 'xkvbatxhcoannw',
    password: '47d88f446bfe84a15a1e6778af7cc973c51b42896985313d0c827442833772e6',
    port: 5432,
    define: {
        timestamps: false,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};