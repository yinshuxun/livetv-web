import Express from 'express'
import Vue from 'vue'
import fs from "fs"
import {createRenderer} from 'vue-server-renderer'

const server = Express()
const template = fs.readFileSync('src/index.html','utf-8')


const render = (req, res) => {
  let app = new Vue({
      template: `<div>hello world1111!</div>`
  })

  createRenderer({
      template: fs.readFileSync('src/index.html','utf-8')
  }).renderToString(app,{
      title:"vuessr",
      meta:`
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name ="viewport" content ="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no,width=device-width">
      `
  } ,(err, html) => {
      if(err){
          console.log(err)
      }
      res.send(html)
  })
}

server.listen(8080, () => {
    console.log(`server is start on 8080`)
})
