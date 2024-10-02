const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'brerzwgiuu7m7ksytjli-mysql.services.clever-cloud.com',
  user: 'ugryucympu0qb9ip', 
  password: 'sqqAhbnthjneSjTalBSJ', 
  database: 'brerzwgiuu7m7ksytjli' 
});


connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL exitosa');
});

connection.end((err) => {
  if (err) {
    console.error('Error al cerrar la conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión cerrada');
});
