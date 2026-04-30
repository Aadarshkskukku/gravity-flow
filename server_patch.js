import express from 'express';
const app = express();
app.use(express.json());

app.post('/api/ai/master-control', (req, res) => {
    console.log('\x1b[1;32m[AI CONTROL RECEIVED]: ' + req.body.prompt + '\x1b[0m');
    res.send('AI_CONTROL_ACTIVE');
});

app.listen(8080, () => {
    console.log('\n\x1b[1;36m====================================');
    console.log('MASTER BRAIN V26 ONLINE - ES MODULE');
    console.log('====================================\x1b[0m');
});
