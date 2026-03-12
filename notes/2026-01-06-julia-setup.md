---
layout: page
title: "Julia setup"
---

## 0. Setup (before class) — step by step

### 1) Install Julia
1. Download Julia for your operating system (Windows / macOS / Linux) from the official Julia website.
2. Install Julia:
   - **Windows:** run the `.exe` installer.
   - **macOS:** open the `.dmg` and drag Julia to Applications (or follow the package instructions).
   - **Linux:** extract the tarball and add Julia to your `PATH` (or create a symlink).
3. Verify the installation by opening a terminal (or PowerShell on Windows) and running:

   ```bash
   julia --version
   ```

   You should see the installed Julia version. For example:

   ```bash
   julia version 1.12.2
   ```

### 2) Install VS Code + Julia extension

1. Install Visual Studio Code.
2. Open VS Code.
3. Open Extensions and search for Julia.
4. Install the Julia extension (publisher: Julia).
5. If VS Code doesn’t find Julia automatically, set the Julia executable path:
   - Open Settings
   - Search for Julia: Executable Path
   - Set it to your Julia binary, e.g.:
   - Windows: `C:\...\Julia-1.x.y\bin\julia.exe`
   - macOS: `/Applications/Julia-1.x.app/Contents/Resources/julia/bin/julia`
   - Linux: `/opt/julia-1.x.y/bin/julia` 
 
6. Quick test:
   - Start the Julia REPL (Command Palette → “Julia: Start REPL”)

   <img src="/assets/img/start_REPL.png" alt="Julia REPL in VS Code" style="max-width: 400px;">
   
   - In the REPL, run:
   
   ```julia
   1 + 1
   ```
   You should see the output `2`.

   <img src="/assets/img/REPL.png" alt="Julia REPL output" style="max-width: 400px;">

### Optional: Install Julia extension for Jupyter notebooks
   - In VS Code, open Extensions and search for Jupyter.
   - Install the Jupyter extension (publisher: Microsoft).

### 3) Create a folder for demos: julia-repro-demo
   - Open a terminal in the location where you want the lecture materials.
   - Create the folder:

   ```bash
   mkdir julia-repro-demo
   ```
   
   - Enter the folder:
   
   ```bash
   cd julia-repro-demo
   ```
   - Start Julia from inside the folder:
   
   ```bash
   julia
   ```

   - Optional sanity check (in Julia):
   
   ```julia
   pwd()
   ```
   You should see the path to the `julia-repro-demo` folder.

### 4) Create a new Julia environment
   - In the Julia REPL, enter the package manager by typing `]` (you should see the prompt change to `(@v1.x) pkg>`).
   - Create a new environment named `DemoEnv`: 

   ```julia
   activate DemoEnv
   ```
   - You should see the prompt change to `(DemoEnv) pkg>`.
   - To verify, you can check the current environment:   

   ```julia
   status
   ```
   You should see an empty environment.
   - Exit the package manager by pressing Backspace or Ctrl+C.

   
#### Why use a project environment?

   Creating a new Julia environment is how you make your project reproducible and isolated.
   
   If you work in Julia’s global environment (@v1.x), you slowly accumulate packages and versions. 
   Then:
   - your code might run only because you happen to have some package installed globally
   - updates can silently change results or break code
   - a collaborator (or future you) can’t reliably rerun the project.
   
   A project environment fixes that by recording exactly what the project depends on.
   
 #### What you get with a new environment
   - Isolation: each project has its own dependency set.
   - Reproducibility: you can share `Project.toml` and `Manifest.toml`; others run instantiate and get the same setup.
   - Fewer “it works on my machine” moments: missing packages show up immediately because the project must declare them.
   - Safer updates: you can update dependencies for one project without risking others.
   
#### The key idea in one sentence
   
   An environment makes your project’s computational setup explicit, portable, and repeatable.

### 5) Install required packages
   - In the Julia REPL, enter the package manager again by typing `]`.
   - Install the required packages: 

   ```julia
   add Oscar
   ```
   - Wait for the installation to complete.
   - Exit the package manager by pressing Backspace or Ctrl+C. 

### 6) Test the setup
   - In the Julia REPL, run the following commands to test if everything is set up correctly:   

   ```julia
   using Oscar
   G = complete_graph(5)
   println(G)
   ```
   You should see the output representing a complete graph with 5 vertices.

   - If you see the expected output, your Julia setup is complete and ready for use!
   - If you encounter any errors, please refer to the troubleshooting section below. 



### Troubleshooting
- If you encounter issues during installation or while running Julia, consider the following steps:
  - Ensure that Julia is correctly installed and accessible from your terminal.
  - Verify that the Julia extension in VS Code is properly configured with the correct executable path.
  - Check for any error messages in the Julia REPL and search for solutions online or refer to the Julia documentation.
  - If package installation fails, try updating the package registry with `] registry update` before adding packages.
  - Restart VS Code and try again if issues persist. 