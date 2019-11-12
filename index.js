const http = require('http')
const express = require('express')
const mqtt = require('mqtt')
const { port, broker, topic } = require('./config')

const app = express()

const onConnect = () => {
  console.log('connected')
  mqttClient.subscribe(topic)
}

const onMessage = (topic, message) => {
  console.log('Topic: ', topic)
  console.log('Message: ', message.toString())
} 

const mqttClient = mqtt.connect(broker)
mqttClient.on('connect', onConnect)
mqttClient.on('message', onMessage)

const server = http.createServer(app)
server.listen(port, () => console.log(`Listening on port ${port}`))