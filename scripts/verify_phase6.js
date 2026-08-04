const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 6 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/landing-web/package.json",
  "apps/landing-web/app/layout.tsx",
  "apps/landing-web/app/page.tsx",
  "apps/landing-web/components/Hero.tsx",
  "apps/landing-web/components/LivePreviewWidget.tsx",
  "apps/landing-web/components/CompetitorComparison.tsx",
  "apps/landing-web/components/PricingMatrix.tsx"
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

// Verify SEO metadata in layout
const layoutPath = path.join(__dirname, '..', 'apps/landing-web/app/layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf8');

if (layoutContent.includes("metadata") && layoutContent.includes("openGraph")) {
  console.log('[OK] Verified OpenGraph & SEO metadata declarations');
} else {
  console.log('[ERROR] SEO metadata verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 6 VERIFICATION SUCCESSFUL: Landing site & components verified.");
  process.exit(0);
} else {
  console.log("PHASE 6 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
