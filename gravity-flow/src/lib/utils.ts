import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 🧠 MASTER-LOGIC: CN-FUNCTION
 * Merges Tailwind classes without conflicts and optimizes performance.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 📈 DEMAND SCORE GENERATOR (AI Idea)
 * Generates a real-time scarcity/demand score for products.
 */
export function calculateDemandScore(base: number, users: number) {
  const score = (base * 0.7) + (users * 0.3);
  return Math.min(Math.round(score), 100);
}

/**
 * 🧪 NEURAL CURRENCY FORMATTER
 * Formats any currency with precision for high-frequency trading feel.
 */
export function formatNeuralPrice(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: currency === 'BTC' || currency === 'ETH' ? 6 : 2,
  }).format(value);
}
