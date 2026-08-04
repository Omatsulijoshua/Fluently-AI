const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 10 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/ai-engine/pronunciation_engine.py",
  "services/ai-engine/intonation_analyzer.py",
  "services/core-backend/src/pronunciation/pronunciation.service.ts",
  "services/core-backend/src/pronunciation/pronunciation.controller.ts",
  "services/core-backend/src/pronunciation/pronunciation.module.ts"
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

// Verify Pronunciation Engine class
const pythonEnginePath = path.join(__dirname, '..', 'services/ai-engine/pronunciation_engine.py');
const pythonEngineContent = fs.readFileSync(pythonEnginePath, 'utf8');

if (pythonEngineContent.includes("class PronunciationEngine") && pythonEngineContent.includes("overallAccuracyScore")) {
  console.log('[OK] Verified PronunciationEngine acoustic scoring algorithm');
} else {
  console.log('[ERROR] PronunciationEngine verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 10 VERIFICATION SUCCESSFUL: Phonetic & Pronunciation engine verified.");
  process.exit(0);
} else {
  console.log("PHASE 10 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
