// Product Database
const PRODUCTS = [
  // NAB's Net Issue (Napkin & Tissues)
  {
    id: "nab-tissue-1",
    name: "Village Aroma Pop-up Tissues (Pack of 3)",
    description: "Premium soft 2-ply facial tissues, highly absorbent and gentle. Ideal for tabletop dispensers.",
    category: "NAB's Net Issue",
    image: "assets/Village Aroma Pop-up Tissues (Pack of 3).jfif",
    price: 480,
    originalPrice: 600,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes", "Cartons"]
  },
  {
    id: "nab-tissue-2",
    name: "Custom Logo Printed Napkins",
    description: "Custom printed 1-ply and 2-ply napkins. Add your restaurant, cafe, or catering brand logo.",
    category: "NAB's Net Issue",
    image: "assets/Custom Logo Printed Napkins.jfif",
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    defaultUnit: "Boxes",
    units: ["Boxes", "Cartons"]
  },
  {
    id: "nab-tissue-3",
    name: "Interfolded Dispenser Tissues",
    description: "One-at-a-time paper napkins designed to reduce wastage. Clean white, soft, and durable.",
    category: "NAB's Net Issue",
    image: "assets/Interfolded Dispenser Tissues.jfif",
    price: 3360,
    originalPrice: 4200,
    discount: 20,
    defaultUnit: "Cartons",
    units: ["Boxes", "Cartons"]
  },

  // Cleaning Supplies
  {
    id: "clean-sup-1",
    name: "Commercial Liquid Dishwash (5 Liters)",
    description: "Concentrated grease-cutting liquid dishwash for heavy kitchen utensils and food containers.",
    category: "Cleaning Supplies",
    image: "assets/Commercial Liquid Dishwash (5 Liters).jfif",
    price: 880,
    originalPrice: 1100,
    discount: 20,
    defaultUnit: "Pieces",
    units: ["Pieces", "Boxes"]
  },
  {
    id: "clean-sup-2",
    name: "Microfiber Counter Cleaning Cloths",
    description: "Highly absorbent, lint-free microfiber towels. Perfect for tables, counters, and bar areas.",
    category: "Cleaning Supplies",
    image: "assets/Microfiber Counter Cleaning Cloths.jfif",
    price: 400,
    originalPrice: 500,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes"]
  },
  {
    id: "clean-sup-3",
    name: "Heavy Duty Kitchen Garbage Liners",
    description: "Thick puncture-resistant black trash bags. Designed for heavy restaurant kitchen waste.",
    category: "Cleaning Supplies",
    image: "assets/Heavy Duty Kitchen Garbage Liners.jfif",
    price: 544,
    originalPrice: 680,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes", "Cartons"]
  },

  // Paper Cups
  {
    id: "paper-cup-1",
    name: "8oz Double-Wall Ripple Coffee Cups",
    description: "Insulated hot beverage cups. The ripple wall prevents finger burns without needing sleeves.",
    category: "Paper Cups",
    image: "assets/8oz Double-Wall Ripple Coffee Cups.jfif",
    price: 960,
    originalPrice: 1200,
    discount: 20,
    defaultUnit: "Boxes",
    units: ["Packs", "Boxes", "Cartons"]
  },
  {
    id: "paper-cup-2",
    name: "Premium Hot Cup Lids & Straws Set",
    description: "Tight-fitting black lids and heat-resistant plastic sipping straws for hot coffee cups.",
    category: "Paper Cups",
    image: "assets/Premium Hot Cup Lids & Straws Set.jfif",
    price: 760,
    originalPrice: 950,
    discount: 20,
    defaultUnit: "Boxes",
    units: ["Packs", "Boxes"]
  },

  // Meal Boxes
  {
    id: "meal-box-1",
    name: "Multi-Compartment Bagasse Food Trays",
    description: "100% biodegradable sugarcane bagasse meal trays with tight lids. Oil-proof and microwavable.",
    category: "Meal Boxes",
    image: "assets/Multi-Compartment Bagasse Food Trays.jfif",
    price: 1600,
    originalPrice: 2000,
    discount: 20,
    defaultUnit: "Boxes",
    units: ["Packs", "Boxes", "Cartons"]
  },
  {
    id: "meal-box-2",
    name: "Kraft Paper Lunch Box (Medium)",
    description: "Eco-friendly brown kraft containers with fold-over locking tabs. Leak-resistant and sturdy.",
    category: "Meal Boxes",
    image: "assets/Kraft Paper Lunch Box (Medium).jfif",
    price: 1480,
    originalPrice: 1850,
    discount: 20,
    defaultUnit: "Boxes",
    units: ["Packs", "Boxes", "Cartons"]
  },

  // Disposable Cups
  {
    id: "disp-cup-1",
    name: "250ml Clear Juice Plastic Cups",
    description: "High-clarity cold drink disposable plastic cups, perfect for water, juices, and soda.",
    category: "Disposable Cups",
    image: "assets/250ml Clear Juice Plastic Cups.jfif",
    price: 240,
    originalPrice: 300,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes", "Cartons"]
  },

  // Plastic Containers
  {
    id: "plas-cont-1",
    name: "500ml Rectangular Microwavable Box",
    description: "Food-safe, leak-resistant plastic containers with airtight lids. Microwavable and stackable.",
    category: "Plastic Containers",
    image: "assets/500ml Rectangular Microwavable Box.jfif",
    price: 360,
    originalPrice: 450,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes", "Cartons"]
  },

  // Plates & Bowls
  {
    id: "plate-bowl-1",
    name: "9-inch Sugarcane Paper Plates",
    description: "Sugarcane bagasse heavyweight plates. Compostable, cut-resistant, and rigid layout.",
    category: "Plates & Bowls",
    image: "assets/9-inch Sugarcane Paper Plates.jfif",
    price: 320,
    originalPrice: 400,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes"]
  },

  // Disposable Cutlery
  {
    id: "cutlery-1",
    name: "Birchwood Disposable Spoon & Fork Combo",
    description: "Splinter-free natural wooden spoons and forks. Premium sustainable cafe look.",
    category: "Disposable Cutlery",
    image: "assets/Birchwood Disposable Spoon & Fork Combo.jfif",
    price: 480,
    originalPrice: 600,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes"]
  },

  // Paper Bags
  {
    id: "paper-bag-1",
    name: "Kraft Paper Carrier Delivery Bags",
    description: "Thick brown paper bags with durable twisted paper handles. Essential for premium food delivery.",
    category: "Paper Bags",
    image: "assets/Kraft Paper Carrier Delivery Bags.jfif",
    price: 680,
    originalPrice: 850,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes", "Cartons"]
  },

  // Plastic Bags
  {
    id: "plastic-bag-1",
    name: "White T-Shirt Packaging Bags",
    description: "Easy-carry plastic bags for restaurants and general stores. Heavyweight carrying capacity.",
    category: "Plastic Bags",
    image: "assets/White T-Shirt Packaging Bags.jfif",
    price: 240,
    originalPrice: 300,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes"]
  },

  // Aluminum Foil
  {
    id: "alum-foil-1",
    name: "Aluminum Foil Food Roll (18-inch)",
    description: "Heavy-duty kitchen foil wrap. Ideal for packaging shawarmas, barbecue, and hot food delivery.",
    category: "Aluminum Foil",
    image: "assets/Aluminum Foil Food Roll (18-inch).jfif",
    price: 920,
    originalPrice: 1150,
    discount: 20,
    defaultUnit: "Pieces",
    units: ["Pieces", "Boxes", "Cartons"]
  },

  // Cling Film
  {
    id: "cling-film-1",
    name: "Catering Stretch Cling Wrap (12-inch)",
    description: "Super cling elastic wrapping film. Ideal for sealing platters, fruits, and food trays.",
    category: "Cling Film",
    image: "assets/Catering Stretch Cling Wrap (12-inch).jfif",
    price: 784,
    originalPrice: 980,
    discount: 20,
    defaultUnit: "Pieces",
    units: ["Pieces", "Boxes"]
  },

  // Packaging Materials
  {
    id: "pack-mat-1",
    name: "Commercial Brown Box Sealing Tape",
    description: "High adhesion BOPP packaging tape. 2-inch width, 100 meters length for carton box sealing.",
    category: "Packaging Materials",
    image: "assets/Commercial Brown Box Sealing Tape.jfif",
    price: 480,
    originalPrice: 600,
    discount: 20,
    defaultUnit: "Packs",
    units: ["Packs", "Boxes"]
  },

  // Restaurant Essentials
  {
    id: "rest-ess-1",
    name: "Individually Wrapped Paper Straws",
    description: "Eco-friendly, water-resistant brown paper drinking straws. Food-grade materials.",
    category: "Restaurant Essentials",
    image: "assets/Individually Wrapped Paper Straws.jfif",
    price: 760,
    originalPrice: 950,
    discount: 20,
    defaultUnit: "Boxes",
    units: ["Packs", "Boxes", "Cartons"]
  }
];

// App State
let cart = [];
let currentCategory = "All";
let searchQuery = "";
const DELIVERY_LIMIT = 5000;

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const categorySlider = document.getElementById("category-slider");
const cartBadge = document.getElementById("cart-badge");
const drawerBackdrop = document.getElementById("drawer-backdrop");
const orderDrawer = document.getElementById("order-drawer");
const drawerCloseBtn = document.getElementById("drawer-close");
const cartToggleBtn = document.getElementById("cart-toggle");
const drawerItemList = document.getElementById("drawer-item-list");
const cartEmptyState = document.getElementById("cart-empty-state");
const drawerTotalItems = document.getElementById("drawer-total-items");
const drawerTotalCountHeader = document.getElementById("drawer-total-count-header");
const btnClearOrder = document.getElementById("btn-clear-order");
const btnWhatsappOrder = document.getElementById("btn-whatsapp-order");
const btnWhatsappOrderHero = document.getElementById("btn-whatsapp-order-hero");
const header = document.getElementById("header");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const nav = document.getElementById("nav");
const contactForm = document.getElementById("contact-form-el");
const formMessage = document.getElementById("form-message");

// New Dynamic Price Details Elements in Drawer
const drawerTotalAmount = document.getElementById("drawer-total-amount");
const deliveryStatusMsg = document.getElementById("delivery-status-msg");
const btnContinueShopping = document.getElementById("btn-continue-shopping");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Load Cart from LocalStorage
  loadCartFromStorage();
  
  // Render Categories & Products
  renderCategoryChips();
  renderProducts();
  
  // Setup Event Listeners
  setupEventListeners();
  
  // Setup Hero Banner Carousel
  setupHeroCarousel();
});

// Setup Event Listeners
function setupEventListeners() {
  // Sticky Header Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Nav Menu Toggle
  mobileNavToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    const icon = mobileNavToggle.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });

  // Close mobile nav when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      mobileNavToggle.querySelector("i").className = "fas fa-bars";
    });
  });

  // Search Filter
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  // Drawer Toggle Click Handlers
  cartToggleBtn.addEventListener("click", openDrawer);
  drawerCloseBtn.addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);

  // Continue Shopping Button Handler
  if (btnContinueShopping) {
    btnContinueShopping.addEventListener("click", () => {
      closeDrawer();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Clear Cart Handler
  btnClearOrder.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your current order?")) {
      clearCart();
    }
  });

  // WhatsApp Order Submission
  btnWhatsappOrder.addEventListener("click", submitOrderToWhatsApp);
  
  if (btnWhatsappOrderHero) {
    btnWhatsappOrderHero.addEventListener("click", (e) => {
      e.preventDefault();
      if (cart.length === 0) {
        // Scroll to products and highlight
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
        alert("Please add products to your order first!");
      } else {
        openDrawer();
      }
    });
  }

  // FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains("active");
      
      // Close all other active items
      document.querySelectorAll(".faq-item").forEach(el => {
        el.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Contact Form Submission (Mocked)
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value;
      const business = document.getElementById("form-business").value;
      
      // Display success message
      formMessage.textContent = `Thank you ${name} from ${business || "your business"}! Your inquiry has been received. We will contact you shortly.`;
      formMessage.className = "form-message success";
      contactForm.reset();

      setTimeout(() => {
        formMessage.style.display = "none";
      }, 6000);
    });
  }
}

// Hero Slider Animation
function setupHeroCarousel() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length <= 1) return;
  
  let currentSlide = 0;
  
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000); // switch slide every 4 seconds
}

// Render Categories Chips in Sub-navbar
function renderCategoryChips() {
  // Extract unique categories from PRODUCTS list
  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  
  categorySlider.innerHTML = "";
  categories.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = `category-chip ${cat === currentCategory ? 'active' : ''}`;
    chip.innerHTML = getCategoryIconHTML(cat) + `<span>${cat}</span>`;
    chip.dataset.category = cat;
    
    chip.addEventListener("click", () => {
      // Toggle active states
      document.querySelectorAll(".category-chip").forEach(el => {
        el.classList.remove("active");
      });
      chip.classList.add("active");
      
      currentCategory = cat;
      renderProducts();
    });
    
    categorySlider.appendChild(chip);
  });
}

// Helper: Icons for categories
function getCategoryIconHTML(category) {
  const icons = {
    "All": '<i class="fas fa-th-large" style="margin-right: 6px;"></i>',
    "NAB's Net Issue": '<i class="fas fa-scroll" style="margin-right: 6px;"></i>',
    "Cleaning Supplies": '<i class="fas fa-pump-soap" style="margin-right: 6px;"></i>',
    "Disposable Cups": '<i class="fas fa-glass-whiskey" style="margin-right: 6px;"></i>',
    "Paper Cups": '<i class="fas fa-coffee" style="margin-right: 6px;"></i>',
    "Plastic Containers": '<i class="fas fa-box" style="margin-right: 6px;"></i>',
    "Meal Boxes": '<i class="fas fa-utensils" style="margin-right: 6px;"></i>',
    "Plates & Bowls": '<i class="fas fa-circle-notch" style="margin-right: 6px;"></i>',
    "Disposable Cutlery": '<i class="fas fa-concierge-bell" style="margin-right: 6px;"></i>',
    "Paper Bags": '<i class="fas fa-shopping-bag" style="margin-right: 6px;"></i>',
    "Plastic Bags": '<i class="fas fa-shopping-basket" style="margin-right: 6px;"></i>',
    "Aluminum Foil": '<i class="fas fa-layer-group" style="margin-right: 6px;"></i>',
    "Cling Film": '<i class="fas fa-film" style="margin-right: 6px;"></i>',
    "Packaging Materials": '<i class="fas fa-box-open" style="margin-right: 6px;"></i>',
    "Restaurant Essentials": '<i class="fas fa-star" style="margin-right: 6px;"></i>'
  };
  return icons[category] || '<i class="fas fa-chevron-right" style="margin-right: 6px;"></i>';
}

// Render Products Grid based on Filter/Search
function renderProducts() {
  productsGrid.innerHTML = "";
  
  // Filter products
  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesCategory = currentCategory === "All" || prod.category === currentCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery) || 
                          prod.description.toLowerCase().includes(searchQuery) ||
                          prod.category.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search-minus"></i>
        <h3>No Products Found</h3>
        <p>We couldn't find any products matching "${searchQuery}" in ${currentCategory}. Try checking another category.</p>
      </div>
    `;
    return;
  }
  
  filteredProducts.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    // Check if item is already in cart to load its current selection values
    const cartItem = cart.find(item => item.id === prod.id);
    const selectedQty = cartItem ? cartItem.quantity : 1;
    const selectedUnit = cartItem ? cartItem.unit : prod.defaultUnit;

    const unitOptionsHTML = prod.units.map(unit => 
      `<option value="${unit}" ${unit === selectedUnit ? 'selected' : ''}>${unit}</option>`
    ).join('');
    
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${prod.image}" alt="${prod.name}">
        <span class="product-category-tag">${prod.category}</span>
      </div>
      <div class="product-details">
        <h3>${prod.name}</h3>
        <p>${prod.description}</p>
        
        <!-- Premium Price Layout: Original crossed out, Discounted highlighted, Discount tag -->
        <div class="product-pricing-wrapper" style="margin-bottom: 16px;">
          <div style="display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap;">
            <span style="font-size: 1.25rem; font-weight: 800; color: var(--secondary);">Rs. ${prod.price.toLocaleString()}</span>
            <span style="text-decoration: line-through; font-size: 0.9rem; color: var(--gray-600);">Rs. ${prod.originalPrice.toLocaleString()}</span>
            <span style="background-color: #ef4444; color: var(--white); font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: var(--radius-sm);">${prod.discount}% OFF</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--primary); font-weight: 700; display: block; margin-top: 4px;">
            <i class="fas fa-tags"></i> Wholesale Price per ${prod.defaultUnit}
          </span>
        </div>
        
        <div class="product-controls">
          <div class="quantity-control">
            <button type="button" class="quantity-btn dec-btn" onclick="adjustInputQuantity('${prod.id}', -1)"><i class="fas fa-minus"></i></button>
            <input type="number" class="quantity-input" id="qty-input-${prod.id}" value="${selectedQty}" min="1" onchange="validateInputQty('${prod.id}')">
            <button type="button" class="quantity-btn inc-btn" onclick="adjustInputQuantity('${prod.id}', 1)"><i class="fas fa-plus"></i></button>
          </div>
          
          <select class="unit-selector" id="unit-select-${prod.id}">
            ${unitOptionsHTML}
          </select>
        </div>
        
        <button class="add-order-btn" onclick="addProductToOrder('${prod.id}')">
          <i class="fas fa-cart-plus"></i> Add to Order
        </button>
      </div>
    `;
    
    productsGrid.appendChild(card);
  });
}

// DOM Helper: adjust quantity on page cards
window.adjustInputQuantity = function(productId, delta) {
  const input = document.getElementById(`qty-input-${productId}`);
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val += delta;
  if (val < 1) val = 1;
  input.value = val;
};

// DOM Helper: validate values inputted manually
window.validateInputQty = function(productId) {
  const input = document.getElementById(`qty-input-${productId}`);
  if (!input) return;
  let val = parseInt(input.value);
  if (isNaN(val) || val < 1) {
    input.value = 1;
  }
};

// Add Product to Cart / Order List
window.addProductToOrder = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const qtyInput = document.getElementById(`qty-input-${productId}`);
  const unitSelect = document.getElementById(`unit-select-${productId}`);
  
  const quantity = parseInt(qtyInput.value) || 1;
  const unit = unitSelect.value;
  
  // Check if item is already in order
  const existingIndex = cart.findIndex(item => item.id === productId);
  
  if (existingIndex > -1) {
    // Replace with new quantity and unit
    cart[existingIndex].quantity = quantity;
    cart[existingIndex].unit = unit;
  } else {
    // Add new item
    cart.push({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      quantity: quantity,
      unit: unit,
      price: product.price // Save product price in cart
    });
  }
  
  saveCartToStorage();
  updateCartUI();
  
  // Visual Feedback
  cartToggleBtn.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartToggleBtn.style.transform = "";
  }, 300);

  // Auto-open drawer
  openDrawer();
};

// Cart UI Updates
function updateCartUI() {
  const totalProductTypes = cart.length;
  
  cartBadge.textContent = totalProductTypes;
  cartBadge.style.display = totalProductTypes > 0 ? "flex" : "none";
  
  drawerTotalItems.textContent = `${totalProductTypes} item(s)`;
  drawerTotalCountHeader.textContent = totalProductTypes;
  
  // Populate List
  drawerItemList.innerHTML = "";
  
  if (cart.length === 0) {
    cartEmptyState.style.display = "block";
    drawerItemList.style.display = "none";
    btnClearOrder.style.display = "none";
    btnContinueShopping.style.display = "none";
    btnWhatsappOrder.style.opacity = "0.6";
    btnWhatsappOrder.style.pointerEvents = "none";
    
    // Reset amounts
    drawerTotalAmount.textContent = "Rs. 0";
    deliveryStatusMsg.innerHTML = `<i class="fas fa-info-circle"></i> Add items to calculate delivery rates.`;
    deliveryStatusMsg.style.color = "var(--gray-600)";
  } else {
    cartEmptyState.style.display = "none";
    drawerItemList.style.display = "flex";
    btnClearOrder.style.display = "block";
    btnContinueShopping.style.display = "block";
    btnWhatsappOrder.style.opacity = "1";
    btnWhatsappOrder.style.pointerEvents = "auto";
    
    let totalOrderAmount = 0;
    
    cart.forEach(item => {
      // Calculate row total
      const rowTotal = item.price * item.quantity;
      totalOrderAmount += rowTotal;
      
      const itemRow = document.createElement("div");
      itemRow.className = "drawer-item";
      
      itemRow.innerHTML = `
        <div class="drawer-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="drawer-item-details">
          <h4>${item.name}</h4>
          <div class="drawer-item-meta">
            <span>Unit: <strong>${item.unit}</strong></span>
            <div class="drawer-item-qty-controls">
              <button class="drawer-item-qty-btn" onclick="adjustDrawerQty('${item.id}', -1)"><i class="fas fa-minus"></i></button>
              <span class="drawer-item-qty-val">${item.quantity}</span>
              <button class="drawer-item-qty-btn" onclick="adjustDrawerQty('${item.id}', 1)"><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <div style="font-size: 0.8rem; font-weight: 700; margin-top: 4px; color: var(--secondary);">
            Rs. ${item.price.toLocaleString()} x ${item.quantity} = Rs. ${rowTotal.toLocaleString()}
          </div>
        </div>
        <button class="drawer-item-remove" onclick="removeProductFromOrder('${item.id}')" title="Remove item">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;
      
      drawerItemList.appendChild(itemRow);
    });
    
    // Update Dynamic Total Amount in Drawer
    drawerTotalAmount.textContent = `Rs. ${totalOrderAmount.toLocaleString()}`;
    
    // Update delivery message logic
    if (totalOrderAmount >= DELIVERY_LIMIT) {
      deliveryStatusMsg.innerHTML = `<i class="fas fa-check-circle" style="color: #25d366;"></i> 🎉 You qualify for <strong>FREE DELIVERY</strong> in Gulberg, Lahore!`;
      deliveryStatusMsg.style.color = "var(--secondary)";
    } else {
      const remaining = DELIVERY_LIMIT - totalOrderAmount;
      deliveryStatusMsg.innerHTML = `<i class="fas fa-truck" style="color: var(--accent);"></i> Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for <strong>FREE DELIVERY</strong> in Gulberg!`;
      deliveryStatusMsg.style.color = "var(--gray-800)";
    }
  }
}

// Drawer quantity adjust
window.adjustDrawerQty = function(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;
  
  cart[index].quantity += delta;
  
  if (cart[index].quantity < 1) {
    cart[index].quantity = 1;
  }
  
  saveCartToStorage();
  updateCartUI();
  
  // Sync the catalog input value if it exists
  const catalogInput = document.getElementById(`qty-input-${productId}`);
  if (catalogInput) {
    catalogInput.value = cart[index].quantity;
  }
};

// Remove single product
window.removeProductFromOrder = function(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Refresh catalog states
};

// Clear all cart
function clearCart() {
  cart = [];
  saveCartToStorage();
  updateCartUI();
  renderProducts(); // Refresh catalog states
}

// Drawer Visibility Helpers
function openDrawer() {
  orderDrawer.classList.add("active");
  drawerBackdrop.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeDrawer() {
  orderDrawer.classList.remove("active");
  drawerBackdrop.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable background scroll
}

// Local Storage Helpers
function saveCartToStorage() {
  localStorage.setItem("3s_enterprises_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const saved = localStorage.getItem("3s_enterprises_cart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }
}

// Submit Order directly to WhatsApp
function submitOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Your order is empty. Please add items to order.");
    return;
  }
  
  const phoneNumber = "+923034440885"; // 3S Store Phone Number
  
  // Calculate total price and delivery status
  let totalOrderAmount = 0;
  let itemsList = "";
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalOrderAmount += itemTotal;
    itemsList += `• ${item.name} – ${item.quantity} ${item.unit} (Rs. ${item.price.toLocaleString()} ea / Subtotal: Rs. ${itemTotal.toLocaleString()})\n`;
  });
  
  const isFreeDelivery = totalOrderAmount >= DELIVERY_LIMIT;
  const deliveryStatus = isFreeDelivery 
    ? "FREE (Gulberg, Lahore Area Offer)" 
    : "Standard (Gulberg / Lahore)";
  
  // Compose full message template for 3S Store
  const textMessage = `Hello 3S Store,

I would like to place the following wholesale order:

${itemsList}
---------------------------------
💰 Items Subtotal: Rs. ${totalOrderAmount.toLocaleString()}
🚚 Delivery Service: ${deliveryStatus}
📦 Total Invoice: Rs. ${totalOrderAmount.toLocaleString()}

Please confirm pricing, stock availability, and delivery time.

Thank you.`;

  // Encode message for URI
  const encodedText = encodeURIComponent(textMessage);
  const waUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedText}`;
  
  // Open WhatsApp in new tab
  window.open(waUrl, "_blank");
}
