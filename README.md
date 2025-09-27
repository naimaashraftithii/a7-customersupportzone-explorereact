

 - What is JSX, and why is it used?
 Solution: JSX -JavaScript XML.JSX is a syntax extension for JS that looks like HTML but works inside JavaScript.For example:
 	                       const element = <h1>Hello, Tithi !</h1>;

        Used For: Make code more readable, Allows embedding JavaScript expressions inside markup ({}).Keeps UI and logic together instead of separating HTML & JS.


 - What is the difference between State and Props?
 Solution:
      State: Data owned by the component itself,It is mutable,It define inside Component.
      Props:React components use props to communicate with others.It  passed data from parent to child.It is immutable.It define outside Component

 - What is the useState hook, and how does it work?
Solution:
       useState hook:A state variable to retain the data between renders.useState hook is a react hook that lets you add state to functional components.It works, value to current state,
       setValue to function to update it.And When setValue is called, React re-renders the component with the new state.

              function Counter() {
                 const [count, setCount] = React.useState(0);

                 return (
                    <button onClick={() => setCount(count + 1)}>
                         Clicked {count} times
                    </button>
                );
             }


 - How can you share state between components in React?
Solution:
       1.	Lift state up → Move state to the nearest common parent, then pass via props.
    	function Parent() {
3.	  const [count, setCount] = useState(0);
4.	  return (
5.	    <>
6.	      <Child1 count={count} />
7.	      <Child2 setCount={setCount} />
8.	    </>
9.	  );
10.	}
      2.Context API → For global state sharing without prop drilling.
      3.State management libraries (Redux, Zustand, Recoil, etc.) → For large apps with complex state.


 - How is event handling done in React?
Solution: In React, events are handled similar to HTML but with camelCase and functions instead of strings.Event handlers are written in camelCase (like onClick instead of onclick) and you use functions instead of strings.
 function Button() {
 function handleClick() {
  alert("Button clicked!");
 }
 return <button onClick={handleClick}>Click Me</button>;
}



  


