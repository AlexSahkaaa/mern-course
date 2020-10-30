 const express = require('express')
 const config = require('config')
 const mongoose = require('mongoose')

// Это наш сервер
 const app = express()

//Так мы поделючяем middleware, в него передаем 2 парметра, первый ссылка, а второй расположение
app.use(express.json({ extended: true }))
 app.use('/api/auth', require('./routes/auth.routes'))
//Это позволяет получить нужное значение по указанному ключу в файле default.json
 const PORT = config.get('port') || 5000

 async function start() {
  try { 
    //Коннектим базу данных
    await mongoose.connect(config.get('mongoUri'), {
      //Эти три параметра нужны для успешного коннекта
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    //Запускает мой сервер и выводит консоль лог о том, что все успешно запущено
    app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`))
  } catch (e) {
    console.log('Server error', e.massage)
    process.exit(1)
  }
 }

 start()
