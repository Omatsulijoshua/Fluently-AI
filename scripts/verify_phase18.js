const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 18 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/teacher-portal/package.json",
  "apps/teacher-portal/app/layout.tsx",
  "apps/teacher-portal/app/page.tsx",
  "apps/teacher-portal/app/dashboard/page.tsx",
  "services/core-backend/src/teacher/teacher.service.ts",
  "services/core-backend/src/teacher/teacher.controller.ts",
  "services/core-backend/src/teacher/teacher.module.ts"
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

// Verify Teacher Controller RBAC
const teacherControllerPath = path.join(__dirname, '..', 'services/core-backend/src/teacher/teacher.controller.ts');
const teacherControllerContent = fs.readFileSync(teacherControllerPath, 'utf8');

if (teacherControllerContent.includes("Roles(UserRole.TEACHER") && teacherControllerContent.includes("createClassroom")) {
  console.log('[OK] Verified TeacherController RBAC route protection');
} else {
  console.log('[ERROR] TeacherController verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 18 VERIFICATION SUCCESSFUL: Teacher Portal & Classroom Suite verified.");
  process.exit(0);
} else {
  console.log("PHASE 18 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
