require('dotenv').config()
const mqtt = require('mqtt')
const { broker, topic, username, password, qos } = require('./config')

const onConnect = () => {
  console.log(`Connected to broker ${broker}`)
  mqttClient.subscribe(topic, { qos })
}

const onMessage = (topic, message) => {
  console.log(`New message received on topic ${topic}!`)
  console.log('Message: ', message.toString())
} 

const mqttClient = mqtt.connect(broker, { username, password, })
mqttClient.on('connect', onConnect)
mqttClient.on('message', onMessage)
