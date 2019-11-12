const env = {
  port: process.env.PORT || 3000,
  topic: process.env.TOPIC || 'my-mqtt-topic',
  broker: process.env.BROKER || 'mqtt://test.mosquitto.org',
}

module.exports = env
