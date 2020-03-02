const mqtt = require('mqtt')
const { broker, topic } = require('./config')

const onConnect = () => {
  console.log(`Connected to broker ${broker}`)
  mqttClient.subscribe(topic)
}

const onMessage = (topic, message) => {
  console.log(`New message received on topic ${topic}!`);
  console.log('Message: ', message.toString())
} 

const mqttClient = mqtt.connect(broker)
mqttClient.on('connect', onConnect)
mqttClient.on('message', onMessage)
