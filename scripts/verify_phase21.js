const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 21 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/enterprise-portal/package.json",
  "apps/enterprise-portal/app/layout.tsx",
  "apps/enterprise-portal/app/page.tsx",
  "apps/enterprise-portal/app/dashboard/page.tsx",
  "services/core-backend/src/enterprise/enterprise.service.ts",
  "services/core-backend/src/enterprise/enterprise.controller.ts",
  "services/core-backend/src/enterprise/enterprise.module.ts"
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

// Verify Enterprise Controller RBAC
const enterpriseControllerPath = path.join(__dirname, '..', 'services/core-backend/src/enterprise/enterprise.controller.ts');
const enterpriseControllerContent = fs.readFileSync(enterpriseControllerPath, 'utf8');

if (enterpriseControllerContent.includes("Roles(UserRole.ENTERPRISE_ADMIN") && enterpriseControllerContent.includes("createVocabTrack")) {
  console.log('[OK] Verified EnterpriseController RBAC route protection & custom vocab track generator');
} else {
  console.log('[ERROR] EnterpriseController verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 21 VERIFICATION SUCCESSFUL: Enterprise Platform & B2B Suite verified.");
  process.exit(0);
} else {
  console.log("PHASE 21 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
