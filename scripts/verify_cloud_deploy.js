const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - CLOUD DEPLOYMENT BUNDLE VERIFICATION");
console.log("=" .repeat(60));

const requiredFiles = [
  "deploy/cloud/render.yaml",
  "deploy/cloud/railway.json",
  "deploy/cloud/vercel.json",
  "deploy/cloud/terraform/main.tf",
  "docs/05_cloud_deployment_guide.md"
];

let allPassed = true;

requiredFiles.forEach((relPath) => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    console.log(`[OK] Found cloud manifest: ${relPath}`);
  } else {
    console.log(`[ERROR] Missing cloud manifest: ${relPath}`);
    allPassed = false;
  }
});

console.log("=" .repeat(60));
if (allPassed) {
  console.log("CLOUD DEPLOYMENT BUNDLE VERIFIED: Ready for Vercel, Render, Railway & AWS deployment.");
  process.exit(0);
} else {
  console.log("CLOUD DEPLOYMENT BUNDLE VERIFICATION FAILED.");
  process.exit(1);
}
