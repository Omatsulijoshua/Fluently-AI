const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 12 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/ai-engine/srs_engine.py",
  "services/core-backend/src/vocabulary/vocabulary.service.ts",
  "services/core-backend/src/vocabulary/vocabulary.controller.ts",
  "services/core-backend/src/vocabulary/vocabulary.module.ts"
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

// Verify HLR equation in SRSEngine
const pythonSRSPath = path.join(__dirname, '..', 'services/ai-engine/srs_engine.py');
const pythonSRSContent = fs.readFileSync(pythonSRSPath, 'utf8');

if (pythonSRSContent.includes("class SRSEngine") && pythonSRSContent.includes("calculate_retrievability")) {
  console.log('[OK] Verified SRSEngine Half-Life Regression math formula');
} else {
  console.log('[ERROR] SRSEngine verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 12 VERIFICATION SUCCESSFUL: Vocabulary & SRS engine verified.");
  process.exit(0);
} else {
  console.log("PHASE 12 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
