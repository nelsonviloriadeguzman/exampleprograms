const topNav = {

  populateTopNav: function() {
    const topNavData = [
      { text: "Home", href: "#", className: "active" },
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

    const topnavContainer = document.getElementById('topnav');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    topNavData.forEach(item => {
      if (item.content) {
        const dropdown = this.createDropdown(item.text, item.content);
        mainContainer.appendChild(dropdown);
      } else {
        const link = this.createLink(item);
        mainContainer.appendChild(link);
      }
    });

    topnavContainer.appendChild(mainContainer);
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
    div.classList.add("dropdown", "right");

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
    let x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  },
};


const sidebar = {
  populateSidebar: function() {

    const sidebarData = [
      { text: "Link 1", href: "#", className: "activeSideBarItem" },
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

    const sidebarContainer = document.querySelector(".sidebar");

    sidebarData.forEach(item => {
      if (item.content) {
        const dropdown = this.createDropdown(item);
        sidebarContainer.appendChild(dropdown);
      } else {
        const link = this.createLink(item);
        sidebarContainer.appendChild(link);
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
    div.classList.add("sideBarDropDown");

    const button = document.createElement("button");
    button.classList.add("sideBarDropDownBtn");
    button.setAttribute("tabindex", "0");
    button.textContent = dropdown.text;

    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-caret-down");

    button.appendChild(icon);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("sideBarDropDown-content");

    dropdown.content.forEach(sublink => {
      const a = this.createLink(sublink);
      dropdownContent.appendChild(a);
    });

    div.appendChild(button);
    div.appendChild(dropdownContent);

    return div;
  },
}
const navigation = {

  toggleTopNavDropDown: function() {
    let dropdown = document.getElementById("topNavDropDown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  },
  setActive: function(element) {
    let currentActive = document.querySelector(".active");
    currentActive.classList.remove("active");
    element.classList.add("active");
  },
  setActiveSideBarItem: function(element) {
    let dropdownContents = document.querySelectorAll('.sideBarDropDown-content');
    dropdownContents.forEach(function(content) {
      if (element.parentNode.className != "sideBarDropDown-content") {
        content.style.display = "none";
      }
    });
    let currentActive = document.querySelector(".activeSideBarItem");
    currentActive.classList.remove("activeSideBarItem");
    element.classList.add("activeSideBarItem");
  },
  init: function() {
  
  topNav.populateTopNav();
  sidebar.populateSidebar();
  
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

    window.onclick = function(event) {
        if (!event.target.matches('.topNavDropDownBtn')) {
            let dropdowns = document.querySelectorAll(".topNavDropDown-content");
            dropdowns.forEach(function(dropdown) {
                dropdown.style.display = "none";
            });
        }
    };

    document.querySelectorAll(".topnav a").forEach(function(element) {
        element.addEventListener("click", function() {
            navigation.setActive(this);
        });
    });

    let dropdownBtns = document.querySelectorAll(".sideBarDropDownBtn");
    dropdownBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        let dropdownContents = document.querySelectorAll('.sideBarDropDown-content');
        dropdownContents.forEach(function(content) {
          content.style.display = "none";
        });
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      });
    });
    window.addEventListener("click", function(event) {
      if (event.target.closest('.sidebar')) {
        let sidebarDropdown = event.target.closest('.sideBarDropDown');
        if (sidebarDropdown) {
          let sidebarDropdownBtn = sidebarDropdown.querySelector(".sideBarDropDownBtn");
          if (sidebarDropdown.style.display === "block" && event.target !== sidebarDropdown && event.target !== sidebarDropdownBtn) {
            if (![...sidebarDropdown.querySelectorAll("a")].includes(event.target)) {
              sidebarDropdown.style.display = "none";
            }
          }
        }
      }
    });
    document.querySelectorAll(".container .sidebar a").forEach(function(element) {
      element.addEventListener("click", function() {
        navigation.setActiveSideBarItem(this);
      });
    });
  }
};


navigation.init();






