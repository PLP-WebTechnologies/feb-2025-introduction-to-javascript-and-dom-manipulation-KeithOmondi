// Change text content
function changeText() {
    const text = document.getElementById('intro-text');
    text.textContent = 'The text has been successfully changed!';
  }
  
  // Modify styles dynamically
  function changeStyle() {
    const element = document.getElementById('style-target');
    element.style.color = 'white';
    element.style.backgroundColor = '#3498db';
    element.style.borderRadius = '8px';
    element.style.fontWeight = 'bold';
  }
  
  // Add a new paragraph
  function addElement() {
    const container = document.getElementById('element-container');
    const newPara = document.createElement('p');
    newPara.textContent = '🎉 A new element was added!';
    newPara.id = 'new-paragraph';
    container.appendChild(newPara);
  }
  
  // Remove the new paragraph
  function removeElement() {
    const newPara = document.getElementById('new-paragraph');
    if (newPara) {
      newPara.remove();
    }
  }
  