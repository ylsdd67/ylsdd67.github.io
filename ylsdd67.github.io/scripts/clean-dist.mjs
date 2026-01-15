import { rm } from 'node:fs/promises';

const targets = ['dist'];

for (const target of targets) {
    try {
        await rm(new URL(`../${target}`, import.meta.url), { recursive: true, force: true });
    } catch (error) {
        console.error(`[clean] Failed to remove ${target}. It may be locked by another process.`);
        console.error(error);
        process.exitCode = 1;
    }
}
