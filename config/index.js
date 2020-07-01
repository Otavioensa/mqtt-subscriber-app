const env = {
  topic: process.env.TOPIC || 'my-mqtt-topic',
  broker: process.env.BROKER || 'mqtt://test.mosquitto.org',
  username: process.env.BROKER_USER,
  password: process.env.BROKER_PASSWORD,
}

module.exports = env
