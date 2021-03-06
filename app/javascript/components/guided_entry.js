const toggleQuestionsDisplay = () => {
  //DOM elements
  const guide = document.querySelector('.card_guided_entry');
  const DOMstrings = {
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next' };

    if (guide) {
      //remove class from a set of items
      const removeClasses = (elemSet, className) => {
        elemSet.forEach(elem => {
          elem.classList.remove(className);

        });

      };

      //return exect parent node of the element
      const findParent = (elem, parentClass) => {

        let currentNode = elem;

        while (!currentNode.classList.contains(parentClass)) {
          currentNode = currentNode.parentNode;
        }

        return currentNode;

      };

      //get active panel
      const getActivePanel = () => {

        let activePanel;

        DOMstrings.stepFormPanels.forEach(elem => {

          if (elem.classList.contains('js-active')) {

            activePanel = elem;

          }

        });

        return activePanel;

      };

      //open active panel (and close unactive panels)
      const setActivePanel = activePanelNum => {

        //remove active class from all the panels
        removeClasses(DOMstrings.stepFormPanels, 'js-active');

        //show active panel
        DOMstrings.stepFormPanels.forEach((elem, index) => {
          if (index === activePanelNum) {

            elem.classList.add('js-active');

            setFormHeight(elem);

          }
        });

      };

      //set form height equal to current panel height
      const formHeight = activePanel => {

        const activePanelHeight = activePanel.offsetHeight;

        DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

      };

      const setFormHeight = () => {
        const activePanel = getActivePanel();

        formHeight(activePanel);
      };

      //PREV/NEXT BTNS CLICK
      DOMstrings.stepsForm.addEventListener('click', e => {

        const eventTarget = e.target;

        //check if we clicked on `PREV` or NEXT` buttons
        if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
        {
          return;
        }

        //find active panel
        const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

        let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

        //set active step and active panel onclick
        if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
          activePanelNum--;

        } else {

          activePanelNum++;

        }

        // setActiveStep(activePanelNum);
        setActivePanel(activePanelNum);

      });

      //SETTING PROPER FORM HEIGHT ONLOAD
      window.addEventListener('load', setFormHeight, false);

      //SETTING PROPER FORM HEIGHT ONRESIZE
      window.addEventListener('resize', setFormHeight, false);
    }
  };

export { toggleQuestionsDisplay }


