# [Keyviz](https://keyviz.org)

<div>
   <img src="https://img.shields.io/github/v/release/mulaRahul/keyviz?style=flat-square" alt="Releases">
   <img src="https://img.shields.io/github/downloads/mulaRahul/keyviz/total?style=flat-square" alt="Downloads">
   <img src="https://img.shields.io/github/stars/mulaRahul/keyviz?style=flat-square" alt="Stars">
   <img src="https://img.shields.io/github/license/mulaRahul/keyviz?style=flat-square" alt="License">
   <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS-lightgrey?style=flat-square" alt="Platform Support">
</div>

Keyviz is a **free and open-source** tool that visualizes your keypresses and mouse actions in real-time. Let your audience know what handy shortcuts you're pressing during tutorials, presentations, collaborations, or whenever you need.

## ⌨️ Keypress & 🖱️ Mouse Actions
Along with normal keys, you can also visualize mouse actions like <kbd>Cmd</kbd> + <kbd>Click</kbd>, <kbd>Alt</kbd> + <kbd>Drag</kbd>, etc.

<img src="previews/visualization.png" alt="Keystroke Visualization" width="450">

Display mouse clicks and scroll wheel movements alongside your cursor.

<img src="previews/mouse-indicator.gif" alt="Mouse Indicator" width="450">

</br>

## ⚙️ Full Customization
Don't settle for defaults. Every aspect of the visualization is under your control:
- **Styling:** Change colors (modifier vs. regular keys), size, layout, border, and background.
- **Filtering:** Control which keys are shown using hotkey or custom filters.
- **History:** Keep a visual trail of your recent inputs.
- **Position:** Move the visualization to any part of your screen.
- **Animations:** Customize how inputs appear and disappear with preset entry and exit animations.

</br>

<img src="previews/settings.png" alt="Settings Panel" width="600">

</br>

## 📥 Installation

### Windows & macOS
You can download the latest version of Keyviz from the **[GitHub Releases](https://github.com/mulaRahul/keyviz/releases)** page.

*   **Windows:** Download the `.msi` installer, run it, and follow the steps.
*   **macOS:** Download the `.dmg`. 
    **Note:** Keyviz requires **Input Monitoring** and **Accessibility** permissions. Enable them here:
    `Settings > Privacy & Security > Input Monitoring & Accessibility`

### Linux (x11)
Keyviz is compatible with Linux using the X11 protocol. Currently, you can try it out by following the build instructions below.

</br>

## 🛠️ Build Instructions

If you want to contribute or build the latest features from the source, ensure you have [Node.js](https://nodejs.org/) and [Tauri](https://v2.tauri.app/start) set up on your system.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mulaRahul/keyviz.git
    cd keyviz
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the executable:**
    ```bash
    npx tauri build
    ```

### Portable apps (no installer)

Install Node.js 22, Rust, and the [Tauri platform prerequisites](https://v2.tauri.app/start/prerequisites/), then run on the platform you want to build:

```bash
npm ci
npm run build:portable
```

The ZIP appears in `portable/`, named with the app version, platform, and architecture.

* **macOS:** Extract the ZIP and open `keyviz.app`. Build on Apple Silicon for arm64 or an Intel Mac for x64. Grant Input Monitoring and Accessibility permissions. Local builds are unsigned and not notarized; macOS may require approval in Privacy & Security before opening.
* **Windows:** Extract the ZIP and run `keyviz.exe`. The Microsoft Edge WebView2 Runtime must already be installed. No Keyviz installer or administrator privileges are required.

Portable means no app installer; settings still use the normal per-user application data directory. The app runs from the system tray/menu bar; open Settings or Quit from its icon.

The **Build portable apps** GitHub Actions workflow builds both macOS architectures and Windows x64 on pull requests, version tags, or manual runs. Download the ZIPs from the workflow's artifacts.

<br/>


## 💖 Support the Project

*   **Star the Repo:** It helps others discover the project!
*   **GitHub Sponsors:** [Sponsor @mularahul](https://github.com/sponsors/mulaRahul)
*   **Keyviz Pro:** Get access to exclusive features while supporting the development of this open-source project.

👉 **[Upgrade to Pro at keyviz.org/pro](https://keyviz.org/pro)**

</br>

---

  Built with 🦀 and ❤️ using <a href="https://v2.tauri.app/">Tauri</a>.
