const sideNav = {
    populateSideNav: function() {
  
      const sideNavData = [
        { text: "Link 1", href: "#", className: "activeSideNavItem" },
        { text: "Link 2", href: "#" },
        { text: "Link 3", href: "#" },
        { text: "Link 4", href: "#" },
        { text: "Link 5", href: "#" },
        { text: "Link 6", href: "#" },
        { text: "Link 7", href: "#" }
      ];
  
      const sideNavContainer = document.querySelector(".sideNav");
  
      sideNavData.forEach(item => {
       
          const link = this.createLink(item);
          sideNavContainer.appendChild(link);
        
      });
    },
  
    createLink: function(link) {
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href;
      if (link.className) {
        a.classList.add(link.className);
      }
      return a;
    },

    setActiveSideNavItem: function(element) {
    
      let currentActive = document.querySelector(".activeSideNavItem");
      currentActive.classList.remove("activeSideNavItem");
      element.classList.add("activeSideNavItem");

    },
  
    executeSideNavEvents: function(){
  
      document.querySelectorAll(".container .sideNav a").forEach(function(element) {
        element.addEventListener("click", function() {
          sideNav.setActiveSideNavItem(this);
        });
      });
  
    }
  }

  export default sideNav;