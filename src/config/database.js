module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  database: 'Meetup',
  port: '5433',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
