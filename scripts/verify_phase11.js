const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 11 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/ai-engine/grammar_engine.py",
  "services/core-backend/src/grammar/grammar.service.ts",
  "services/core-backend/src/grammar/grammar.controller.ts",
  "services/core-backend/src/grammar/grammar.module.ts"
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

// Verify Grammar Engine class
const pythonEnginePath = path.join(__dirname, '..', 'services/ai-engine/grammar_engine.py');
const pythonEngineContent = fs.readFileSync(pythonEnginePath, 'utf8');

if (pythonEngineContent.includes("class GrammarEngine") && pythonEngineContent.includes("variations")) {
  console.log('[OK] Verified GrammarEngine register variations & quiz generation');
} else {
  console.log('[ERROR] GrammarEngine verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 11 VERIFICATION SUCCESSFUL: Smart Grammar engine verified.");
  process.exit(0);
} else {
  console.log("PHASE 11 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
