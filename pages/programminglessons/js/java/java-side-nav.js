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
    executeSideNavEvents: function(){
        
        let currentPageUrl = window.location.href;
        let currentPageName = currentPageUrl.substring(currentPageUrl.lastIndexOf('/') + 1);

        const sideNavLinks = document.querySelectorAll(".sideNav a");

        sideNavLinks.forEach(link => {
            if (link.href.includes(currentPageName)) {
                link.classList.add("activeSideNavItem");
            }
        });
    }
  }

  export default sideNav;