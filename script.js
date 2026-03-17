function loginUser() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if(!username || !password){
        alert("Please fill in all fields!");
        return;
      }

      // Demo credentials
      const demoAccounts = { 'customer1': 'pass123', 'customer2': 'pass456' };
      if(demoAccounts[username] && demoAccounts[username] === password){
          alert(`Welcome back, ${username}!`);
          window.location.href = 'canteen-menu.html';
      } else {
          alert("Invalid username or password!");
      }
    }

function loginStaff() {
      const staffUsername = document.getElementById('staffUsername').value;
      const staffPassword = document.getElementById('staffPassword').value;

      if(!staffUsername || !staffPassword){
        alert("Please fill in all fields!");
        return;
      }

      // Demo staff credentials
      const staffAccounts = { 'staff1': 'staff123', 'staff2': 'staff456' };
      if(staffAccounts[staffUsername] && staffAccounts[staffUsername] === staffPassword){
          alert(`Welcome, ${staffUsername}!`);
          window.location.href = 'staff-dashboard.html';
      } else {
          alert("Invalid staff ID or password!");
      }
    }

function registerUser() {
      const email = (document.getElementById('email')?.value || '').trim();
      const username = (document.getElementById('username')?.value || '').trim();
      const password = (document.getElementById('password')?.value || '').trim();
      const role = (document.getElementById('role')?.value || 'customer').trim();


      if(!email || !username || !password || !role){
        alert("Please fill in all fields!");
        return;
      }


      // Demo success message & redirect based on role
      alert(`Account created successfully for ${username} as ${role}`);
      if(role === 'customer'){
          window.location.href = 'canteen-menu.html';
      } else if(role === 'staff'){
          window.location.href = 'staff-dashboard.html';
      }
    }

let cartCount = 0;

const ADDONS_PRICES = {
  egg: 10,
  sauce: 10,
  'extraRice': 20
};

function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function addToCart(item) {
    if (!item || !item.id) return;
    const cart = getCartItems();
    const existing = cart.find(x => x.id === item.id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount++;
    showToast('Item added to cart!');
    updateCartBadge();
}

function getCartItemCount() {
    const cart = getCartItems();
    return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const count = getCartItemCount();
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
}

function filterCategory(event, category) {
    const cards = document.querySelectorAll(".card");
    const tabs = document.querySelectorAll(".categories span");

    tabs.forEach(tab => tab.classList.remove("active"));
    event.target.classList.add("active");

    cards.forEach(card => {
        if (card.classList.contains(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
function goToCart() {
    window.location.href = "cart.html";
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// default menu entries for first-time visitors
// give each item an id so it can be removed later
const DEFAULT_MENU = [
    { id: 'm1', name: 'Tapsilog', price: 75, category: 'meals', available: true, imgSrc: 'images/tapsilog.jpg' },
    { id: 'm2', name: 'Chicken Silog', price: 80, category: 'meals', available: false, imgSrc: 'images/chicken silog.jpg' },
    { id: 's1', name: 'Banana Turon', price: 20, category: 'snacks', available: true, imgSrc: 'images/banana turon.jpg' },
    { id: 'd1', name: 'Iced Tea', price: 25, category: 'drinks', available: true, imgSrc: 'images/iced tea.webp' },
    { id: 'de1', name: 'Ice Cream', price: 30, category: 'desserts', available: true, imgSrc: 'images/icecream.jpg' },
    // New MEALS
    { id: 'm3', name: 'Chicken Poppers', price: 50, category: 'meals', available: true, imgSrc: 'images/Chicken Poppers.jpg' },
{ id: 'm4', name: 'Bacon', price: 50, category: 'meals', available: true, imgSrc: 'images/Bacon w Egg.jpg' },
{ id: 'm5', name: 'Hungarian Sausage', price: 60, category: 'meals', available: true, imgSrc: 'images/Hungarian Sausage w Egg.jpg' },
{ id: 'm6', name: 'Pork Menudo', price: 50, category: 'meals', available: true, imgSrc: 'images/Pork Menudo.jpg' },
{ id: 'm7', name: 'Honey Garlic Chicken Bites', price: 60, category: 'meals', available: true, imgSrc: 'images/Honey Garlic Chicken Bites.jpg' },
{ id: 'm8', name: 'Chicken Fillet', price: 60, category: 'meals', available: true, imgSrc: 'images/Chicken Fillet.jpg' },
{ id: 'm9', name: 'Pork Sisig', price: 60, category: 'meals', available: true, imgSrc: 'images/Pork Sisig.jpg' },
{ id: 'm10', name: 'Beef Tapa', price: 60, category: 'meals', available: true, imgSrc: 'images/Beef Tapa.jpg' },
{ id: 'm11', name: 'Siomai Rice', price: 40, category: 'meals', available: true, imgSrc: 'images/Siomai Rice.jpg' },
    { id: 'm14', name: 'Carbonara', price: 40, category: 'meals', available: true, imgSrc: 'images/Carbonara.jpg' },
    { id: 'm15', name: 'Beef Bulgogi', price: 60, category: 'meals', available: true, imgSrc: 'images/Beef Bulgogi.jpg' },
    // New DRINKS
{ id: 'd2', name: 'Bottled Water 250ML', price: 10, category: 'drinks', available: true, imgSrc: 'images/Bottled Water.jpg' },
{ id: 'd3', name: 'Bottled Water 500ML', price: 15, category: 'drinks', available: true, imgSrc: 'images/Bottled Water.jpg' },
    { id: 'd4', name: 'Bottled Water 1L', price: 25, category: 'drinks', available: true, imgSrc: 'images/Bottled Water.jpg' },
    { id: 'd5', name: 'Cucumber Juice 16OZ', price: 30, category: 'drinks', available: true, imgSrc: 'images/Cucumber Juice (250 ml, 350 ml).jpg' },
    { id: 'd6', name: 'Cucumber Juice 20OZ', price: 40, category: 'drinks', available: true, imgSrc: 'images/Cucumber Juice (250 ml, 350 ml).jpg' },
    { id: 'd7', name: 'Blue Lemonade 16OZ', price: 30, category: 'drinks', available: true, imgSrc: 'images/Blue Lemonade (250 ml, 350 ml).jpg' },
    { id: 'd8', name: 'Blue Lemonade 20OZ', price: 40, category: 'drinks', available: true, imgSrc: 'images/Blue Lemonade (250 ml, 350 ml).jpg' },
    { id: 'd9', name: 'Lemonade 16OZ', price: 30, category: 'drinks', available: true, imgSrc: 'images/Lemonade  (250 ml, 350 ml).jpg' },
    { id: 'd10', name: 'Lemonade 20OZ', price: 40, category: 'drinks', available: true, imgSrc: 'images/Lemonade  (250 ml, 350 ml).jpg' }
];



   


    function initializeOrder() {
      const tableBody = document.getElementById('orderTableBody');
      tableBody.innerHTML = '';
      const cartItems = getCartItems();

      const addonsSection = document.getElementById('addonsSection');
      const globalNotes = document.getElementById('globalNotes');

      if (cartItems.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5" class="empty-cart-msg">Your cart is empty. Add items from the menu!</td>';
        tableBody.appendChild(row);
        if (addonsSection) addonsSection.style.display = 'none';
        if (globalNotes) globalNotes.value = '';
        document.getElementById('subtotal').textContent = '0';
        document.getElementById('totalAmount').textContent = '0';
        return;
      } else if (addonsSection) {
        addonsSection.style.display = 'block';
      }

      cartItems.forEach((item, index) => {
        const mainRow = document.createElement('tr');
        const subtotal = item.price * item.quantity;
       
        mainRow.innerHTML = `
          <td class="item-name">${item.name}</td>
          <td class="price">₱${item.price}</td>
          <td><input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}" onchange="updateTotal()"></td>
          <td class="price">₱<span class="item-subtotal">${subtotal}</span></td>
          <td><button type="button" class="remove-item-btn" onclick="removeCartItem(${index})" title="Remove item">✕</button></td>
        `;
        tableBody.appendChild(mainRow);

        const notesRow = document.createElement('tr');
        notesRow.className = 'notes-row';
        notesRow.innerHTML = `
          <td colspan="5">
            <textarea placeholder="Add special notes..." class="note-input" data-index="${index}"></textarea>
          </td>
        `;
        tableBody.appendChild(notesRow);
      });


      updateTotal();
    }

    function removeCartItem(index) {
      const cartItems = getCartItems();
      if (index < 0 || index >= cartItems.length) return;
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      initializeOrder();
    }


    function updateTotal() {
      const quantityInputs = document.querySelectorAll('.quantity-input');
      let subtotal = 0;
      const cartItems = getCartItems();

      quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0;
        const price = cartItems[index].price;
        const itemSubtotal = price * quantity;
       
        // Update item subtotal in table
        const subtotalCell = input.closest('tr').querySelector('.item-subtotal');
        subtotalCell.textContent = itemSubtotal;
       
        subtotal += itemSubtotal;
      });

      // Calculate add-ons subtotal
      let addonsSubtotal = 0;
      const addonCheckboxes = document.querySelectorAll('.addon-checkbox:checked');
      addonCheckboxes.forEach(cb => {
        addonsSubtotal += parseInt(cb.dataset.price) || 0;
      });
      const addonsTotalEl = document.getElementById('addonsTotal');
      if (addonsTotalEl) addonsTotalEl.textContent = `Add-ons: ₱${addonsSubtotal}`;

      const grandTotal = subtotal + addonsSubtotal;
     
      document.getElementById('subtotal').textContent = subtotal;
      document.getElementById('totalAmount').textContent = grandTotal;
    }


    function confirmOrder() {
      const cartItems = getCartItems();
      if (cartItems.length === 0) {
        alert('Please add at least one item to your order. Add items from the menu first.');
        return;
      }

      const quantityInputs = document.querySelectorAll('.quantity-input');
      const noteInputs = document.querySelectorAll('.note-input');
      const items = [];
      let total = 0;
     
      quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0;
        const cartItem = cartItems[index];
        if (!cartItem) return;
       
        if (quantity > 0) {
          items.push(cartItem.name + (quantity > 1 ? ' x' + quantity : ''));
          total += cartItem.price * quantity;
          // Add add-ons to total
          const addonCheckboxes = document.querySelectorAll('.addon-checkbox:checked');
          addonCheckboxes.forEach(cb => {
            total += parseInt(cb.dataset.price) || 0;
          });
        }
      });

      if (items.length === 0) {
        alert('Please add at least one item to your order.');
        return;
      }

      // Collect per-item notes
      const itemNotes = {};
      noteInputs.forEach((el, index) => {
        if (el && el.value) itemNotes[index] = el.value;
      });
      const perItemNotesStr = Object.entries(itemNotes).map(([idx, note]) => `Item ${idx + 1}: ${note}`).join('; ');

      // Global notes
      const globalNotesEl = document.getElementById('globalNotes');
      const globalNotes = globalNotesEl ? globalNotesEl.value : '';

      // Add-ons
      const addonCheckboxes = document.querySelectorAll('.addon-checkbox:checked');
      const selectedAddons = Array.from(addonCheckboxes).map(cb => cb.nextSibling.textContent.trim()).join(', ');
      const fullNotes = [perItemNotesStr, globalNotes, selectedAddons].filter(Boolean).join(' | ');

      const notes = fullNotes;
      
      // generate queue number and create order entry
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      const newQueue = Math.max(...orders.map(o => o.queue || 0), 0) + 1;
      const orderId = 'ord_' + Date.now();
      const newOrder = {
        id: orderId,
        queue: newQueue,
        student: 'student_' + Date.now().toString(36),
        items: items,
        total: total,
        status: 'pending',
        notes: notes,
        timestamp: new Date().toISOString()
      };
      
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      sessionStorage.setItem('lastOrderId', orderId);
      localStorage.removeItem('cart');
      window.location.href = 'order-confirmation.html';
    }


    function goBackToMenu() {
      window.location.href = 'canteen-menu.html';
    }
    
    // Order Status Modal Functions
    function showOrderStatus() {
        const orderId = sessionStorage.getItem('lastOrderId');
        if (!orderId) {
            alert('No active order found. Please place an order first.');
            return;
        }
        
        const modal = document.getElementById('orderStatusModal');
        if (modal) {
            modal.classList.remove('hidden');
            loadModalOrderStatus(orderId);
        }
    }
    
    function closeOrderStatus() {
        const modal = document.getElementById('orderStatusModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }
    
    function loadModalOrderStatus(orderId) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        let order = orders.find(o => o.id === orderId);
        
        if (!order) {
            console.log('Order not found in modal load');
            return;
        }
        
        // Display queue number
        const queueEl = document.getElementById('queueNumberModal');
        if (queueEl) queueEl.textContent = 'ORDER NO.' + order.queue;
        
        // Display items
        const itemsList = document.getElementById('orderItemsListModal');
        if (itemsList) {
            itemsList.innerHTML = order.items.map(item => 
                `<div class="order-item"><span class="item-name">${item}</span></div>`
            ).join('');
        }
        
        // Display total
        const totalEl = document.getElementById('totalAmountModal');
        if (totalEl) totalEl.textContent = order.total;
        
        // Update status display
        updateOrderStatusModal(order.status);
        
        // Listen for status changes
        window.addEventListener('storage', (e) => {
            if (e.key === 'orders') {
                const updated = JSON.parse(e.newValue || '[]').find(o => o.id === orderId);
                if (updated) {
                    updateOrderStatusModal(updated.status);
                }
            }
        });
    }
    
    function updateOrderStatusModal(status) {
        // Update status steps in modal
        const modal = document.getElementById('orderStatusModal');
        if (!modal) return;
        
        const steps = modal.querySelectorAll('.status-step');
        steps.forEach(step => {
            step.classList.remove('active', 'completed');
        });
        
        const statusMap = {
            'pending': 0,
            'preparing': 1,
            'ready': 2,
            'completed': 3
        };
        
        const currentIdx = statusMap[status] || 0;
        steps.forEach((step, idx) => {
            if (idx < currentIdx) step.classList.add('completed');
            if (idx === currentIdx) step.classList.add('active');
        });
        
        const connectors = modal.querySelectorAll('.status-connector');
        connectors.forEach((conn, idx) => {
            if (idx < currentIdx) conn.classList.add('completed');
        });
    }
    
    function checkAndShowTrackButton() {
        const orderId = sessionStorage.getItem('lastOrderId');
        const trackBtn = document.getElementById('trackStatusBtn');
        if (trackBtn) {
            if (orderId) {
                trackBtn.style.display = 'inline-block';
            } else {
                trackBtn.style.display = 'none';
            }
        }
    }
    
    // Check track button visibility and cart badge on menu page load
    if (document.location.pathname.includes('canteen-menu.html')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                checkAndShowTrackButton();
                updateCartBadge();
            });
        } else {
            checkAndShowTrackButton();
            updateCartBadge();
        }
    }
    

    function goHome() {
      window.location.href = 'canteen-menu.html';
    }
    
    function trackOrder() {
      window.location.reload();
    }

    function cancelOrder() {
      if (confirm('Are you sure you want to cancel this order? It cannot be undone.')) {
        const orderId = sessionStorage.getItem('lastOrderId');
        if (orderId) {
          let orders = JSON.parse(localStorage.getItem('orders')) || [];
          orders = orders.filter(o => o.id !== orderId);
          localStorage.setItem('orders', JSON.stringify(orders));
          sessionStorage.removeItem('lastOrderId');
          showToast('Order cancelled successfully.');
          setTimeout(() => window.location.href = 'canteen-menu.html', 1000);
        } else {
          alert('No active order found.');
        }
      }
    }


    // Customer order tracking
    function loadCustomerOrder() {
        const orderId = sessionStorage.getItem('lastOrderId');
        if (!orderId) {
            console.log('No order ID found in session');
            return;
        }
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        console.log('Looking for order:', orderId, 'in', orders);
        const order = orders.find(o => o.id === orderId);
        
        if (!order) {
            console.log('Order not found, retrying...');
            // Retry after a short delay in case orders weren't saved yet
            setTimeout(loadCustomerOrder, 500);
            return;
        }
        
        // Display queue number
        const queueEl = document.getElementById('queueNumber');
        if (queueEl) queueEl.textContent = 'ORDER ' + order.queue;
        
        // Display items
        const itemsList = document.getElementById('orderItemsList');
        if (itemsList) {
            itemsList.innerHTML = order.items.map(item => 
                `<div class="order-item"><span class="item-name">${item}</span></div>`
            ).join('');
        }
        
        // Display total
        const totalEl = document.getElementById('totalAmount');
        if (totalEl) totalEl.textContent = order.total;
        
        // Display timestamp
        const dateEl = document.getElementById('orderDateTime');
        if (dateEl) {
            const date = new Date(order.timestamp);
            dateEl.textContent = date.toLocaleString();
        }
        
        // Display notes
        const notesEl = document.getElementById('specialNotes');
        if (notesEl) notesEl.textContent = order.notes || 'None';
        
        // Update status display
        updateOrderStatus(order.status);

        // Dynamic estimated time
        const timeEl = document.getElementById('timeEstimateValue');
        if (timeEl) {
          let estimate = 'Calculating...';
          switch (order.status) {
            case 'pending': estimate = '~15-20 minutes'; break;
            case 'preparing': estimate = '~5-10 minutes'; break;
            case 'ready': estimate = 'Ready for pickup!'; break;
            case 'completed': estimate = 'Order completed'; break;
            default: estimate = '~15 minutes';
          }
          timeEl.textContent = estimate;
        }
        
        // Listen for status changes
        window.addEventListener('storage', (e) => {
            if (e.key === 'orders') {
                const updatedOrders = JSON.parse(e.newValue || '[]');
                const updated = updatedOrders.find(o => o.id === orderId);
                if (updated) {
                    updateOrderStatus(updated.status);
                    // Update time on status change
                    if (timeEl) {
                      let estimate = 'Calculating...';
                      switch (updated.status) {
                        case 'pending': estimate = '~15-20 minutes'; break;
                        case 'preparing': estimate = '~5-10 minutes'; break;
                        case 'ready': estimate = 'Ready for pickup!'; break;
                        case 'completed': estimate = 'Order completed'; break;
                        default: estimate = '~15 minutes';
                      }
                      timeEl.textContent = estimate;
                    }
                }
            }
        });
        
        console.log('Order loaded successfully:', order);
    }

    
    function updateOrderStatus(status) {
        // Update status steps
        document.querySelectorAll('.status-step').forEach(step => {
            step.classList.remove('active', 'completed');
        });
        
        const statusMap = {
            'pending': 0,
            'preparing': 1,
            'ready': 2,
            'completed': 3
        };
        
        const currentIdx = statusMap[status] || 0;
        document.querySelectorAll('.status-step').forEach((step, idx) => {
            if (idx < currentIdx) step.classList.add('completed');
            if (idx === currentIdx) step.classList.add('active');
        });
        
        document.querySelectorAll('.status-connector').forEach((conn, idx) => {
            if (idx < currentIdx) conn.classList.add('completed');
        });
    }
    
    // Auto-load order on confirmation page
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadCustomerOrder);
    } else {
        // DOM already loaded
        loadCustomerOrder();
    }
    
    // Also try immediately in case it helps
    setTimeout(loadCustomerOrder, 100);


    // load dynamic menu entries for any grid on the page (customer or staff)
// remove a menu item by id (staff only)
function removeMenuItem(id) {
    let stored = JSON.parse(localStorage.getItem('menuItems')) || [];
    stored = stored.filter(it => it.id !== id);
    localStorage.setItem('menuItems', JSON.stringify(stored));
    loadMenuItems();
}

function loadMenuItems() {
    const renderMenu = (stored) => {
        document.querySelectorAll('.menu-grid').forEach(grid => {
            grid.innerHTML = '';
            stored.forEach(item => {
                const card = document.createElement('div');
                card.className = `card ${item.category}`;
                // only grey out unavailable items on staff dashboard
                if (grid.id === 'staffMenuGrid' && !item.available) {
                    card.classList.add('unavailable-card');
                }
                card.dataset.id = item.id || '';

                if (item.imgSrc) {
                    const img = document.createElement('img');
                    img.src = item.imgSrc;
                    img.className = 'food-img';
                    card.appendChild(img);
                }

                const nameP = document.createElement('p');
                nameP.className = 'name';
                nameP.textContent = item.name;
                card.appendChild(nameP);

                const priceP = document.createElement('p');
                priceP.textContent = `₱${item.price}`;
                card.appendChild(priceP);

                if (grid.id !== 'staffMenuGrid') {
                    const btn = document.createElement('button');
                    if (item.available) {
                        btn.textContent = 'Add to cart';
                        btn.onclick = () => addToCart(item);
                    } else {
                        btn.textContent = 'Unavailable';
                        btn.disabled = true;
                    }
                    card.appendChild(btn);
                } else {
                    // staff view: show toggle availability button instead of cart
                    const toggle = document.createElement('button');
                    toggle.textContent = item.available ? 'Mark Unavailable' : 'Mark Available';
                    toggle.className = item.available ? 'avail-btn' : 'unavail-btn';
                    toggle.onclick = () => {
                        let arr = JSON.parse(localStorage.getItem('menuItems')) || [];
                        const idx = arr.findIndex(x => x.id === item.id);
                        if (idx !== -1) {
                            arr[idx].available = !arr[idx].available;
                            localStorage.setItem('menuItems', JSON.stringify(arr));
                            loadMenuItems();
                        }
                    };
                    card.appendChild(toggle);

                    const del = document.createElement('button');
                    del.textContent = 'Delete';
                    del.className = 'delete-btn';
                    del.onclick = () => removeMenuItem(item.id);
                    card.appendChild(del);
                }

                grid.appendChild(card);
            });
        });

        // reapply active category filter if one selected
        const activeTab = document.querySelector('.categories .active');
        if (activeTab) {
            const cat = activeTab.textContent.toLowerCase();
            document.querySelectorAll('.card').forEach(card => {
                if (card.classList.contains(cat)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    };

    let stored = JSON.parse(localStorage.getItem('menuItems')) || [];
    // Always ensure full DEFAULT_MENU is available - merge if missing new items
    const defaultIds = DEFAULT_MENU.map(item => item.id);
    const missingDefaults = DEFAULT_MENU.filter(def => !stored.some(s => s.id === def.id));
    if (missingDefaults.length > 0) {
        stored = [...stored, ...missingDefaults];
        localStorage.setItem('menuItems', JSON.stringify(stored));
        console.log(`Seeded ${missingDefaults.length} new menu items`);
    }

    renderMenu(stored);

}

// Initialize the order on page load (only if relevant) and inject menu items
window.onload = function() {
    if (document.getElementById('orderTableBody')) {
        initializeOrder();
    }
    loadMenuItems();
};

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    // force reflow for animation
    void toast.offsetWidth;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 1800);
}

// ---------- staff dashboard item form logic ----------

// (items are now shown via card grids using loadMenuItems)

// register event listener after DOM loads
window.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('addItemForm');
    if (addItemForm) {
        addItemForm.addEventListener('submit', event => {
            event.preventDefault();
            const nameEl = document.getElementById('itemName');
            const priceEl = document.getElementById('itemPrice');
            const photoEl = document.getElementById('itemPhoto');
            const categoryEl = document.getElementById('itemCategory');
            const availableEl = document.getElementById('itemAvailable');

            const name = nameEl.value.trim();
            const price = parseFloat(priceEl.value);
            const category = categoryEl.value;
            const available = availableEl.checked;
            const file = photoEl.files[0];

            if (!name) {
                alert('Item name is required');
                return;
            }
            if (isNaN(price) || price < 0) {
                alert('Please enter a valid price');
                return;
            }

            // construct item object and save to storage
            const itemObj = {
                id: 'x' + Date.now().toString(36), // unique id
                name,
                price,
                category,
                available,
                imgSrc: null
            };

            const reader = new FileReader();
            reader.onload = function(e) {
                if (file) {
                    itemObj.imgSrc = e.target.result;
                }
                // persist menu item for customers (and staff)
                const existing = JSON.parse(localStorage.getItem('menuItems')) || [];
                existing.push(itemObj);
                localStorage.setItem('menuItems', JSON.stringify(existing));
                // refresh any visible grids so the new card appears immediately
                loadMenuItems();
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                // no file, just save and refresh
                const existing = JSON.parse(localStorage.getItem('menuItems')) || [];
                existing.push(itemObj);
                localStorage.setItem('menuItems', JSON.stringify(existing));
                loadMenuItems();
            }

            // reset form
            addItemForm.reset();
        });
    }
});
 const SAMPLE = [
            {id:'67',queue:67,student:'m4ry777',items:['Sisig x2','Coke x2','Burger x3'],total:242,status:'pending',notes:'No hot sauce please'},
            {id:'1',queue:1,student:'davi111525',items:['French Fries (Large)','Coke x2'],total:180,status:'pending',notes:''},
            {id:'4',queue:4,student:'student004',items:['Fishball 20pc'],total:120,status:'pending',notes:''}
        ];


        function loadOrders(){
            const raw = localStorage.getItem('orders');
            if(!raw){
                localStorage.setItem('orders',JSON.stringify(SAMPLE));
                return SAMPLE.slice();
            }
            try{ return JSON.parse(raw);}catch(e){ localStorage.setItem('orders',JSON.stringify(SAMPLE)); return SAMPLE.slice(); }
        }


        function saveOrders(arr){
            localStorage.setItem('orders',JSON.stringify(arr));
        }


        let orderFilterStatus = 'pending';

        function render(){
            const container = document.getElementById('orders');
            if (!container) return;

            const orders = loadOrders();
            const filtered = orders.filter(o=>(o.status||'pending')===orderFilterStatus);
            filtered.sort((a,b)=>a.queue - b.queue);
            container.innerHTML='';
            filtered.forEach(o=>{
                const el = document.createElement('div'); el.className='order';
                const meta = document.createElement('div'); meta.className='meta';
                meta.innerHTML = `<div>ORDER ${o.queue} - ${o.student}</div><div class="status-pill">${capitalize(o.status)}</div>`;
                el.appendChild(meta);
                const items = document.createElement('div'); items.className='items';
                items.innerHTML = `<strong>ITEMS:</strong> ${o.items.join(', ')}`;
                el.appendChild(items);


                const ctr = document.createElement('div'); ctr.className='controls';
                const btnPrep = document.createElement('button'); btnPrep.textContent='Preparing'; btnPrep.className='preparing';
                btnPrep.onclick = ()=>updateStatus(o.id,'preparing');
                const btnReady = document.createElement('button'); btnReady.textContent='Ready'; btnReady.className='ready';
                btnReady.onclick = ()=>updateStatus(o.id,'ready');
                const btnComplete = document.createElement('button'); btnComplete.textContent='Completed'; btnComplete.className='completed';
                btnComplete.onclick = ()=>updateStatus(o.id,'completed');
                ctr.appendChild(btnPrep); ctr.appendChild(btnReady); ctr.appendChild(btnComplete);
                el.appendChild(ctr);


                const notes = document.createElement('div');
                notes.className = 'order-note';
                notes.textContent = o.notes ? ('Notes: '+o.notes) : '';
                el.appendChild(notes);


                container.appendChild(el);
            });
        }


        function capitalize(s){ return (s||'').toString().replace(/(^|\s)\S/g, t=>t.toUpperCase()); }


        function updateStatus(id,newStatus){
            const orders = loadOrders();
            const idx = orders.findIndex(x=>x.id==id);
            if(idx===-1) return;
            orders[idx].status = newStatus;
            saveOrders(orders);
            render();
            // Trigger a storage event for other tabs (some browsers do it automatically when setItem)
            try{ localStorage.setItem('orders_updated_at', Date.now().toString()); }catch(e){}
        }


        // storage listener to refresh UI if another tab changed orders
        window.addEventListener('storage', (e)=>{
            if(e.key==='orders' || e.key==='orders_updated_at') render();
        });

        // Order status tab switching (staff dashboard)
        document.querySelectorAll('.order-tab').forEach(tab=>{
            tab.addEventListener('click', ()=>{
                document.querySelectorAll('.order-tab').forEach(t=>t.classList.remove('active'));
                tab.classList.add('active');
                orderFilterStatus = tab.getAttribute('data-status') || 'pending';
                render();
            });
        });

        // initial render
        render();
