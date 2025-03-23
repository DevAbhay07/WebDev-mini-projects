# 🚫 **Abhay Adblocker** – A Simple & Powerful Ad Blocker  

### **🛡️ Say Goodbye to Annoying Ads and Trackers!**  
Abhay Adblocker is a lightweight yet highly effective Chrome extension designed to block intrusive advertisements, trackers, and unnecessary scripts, ensuring a clean and fast browsing experience.  

---

## 🌟 **Features**  
✅ **Blocks Ads & Trackers** – Removes banners, pop-ups, video ads, and trackers from major ad networks.  
✅ **Faster Browsing** – Reduces unnecessary network requests, leading to quicker page loads.  
✅ **Privacy Protection** – Prevents tracking scripts from collecting your data.  
✅ **Lightweight & Efficient** – No complex background processes, ensuring minimal resource usage.  
✅ **Easy to Install & Use** – Works automatically; no configuration required.  

---

## 🔥 **How It Works**  
Abhay Adblocker utilizes Chrome’s `webRequest` API to monitor and filter network requests. The extension cancels any requests that match known ad-serving domains before they load, ensuring a seamless ad-free experience.  

The blocklist includes ad networks such as:  
- **Google Ads & Trackers** (`doubleclick.net`, `googlesyndication.com`, `google-analytics.com`)  
- **Facebook Ads** (`creative.ak.fbcdn.net`)  
- **Yahoo Ads** (`ads.yahoo.com`)  
- **Popular Ad Networks** (AdRoll, Outbrain, Taboola, PubMatic, OpenX, and more)  
- **Gambling & Betting Ads** (Dream11, WinZO, 1xBet, Betway, etc.)  

By filtering these requests at the network level, Abhay Adblocker prevents ads from even reaching your browser, leading to **faster page loading** and **improved privacy**.

---
## 🏗 **File Structure** 
```
/abhay-adblocker
│── manifest.json        # Defines extension settings, permissions, and scripts
│── block.js             # Core script that blocks ad-related requests
│── logo/
│   ├── 1.png            # 16x16 icon
│   ├── front.png        # 48x48 icon
│   ├── back.png         # 128x128 icon
```


- **`manifest.json`** → Contains extension metadata, permissions, and script references.  
- **`block.js`** → Implements the blocking logic using Chrome’s `webRequest` API.  
- **`logo/`** → Stores icons displayed in Chrome’s extensions UI.  

---

## 🚀 **Installation Guide**  

### **📌 Method 1: Install as an Unpacked Extension (For Development & Testing)**  
1️⃣ **Download the Repository**  
   - Clone this repository using:  
     ```sh
     git clone https://github.com/yourusername/abhay-adblocker.git
     ```
   - Or manually download the ZIP and extract it.  

2️⃣ **Open Chrome Extensions Page**  
   - In Chrome, go to:  
     ```
     chrome://extensions/
     ```

3️⃣ **Enable Developer Mode**  
   - Toggle the **Developer Mode** switch (top right corner).  

4️⃣ **Load the Unpacked Extension**  
   - Click **Load unpacked** and select the extracted folder.  

5️⃣ **Done! 🎉** The ad blocker is now active.  

---

## 🎯 **Why Use Abhay Adblocker?**  

| Feature | Benefit |
|---------|---------|
| 🚀 **Faster Page Loads** | Eliminates unnecessary ad requests, making pages load quicker. |
| 🔒 **Enhanced Privacy** | Blocks tracking scripts that monitor user behavior. |
| 🛑 **No More Annoying Ads** | Removes intrusive ads, pop-ups, and banners. |
| 🎛 **Easy to Use** | Install once, and it works automatically. |
| ⚡ **Lightweight** | Minimal resource usage; does not slow down your browser. |

---

## 🔒 **Permissions Explained**  

| Permission | Reason |
|------------|--------|
| **webRequest & webRequestBlocking** | Required to monitor and block ad-related requests in real time. |
| **<all_urls>** | Ensures ad blocking across all websites. |

💡 **Privacy Note:** This extension does **not** collect, store, or track any personal data. It operates locally within your browser to improve your browsing experience.  

---

## 💡 **Upcoming Features & Enhancements**  

📌 **User Customization** – Add or remove domains from the blocklist.  
📌 **Whitelist Feature** – Allow ads on specific websites.  
📌 **Popup UI** – Enable or disable ad blocking with a single click.  
📌 **Manifest V3 Upgrade** – Future-proofing for compliance with Chrome’s extension policies.  

---

## 📌 **Compatibility**  
✅ **Google Chrome**  
✅ **Microsoft Edge** (Chromium-based)  
✅ **Brave Browser**  
✅ **Opera** (Chromium-based)  

*Note: Since this extension is built using Manifest V2, future updates may be required to comply with Chrome’s new extension policies.*  

---

## 👨‍💻 **Author & Contributions**  

Developed by **Abhay Yadav** – Passionate about building tools that enhance user experience.  

💻 **GitHub Repo:** [Your GitHub Repository Link]  
📧 **Contact:** [Your Email or GitHub Profile]  

**Contributions, bug reports, and feature requests are welcome!** Feel free to submit a pull request or open an issue.  

---

## ⭐ **Support & Feedback**  
If you find this extension useful, consider giving it a ⭐ on GitHub! Your feedback helps improve the project.  


