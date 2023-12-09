export async function logar(username, password) {
  const response = await fetch("https://realm.mongodb.com/api/client/v2.0/app/data-dxiqe/auth/providers/local-userpass/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "username": username,
      "password": password
    })
  });

  const data = await response.json();
  sessionStorage.setItem('token', data.access_token);
  console.log(data)
}

export async function enviarMongo(manifestacao, ra, nome, telefone, email, setor, destinatario, registro) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  fetch("https://sa-east-1.aws.data.mongodb-api.com/app/data-dxiqe/endpoint/data/v1/action/insertOne", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({
      "collection": "cliente",
      "database": "lucasTrabalho",
      "dataSource": "ProjetoUNI",
      "document": {
        "Manifestação": manifestacao,
        "RA": ra,
        "Nome": nome,
        "Telefone": telefone,
        "Email": email,
        "Setor": setor,
        "Destinatário": destinatario,
        "Registro": registro,
        "Data": formattedDate
      }
    })
  })
}

export function findMongo() {
  return fetch("https://sa-east-1.aws.data.mongodb-api.com/app/data-dxiqe/endpoint/data/v1/action/find", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({
      "collection": "cliente",
      "database": "lucasTrabalho",
      "dataSource": "ProjetoUNI",
      "projection": {}
    })
  })
    .then(response => response.json());
}

export function deletaMongo(idMongo) {
  return fetch("https://sa-east-1.aws.data.mongodb-api.com/app/data-dxiqe/endpoint/data/v1/action/deleteOne", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({
      "collection": "cliente",
      "database": "lucasTrabalho",
      "dataSource": "ProjetoUNI",
      "filter": {
        "_id": { "$oid": idMongo }
      }
    })
  })
}