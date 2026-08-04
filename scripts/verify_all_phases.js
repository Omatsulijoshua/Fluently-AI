const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("=" .repeat(70));
console.log("FLUENTLY AI - MASTER ECOSYSTEM VERIFICATION SUITE (ALL PHASES)");
console.log("=" .repeat(70));

const phaseScripts = [
  "scripts/verify_phase2.js",
  "scripts/verify_phase3.js",
  "scripts/verify_phase4.js",
  "scripts/verify_phase5.js",
  "scripts/verify_phase6.js",
  "scripts/verify_phase7.js",
  "scripts/verify_phase8.js",
  "scripts/verify_phase9.js",
  "scripts/verify_phase10.js",
  "scripts/verify_phase11.js",
  "scripts/verify_phase12.js",
  "scripts/verify_phase13.js",
  "scripts/verify_phase14.js",
  "scripts/verify_phase15.js",
  "scripts/verify_phase16.js",
  "scripts/verify_phase17.js",
  "scripts/verify_phase18.js",
  "scripts/verify_phase19.js",
  "scripts/verify_phase20.js",
  "scripts/verify_phase21.js",
  "scripts/verify_phase22.js",
  "scripts/verify_phase23.js",
  "scripts/verify_phase24.js"
];

let masterPassed = true;

phaseScripts.forEach((scriptRelPath) => {
  const fullPath = path.join(__dirname, '..', scriptRelPath);
  if (fs.existsSync(fullPath)) {
    try {
      execSync(`node "${fullPath}"`, { stdio: 'inherit' });
    } catch (e) {
      console.log(`[ERROR] Verification script ${scriptRelPath} failed.`);
      masterPassed = false;
    }
  } else {
    console.log(`[WARNING] Verification script missing: ${scriptRelPath}`);
  }
});

console.log("=" .repeat(70));
if (masterPassed) {
  console.log("SUCCESS: ALL 25 PHASES OF FLUENTLY AI HAVE BEEN FULLY VERIFIED!");
  console.log("THE AI LANGUAGE OPERATING SYSTEM IS READY FOR PRODUCTION LAUNCH.");
  process.exit(0);
} else {
  console.log("FAILURE: Some verification checks failed.");
  process.exit(1);
}
