const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/carcart_v2', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);

    mongoose.connection.on('error', err => console.error('MongoDB error:', err));
    mongoose.connection.on('disconnected', () => console.warn('MongoDB disconnected'));

  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    process.exit(1); // Stop the server if DB fails
  }
};