let highlightedString = {
    executeEvents: function() {
        let self = this; // Store a reference to the object

        document.addEventListener('mouseup', function() {
            let selection = window.getSelection().toString().trim();
            if (selection !== '') {
                self.highlightWord(selection); // Use 'self' to refer to the object
            }
        });

        document.addEventListener('mousedown', function() {
            // Remove all elements with the 'highlightedString' class
            let highlightedStringElements = document.querySelectorAll('.highlightedString');
            highlightedStringElements.forEach(function(element) {
                // Replace each highlightedString element with its inner text content
                let textNode = document.createTextNode(element.textContent);
                element.parentNode.replaceChild(textNode, element);
            });
        });
    },

    highlightWord: function(word) {
        let regex = new RegExp('(' + this.escapeRegExp(word) + ')', 'gi');
        let body = document.body;

        // Call the walk function defined within the same object
        this.walk(body, regex);
    },

    walk: function(node, regex) {
        let self = this; // Store a reference to the object

        if (node.nodeType === 1) {
            // If the node is an element, check if it contains the word directly
            if (node.textContent.match(regex)) {
                let replacedHTML = node.innerHTML.replace(regex, '<span class="highlightedString">$1</span>');
                node.innerHTML = replacedHTML;
            } else {
                // Iterate through its child nodes
                node.childNodes.forEach(function(childNode) {
                    self.walk(childNode, regex); // Use 'self' to refer to the object
                });
            }
        } else if (node.nodeType === 3) {
            // If the node is a text node, replace occurrences of the word
            let replacedText = node.nodeValue.replace(regex, '<span class="highlightedString">$1</span>');
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = replacedText;

            // Replace the original text node with the new highlightedString nodes
            while (tempDiv.firstChild) {
                node.parentNode.insertBefore(tempDiv.firstChild, node);
            }
            node.parentNode.removeChild(node);
        }
    },

    escapeRegExp: function(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
};

// Initialize the highlightedString object
highlightedString.executeEvents();
