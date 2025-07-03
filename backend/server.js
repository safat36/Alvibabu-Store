const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/alvibabu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
