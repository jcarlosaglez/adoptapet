module.exports = {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
	password: process.env.PASSWORD ? process.env.PASSWORD : "dummypassword"
};