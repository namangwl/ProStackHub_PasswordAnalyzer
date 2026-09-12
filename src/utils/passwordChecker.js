// src/utils/passwordChecker.js

export const evaluatePassword = (passInput) => {
    // Return early if empty to save rendering cycles
    if (!passInput) return { strengthScore: 0, label: '', issues: [], themeColor: 'transparent' };

    let issues = [];
    let strengthScore = 0;
    
    // Developer Note: Caching length to avoid re-evaluating
    const isLongEnough = passInput.length >= 8;

    // Using an array of rule objects is much cleaner than nested if/else chains
    const securityRules = [
        {
            passed: isLongEnough,
            msg: "Needs to be at least 8 characters long."
        },
        {
            passed: /[a-z]/.test(passInput),
            msg: "Missing a lowercase letter."
        },
        {
            passed: /[A-Z]/.test(passInput),
            msg: "Missing an uppercase letter."
        },
        {
            passed: /[0-9]/.test(passInput),
            msg: "Throw a number in there."
        },
        {
            passed: /[^A-Za-z0-9]/.test(passInput),
            msg: "Add a symbol (like @, #, or !)."
        }
    ];

    // Tally up the score and collect feedback in a single loop
    securityRules.forEach(rule => {
        if (rule.passed) {
            strengthScore++;
        } else {
            issues.push(rule.msg);
        }
    });

    // Default UI states for weak passwords
    let label = 'Weak';
    let themeColor = '#ef4444'; // default red

    // Bump up the UI feedback based on the raw score
    // Only grant 'Strong' if they actually met the minimum length requirement
    if (strengthScore >= 4 && isLongEnough) {
        label = 'Strong';
        themeColor = '#22c55e'; // green
    } else if (strengthScore >= 2) {
        label = 'Moderate';
        themeColor = '#eab308'; // yellow
    }

    return { strengthScore, label, issues, themeColor };
};