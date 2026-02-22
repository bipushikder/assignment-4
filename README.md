1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    ans:

 a.   getElementById --->  one id give us one element.

    b. getElementsByClassName---->  class name give us more element.

 c.querySelector ----> only one  matching element  rutrn us

    d. querySelectorAll--->  all maching elements return us to  nodelist methods.



2. How do you create and insert a new element into the DOM?

    ans:

      At first we are use document.createElement(). Then, those element of content add to appendChild() and sit to Dom.

 3. What is Event Bubbling? And how does it work?

    ans:

       Event Bubbling is a mechanism in JavaScript, event occurs on a child element, that event propagates step by step upward to its parent elements.
        In short: Event bubbling  travels from the bottom (child) up to the top (parent).

    How it works:
    Suppose, you have a parent <div> and inside it a child <button>. If you attach a click event to both elements, then you click on the child button, first the child’s event will trigger, and then the event will bubble up to the parent <div> and trigger its event.



 4. What is Event Delegation in JavaScript? Why is it useful?

    ans:
        Event Delegation: is a javascript technique, we attach parent element to event listener. And that listener child elements catch the event.

    how it works:

                Suppose, you have a <ul> with many <li> elements inside it. If you attach separate click listeners to each <li>, the code will be very large. using Event Delegation, you only need to place a single listener on the parent <ul>, and that listener will be able to catch the click events of all the <li> elements.



5.  What is the difference between preventDefault() and stopPropagation() methods?

    ans:

a. preventDefault() → Stop the browser’s default behavior (for example, clicking a link won’t redirect, submitting a form won’t reload the page).

b.stopPropagation() → Prevents the event from bubbling up to the parent element.


     


