const winston = require("winston")  //Winston is commonly used in Node.js automation frameworks to store logs.

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({timestamp, level, message}) => {
          return `${timestamp} ${level}: ${message}`
      })
  ),
  transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "logs/test.log" })
  ]
})

module.exports = logger