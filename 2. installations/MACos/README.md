# MongoDB Installation Guide for macOS

## Step 1: Download MongoDB Community Server

1. Visit the [MongoDB Community Server Download Page](https://www.mongodb.com/try/download/community).
2. Select your Operating System:
   - Choose **macOS**.
3. Choose the package format:
   - **TGZ** or **Homebrew** (recommended).
4. Click **Download** to get the installation files.

## Step 2: Install MongoDB Using Homebrew (Recommended)

1. Open the Terminal.
2. Run the following command to update Homebrew:
   ```bash
   brew update
   ```
3. Install MongoDB:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community@6.0
   ```

## Step 3: Start MongoDB

1. To start MongoDB as a macOS service:
   ```bash
   brew services start mongodb/brew/mongodb-community
   ```
2. To stop the service:
   ```bash
   brew services stop mongodb/brew/mongodb-community
   ```

## Step 4: Verify Installation

1. Run the MongoDB shell:
   ```bash
   mongosh
   ```
2. If the shell starts, your installation is successful.

---

## Alternative: Install MongoDB Manually Using TGZ Package

1. Extract the TGZ file:
   ```bash
   tar -xvzf <downloaded_file_name>.tgz
   ```
2. Move the extracted files to the desired directory (e.g., `/usr/local/bin`).
3. Add the `bin` directory to your PATH:
   ```bash
   export PATH=<path_to_mongodb_bin>:$PATH
   ```

---

## Install MongoDB Shell (mongosh)

1. Visit the [MongoDB Shell Download Page](https://www.mongodb.com/try/download/shell).
2. Select your Operating System:
   - Choose **macOS**.
3. Download and install the MongoDB Shell package.
4. Verify the installation by running:
   ```bash
   mongosh
   ```

You can now connect to your MongoDB instance using the MongoDB shell.

---

## Uninstalling MongoDB (Optional)

1. Stop the MongoDB service:
   ```bash
   brew services stop mongodb/brew/mongodb-community
   ```
2. Uninstall MongoDB:
   ```bash
   brew uninstall mongodb-community
   ```
3. Remove data files if needed:
   ```bash
   rm -rf /usr/local/var/mongodb
   
