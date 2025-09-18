const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sun-farm-prosper', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('Make sure MongoDB is running locally on port 27017');
    console.log('You can start it with: brew services start mongodb-community (on macOS)');
    process.exit(1);
  }
};

module.exports = connectDB;