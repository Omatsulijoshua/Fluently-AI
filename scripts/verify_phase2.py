import os
import sys

def check_file(path: str) -> bool:
    if os.path.exists(path):
        print(f"[OK] Found file: {path}")
        return True
    else:
        print(f"[ERROR] Missing file: {path}")
        return False

def verify_phase2():
    print("=" * 60)
    print("FLUENTLY AI - PHASE 2 VERIFICATION SUITE")
    print("=" * 60)

    required_files = [
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
        "docs/03_phase_roadmap.md",
    ]

    all_passed = True
    for f in required_files:
        if not check_file(f):
            all_passed = False

    print("=" * 60)
    if all_passed:
        print("PHASE 2 VERIFICATION SUCCESSFUL: All files & services configured.")
        sys.exit(0)
    else:
        print("PHASE 2 VERIFICATION FAILED: Some files are missing.")
        sys.exit(1)

if __name__ == "__main__":
    verify_phase2()
