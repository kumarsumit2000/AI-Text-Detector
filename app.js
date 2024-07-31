function checkAIText() {
    let inputText = document.getElementById("inputText").value;
    let result = document.getElementById("result");

    // Basic indicators of AI-generated text (very simplistic and not accurate)
    let aiIndicators = [
        { pattern: /\b(in conclusion|to summarize|in summary)\b/gi, label: "AI-like formal phrases" },
        { pattern: /\bmoreover|furthermore|therefore\b/gi, label: "Excessive use of transitional phrases" },
        { pattern: /\bthis (article|essay|text) will\b/gi, label: "Structured, formal openings" },
        { pattern: /high frequency of "the" or "is"/gi, label: "High frequency of common words" },
        { pattern: /repetitive patterns/gi, label: "Repetitive phrases" },
    ];

    let aiScore = 0;

    aiIndicators.forEach(indicator => {
        if (inputText.match(indicator.pattern)) {
            aiScore++;
            console.log(`Matched: ${indicator.label}`);
        }
    });

    // Basic threshold for AI detection
    if (aiScore >= 2) {
        result.textContent = "The text seems like it could be AI-written.";
        result.style.color = "red";
    } else {
        result.textContent = "The text seems human-written.";
        result.style.color = "green";
    }
}
