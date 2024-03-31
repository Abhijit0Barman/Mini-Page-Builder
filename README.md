![Screenshot 2024-03-31 174711](https://github.com/Abhijit0Barman/Mini-Page-Builder/assets/113384779/c3159896-a71c-40ad-b9c2-3dc9ff4f1425)

***
# Main.jsx
This component represents a form that allows the user to edit and save label properties, such as text, position (X and Y coordinates), font size, and font weight. All these manipulations are performed by interacting with the application's local storage.

Important notes on the code:


The Modal function accepts properties setIsOpen, setRender, and render from its parent component.



The useState hooks at the beginning of the function allow the component to maintain and track state for each label property.



The handleClick function is the callback for when the save changes button and close modal button are clicked. This function creates a new object based on the current state, gets and updates the stored array of objects in local storage, and updates the two functions from its props, setIsOpen and setRender, which would affect the parent component that passed them.


***
# Sidebar.jsx
This is a functional component in React named 'Sidebar'. It receives a 'setIsOpen' function as a prop from its parent component. It uses JavaScript ES6 syntax and is likely part of a larger React application.

The primary responsibility of this component is to render a sidebar with some titled blocks and buttons.

This is a brief explanation of each part of the code:


On clicking any of the three buttons the handleModal function is invoked with respective arguments 'label', 'input', 'button'. This sets the 'isOpen' state to true via the passed in function setIsOpen from the parent. 



The handleModal function is an event handler that sets the value of a state variable isOpen to true. Making the assumption that setIsOpen is a state setter function passed as a prop, it can be inferred that its purpose is to control the visibility of a modal or some other element in the parent component.



The component returns JSX that represents the UI part of our sidebar with a section titled BLOCKS. 



Inside of the section, there are three buttons labeled 'Label', 'Input', and 'Button'. Each of these buttons, when clicked, triggers the handleModal function.



The structure and style of the component are controlled using CSS classes.



Finally, the Sidebar component is exported so that it can be imported and used in other parts of the application.
***
# Modal.jsx
The selected code is part of a React functional component called Modal. It is used to display a modal window that allows the user to edit the properties of a label on the screen.

The code imports two icons from the react-icons/rx library: RxCross2 and RiCloseLine. It also imports the useState and React functions from React.

The Modal function takes four props: setIsOpen, setRender, render, and setObjects. The setIsOpen prop is a function that sets whether the modal is open or closed. The setRender prop is a function that sets whether the component should render or not. The render prop is a boolean value that determines whether the component should render or not. The setObjects prop is a function that sets the objects that are displayed on the screen.

The Modal function contains four state variables: text, x, y, and fontSize. These variables store the values of the text, X coordinate, Y coordinate, and font size that the user enters in the modal.

The Modal function also contains a handleClick function that is called when the close button is clicked. This function retrieves the existing objects from local storage, adds the new object to the array, and saves the updated array back to local storage. It then sets the setIsOpen state to false, sets the setRender state to true, and calls the setObjects function with the updated array.

The Modal function returns a div element with a class of p-10 absolute mt-[140px] mx-[600px] border bg-white h-[500px] w-[400px] flex-col. This div element serves as the modal window.

Within the div element, there is a div element with a class of font-bold flex. This div element contains an h3 element that displays the text "Edit Label", and an icon that represents the close button. The close button has a class of RxCross2 and an onClick event that calls the handleClick function.

Next, there is a div element with a class of mt-4. This div element contains an input element with a type of "text" and a placeholder of "This is a div". This input element is used to enter the text that will be displayed on the screen.

There are two more div elements with classes of mt-4. These div elements contain input elements with types of "text" that are used to enter the X and Y coordinates of the label, and an input element with a type of "text" that is used to enter the font size and font weight of the label.

There is also a div element with a class of mt-10 bg-blue-800 p-3 text-white rounded-lg text-center w-40. This div element contains a button with the text "Save Changes" and an onClick event that calls the handleClick function.

Overall, the selected code is part of a functional component that is used to display a modal window that allows the user to edit the properties of a label on the screen
