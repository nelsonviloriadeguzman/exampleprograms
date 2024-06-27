const topNav = {
    populateTopNav: function() {
      const topNavData = [
        { text: "Home", href: "#", className: "activeTopNavItem" },
        { text: "News", href: "#", className: "right" },
        { text: "Contact", href: "#", className: "right" },
        { text: "About", href: "#", className: "right" },
        { text: "☰", href: "javascript:void(0);", style: "font-size:15px;", className: "icon", onclick: this.showTopNav }
      ];
  
      const topNavContainer = document.getElementById('topNav');
  
      topNavData.forEach(item => {
       
          const link = this.createLink(item);
          topNavContainer.appendChild(link);
        
      });
  
    },
  
    createLink: function(link) {
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href;
      if (link.className) {
        a.classList.add(link.className);
      }
      if (link.style) {
        a.style.cssText = link.style;
      }
      if (link.onclick) {
        a.onclick = link.onclick;
      }
      return a;
    },
  
    showTopNav: function() {
      let topNav = document.getElementById("topNav");
      if (topNav.classList.contains("responsive")) {
          topNav.classList.remove("responsive");
      } else {
          topNav.classList.add("responsive");
      }
    },

    setActiveTopNavItem: function(element) {
      let currentActive = document.querySelector(".activeTopNavItem");
      currentActive.classList.remove("activeTopNavItem");
      element.classList.add("activeTopNavItem");
    },
  
    executeTopNavEvents: function(){

      document.querySelectorAll(".topNav a").forEach(function(element) {
          element.addEventListener("click", function() {
            topNav.setActiveTopNavItem(this);
          });
      });

    },
  
  };

  export default topNav;