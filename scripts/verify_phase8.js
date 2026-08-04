const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 8 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "apps/flutter-mobile/pubspec.yaml",
  "apps/flutter-mobile/lib/main.dart",
  "apps/flutter-mobile/lib/theme/app_theme.dart",
  "apps/flutter-mobile/lib/services/audio_service.dart",
  "apps/flutter-mobile/lib/services/api_client.dart",
  "apps/flutter-mobile/lib/screens/home_screen.dart",
  "apps/flutter-mobile/lib/screens/conversation_screen.dart"
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

// Verify pubspec name
const pubspecPath = path.join(__dirname, '..', 'apps/flutter-mobile/pubspec.yaml');
const pubspecContent = fs.readFileSync(pubspecPath, 'utf8');

if (pubspecContent.includes("fluently_ai_mobile")) {
  console.log('[OK] Verified pubspec.yaml mobile package manifest');
} else {
  console.log('[ERROR] pubspec.yaml verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 8 VERIFICATION SUCCESSFUL: Flutter Mobile App workspace verified.");
  process.exit(0);
} else {
  console.log("PHASE 8 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
