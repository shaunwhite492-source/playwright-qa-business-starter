# QA Audit Report — [CLIENT / PRODUCT]

**Tester:** [YOUR NAME]  
**Testing date:** [DATE]  
**Authorized environment:** [URL]  
**Browser/viewport:** Chromium desktop / [VIEWPORT]  
**Authorized scope:** [3 FLOWS]

## Executive summary
- Journeys reviewed: 3
- Pass: [NUMBER] | Fail: [NUMBER] | Blocked: [NUMBER]
- Findings: [NUMBER] (Critical [ ], High [ ], Medium [ ], Low [ ])
- Main recommended next action: [ONE SENTENCE]

## Workflow results
| Workflow | Status (Pass / Fail / Blocked) | Notes |
|---|---|---|
| [Flow 1] | [Status] | [Notes] |
| [Flow 2] | [Status] | [Notes] |
| [Flow 3] | [Status] | [Notes] |

## Issues discovered (if any)
### QA-001 — [Issue summary]
- **Severity:** [Critical / High / Medium / Low]
- **Preconditions:** [Test account and required state; NO real secrets]
- **Steps to reproduce:** 1. [...] 2. [...] 3. [...]
- **Expected:** [...]
- **Actual:** [...]
- **Evidence:** [Screenshot/recording link with sensitive details removed]
- **Suggested next step:** [...]

## Risks and limitations
- Testing covers only approved journeys, browser, viewport and test time.
- No security, performance, mobile, or full regression assessment was conducted.
- A passing workflow does not guarantee it will always pass in other conditions.

## Recommended follow-up
1. [Most important fix or risk]
2. [Opportunity to automate a repetitive check]
3. [Suggested retest after fixes]
