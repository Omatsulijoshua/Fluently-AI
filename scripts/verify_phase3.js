const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 3 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "services/core-backend/prisma/schema.prisma",
  "services/core-backend/prisma/seed.ts",
  "services/core-backend/database/schema_visualizer.sql"
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

// Check Prisma Schema contains key models & enums
const schemaPath = path.join(__dirname, '..', 'services/core-backend/prisma/schema.prisma');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');

const requiredTokens = [
  "model User",
  "model UserProfile",
  "model Language",
  "model VocabularyWord",
  "model Phoneme",
  "model AITutorPersona",
  "model AIConversationSession",
  "model PronunciationErrorLog",
  "model GrammarErrorLog",
  "model VocabularyMemoryDecay",
  "model School",
  "model Classroom",
  "model ParentChildLink",
  "model EnterpriseCompany",
  "enum UserRole",
  "enum CEFRStage"
];

requiredTokens.forEach((token) => {
  if (schemaContent.includes(token)) {
    console.log(`[OK] Verified Prisma Schema Token: "${token}"`);
  } else {
    console.log(`[ERROR] Missing Prisma Schema Token: "${token}"`);
    allPassed = false;
  }
});

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 3 VERIFICATION SUCCESSFUL: Schema, Models, and Seeds verified.");
  process.exit(0);
} else {
  console.log("PHASE 3 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
