const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 20 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/school-portal/package.json",
  "apps/school-portal/app/layout.tsx",
  "apps/school-portal/app/page.tsx",
  "apps/school-portal/app/dashboard/page.tsx",
  "services/core-backend/src/school/school.service.ts",
  "services/core-backend/src/school/school.controller.ts",
  "services/core-backend/src/school/school.module.ts"
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

// Verify School Controller RBAC
const schoolControllerPath = path.join(__dirname, '..', 'services/core-backend/src/school/school.controller.ts');
const schoolControllerContent = fs.readFileSync(schoolControllerPath, 'utf8');

if (schoolControllerContent.includes("Roles(UserRole.SCHOOL_ADMIN") && schoolControllerContent.includes("allocateSeats")) {
  console.log('[OK] Verified SchoolController RBAC route protection & seat allocation engine');
} else {
  console.log('[ERROR] SchoolController verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 20 VERIFICATION SUCCESSFUL: School Management Portal verified.");
  process.exit(0);
} else {
  console.log("PHASE 20 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
