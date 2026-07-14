# Usage

This repo (`workhorse-e2e-test`) is a minimal test target for Workhorse end-to-end runs.
It contains no production source code; its purpose is to be a live repo that Workhorse agents operate against.

## Structure

- `.pi/workflows/` — workflow specs (e.g. `coding/spec.json`) and run-state records (`index.json`)
- `.pi/workflow-subagents/` — per-run subagent artefacts and task outputs

## How Workhorse Agents Use This Repo

Workhorse targets this repo to exercise the full agent-workflow pipeline end-to-end.
Agents invoke the `coding` workflow, which runs two stages: `plan` then `implement`.
The `plan` stage is read-only (grep/find/read/ls); `implement` adds write, edit, and bash access.
Run state and stage results are recorded under `.pi/workflows/index.json`.

## Notes

Do not commit production code here — this repo exists solely as an E2E test fixture.
