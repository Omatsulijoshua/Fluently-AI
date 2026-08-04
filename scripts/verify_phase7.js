const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 7 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/student-web/package.json",
  "apps/student-web/app/layout.tsx",
  "apps/student-web/app/page.tsx",
  "apps/student-web/app/dashboard/page.tsx",
  "apps/student-web/components/Sidebar.tsx",
  "apps/student-web/components/LessonPlayer.tsx"
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

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 7 VERIFICATION SUCCESSFUL: Student Web App workspace verified.");
  process.exit(0);
} else {
  console.log("PHASE 7 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
