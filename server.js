import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Stripe from 'stripe';
import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';
import twilio from 'twilio';
import compression from 'compression';

// --- 🧠 NEURAL CORE INITIALIZATION ---
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Force Extreme Speed & Connectivity
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// --- 🛡️ ENVIRONMENT & MASTER AI CONFIG ---
const getEnv = (key) => process.env[key]?.trim() || null;

// നിങ്ങളുടെ Personal Access Token ഇവിടെ സുരക്ഷിതമായി ഉപയോഗിക്കും
const GITHUB_MASTER_TOKEN = getEnv('GITHUB_TOKEN'); 

const SB_URL = getEnv('SUPABASE_URL');
const SB_KEY = getEnv('SUPABASE_ANON_KEY');
const IS_SB_VALID = SB_URL && SB_URL.startsWith('https://');

const supabase = createClient(
    IS_SB_VALID ? SB_URL : 'https://virtual-vault.supabase.co',
    SB_KEY || 'quantum-placeholder-key'
);

// --- 🤖 AI COMMAND CENTER (FULL CONTROL) ---
app.get('/api/ai/status', (req, res) => {
    res.json({
        status: "OPERATIONAL",
        master: "Aadarsh",
        ai_access: GITHUB_MASTER_TOKEN ? "UNRESTRICTED" : "READ_ONLY",
        engine: "SHIPLOOT X NEURAL V14",
        local_link: "http://127.0.0.1:8080"
    });
});

// --- 💳 PAYMENT & MESSAGING GATEWAYS ---
const messenger = getEnv('TWILIO_SID') ? twilio(getEnv('TWILIO_SID'), getEnv('TWILIO_AUTH_TOKEN')) : null;
const stripe = getEnv('STRIPE_SECRET_KEY') ? new Stripe(getEnv('STRIPE_SECRET_KEY')) : null;
const razorpay = new Razorpay({
    key_id: getEnv('RAZORPAY_KEY_ID') || 'rzp_test_demo',
    key_secret: getEnv('RAZORPAY_KEY_SECRET') || 'demo_secret'
});

// --- 🌍 FIXING PATH ERRORS (Copilot Fix) ---
// വൈൽഡ്കാർഡ് എറർ വരാതിരിക്കാൻ കൃത്യമായ റൗട്ടിംഗ്
app.get('/health', (req, res) => res.send('AI Core Pulse: OK'));

app.get('(.*)', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
        if (err) {
            // ഫയൽ ഇല്ലെങ്കിൽ എറർ കാണിക്കാതെ AI-ക്ക് മെസേജ് നൽകും
            res.status(200).send("AI Core: Waiting for build to complete...");
        }
    });
});

// --- 🚀 ENGINE LAUNCH ---
const PORT = 8080; 
app.listen(PORT, '0.0.0.0', () => {
    console.clear();
    console.log(`
    \x1b[36m
    ╔══════════════════════════════════════════════════════════╗
    ║          SHIPLOOT X - AI MASTER CONTROL CORE             ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m
    \x1b[32m[SYSTEM]: MASTER AI HANDSHAKE SUCCESSFUL\x1b[0m
    \x1b[34m[URL]: http://127.0.0.1:8080\x1b[0m
    \x1b[33m[TOKEN]: ${GITHUB_MASTER_TOKEN ? 'PROTECTED & ACTIVE ✅' : 'NOT FOUND ❌'}\x1b[0m
    \x1b[35m[CONTROL]: FULL AI AUTONOMY ENABLED\x1b[0m
    `);
});
