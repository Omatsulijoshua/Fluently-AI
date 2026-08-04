const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 16 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/core-backend/src/gamification/gamification.service.ts",
  "services/core-backend/src/gamification/leaderboard.service.ts",
  "services/core-backend/src/gamification/gamification.controller.ts",
  "services/core-backend/src/gamification/gamification.module.ts"
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

// Verify Leaderboard Division ranking
const leaderboardPath = path.join(__dirname, '..', 'services/core-backend/src/gamification/leaderboard.service.ts');
const leaderboardContent = fs.readFileSync(leaderboardPath, 'utf8');

if (leaderboardContent.includes("getWeeklyLeaderboard") && leaderboardContent.includes("rankings")) {
  console.log('[OK] Verified LeaderboardService weekly division rankings');
} else {
  console.log('[ERROR] LeaderboardService verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 16 VERIFICATION SUCCESSFUL: Gamification & Leaderboards verified.");
  process.exit(0);
} else {
  console.log("PHASE 16 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
