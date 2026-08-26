/* ==========================================================================
   MOHAMED & SAMA — FIREBASE FIRESTORE REAL-TIME GUESTBOOK
   Firebase Modular SDK | Real-time onSnapshot | Validation & Loading States
   ========================================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ==========================================================================
// FIREBASE CONFIGURATION (Replace with your GitHub Pages Firebase Project keys)
// ==========================================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "mohamed-sama-wedding.firebaseapp.com",
  projectId: "mohamed-sama-wedding",
  storageBucket: "mohamed-sama-wedding.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Initialize Firebase & Firestore
let db = null;
let isFirebaseConnected = false;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  isFirebaseConnected = true;
  console.log("🔥 Firebase Firestore initialized successfully for Real-time Guestbook!");
} catch (error) {
  console.warn("⚠️ Firebase configuration is placeholder or offline. Fallback mode enabled:", error.message);
}

// Fallback array starts completely EMPTY (no fake/dummy comments!)
const fallbackMessages = [];

// ==========================================================================
// REAL-TIME FIRESTORE LISTENER (onSnapshot)
// ==========================================================================
const guestbookGrid = document.getElementById("guestbook-grid");

function renderMessages(messages) {
  if (!guestbookGrid) return;
  
  guestbookGrid.innerHTML = "";

  if (messages.length === 0) {
    const currentLang = localStorage.getItem("invitation_lang") || "en";
    const emptyText = currentLang === "ar" 
      ? "لسه مفيش تهاني أو تعليقات. ابدأ أنت واكتب أول رسالة ودعوة حلوة للعروسين محمد وسما! ♥"
      : "No wishes yet. Be the first to send your blessing to Mohamed & Sama! ♥";
      
    guestbookGrid.innerHTML = `
      <div class="wish-card" style="width: 100%; max-width: 100%; text-align: center; padding: 3rem 1.5rem; flex: 1 1 100%;">
        <p style="font-size: 1.05rem; color: var(--text-muted); margin: 0 auto; font-style: normal;">${emptyText}</p>
      </div>
    `;
    return;
  }

  messages.forEach(item => {
    const card = document.createElement("div");
    card.className = "wish-card";
    card.innerHTML = `
      <p>"${escapeHtml(item.message)}"</p>
      <h5>— ${escapeHtml(item.name)}</h5>
    `;
    guestbookGrid.appendChild(card);
  });

  startGuestbookAutoScroll();
}

let guestbookTimer = null;
function startGuestbookAutoScroll() {
  if (guestbookTimer) clearInterval(guestbookTimer);
  const grid = document.getElementById("guestbook-grid");
  if (!grid) return;

  guestbookTimer = setInterval(() => {
    if (grid.matches(":hover") || grid.matches(":active")) return;
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    if (grid.scrollLeft >= maxScroll - 20) {
      grid.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      const cardWidth = grid.querySelector(".wish-card")?.offsetWidth || 300;
      grid.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  }, 4000);
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

// Subscribe to real-time updates if connected
if (isFirebaseConnected && db) {
  try {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    
    onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        messages.push({
          id: doc.id,
          name: data.name || "Anonymous Friend",
          message: data.message || "",
          createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
        });
      });

      // If collection is empty in brand new DB, show fallback messages initially
      if (messages.length === 0) {
        renderMessages(fallbackMessages);
      } else {
        renderMessages(messages);
      }
    }, (error) => {
      console.warn("⚠️ Firestore onSnapshot error (likely API key missing or rules restricted). Displaying fallback cards:", error.message);
      renderMessages(fallbackMessages);
    });
  } catch (err) {
    console.warn("⚠️ Error setting up Firestore query:", err);
    renderMessages(fallbackMessages);
  }
} else {
  // Render fallback immediately if Firebase offline/placeholder
  renderMessages(fallbackMessages);
}

// ==========================================================================
// FORM VALIDATION & SUBMISSION WITH LOADING & SUCCESS STATES
// ==========================================================================
const wishForm = document.getElementById("wish-form");
const btnSubmit = document.getElementById("btn-submit-wish");

if (wishForm && btnSubmit) {
  wishForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("wish-name");
    const msgInput = document.getElementById("wish-msg");
    const currentLang = localStorage.getItem("invitation_lang") || "en";

    if (!nameInput || !msgInput) return;

    const nameVal = nameInput.value.trim();
    const msgVal = msgInput.value.trim();

    // 1. Validate Name Length (2 - 40 characters)
    if (nameVal.length < 2 || nameVal.length > 40) {
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: currentLang === "ar" ? "تنبيه بسيط!" : "Invalid Name Length!",
          text: currentLang === "ar" ? "من فضلك اكتب اسمك (بين ٢ إلى ٤٠ حرف)." : "Please enter a name between 2 and 40 characters.",
          icon: "warning",
          confirmButtonColor: "#141414",
          background: "#FAF8F5"
        });
      } else {
        alert(currentLang === "ar" ? "من فضلك اكتب اسمك (بين ٢ إلى ٤٠ حرف)." : "Please enter a name between 2 and 40 characters.");
      }
      return;
    }

    // 2. Validate Message Length (1 - 200 characters)
    if (msgVal.length < 1 || msgVal.length > 200) {
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: currentLang === "ar" ? "تنبيه بسيط!" : "Invalid Message Length!",
          text: currentLang === "ar" ? "من فضلك اكتب رسالة تهنئة أو دعوة حلوة (بين ١ إلى ٢٠٠ حرف)." : "Please enter a congratulatory message between 1 and 200 characters.",
          icon: "warning",
          confirmButtonColor: "#141414",
          background: "#FAF8F5"
        });
      } else {
        alert(currentLang === "ar" ? "من فضلك اكتب رسالة تهنئة أو دعوة حلوة (بين ١ إلى ٢٠٠ حرف)." : "Please enter a message between 1 and 200 characters.");
      }
      return;
    }

    // 3. Show Loading State
    const originalBtnHtml = btnSubmit.innerHTML;
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = "0.7";
    btnSubmit.style.cursor = "not-allowed";
    btnSubmit.innerHTML = `
      <i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>
      <span>${currentLang === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
    `;

    try {
      if (isFirebaseConnected && db && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
        // Real Firestore modular SDK save
        await addDoc(collection(db, "messages"), {
          name: nameVal,
          message: msgVal,
          createdAt: serverTimestamp()
        });
      } else {
        // Simulate real-time network delay for GitHub Pages demo / fallback mode
        await new Promise(resolve => setTimeout(resolve, 800));
        fallbackMessages.unshift({
          name: nameVal,
          message: msgVal,
          createdAt: new Date()
        });
        renderMessages(fallbackMessages);
      }

      // Trigger Confetti Celebration
      if (typeof confetti === "function") {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#E84A5F", "#C5A059", "#141414"]
        });
      }

      // 4. Show Success State
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: currentLang === "ar" ? "شكراً جداً لرسالتك ودعوتك الحلوة! ♥" : "Thank You for Your Blessing! ♥",
          text: currentLang === "ar" ? "وصلت تهنئتك ونورت دفتر تهاني العروسين Mohamed & Sama، تفرحوا في حبايبكم يا رب ♥" : "Your heartfelt wish has been added to Mohamed & Sama's real-time guestbook.",
          icon: "success",
          confirmButtonText: currentLang === "ar" ? "تسلم ♥" : "Wonderful",
          confirmButtonColor: "#141414",
          background: "#FAF8F5"
        });
      }

      // Reset Input Fields
      nameInput.value = "";
      msgInput.value = "";

    } catch (error) {
      console.error("Error saving message to Firestore:", error);
      if (typeof Swal !== "undefined") {
        Swal.fire({
          title: currentLang === "ar" ? "مشكلة بسيطة في الاتصال" : "Error Sending Message",
          text: currentLang === "ar" ? "تعذر إرسال الرسالة دلوقتي، تأكد من اتصال الإنترنت وجرب تاني." : "Could not connect to Firebase Firestore. Please check your project API configuration.",
          icon: "error",
          confirmButtonColor: "#141414",
          background: "#FAF8F5"
        });
      }
    } finally {
      // Restore Button State
      btnSubmit.disabled = false;
      btnSubmit.style.opacity = "1";
      btnSubmit.style.cursor = "pointer";
      btnSubmit.innerHTML = originalBtnHtml;
    }
  });
}
