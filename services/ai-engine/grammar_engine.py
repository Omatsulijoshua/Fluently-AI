from typing import Dict, Any, List

class GrammarEngine:
    """
    Context-Aware Grammar Coach & Register Variation Generator.
    """

    def analyze_sentence(self, phrase: str, target_language: str) -> Dict[str, Any]:
        # Simulated intelligent grammar evaluation
        has_error = "fui a el" in phrase.lower() or "he go" in phrase.lower()

        corrected = phrase.replace("fui a el", "fui al").replace("he go", "he goes")
        rule = "Contraction of preposition 'a' and article 'el' into 'al' in Spanish." if "fui a el" in phrase.lower() else "Third-person singular present tense agreement."

        variations = {
            "formal": f"Por favor, considere: {corrected}",
            "informal": f"Forma normal: {corrected}",
            "native": f"Como lo diría un nativo: {corrected}",
            "business": f"Versión profesional: {corrected}",
        }

        return {
            "originalPhrase": phrase,
            "hasError": has_error,
            "correctedPhrase": corrected if has_error else phrase,
            "ruleApplied": rule if has_error else "Syntax correct",
            "explanation": f"The sentence has been evaluated for {target_language} grammar rules.",
            "variations": variations
        }

    def generate_grammar_quiz(self, rule: str, target_language: str) -> Dict[str, Any]:
        return {
            "question": f"Select the grammatically correct sentence ({rule}):",
            "options": [
                "Fui al mercado por la mañana.",
                "Fui a el mercado por la mañana.",
                "Fui el mercado por la mañana."
            ],
            "correctOptionIndex": 0,
            "explanation": "In Spanish, 'a + el' contracts to 'al'."
        }
