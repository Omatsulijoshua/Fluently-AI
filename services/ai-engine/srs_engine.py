import math
from typing import Dict, Any

class SRSEngine:
    """
    Half-Life Regression (HLR) Memory Decay Engine for Spaced Repetition.
    Calculates word retrievability R = 2^(-delta_t / h).
    """

    def calculate_retrievability(self, delta_t_days: float, half_life_days: float) -> float:
        if half_life_days <= 0:
            half_life_days = 1.0
        retrievability = math.pow(2.0, -delta_t_days / half_life_days)
        return round(retrievability, 4)

    def update_half_life(self, current_half_life: float, recall_success: bool) -> Dict[str, Any]:
        if recall_success:
            # Memory strengthened: increase half-life by factor of 2.2x
            new_half_life = current_half_life * 2.2
        else:
            # Memory lapsed: reduce half-life to minimum baseline
            new_half_life = max(0.5, current_half_life * 0.4)

        return {
            "previousHalfLifeDays": current_half_life,
            "newHalfLifeDays": round(new_half_life, 2),
            "nextReviewDays": round(new_half_life, 1),
            "status": "strengthened" if recall_success else "lapsed"
        }
