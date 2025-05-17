const env = {
  topic: process.env.TOPIC || 'speakers-program/sensor/pir',
  broker: process.env.BROKER || 'mqtt://broker.hivemq.com',
  username: process.env.BROKER_USER,
  password: process.env.BROKER_PASSWORD,
  qos: process.env.BROKER_CLIENT_QOS || 1,
}

module.exports = env
