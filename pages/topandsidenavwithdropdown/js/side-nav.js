const sideNav = {
    populateSideNav: function() {
  
      const sideNavData = [
        { text: "Link 1", href: "#", className: "activeSideNavItem" },
        {
          text: "Side Menu 1 ",
          content: [
            { text: "Sublink 1", href: "#" },
            { text: "Sublink 2", href: "#" },
            { text: "Sublink 3", href: "#" }
          ]
        },
        {
          text: "Side Menu 2 ",
          content: [
            { text: "Sublink 4", href: "#" },
            { text: "Sublink 5", href: "#" },
            { text: "Sublink 6", href: "#" }
          ]
        },
        { text: "Link 3", href: "#" },
        { text: "Link 4", href: "#" },
        { text: "Link 5", href: "#" },
        { text: "Link 6", href: "#" },
        { text: "Link 7", href: "#" }
      ];
  
      const sideNavContainer = document.querySelector(".sideNav");
  
      sideNavData.forEach(item => {
        if (item.content) {
          const dropdown = this.createDropdown(item);
          sideNavContainer.appendChild(dropdown);
        } else {
          const link = this.createLink(item);
          sideNavContainer.appendChild(link);
        }
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
  
    createDropdown: function(dropdown) {
      const div = document.createElement("div");
      div.classList.add("sideNavDropDown");
  
      const button = document.createElement("button");
      button.classList.add("sideNavDropDownBtn");
      button.setAttribute("tabindex", "0");
      button.textContent = dropdown.text;
  
      const icon = document.createElement("i");
      icon.classList.add("fa", "fa-caret-down");
  
      button.appendChild(icon);
  
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("sideNavDropDown-content");
  
      dropdown.content.forEach(sublink => {
        const a = this.createLink(sublink);
        dropdownContent.appendChild(a);
      });
  
      div.appendChild(button);
      div.appendChild(dropdownContent);
  
      return div;
    },
    
    setActiveSideNavItem: function(element) {
      let dropdownContents = document.querySelectorAll('.sideNavDropDown-content');
      dropdownContents.forEach(function(content) {
        if (element.parentNode.className != "sideNavDropDown-content") {
          content.style.display = "none";
        }
      });
      let currentActive = document.querySelector(".activeSideNavItem");
      currentActive.classList.remove("activeSideNavItem");
      element.classList.add("activeSideNavItem");
    },
    executeSideNavEvents: function(){
  
      let dropdownBtns = document.querySelectorAll(".sideNavDropDownBtn");
      dropdownBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
          let dropdownContent = this.nextElementSibling;
          let isDisplayed = dropdownContent.style.display === "block";
          
          let dropdownContents = document.querySelectorAll('.sideNavDropDown-content');
          dropdownContents.forEach(function(content) {
            content.style.display = "none";
          });
          
          if (!isDisplayed) {
            dropdownContent.style.display = "block";
          }
        });
      });
  
      window.addEventListener("click", function(event) {
        if (event.target.closest('.sideNav')) {
          let sideNavDropdown = event.target.closest('.sideNavDropDown');
          if (sideNavDropdown) {
            let sideNavDropdownBtn = sideNavDropdown.querySelector(".sideNavDropDownBtn");
            if (sideNavDropdown.style.display === "block" && event.target !== sideNavDropdown && event.target !== sideNavDropdownBtn) {
              if (![...sideNavDropdown.querySelectorAll("a")].includes(event.target)) {
                sideNavDropdown.style.display = "none";
              }
            }
          }
        }
      });
      document.querySelectorAll(".container .sideNav a").forEach(function(element) {
        element.addEventListener("click", function() {
          sideNav.setActiveSideNavItem(this);
        });
      });
  
    }
  }

  export default sideNav;