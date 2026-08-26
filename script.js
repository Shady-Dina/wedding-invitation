/* ==========================================================================
   MOHAMED & SAMA — INTERACTIVE ROYAL EDITORIAL SCRIPT
   Bilingual English & Arabic Engine | Timeline & Guestbook | Smart Calendar
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false
    });
  }

  // ==========================================================================
  // 0. COMPLETE BILINGUAL DICTIONARY & DEFAULT ENGLISH OPENING (EN <-> AR)
  // ==========================================================================
  const translations = {
    en: {
      case_welcome: "WELCOME TO OUR WEDDING",
      case_subtitle: "SHADY & DINA",
      case_footer: "FRIDAY — SEPTEMBER 11, 2026<br>Al Aziz Al Hakim Mosque<br>EL MOKATTAM",
      case_unseal: "TAP TO OPEN",
      hero_save_date: "Save our Date",
      name_mohamed: "SHADY",
      name_sama: "DINA",
      hero_invitation_text: "WITH JOYFUL HEARTS & BLESSINGS OF OUR FAMILIES<br>IT WOULD BE OUR GREATEST PLEASURE TO HAVE YOU JOIN US<br>AS WE CELEBRATE THE START OF OUR FOREVER<br>AND CREATE MEMORIES TO TREASURE FOR A LIFETIME<br>WE LOOK FORWARD TO CELEBRATING WITH YOU",
      date_month: "SEPTEMBER",
      date_day_name: "FRIDAY",
      date_year: "2026",
      date_time: "8:00 PM",
      venue_hall: "Al Aziz Al Hakim Mosque",
      venue_ballroom: "EL MOKATTAM",
      reception: "an evening of love, music & joyful celebration to follow",
      photo_heading_1: "Two Souls,",
      photo_heading_2: "One Destiny",
      photo_sub: "A CELEBRATION OF ETERNAL LOVE, FRIENDSHIP & FAMILY",
      groom_name: "Shady",
      groom_drop: "Drop real Groom photo here",
      bride_name: "Dina",
      bride_drop: "Drop real Bride photo here",
      romance_top_tag: "Together is a beautiful place to be",
      romance_quote: "I have found the one whom my soul loves. Here is to a lifetime of togetherness.",
      journey_start_label: "Where Our Story Began",
      journey_start_year: "2025",
      journey_moving_label: "The Royal Wedding Day",
      journey_moving_year: "2026",
      timeline_title: "Our Love Story",
      timeline_sub: "THE JOURNEY TO FOREVER",
      time_date_1: "2024",
      time_desc_1: "A chance encounter that sparked an undeniable connection and changed our worlds forever.",
      time_date_2: "2025",
      time_desc_2: "Under the starlight, a promise was made. A heartfelt 'Yes' to a lifetime of love and dreams.",
      time_date_3: "September 11, 2026",
      time_desc_3: "Surrounded by our beloved family and friends, we say 'I Do' at Al Aziz Al Hakim Mosque.",
      cal_save: "Mark Your Calendar",
      cal_title: "SEPTEMBER 2026",
      btn_google: "Add to Google Calendar",
      btn_apple: "Save to Apple / Phone (.ics)",
      unit_days: "Days",
      unit_hours: "Hours",
      unit_mins: "Mins",
      unit_secs: "Secs",
      guestbook_title: "Guestbook & Wishes",
      guestbook_sub: "LEAVE A BLESSING FOR SHADY + DINA",
      bless_note: "Hearts received from friends & family around the world ♥",
      wish_btn_send: "Send Blessing ♥",
      venue_title: "Al Aziz Al Hakim Mosque",
      venue_sub: "EL MOKATTAM",
      arrival_title: "Arrival & Welcome",
      arrival_desc: "Doors open at 8:00 PM. We kindly invite our esteemed family & friends to arrive early.",
      citadel_title: "Al Aziz Al Hakim Mosque",
      citadel_desc: "Located in Al Togaryeen City, Al Abageyah, El Mokattam.",
      gps_title: "Interactive GPS",
      gps_desc: "Direct live navigation to the venue. Tap below or explore the embedded map.",
      btn_gps: "Open Live GPS Navigation on Google Maps",
      footer_intro: "FRIDAY — SEPTEMBER 11, 2026<br>Al Aziz Al Hakim Mosque<br>EL MOKATTAM",
      lang_btn_text: "العربية"
    },
    ar: {
      case_welcome: "يا أهلاً وسهلاً في فرحنا ♥",
      case_subtitle: "دعوة فرح شادي ودينا",
      case_footer: "الجمعة ١١ سبتمبر ٢٠٢٦<br>مسجد العزيز الحكيم<br>المقطم",
      case_unseal: "اضغط لفتح الدعوة",
      hero_save_date: "احفظوا موعد الفرح",
      name_mohamed: "SHADY",
      name_sama: "DINA",
      hero_invitation_text: "بكل حب وسعادة، وبمباركة أهلنا وأحبابنا<br>يسعدنا ويشرفنا دعوتكم ومشاركتكم فرحتنا<br>ونحن نبدأ رحلة العمر وأجمل أيامنا معاً<br>لنصنع ذكريات لا تُنسى تدوم مدى الحياة<br>بانتظاركم لتكمل فرحتنا بوجودكم معنا",
      date_month: "سبتمبر",
      date_day_name: "الجمعة",
      date_year: "٢٠٢٦",
      date_time: "٨:٠٠ مساءً",
      venue_hall: "مسجد العزيز الحكيم",
      venue_ballroom: "المقطم",
      reception: "فرحة وسهرة حلوة وأجمل أوقات بتجمعنا بيكو",
      photo_heading_1: "أجمل بداية،",
      photo_heading_2: "ورحلة عمر سعيدة",
      photo_sub: "يوم جميل وفرحة كبيرة بتكمل بوجودكم معانا",
      groom_name: "شادي",
      groom_drop: "ضع صورة العريس هنا",
      bride_name: "دينا",
      bride_drop: "ضع صورة العروسة هنا",
      romance_top_tag: "بداية أجمل رحلة عمر",
      romance_quote: "واخترتك لتكون رفيق دربي وأجمل أقداري.. معاً نبدأ حكاية عمر لا تنتهي.",
      journey_start_label: "بداية حكايتنا",
      journey_start_year: "٢٠٢٥",
      journey_moving_label: "يوم زفافنا الكبير",
      journey_moving_year: "٢٠٢٦",
      timeline_title: "حكايتنا",
      timeline_sub: "أجمل أيام وذكريات جمعتنا",
      time_date_1: "٢٠٢٤",
      time_desc_1: "أول لقاء وصدفة حلوة غيرت حياتنا، وكانت بداية أجمل حكاية.",
      time_date_2: "٢٠٢٥",
      time_desc_2: "يوم الخطوبة والوعد بالبقاء سوا طول العمر، وبداية خطوتنا الجديدة.",
      time_date_3: "١١ سبتمبر ٢٠٢٦",
      time_desc_3: "يوم فرحنا الكبير! مستنيينكم تشاركونا فرحتنا ولمتنا الحلوة في مسجد العزيز الحكيم بالمقطم.",
      cal_save: "سجلوا ميعاد الفرح عندكم",
      cal_title: "سبتمبر ٢٠٢٦",
      btn_google: "إضافة لتقويم جوجل",
      btn_apple: "حفظ في نتيجة الموبايل (.ics)",
      unit_days: "أيام",
      unit_hours: "ساعات",
      unit_mins: "دقائق",
      unit_secs: "ثواني",
      guestbook_title: "كلمة حلوة للعروسين",
      guestbook_sub: "اكتبوا لنا دعوة حلوة أو تهنئة تفرح قلبنا ♥",
      bless_note: "قلوب ومحبة واصلة لنا من كل حبايبنا ♥",
      wish_btn_send: "ابعت التهنئة ♥",
      venue_title: "مسجد العزيز الحكيم",
      venue_sub: "المقطم",
      arrival_title: "ميعاد الحضور والترحيب",
      arrival_desc: "الأبواب بتفتح الساعة ٨:٠٠ مساءً. تنورونا وتشرفونا من بدري عشان نلحق نتصور ونفرح سوا.",
      citadel_title: "مسجد العزيز الحكيم",
      citadel_desc: "مدينة التجاريين، الأباجية، المقطم، محافظة القاهرة.",
      gps_title: "خريطة الوصول",
      gps_desc: "خريطة سهلة بتوصلك بسهولة. اضغط على الزرار تحت عشان تفتح الـ GPS.",
      btn_gps: "افتح الخريطة والـ GPS على خرائط جوجل",
      footer_intro: "الجمعة ١١ سبتمبر ٢٠٢٦<br>مسجد العزيز الحكيم<br>المقطم",
      lang_btn_text: "English"
    }
  };

  // FORCE DEFAULT OPENING LANGUAGE TO BE ARABIC ('ar')
  let currentLang = 'ar';
  if (localStorage.getItem('invitation_lang_forced_ar_2')) {
    currentLang = localStorage.getItem('invitation_lang') || 'ar';
  } else {
    localStorage.setItem('invitation_lang_forced_ar_2', 'true');
    localStorage.setItem('invitation_lang', 'ar');
    currentLang = 'ar';
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('invitation_lang', lang);

    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = translations[lang];
    if (!dict) return;

    // Update all matching elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('wish-name');
    const msgInput = document.getElementById('wish-msg');
    if (nameInput) nameInput.placeholder = lang === 'ar' ? 'اسم الكريم / Your Name' : 'Your Name / الاسم';
    if (msgInput) msgInput.placeholder = lang === 'ar' ? 'اكتب رسالة تهنئة أو أمنية للعروسين...' : 'Write your blessing or message for the couple...';

    // Update toggle button text
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = dict.lang_btn_text;

    // Update calendar day headers bilingually
    const arDays = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
    const enDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    document.querySelectorAll('.cal-day-header').forEach((el, idx) => {
      if (arDays[idx] && enDays[idx]) {
        el.textContent = lang === 'ar' ? arDays[idx] : enDays[idx];
      }
    });

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.9 },
        colors: ['#E84A5F', '#C5A059', '#141414']
      });
    }
  }

  // Initialize Language
  applyLanguage(currentLang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // ==========================================================================
  // 1. DYNAMIC JULY 2026 EDITORIAL CALENDAR WITH PULSING BLACK/WHITE NUMBER 16
  // ==========================================================================
  const calendarContainer = document.getElementById('calendar-grid');
  if (calendarContainer) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(dayName => {
      const el = document.createElement('div');
      el.className = 'cal-day-header';
      el.textContent = dayName;
      calendarContainer.appendChild(el);
    });

    // September 2026 starts on Tuesday (Index 2)
    const emptyDaysBefore = 2;
    for (let i = 0; i < emptyDaysBefore; i++) {
      const emptyEl = document.createElement('div');
      emptyEl.className = 'cal-day empty';
      calendarContainer.appendChild(emptyEl);
    }

    for (let day = 1; day <= 30; day++) {
      const dayEl = document.createElement('div');
      dayEl.className = 'cal-day';
      
      if (day === 11) {
        dayEl.classList.add('wedding-day');
        dayEl.textContent = '11';
        dayEl.title = 'Shady & Dina Royal Wedding Day!';
        
        dayEl.addEventListener('click', (e) => {
          if (typeof confetti === 'function') {
            const rect = e.target.getBoundingClientRect();
            confetti({
              particleCount: 40,
              spread: 60,
              origin: {
                x: (rect.left + rect.width / 2) / window.innerWidth,
                y: (rect.top + rect.height / 2) / window.innerHeight
              },
              colors: ['#C5A059', '#E84A5F', '#141414']
            });
          }
        });
      } else {
        dayEl.textContent = day;
      }
      calendarContainer.appendChild(dayEl);
    }
  }

  // ==========================================================================
  // 2. PROPOSAL #1: SMART "ADD TO CALENDAR" BUTTON (.ICS DOWNLOAD - JULY 16)
  // ==========================================================================
  const btnAddCal = document.getElementById('btn-add-calendar');
  if (btnAddCal) {
    btnAddCal.addEventListener('click', () => {
      const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Shady & Dina Royal Wedding//EN
BEGIN:VEVENT
UID:royal-wedding-shady-dina-2026@alazizmosque.com
DTSTAMP:20260630T120000Z
DTSTART:20260911T170000Z
DTEND:20260911T220000Z
SUMMARY:Shady & Dina Royal Wedding Celebration ♥
DESCRIPTION:We are overjoyed to celebrate our wedding with you! Doors open at 8:00 PM at Al Aziz Al Hakim Mosque - El Mokattam.
LOCATION:Al Aziz Al Hakim Mosque, El Mokattam, Cairo
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Shady_Dina_Royal_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (typeof Swal !== 'undefined') {
        Swal.fire({
          title: currentLang === 'ar' ? 'تم حفظ ميعاد الفرح عندكم! ♥' : 'Event Saved to Calendar! ♥',
          text: currentLang === 'ar' ? 'الجمعة ١١ سبتمبر ٢٠٢٦ الساعة ٨:٠٠ مساءً — مسجد العزيز الحكيم (المقطم)' : 'Friday, September 11, 2026 at 8:00 PM — Al Aziz Al Hakim Mosque (El Mokattam)',
          icon: 'success',
          confirmButtonText: currentLang === 'ar' ? 'تمام جداً ♥' : 'Great!',
          confirmButtonColor: '#141414',
          background: '#FAF8F5'
        });
      }
    });
  }

  // ==========================================================================
  // 3. INTERACTIVE BLESSINGS COUNTER
  // ==========================================================================
  const btnBless = document.getElementById('btn-bless');
  const countDisplay = document.getElementById('bless-count');
  if (btnBless && countDisplay) {
    let currentBlessings = 1024;
    btnBless.addEventListener('click', () => {
      currentBlessings++;
      countDisplay.textContent = currentBlessings.toLocaleString();

      if (typeof confetti === 'function') {
        const rect = btnBless.getBoundingClientRect();
        confetti({
          particleCount: 45,
          spread: 70,
          origin: {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight
          },
          colors: ['#E84A5F', '#C92A42', '#C5A059']
        });
      }
    });
  }

  // ==========================================================================
  // 4. LIVE COUNTDOWN TO JULY 16, 2026 (8:00 PM)
  // ==========================================================================
  const targetDate = new Date('2026-09-11T20:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60 * 60)) / 1000);

    const pad = n => n < 10 ? `0${n}` : n;
    
    if (document.getElementById('cal-days')) document.getElementById('cal-days').textContent = pad(days);
    if (document.getElementById('cal-hours')) document.getElementById('cal-hours').textContent = pad(hours);
    if (document.getElementById('cal-mins')) document.getElementById('cal-mins').textContent = pad(mins);
    if (document.getElementById('cal-secs')) document.getElementById('cal-secs').textContent = pad(secs);
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==========================================================================
  // 5. GSAP SCROLL ANIMATIONS (PHOTO ASSEMBLY)
  // ==========================================================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.photo-frame.left-frame', {
      scrollTrigger: {
        trigger: '.photo-assembly-section',
        start: 'top 80%',
        end: 'center center',
        scrub: 1
      },
      x: -150,
      rotation: -12,
      opacity: 0.3
    });

    gsap.from('.photo-frame.right-frame', {
      scrollTrigger: {
        trigger: '.photo-assembly-section',
        start: 'top 80%',
        end: 'center center',
        scrub: 1
      },
      x: 150,
      rotation: 12,
      opacity: 0.3
    });

    gsap.from('.center-heart-connection', {
      scrollTrigger: {
        trigger: '.photo-assembly-section',
        start: 'top 70%'
      },
      scale: 0,
      duration: 1,
      ease: 'back.out(2)'
    });
  }

  // ==========================================================================
  // 6. SUBTLE & DELICATE FLOATING HEARTS CANVAS
  // ==========================================================================
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    class GentleHeart {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + 30;
        this.size = Math.random() * 8 + 6;
        this.speedY = -(Math.random() * 0.4 + 0.15);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.25 + 0.08;
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.015) * 0.3;

        if (this.y < -30) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.size / 20, this.size / 20);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10, -10, -20, 5, 0, 20);
        ctx.bezierCurveTo(20, 5, 10, -10, 0, 0);
        ctx.fillStyle = `rgba(232, 74, 95, ${this.alpha})`;
        ctx.fill();
        ctx.restore();
      }
    }

    const heartsCount = 6;
    const hearts = Array.from({ length: heartsCount }, () => new GentleHeart());

    function animateHearts() {
      ctx.clearRect(0, 0, width, height);
      hearts.forEach(h => {
        h.update();
        h.draw();
      });
      requestAnimationFrame(animateHearts);
    }
    animateHearts();
  }

  // ==========================================================================
  // 7. ROMANTIC SOUNDTRACK PLAYER & FLAWLESS ROYAL SLEEVE REVEAL
  // ==========================================================================
  const introOverlay = document.getElementById('cinematic-intro');
  const royalCaseWrapper = document.getElementById('royal-case-wrapper');
  const openBtn = document.getElementById('btn-open-invite');
  const audioToggle = document.getElementById('audio-toggle');
  const weddingAudio = document.getElementById('wedding-audio');
  let isPlayingAudio = false;

  function startAudio() {
    if (weddingAudio) {
      weddingAudio.volume = 0.75;
      weddingAudio.play().then(() => {
        isPlayingAudio = true;
        if (audioToggle) {
          audioToggle.classList.add('playing');
          audioToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
      }).catch(err => {
        console.log('Audio autoplay prevented or file missing:', err);
      });
    }
  }

  function stopAudio() {
    if (weddingAudio) {
      weddingAudio.pause();
      isPlayingAudio = false;
      if (audioToggle) {
        audioToggle.classList.remove('playing');
        audioToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
      }
    }
  }

  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      isPlayingAudio ? stopAudio() : startAudio();
    });
  }

  // JAW-DROPPING GSAP REVEAL WHEN OPENING THE INVITATION
  function triggerJawDroppingReveal() {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline();

    // 1. Reveal Sacred Calligraphy
    tl.fromTo('.sacred-verse-container', 
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    // 2. Sweeping Giant Letter M from Left
    tl.fromTo('.giant-initials .initial-m',
      { opacity: 0, x: -180, scale: 1.3 },
      { opacity: 1, x: 0, scale: 1, duration: 1.3, ease: 'back.out(1.4)' },
      '-=0.8'
    );

    // 3. Sweeping Giant Letter S from Right
    tl.fromTo('.giant-initials .initial-s',
      { opacity: 0, x: 180, scale: 1.3 },
      { opacity: 1, x: 0, scale: 1, duration: 1.3, ease: 'back.out(1.4)' },
      '-=1.1'
    );

    // 4. Slicing Slash
    tl.fromTo('.giant-initials .initial-slash',
      { opacity: 0, scale: 0, rotation: -45 },
      { opacity: 1, scale: 1, rotation: -12, duration: 1, ease: 'power3.out' },
      '-=0.9'
    );

    // 5. Blooming Overlapping Names Box
    tl.fromTo('.full-names-overlay',
      { opacity: 0, scale: 0.6, boxShadow: '0 0 0 0px #FFFFFF' },
      { opacity: 1, scale: 1, boxShadow: '0 0 0 4px #FFFFFF', duration: 1.1, ease: 'elastic.out(1, 0.7)' },
      '-=0.6'
    );
  }

  // FLAWLESS ROYAL CASE SLIDING OPEN REVEAL
  let isOpened = false;
  function triggerCaseOpen() {
    if (isOpened) return;
    isOpened = true;

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D12F47', '#C5A059', '#141414']
      });
    }

    if (royalCaseWrapper) royalCaseWrapper.classList.add('is-open');

    setTimeout(() => {
      if (introOverlay) {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
          introOverlay.style.display = 'none';
          triggerJawDroppingReveal();
        }, 800);
      }
    }, 1200);

    startAudio();
  }

  if (openBtn) openBtn.addEventListener('click', (e) => { e.stopPropagation(); triggerCaseOpen(); });
  if (royalCaseWrapper) royalCaseWrapper.addEventListener('click', triggerCaseOpen);

  // ==========================================================================
  // SCROLL-MERGING GRAND HEART PORTAL (PHOTO + FRAME SPLIT & MERGE ON SCROLL)
  // ==========================================================================
  const heartPortal = document.getElementById('wedding-heart-portal');

  if (heartPortal) {
    // Interactive click/tap to replay merge with confetti
    heartPortal.addEventListener('click', () => {
      heartPortal.classList.add('is-split');
      setTimeout(() => {
        heartPortal.classList.remove('is-split');
        setTimeout(() => {
          if (typeof confetti === 'function') {
            const rect = heartPortal.getBoundingClientRect();
            confetti({
              particleCount: 50,
              spread: 70,
              origin: {
                x: (rect.left + rect.width / 2) / window.innerWidth,
                y: (rect.top + rect.height / 2) / window.innerHeight
              },
              colors: ['#E84A5F', '#C5A059', '#FFFFFF']
            });
          }
        }, 1200);
      }, 500);
    });

    // Scroll Observer: Merges when entering viewport, splits when leaving!
    if (typeof IntersectionObserver !== 'undefined') {
      const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            // Merge together!
            heartPortal.classList.remove('is-split');
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
            // Split apart when scrolled out of view so it can re-merge next time!
            heartPortal.classList.add('is-split');
          }
        });
      }, {
        threshold: [0, 0.05, 0.2, 0.5, 0.8, 1.0]
      });
      scrollObserver.observe(heartPortal);
    } else {
      setTimeout(() => { heartPortal.classList.remove('is-split'); }, 500);
    }
  }
});

