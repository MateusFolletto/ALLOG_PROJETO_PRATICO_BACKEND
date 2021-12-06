export default {
    dialect: 'postgres',
    url: 'postgres://checncjdcvjdxh:b973325b18e2498ccb21582a331acef2eb10971a8896d14540d1975ff62e9553@ec2-54-225-130-212.compute-1.amazonaws.com:5432/d7faitt8kgtn1i',
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