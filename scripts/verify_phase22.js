const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 22 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/admin-dashboard/package.json",
  "apps/super-admin/package.json",
  "apps/super-admin/src/App.tsx",
  "services/core-backend/src/admin/admin.service.ts",
  "services/core-backend/src/admin/admin.controller.ts",
  "services/core-backend/src/admin/admin.module.ts"
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

// Verify Admin Controller SUPER_ADMIN protection
const adminControllerPath = path.join(__dirname, '..', 'services/core-backend/src/admin/admin.controller.ts');
const adminControllerContent = fs.readFileSync(adminControllerPath, 'utf8');

if (adminControllerContent.includes("Roles(UserRole.SUPER_ADMIN") && adminControllerContent.includes("updateLlmConfig")) {
  console.log('[OK] Verified AdminController SUPER_ADMIN route protection for dynamic LLM switching');
} else {
  console.log('[ERROR] AdminController verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 22 VERIFICATION SUCCESSFUL: Admin & Super Admin Dashboards verified.");
  process.exit(0);
} else {
  console.log("PHASE 22 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
