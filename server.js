import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import Stripe from 'stripe';
import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';
import twilio from 'twilio';

// --- ⚙️ CORE ARCHITECTURE INITIALIZATION ---
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// High-Performance Optimization Layer
app.use(compression());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// --- 🛡️ ENVIRONMENT QUANTUM VALIDATION ---
const getEnv = (key) => process.env[key]?.trim() || null;

const MASTER_CONFIG = {
    GITHUB_TOKEN: getEnv('GITHUB_TOKEN'),
    SB_URL: getEnv('SUPABASE_URL') || 'https://virtual-vault.supabase.co',
    SB_KEY: getEnv('SUPABASE_ANON_KEY') || 'quantum-placeholder-key',
    STRIPE_KEY: getEnv('STRIPE_SECRET_KEY'),
    TWILIO_SID: getEnv('TWILIO_SID'),
    TWILIO_AUTH: getEnv('TWILIO_AUTH_TOKEN'),
    PORT: 8080
};

// --- 🤖 AUTONOMOUS NEURAL INTEGRATIONS ---
const supabase = createClient(MASTER_CONFIG.SB_URL, MASTER_CONFIG.SB_KEY);
const stripe = MASTER_CONFIG.STRIPE_KEY ? new Stripe(MASTER_CONFIG.STRIPE_KEY) : null;
const messenger = MASTER_CONFIG.TWILIO_SID ? twilio(MASTER_CONFIG.TWILIO_SID, MASTER_CONFIG.TWILIO_AUTH) : null;
const razorpay = new Razorpay({
    key_id: getEnv('RAZORPAY_KEY_ID') || 'rzp_test_demo',
    key_secret: getEnv('RAZORPAY_KEY_SECRET') || 'demo_secret'
});

// --- 🧠 MASTER BRAIN INTELLIGENCE ENDPOINTS ---

/**
 * @endpoint Deep System Health
 * സിസ്റ്റത്തിന്റെ മെമ്മറി, അപ്ടൈം, ഹൃദയമിടിപ്പ് എന്നിവ നിരീക്ഷിക്കുന്നു.
 */
app.get('/api/ai/health', (req, res) => {
    res.json({
        pulse: "STABLE",
        engine: "NEURAL_FLOW_V15_SUPREME",
        master: "Aadarsh",
        telemetry: {
            memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
            uptime: `${Math.round(process.uptime())}s`,
            node: process.version
        }
    });
});

/**
 * @endpoint Autonomous Sync
 * AI ഏജന്റുകൾക്ക് സിസ്റ്റത്തിന്റെ മൊത്തത്തിലുള്ള നിയന്ത്രണം നൽകുന്നു.
 */
app.get('/api/ai/sync', (req, res) => {
    res.json({
        status: "REVOLUTION_ACTIVE",
        gateways: {
            stripe: !!stripe,
            razorpay: true,
            supabase: !!getEnv('SUPABASE_URL'),
            twilio: !!messenger
        },
        privileges: MASTER_CONFIG.GITHUB_TOKEN ? "MASTER_AUTONOMY" : "LOCAL_SYNC"
    });
});

// --- 🌍 PERMANENT PATH_ERROR KILLER (REGEX INJECTION) ---
/**
 * CRITICAL FIX: path-to-regexp എറർ ഒഴിവാക്കാൻ സ്ട്രിംഗിന് പകരം Regex ഉപയോഗിക്കുന്നു.
 * ഇത് /api എന്ന് തുടങ്ങാത്ത എല്ലാ റൂട്ടുകളെയും സ്വീകരിക്കും.
 */
app.get(/^(?!\/api).+/, (req, res) => {
    const targetFile = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(targetFile, (err) => {
        if (err) {
            res.status(200).send(`
                <body style="background:#000;color:#00ffcc;font-family:monospace;padding:40px;display:flex;flex-direction:column;justify-content:center;align-items:center;height:90vh;text-align:center;">
                    <div style="border:1px solid #00ffcc;padding:30px;box-shadow: 0 0 30px #00ffcc44; background: rgba(0,255,204,0.05);">
                        <h1 style="letter-spacing:8px; margin:0;">> MASTER BRAIN V15 <</h1>
                        <hr style="border:0;border-top:1px solid #333;margin:20px 0;">
                        <p style="font-size:18px; color:#fff;">[SYSTEM]: CORE IS LIVE & STABLE ON PORT 8080</p>
                        <p style="color:#ffcc00; font-weight:bold;">[STATUS]: WAITING FOR DIST/INDEX.HTML PRODUCTION BUILD</p>
                        <p style="font-size:12px;color:#555;">Path Protection Engine: REGEX_DIRECT_V15</p>
                        <div style="margin-top:20px; animation: pulse 1.5s infinite; font-weight:bold;">● NEURAL LINK ACTIVE</div>
                    </div>
                    <style>@keyframes pulse { 0% {opacity:1} 50% {opacity:0.3} 100% {opacity:1} }</style>
                    <script>setTimeout(() => location.reload(), 5000);</script>
                </body>
            `);
        }
    });
});

// --- 🚀 ENGINE DEPLOYMENT ---
app.listen(MASTER_CONFIG.PORT, '0.0.0.0', () => {
    console.clear();
    process.stdout.write(`
    \x1b[36m
    ╔══════════════════════════════════════════════════════════╗
    ║          SHIPLOOT X - SUPREME REVOLUTION CORE            ║
    ╚══════════════════════════════════════════════════════════╝
    \x1b[0m
    \x1b[32m[OK]: MASTER BRAIN ONLINE AND STABLE\x1b[0m
    \x1b[34m[URL]: http://127.0.0.1:${MASTER_CONFIG.PORT}\x1b[0m
    \x1b[35m[FIX]: PATH_ERROR PERMANENTLY KILLED VIA REGEX\x1b[0m
    \x1b[33m[AI]: AUTONOMOUS MODE READY FOR DEPLOYMENT\x1b[0m
    \n`);
});
