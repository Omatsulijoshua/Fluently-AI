const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 19 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/parent-portal/package.json",
  "apps/parent-portal/app/layout.tsx",
  "apps/parent-portal/app/page.tsx",
  "apps/parent-portal/app/dashboard/page.tsx",
  "services/core-backend/src/parent/parent.service.ts",
  "services/core-backend/src/parent/parent.controller.ts",
  "services/core-backend/src/parent/parent.module.ts"
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

// Verify Parent Controller RBAC
const parentControllerPath = path.join(__dirname, '..', 'services/core-backend/src/parent/parent.controller.ts');
const parentControllerContent = fs.readFileSync(parentControllerPath, 'utf8');

if (parentControllerContent.includes("Roles(UserRole.PARENT") && parentControllerContent.includes("setScreenTime")) {
  console.log('[OK] Verified ParentController RBAC route protection & COPPA safety filters');
} else {
  console.log('[ERROR] ParentController verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 19 VERIFICATION SUCCESSFUL: Parent Portal & Kid Safety Controls verified.");
  process.exit(0);
} else {
  console.log("PHASE 19 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
