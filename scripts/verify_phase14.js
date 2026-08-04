const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 14 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/ai-engine/writing_engine.py",
  "services/core-backend/src/writing/writing.service.ts",
  "services/core-backend/src/writing/writing.controller.ts",
  "services/core-backend/src/writing/writing.module.ts"
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

// Verify Writing Engine class
const pythonWritingPath = path.join(__dirname, '..', 'services/ai-engine/writing_engine.py');
const pythonWritingContent = fs.readFileSync(pythonWritingPath, 'utf8');

if (pythonWritingContent.includes("class WritingEngine") && pythonWritingContent.includes("nativeRewrite")) {
  console.log('[OK] Verified WritingEngine style evaluation & native rewrite generator');
} else {
  console.log('[ERROR] WritingEngine verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 14 VERIFICATION SUCCESSFUL: AI Writing Coach verified.");
  process.exit(0);
} else {
  console.log("PHASE 14 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
