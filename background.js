if (chrome.webNavigation) {
  chrome.webNavigation.onDOMContentLoaded.addListener(details => {
    chrome.scripting.executeScript({
      target: {tabId: details.tabId},
      func: function() {
        function generateLoremIpsum() {
          var words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo", "consequat"];
          // var wordCount = Math.floor(Math.random() * 10) + 1; // Génère entre 1 et 10 mots
          // var wordCount = 1;
          var loremIpsumText = "";

          // for (var i = 0; i < wordCount; i++) {
          loremIpsumText += words[Math.floor(Math.random() * words.length)] + " ";
          // }

          return loremIpsumText;
        }

        var elements = document.querySelectorAll('p, span');
        // 'p, span'
        for (var i = 0; i < elements.length; i++) {
          var wordCount = elements[i].textContent.split(" ").length; // Nombre de mots dans le paragraphe ou span
          var loremIpsumText = "";

          for (var j = 0; j < wordCount; j++) {
            loremIpsumText += generateLoremIpsum();
          }

          elements[i].textContent = loremIpsumText.trim();
        }
      }
    });
  }, {url: [{schemes: ['http', 'https']}]});
}
