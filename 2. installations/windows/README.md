# MongoDB Installation on Windows

Follow the steps below to install MongoDB Community Server and MongoDB Shell (mongosh) on a Windows system.

---

## **1. Download MongoDB Community Server**

1. Visit the [MongoDB Community Server Download Page](https://www.mongodb.com/try/download/community).
2. **Choose Your Version and OS:**
   - Select the latest version of MongoDB.
   - Choose your platform as **Windows**.
   - Select the MSI package.
3. Click **Download** to get the installer.

### **Installation Steps:**

1. Run the downloaded `.msi` file to launch the installer.
2. Follow the installation wizard:
   - Select **Complete** setup type.
   - Ensure the option **Install MongoDB as a Service** is checked.
3. Complete the installation process.

### **Verify Installation:**

1. Open Command Prompt.
2. Type the following command:
   ```bash
   mongod --version
   ```
   If installed correctly, it will display the MongoDB server version.

---

## **2. Download MongoDB Shell (mongosh)**

1. Visit the [MongoDB Shell Download Page](https://www.mongodb.com/try/download/shell).
2. **Choose Your Platform:**
   - Select your operating system as **Windows**.
3. Download the installer for your system.

### **Installation Steps:**

1. Run the downloaded `.msi` file to launch the installer.
2. Follow the installation instructions.

### **Verify MongoDB Shell Installation:**

1. Open Command Prompt.
2. Type the following command:
   ```bash
   mongosh --version
   ```
   If installed correctly, it will display the MongoDB Shell version.

---

## **3. Start MongoDB**

1. Open Command Prompt.
2. Run the following command to start the MongoDB server:
   ```bash
   mongod
   ```
3. Open a new Command Prompt window and connect to the MongoDB server using MongoDB Shell:
   ```bash
   mongosh
   ```

Now you have successfully installed MongoDB Community Server and MongoDB Shell on Windows.
