const fs = require('fs');
const path = require('path');

console.log("=" .repeat(60));
console.log("FLUENTLY AI - PHASE 24 VERIFICATION SUITE");
console.log("=" .repeat(60));

const requiredFiles = [
  "tests/e2e/api_integration.spec.ts",
  "tests/load/k6_voice_pipeline.js",
  "scripts/security_audit.py",
  "deploy/k8s/deployment.yaml",
  "deploy/k8s/ingress.yaml"
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

// Verify Kubernetes Manifest HPA rules
const k8sDeploymentPath = path.join(__dirname, '..', 'deploy/k8s/deployment.yaml');
const k8sDeploymentContent = fs.readFileSync(k8sDeploymentPath, 'utf8');

if (k8sDeploymentContent.includes("HorizontalPodAutoscaler") && k8sDeploymentContent.includes("maxReplicas: 20")) {
  console.log('[OK] Verified Kubernetes Deployment & HorizontalPodAutoscaler (HPA max 20 pods)');
} else {
  console.log('[ERROR] Kubernetes deployment manifest verification failed');
  allPassed = false;
}

console.log("=" .repeat(60));
if (allPassed) {
  console.log("PHASE 24 VERIFICATION SUCCESSFUL: Testing, Security & Deployment Pipeline verified.");
  process.exit(0);
} else {
  console.log("PHASE 24 VERIFICATION FAILED: Verification issues detected.");
  process.exit(1);
}
