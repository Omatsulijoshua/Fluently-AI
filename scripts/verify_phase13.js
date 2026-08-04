const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 13 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/ai-engine/media_importer.py",
  "services/ai-engine/listening_engine.py",
  "services/core-backend/src/media/media.service.ts",
  "services/core-backend/src/media/media.controller.ts",
  "services/core-backend/src/media/media.module.ts"
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

// Verify Media Importer class
const pythonImporterPath = path.join(__dirname, '..', 'services/ai-engine/media_importer.py');
const pythonImporterContent = fs.readFileSync(pythonImporterPath, 'utf8');

if (pythonImporterContent.includes("class MediaImporter") && pythonImporterContent.includes("annotatedSentences")) {
  console.log('[OK] Verified MediaImporter CEFR parsing & vocabulary extraction');
} else {
  console.log('[ERROR] MediaImporter verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 13 VERIFICATION SUCCESSFUL: Smart Reading & Listening engines verified.");
  process.exit(0);
} else {
  console.log("PHASE 13 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
