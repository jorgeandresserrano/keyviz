import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const platform = process.platform;
if (!["darwin", "win32"].includes(platform)) {
  throw new Error("Build portable apps on macOS or Windows.");
}

const run = (command, args) => execFileSync(command, args, {
  cwd: root,
  stdio: "inherit",
});
const cli = resolve(root, "node_modules/@tauri-apps/cli/tauri.js");
run(process.execPath, [cli, "build", ...(platform === "darwin"
  ? ["--bundles", "app"] : ["--no-bundle"])]);

const { version } = JSON.parse(readFileSync(resolve(root, "src-tauri/tauri.conf.json"), "utf8"));
const output = resolve(root, "portable");
mkdirSync(output, { recursive: true });
const archive = resolve(output, `keyviz-${version}-${platform === "darwin" ? "macos" : "windows"}-${process.arch}.zip`);
const release = resolve(root, "src-tauri/target/release");
if (platform === "darwin") {
  run("ditto", ["-c", "-k", "--sequesterRsrc", "--keepParent", resolve(release, "bundle/macos/keyviz.app"), archive]);
} else {
  // Pass paths through the environment so PowerShell never interprets them as code.
  execFileSync("powershell.exe", ["-NoProfile", "-Command",
    "Compress-Archive -LiteralPath $env:KEYVIZ_EXE -DestinationPath $env:KEYVIZ_ARCHIVE -Force"], {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, KEYVIZ_EXE: resolve(release, "keyviz.exe"), KEYVIZ_ARCHIVE: archive },
  });
}
console.log(`Portable app: ${archive}`);
