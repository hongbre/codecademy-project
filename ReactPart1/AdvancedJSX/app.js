// class vs className
// 1. On line 7, declare a new constant named 'myDiv'. 
// Set 'myDiv' equal to a JSX '<div>' element.
// In between the '<div></div>' tags, write the text 'I AM A BIG DIV'.
// Give your '<div>' element the following attribute:
// 2. Underneath your '<div>' element, call 'root.render()' with 'myDiv' as an argument.
// If your rendered '<div>' element has a class of "big", then it should look big in the browser!

// JSX는 JavaScript로 변환되는데, 'class'는 JavaScript에서 예약어이기 때문에 사용할 수 없다.
// 따라서 html의 'class' 속성은 'className'으로 작성해야한다.
const myDiv = <div className="big">I AM A BIG DIV</div>;

root.render(myDiv);