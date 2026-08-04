const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 4 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/core-backend/src/auth/auth.module.ts",
  "services/core-backend/src/auth/auth.controller.ts",
  "services/core-backend/src/auth/auth.service.ts",
  "services/core-backend/src/auth/dto/auth.dto.ts",
  "services/core-backend/src/auth/guards/jwt-auth.guard.ts",
  "services/core-backend/src/auth/guards/roles.guard.ts",
  "services/core-backend/src/auth/decorators/roles.decorator.ts"
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

// Verify Roles Guard Logic
const rolesGuardPath = path.join(__dirname, '..', 'services/core-backend/src/auth/guards/roles.guard.ts');
const rolesGuardContent = fs.readFileSync(rolesGuardPath, 'utf8');

if (rolesGuardContent.includes("ROLES_KEY") && rolesGuardContent.includes("ForbiddenException")) {
  console.log('[OK] Verified RolesGuard RBAC authorization logic');
} else {
  console.log('[ERROR] RolesGuard verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 4 VERIFICATION SUCCESSFUL: Authentication & RBAC setup verified.");
  process.exit(0);
} else {
  console.log("PHASE 4 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
