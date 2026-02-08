// JSX Elements
// 1. In 'app.js', write a JSX '<p>' element containing the text, 'Hello world'.
const pHelloWorld = <p>Hello world</p>;

// JSX Elements And Their Surroundings
// 1. Create a JSX <article> element. Save it in a variable named myArticle.
const myArticle = <article></article>;

// Attributes In JSX
// 1. Declare a constant named 'p1'. 
// Set 'p1' equal to a JSX '<p>' element containing the text 'foo'.
// 2. On the next line, declare a constant named 'p2'.
// Set 'p2' equal to another JSX '<p>' element containing the word 'bar'.
// 3. Give the '<p>' stored in 'p1' an 'id' attribute of 'large'.
// Give the '<p>' stored in 'p2' an 'id' attribute of 'small'.
const p1 = <p id='large'>foo</p>;
const p2 = <p id='small'>bar</p>;

// Nested JSX
// 1. Declare a new variable named 'myDiv'. Set 'myDiv' equal to a JSX '<div>' element.
// Wrap the '<div></div>' in parentheses, and use indentation and line breaks like in the examples. 
// In between the '<div></div>' tags, nest an '<h1></h1>' containing the text 'Hello world'.
const myDiv = ( // element를 중첩시킬 때는 ()로 묶어줘야 한다.
  <div>
    <h1>
      Hello world
    </h1>
  </div>
);

// JSX Outer Elements
// 1. Your friend’s blog is down! He’s asked you to fix it. 
// You immediately diagnose the problem: a JSX expression with multiple outer elements.
// Repair your friend’s broken code by wrapping the JSX in a '<div>' element.

/* Before
const blog = (
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
  </article>
);
*/

const blog = (
  <div>
  	<img src="pics/192940u73.jpg" />
  	<h1>
    	Welcome to Dan's Blog!
  	</h1>
  	<article>
    	Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
  	</article>    
  </div>
);