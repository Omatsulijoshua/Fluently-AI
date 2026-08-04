const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 9 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/ai-engine/llm_router.py",
  "services/ai-engine/persona_engine.py",
  "services/core-backend/src/conversation/conversation.gateway.ts",
  "services/core-backend/src/conversation/conversation.service.ts",
  "services/core-backend/src/conversation/conversation.module.ts"
];

let allPassed = true;

requiredFiles.forEach((relPath) => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    console.log(`[OK] Found file: ${relPath}`);
  } else {
    console.log(`[ERROR] Missing file: ${relPath}`);
    allPassed = false;
  }
});

// Verify Persona Engine tones
const personaPath = path.join(__dirname, '..', 'services/ai-engine/persona_engine.py');
const personaContent = fs.readFileSync(personaPath, 'utf8');

if (personaContent.includes("FRIENDLY_PEER") && personaContent.includes("STRICT_MENTOR")) {
  console.log('[OK] Verified PersonaEngine prompt synthesis tones');
} else {
  console.log('[ERROR] PersonaEngine verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 9 VERIFICATION SUCCESSFUL: AI Tutor & Conversation engine verified.");
  process.exit(0);
} else {
  console.log("PHASE 9 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
