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

// Self-Closing Tags
// In app.js, fix the broken JSX by adding slashes to all of the self-closing tags.

// 대부분의 HTML Element는 여는 태그와 닫는 태그 두 개를 사용한다.
// 하지만 <img>나 <input> 같은 일부 HTML Element는 하나의 태그만 사용한다.
// 'Self-Closing Tags(자체 닫힘 태그)'인데, HTML에서는 <br>이나 <br />이나 같지만,
// JSX에서는 <br>이라고 하면 오류다. 반드시 슬래시(/)를 포함해야한다.

/* Before
const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png">
    <article>
      My name is John Smith.
      <br>
      I am a software developer.
      <br>
      I specialize in creating React applications.
    </article>
  </div>
);
*/

const profile = (
  <div>
    <h1>John Smith</h1>
    <img src="images/john.png" />
    <article>
      My name is John Smith.
      <br />
      I am a software developer.
      <br />
      I specialize in creating React applications.
    </article>
  </div>
);

// JavaScript In Your JSX In Your JavaScript
// 1. Starting on line 7, carefully write the following code.
// What do you think will appear in the browser?

// 그대로 '2 + 3'이라고 나온다.
root.render(<h1>2 + 3</h1>);