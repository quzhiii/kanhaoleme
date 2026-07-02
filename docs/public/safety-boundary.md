# Safety Boundary

Date: 2026-07-02

Kanhaoleme is a real healthcare experience sharing demo. It is not a medical diagnosis product, medical AI product, hospital review ranking site, or treatment recommendation tool.

## Hard Boundaries

- No diagnosis.
- No treatment plans.
- No drug recommendations.
- No cost promises.
- No doctor ranking.
- No institution ranking.
- No paid provider sorting.
- XiaoKan must not impersonate a doctor.
- XiaoKan must not impersonate a patient or real user.
- Current demo does not use real user health data.
- Current demo does not connect to real medical AI APIs.

## Mock Data Rules

Allowed mock content:

- Appointment process.
- Waiting and queue experience.
- Communication experience.
- Cost clues as historical self-reported information.
- Follow-up logistics.
- Questions users can confirm with formal providers.
- Source and trust status labels.

Prohibited mock content:

- Drug names or dosage suggestions.
- Treatment recommendations.
- Diagnostic conclusions.
- Effectiveness promises.
- Provider ranking.
- Institution recommendations.
- Personalized cost estimates.
- Real medical records, invoices, ID numbers, phone numbers, inpatient numbers, or detailed addresses.

## Real Health Data Preconditions

Real health-related user data should only be introduced after these conditions are met:

- Clear user authorization and consent.
- De-identification before publication.
- Sensitive field detection.
- Draft, review, deletion, and withdrawal flows.
- Moderation queue and human review for high-risk content.
- Audit logs for moderation actions.
- Public privacy policy and user agreement.
- Clear labeling for AI-organized content.
- Security review for storage, access control, and API permissions.

## Cost Boundary

Cost information is a clue from user self-reporting or limited verification. It is not a quote, reimbursement promise, or personal estimate. Users should confirm actual costs with formal medical institutions or service providers.

## Commercial Content Boundary

Commercial content must be explicitly labeled and must not participate in ordinary experience ranking. The current demo does not include real commercial partnerships.
