const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ============================================================================
// MONGOOSE CONNECTION
// ===========================
mongoose.connect('mongodb://localhost/student', { useNewUrlParser: true })
    .then(() => console.log('Db connected'))
    .catch(() => console.error('Db connection failed'));
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
// =============================================================================
// INITIALIZE THE ROUTE
// ============================
createStudentRoute = require('./route/students.route');
addressRoute = require('./route/address.route');
// ==============================================================================
// ROUTES
// ==================
app.use('/api/students', createStudentRoute);
app.use('/api/addresses', addressRoute);
// =================================================================================
// LISTEN PORT
// ===================
app.listen(PORT, () => {
    console.log(`Server Listening At Port ${PORT}`);
});
// ==================================================================================