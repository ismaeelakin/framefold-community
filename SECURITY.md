# Security

Do not publish secrets, private artwork, personal data or exploit details affecting real people in a public issue.

Use GitHub's **Report a vulnerability** option under this repository's Security tab when available. If private reporting is unavailable, ask for a private contact channel without disclosing sensitive details. Do not attach private projects or credentials to that request.

## Current boundary

The studio is an early browser-local alpha, not secret storage or a guaranteed backup service. Keep downloaded backups. Malformed project/artwork files should fail safely; a local-only design does not eliminate parser, resource-exhaustion or browser risks. Use a small disposable reproduction for reports.

Public GitHub issues/discussions are separate from local projects. Application source remains private. No service credentials belong in client code, project packages or this repository.

## Future security gates

Proposed cloud features require server-side authorization, private asset access, transactional invitation expiry/revocation, rate limits and tested deletion/quota behaviour. Capture requires deliberate user action. GitHub sync requires owner-selected repositories and explicit visibility rules. Research prototypes must not silently upload work or broaden access.

These are release requirements, not deployed protections for services that do not exist yet. There is no bug bounty or guaranteed response time. See [privacy notes](PRIVACY.md).
