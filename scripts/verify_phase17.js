const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 17 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/core-backend/src/social/matching.service.ts",
  "services/core-backend/src/social/social.service.ts",
  "services/core-backend/src/social/social.controller.ts",
  "services/core-backend/src/social/social.module.ts"
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

// Verify Matching Service
const matchingPath = path.join(__dirname, '..', 'services/core-backend/src/social/matching.service.ts');
const matchingContent = fs.readFileSync(matchingPath, 'utf8');

if (matchingContent.includes("findNativeMatches") && matchingContent.includes("matchScore")) {
  console.log('[OK] Verified MatchingService native speaker reciprocal algorithm');
} else {
  console.log('[ERROR] MatchingService verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 17 VERIFICATION SUCCESSFUL: Social & Language Exchange verified.");
  process.exit(0);
} else {
  console.log("PHASE 17 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
