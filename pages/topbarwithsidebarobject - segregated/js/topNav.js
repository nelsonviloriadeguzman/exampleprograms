const topNav = {
    populateTopNav: function() {
      const topNavData = [
        { text: "Home", href: "#", className: "activeTopNavItem" },
        { text: "News", href: "#", className: "right" },
        { text: "Contact", href: "#", className: "right" },
        {
          text: "Top Menu 2",
          content: ["Link 1", "Link 2", "Link 3"]
        },
        {
          text: "Top Menu 1",
          content: ["Link 1", "Link 2", "Link 3"]
        },
        { text: "About", href: "#", className: "right" },
        { text: "☰", href: "javascript:void(0);", style: "font-size:15px;", className: "icon", onclick: this.showTopNav }
      ];
  
      const topNavContainer = document.getElementById('topNav');
  
      topNavData.forEach(item => {
        if (item.content) {
          const dropdown = this.createDropdown(item.text, item.content);
          topNavContainer.appendChild(dropdown);
        } else {
          const link = this.createLink(item);
          topNavContainer.appendChild(link);
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
      if (link.style) {
        a.style.cssText = link.style;
      }
      if (link.onclick) {
        a.onclick = link.onclick;
      }
      return a;
    },
  
    createDropdown: function(menuText, links) {
      const div = document.createElement("div");
      div.classList.add("topNavDropDown", "right");
  
      const button = document.createElement("button");
      button.classList.add("topNavDropDownBtn");
      button.setAttribute("tabindex", "0");
      button.textContent = menuText + ' ';
  
      const caretIcon = document.createElement("i");
      caretIcon.classList.add("fa", "fa-caret-down");
      button.appendChild(caretIcon);
  
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("topNavDropDown-content");
  
      links.forEach(sublinkText => {
        const a = document.createElement("a");
        a.textContent = sublinkText;
        a.href = "#";
        dropdownContent.appendChild(a);
      });
  
      div.appendChild(button);
      div.appendChild(dropdownContent);
  
      return div;
    },
    showTopNav: function() {
      let x = document.getElementById("topNav");
      if (x.classList.contains("responsive")) {
          x.classList.remove("responsive");
      } else {
          x.classList.add("responsive");
      }
    },
    setActiveTopNavItem: function(element) {
      let currentActive = document.querySelector(".activeTopNavItem");
      currentActive.classList.remove("activeTopNavItem");
      element.classList.add("activeTopNavItem");
    },
  
    executeTopNavEvents: function(){
  
      document.querySelectorAll(".topNavDropDownBtn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            let dropdowns = document.querySelectorAll(".topNavDropDown-content");
            dropdowns.forEach(function(dropdown) {
                  if (dropdown !== btn.nextElementSibling) {
                      dropdown.style.display = "none";
                  }
              });
              btn.nextElementSibling.style.display === "block" ? btn.nextElementSibling.style.display = "none" : btn.nextElementSibling.style.display = "block";
          });
      });
  
      window.addEventListener("click", function(event) {
          if (!event.target.matches('.topNavDropDownBtn')) {
              let dropdowns = document.querySelectorAll(".topNavDropDown-content");
              dropdowns.forEach(function(dropdown) {
                  dropdown.style.display = "none";
              });
          }
      });
  
      document.querySelectorAll(".topNav a").forEach(function(element) {
          element.addEventListener("click", function() {
            topNav.setActiveTopNavItem(this);
          });
      });
    },
  
  };

  export default topNav;