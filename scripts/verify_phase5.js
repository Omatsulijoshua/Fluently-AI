const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 5 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "packages/ui-system/package.json",
  "packages/ui-system/src/styles/tokens.css",
  "packages/ui-system/src/components/Button.tsx",
  "packages/ui-system/src/components/AudioVisualizer.tsx",
  "packages/ui-system/src/components/IPAPhonemeCard.tsx",
  "packages/ui-system/src/components/CEFRPill.tsx",
  "packages/ui-system/src/components/StreakCounter.tsx",
  "packages/ui-system/src/index.ts"
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

// Check CSS tokens file contains glassmorphic and HSL tokens
const tokensPath = path.join(__dirname, '..', 'packages/ui-system/src/styles/tokens.css');
const tokensContent = fs.readFileSync(tokensPath, 'utf8');

if (tokensContent.includes("--fluently-primary") && tokensContent.includes(".fluently-glass")) {
  console.log('[OK] Verified HSL tokens & glassmorphic utility rules');
} else {
  console.log('[ERROR] tokens.css verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 5 VERIFICATION SUCCESSFUL: Design system components verified.");
  process.exit(0);
} else {
  console.log("PHASE 5 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
