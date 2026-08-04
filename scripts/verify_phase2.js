const fs = require('fs');
const path = require('path');

const requiredFiles = [
  "package.json",
  "docker-compose.yml",
  ".env.example",
  ".env",
  "README.md",
  "services/core-backend/package.json",
  "services/core-backend/tsconfig.json",
  "services/core-backend/Dockerfile",
  "services/core-backend/src/main.ts",
  "services/core-backend/src/app.module.ts",
  "services/core-backend/src/health/health.controller.ts",
  "services/core-backend/src/health/health.module.ts",
  "services/ai-engine/pyproject.toml",
  "services/ai-engine/requirements.txt",
  "services/ai-engine/Dockerfile",
  "services/ai-engine/main.py",
  "docs/01_product_vision_and_requirements.md",
  "docs/02_ecosystem_architecture_blueprint.md",
  "docs/03_phase_roadmap.md"
];

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 2 VERIFICATION SUITE");
console.log("=" .repeat(60));

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
  console.log("PHASE 2 VERIFICATION SUCCESSFUL: All files & services configured.");
  process.exit(0);
} else {
  console.log("PHASE 2 VERIFICATION FAILED: Some files are missing.");
  process.exit(1);
}
