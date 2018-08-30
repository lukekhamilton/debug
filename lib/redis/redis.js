import redis from 'redis';

const connect = (config, callback) => {
  const client = redis.createClient({
    host: config.host,
    password: config.password,
  });
  console.log('Trying to connect to redis');
  client.on('ready', () => {
    callback(client);
  });
};

export default {
  connect,
};
