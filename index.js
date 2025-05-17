require('dotenv').config()
const mqtt = require('mqtt')
const { broker, topic, qos } = require('./config')

let mqttClient

const onMessage = (topic, message) => {
  console.log(`New message received on topic ${topic}!`)
  console.log('Message: ', message.toString())
} 


async function start() {
  mqttClient = await mqtt.connectAsync(broker)
  console.log(`Connected to broker ${broker} and topic ${topic}`)
  await mqttClient.subscribeAsync(topic, { qos: Number(qos) })
  mqttClient.on('message', onMessage)
}

start()
