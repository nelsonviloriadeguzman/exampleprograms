const sideNav = {
  populateSideNav: function() {

    const sideNavData = [
      { text: "Introduction", href: "java-index.html" },
      { text: "Syntax", href: "java-syntax.html" },
      { text: "Comments", href: "java-comments.html" },
      { text: "Variables", href: "java-variables.html" },
      { text: "Data Types", href: "java-data-types.html" },
      { text: "Identifiers", href: "java-identifiers.html" },
      { text: "Identifiers Format", href: "java-identifiers-format.html" },
      { text: "Concatenation", href: "java-concatenation.html" },
      { text: "Java Keywords", href: "java-keywords.html" },
      {
        text: "Operators ",
        content: [
          { text: "Assignment Operator", href: "java-assignment-operator.html" },
          { text: "Arithmetic Operators", href: "java-arithmetic-operators.html" },
          { text: "Compound Assignment Operators", href: "java-compound-assignment-operators.html" },
          { text: "Unary Operators", href: "java-unary-operators.html" }
        ]
      },
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

    let currentPageUrl = window.location.href;
    let currentPageName = currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);

    const sideNavLinks = document.querySelectorAll(".sideNav a");

    sideNavLinks.forEach(link => {
        if (link.href.includes(currentPageName)) {
            link.classList.add("activeSideNavItem");

              // Keep the dropdown open if the link is part of a dropdown
          let dropdownContent = link.closest('.sideNavDropDown').querySelector('.sideNavDropDown-content');
          if (dropdownContent) {
            dropdownContent.style.display = "block";
          }
        }
    });

  }
}

export default sideNav;