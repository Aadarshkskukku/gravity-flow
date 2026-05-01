import express from 'express';
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(`✅ [LOGGING]: ${time} - ${req.method} request to ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>SHIPLOOT X - CORE ONLINE</h1>');
});

app.listen(PORT, () => {
  console.log('======================================');
  console.log(' MASTER BRAIN V26 ONLINE - ES MODULE ');
  console.log(' STATUS: LISTENING ON PORT 8080      ');
  console.log('======================================');
});
