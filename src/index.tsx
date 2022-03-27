import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';


createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-03-09 12:00')
        },
        {
          id: 2,
          title: 'Aluguel Casa',
          type: 'withdraw',
          category: 'Housing',
          amount: 1500,
          createdAt: new Date('2022-03-27 12:00')
        }
      ]
    })
  },
  // cria o servidor e rotas falsas
  routes(){
    // get routes from the /api/
    this.namespace = 'api';

    this.get('/transactions', () => {
      // GET
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      // POST
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
