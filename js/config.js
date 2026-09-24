/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Ekaiva Bakehouse & Studio",
    suffix: ".",
    tagline: "Artisanal Bakehouse & Cafe",
    description: "Ekaiva Bakehouse & Studio offers delicious bakes, artisanal french toasts, gourmet coffee, and delectable food in the heart of Bhubaneswar.",
    keywords: "ekaiva bakehouse, cafe bhubaneswar, French toast, artisanal bakery, coffee, desserts, chandrasekharpur",
    themeColor: "#0d0e12",
    domain: "https://ekaivabakehouse.com/",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkcHvf8regaok4lM2DaxQ32vJtNe63zDtCCZ0G8_dCp2lflmdCayOTLpv9S3KYx4skU4yeOOcR9QQTLa1e-b3uxIq2tWJuVHo1LOTjubs3x6TDayalW69eB29DLF7KZuWz55q8f0N-Uw5wV=w243-h203-n-k-no-nu",
    faviconEmoji: "🥐",
    whatsappNumber: "919090099986"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Artisanal Bakehouse & Studio",
    title: "Elevate Your Gourmet & Cafe Experience",
    description: "Indulge in freshly baked pastries, artisanal French toasts, specialty coffee, and an aesthetic dining atmosphere.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkcHvf8regaok4lM2DaxQ32vJtNe63zDtCCZ0G8_dCp2lflmdCayOTLpv9S3KYx4skU4yeOOcR9QQTLa1e-b3uxIq2tWJuVHo1LOTjubs3x6TDayalW69eB29DLF7KZuWz55q8f0N-Uw5wV=w243-h203-n-k-no-nu",
    stats: [
      { value: "100%", label: "Freshly Baked Daily" },
      { value: "4.8 ★", label: "Customer Favorites" },
      { value: "9 AM - 11 PM", label: "Open All Days" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Crafting Delicacies with Passion & Purpose",
    paragraphs: [
      "Ekaiva Bakehouse & Studio is a premier destination in Bhubaneswar for lovers of fine baking, artisanal toast, and exceptional coffee. Our space brings together exquisite culinary craftsmanship and a vibrant studio atmosphere.",
      "Whether you're looking for an indulgent breakfast, a cozy workspace, or a relaxing evening dinner with friends, Ekaiva offers a memorable taste experience."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnvMSRzhQ5JyHno9tf8f8oWKA2Z3kpXaRE4P7zLCDPhbR4kA0HNgHBn2HUeD1NlBhOevfCVIR7EuZDTq3F1arOy5uk0B_j7x7MvyFYX9EaIu3tRWBroECFUUBPSaT7mxdFY1s7jEcIb-aOc=w243-h174-n-k-no-nu",
    imageAlt: "Interior view of Ekaiva Bakehouse & Studio",
    experienceValue: "5+",
    experienceLabel: "Years of Culinary Passion"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Chef's Selection",
    title: "Featured Toast & Bakes",
    badge: "Must Try",
    description: "Handcrafted house specials created to give you the ultimate artisanal indulgence.",
    items: [
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600",
        alt: "Honey Butter Toast w/ vanilla icecream",
        diet: "veg",
        title: "Honey Butter Toast",
        price: "₹279",
        desc: "Golden toasted brioche served with rich French vanilla ice cream and sweet salted caramel."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        alt: "Hong Kong French Toast",
        diet: "veg",
        title: "Hong Kong French Toast",
        price: "₹279",
        desc: "Crispy golden brown French toast stuffed with creamy peanut butter, chocolate ganache, and maple syrup."
      },
      {
        badge: "Signature",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        alt: "Dunkers Chicken Popcorn French Toast",
        diet: "nonveg",
        title: "Dunkers Chicken Popcorn French Toast",
        price: "₹279",
        desc: "French toast paired with a sweet & spicy Thai Chilli dressing and mildly spicy chicken popcorn."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Savings",
    title: "Current Offers",
    items: [
      {
        tag: "FIRST ORDER",
        title: "Flat 10% OFF",
        desc: "Get 10% off on your first dine-in or direct order via WhatsApp.",
        code: "EKAIVA10",
        highlight: false
      },
      {
        tag: "DINE-IN SPECIAL",
        title: "Free Coffee Upgrade",
        desc: "Order any French Toast between 9 AM – 12 PM and get a complimentary coffee upgrade.",
        code: "MORNINGBREW",
        highlight: true
      },
      {
        tag: "COMBO DEAL",
        title: "Brunch Combo Deals",
        desc: "Special pricing available on combined Toast and Gourmet Pasta orders.",
        code: "EKAIVACOMBO",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Freshly Brewed & Prepared",
    pdfUrl: "assets/ekaiva-menu.pdf",
    pdfFilename: "Ekaiva_Bakehouse_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "toast", label: "French Toast", active: false },
      { id: "bakery", label: "Bakehouse & Desserts", active: false }
    ],
    items: [
      {
        category: "toast",
        img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600",
        title: "Honey Butter Toast",
        price: "₹279",
        diet: "veg",
        desc: "Served with vanilla icecream & salted caramel.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1"
      },
      {
        category: "toast",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        title: "Affogato",
        price: "₹279",
        diet: "veg",
        desc: "Made by soaking Brioche Bread in Fresh Espresso topped with French Vanilla Ice Cream, Chocolate Shards & Berries.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1"
      },
      {
        category: "toast",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        title: "Hong Kong French Toast",
        price: "₹279",
        diet: "veg",
        desc: "Crispy golden brown French Toast stuffed with creamy Peanut Butter, creamy Chocolate Ganache, dusted with powdered Sugar, Maple syrup and Butter.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1"
      },
      {
        category: "toast",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        title: "Dunkers Chicken Popcorn French Toast",
        price: "₹279",
        diet: "nonveg",
        desc: "French Toast with a sweet & spicy Thai Chilli dressing and mildly spicy Chicken Popcorn.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1"
      },
      {
        category: "toast",
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=600",
        title: "Masala Bombay French Toast",
        price: "₹249",
        diet: "veg",
        desc: "Brioche Bread slices dipped in a mixture of Beaten Eggs, Milk & an Indian spice blend. Perfect for Breakfast or Brunch.",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1"
      },
      {
        category: "toast",
        img: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&q=80&w=600",
        title: "Classic French Toast",
        price: "₹229",
        diet: "veg",
        desc: "Come on, you already know what it is!",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"This place is amazing, been there more than couple of times and it's a must visit for me whenever I'm in bhubaneswar. The starters are always super delicious. Garlic bread is on the same level as gurgaon or Delhi. They serve one of the best pasta's in India. PERIOD! My new favourite is their cheese loaded fries.\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Ashu",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"The ambience is good with great hospitality. They serve good Brownie, Hot Chocolate, Ginger Ale Matcha. Must visit in Bhubaneswar.\"",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
        name: "manoja senapati",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"The food was scrumptious and the ambience was absolutely stunning. The staff was extremely attentive and the music was absolutely my taste. We keep coming back and ordering online. We loved the Banh Mi and the strawberry danish we ordered this time. But our all time favourite is the Bacon egg cheese croissant and the milk chocolate and hazelnut croissant. A must visit for all kinds of pastries and desserts.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "aishwarya mohanty",
        role: "Customer"
      }
    ],
    googleCta: {
      title: "Enjoyed your experience at Ekaiva Bakehouse & Studio?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Ekaiva+Bakehouse+%26+Studio+Chandrasekharpur+Bhubaneswar"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Ekaiva",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnUgwMSP2_amAx61b8fcDnMAb2xVaq6LL558MzK72gTG74kjiYP-kgaJFqquVLk2mW2aFdLlKWqMrImfC_e7of8yHRimidsAHtmR2DV0FTttswQbxNPy7kTIIO50PYePZ8Un9JmQk85ni_N=w243-h305-n-k-no-nu", alt: "Ekaiva Bakehouse Interior View 1" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlE_fhvsQHzMqoj4IUGbQm5udOvLDxDn_vk5cr-B4Ui6HzgR0IBvqxyLjtMp9Yp_DGHTKO6MtDKO61VcnG7cmw7vPJBKuUKKZOX9vItRCqYZJkPEEUYT8xLJH5QpqV84aWxn-T9zor_kQe1=w243-h244-n-k-no-nu", alt: "Ekaiva Bakehouse Interior View 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBxoNtT9v3P_4GWM3TFHFKh91ltekBTVCWorHH8IZRu39XogN847-HbaOkS7zx_C3nSXVnYzYE7HqHq-F-mOwGeVnLdJgki1xBgzIrDwrchfjcJmDdwSCDDhOPV7iubzfBaG8H=w243-h406-n-k-no-nu", alt: "Ekaiva Bakehouse Interior View 3" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlizsiI6lWvf5U7lCvAbyIAJzKHQy2b4uqjcHmj0TdDfrE8KEVB73e7OD6e9Wk_aY59ocNxnOrW0pITQBU35QzJvGy-bUCYHuhFPYNANM5qVMH3z72bwBIq9af2AW4NFKrD-RMyft3Tuuro=w243-h174-n-k-no-nu", alt: "Ekaiva Bakehouse Interior View 4" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Our Bakehouse & Studio",
    description: "Located at District Center, Chandrasekharpur. Drop in for your daily fresh bakes, toast, coffee, or dessert.",
    address: "3rd & 4th Floor, Plot no. 333, District Center, Chandrasekharpur, Bhubaneswar, Odisha 751016",
    hours: [
      "Monday - Sunday: 9:00 AM - 11:00 PM"
    ],
    email: "contact@ekaivabakehouse.com",
    phone: "9090099986",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.442971510363!2d85.814234!3d20.323286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909a349b6edbb%3A0xa1d54f59c86a11e8!2sChandrasekharpur%2C%20Bhubaneswar%2C%20Odisha%20751016!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Crafting memorable bakehouse experiences, gourmet toasts, and coffee in Bhubaneswar.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/ekaivabakehouse?stkn=NTJjd3NoODdraWI0", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/bhubaneswar/ekaiva-bake-house-chandrasekharpur-bhubaneshwar?amp=1", iconClass: "ph-storefront" }
    ],
    copyright: "© 2026 Ekaiva Bakehouse & Studio. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Ekaiva_Guest_WiFi",
    password: "ekaivabakehouse"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
