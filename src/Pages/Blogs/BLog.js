import React from 'react';

const BLog = () => {
    return (
        <div>

            <div className='mt-5 border-4 p-5'>
            <h1 className="text-2xl mb-2">How will you improve the performance of a React Application?</h1>
            <p>There are lot of way that I can improve my react application performance. Five important ways to optimize my performance of a React application. Firstly Understanding how React updates its UI, secondly Profiling the React app to understand where bottlenecks are.</p>
            <p>React performance optimization techniques are:</p>
            <li>Keeping component state local where necessary</li>
            <li>Memoizing React components to prevent unnecessary re-renders</li>
            <li>Using React.memo()</li>
            <li>Using the useCallback Hook</li>
            <li>Using the useMemo Hook</li>
            </div>

            <div className='mt-5 border-4 p-5'>
            <h1 className="text-2xl mb-2">What are the different ways to manage a state in a React application?</h1>
            <p>There are four kinds of way that I can manage state in React application. This are: </p>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
            </div>

            <div className='mt-5 border-4 p-5'>
            <h1 className="text-2xl mb-2">How does prototypical inheritance work?</h1>
            <p>In JavaScript, objects inherit properties from other objects the prototypes. That's the idea of prototypal inheritance. We use a JavaScript prototype to add new properties and methods to an existing object constructor. All JavaScript objects inherit properties and methods from a prototype:</p>
            <li>Date</li>
            <li>Array</li>
            <li>Player</li>
            </div>

            <div className='mt-5 border-4 p-5'>
            <h1 className="text-2xl mb-2">Why you do not set the state directly in React.</h1>
            <p>We should not set the state directly in React because:</p>
            <li>If we set state directly calling the setState() may just replace the update we made</li>
            <li>We will lose control of the sate across al components</li>
            <li>After we update the state directly, it does not change the state immediately. Perhaps It creates a pending state. And After calling it this method will return only the present value.</li>
            </div>

            <div className='mt-5 border-4 p-5'>
            <h1 className="text-2xl mb-2">What is a unit test? Why should write unit tests?</h1>
            <p>Unit tests, a type of functional test. Unit testing is a powerful tool for software quality. We should write unit test because its:</p>
            <li>Increase code readability</li>
            <li>Improve deployment</li>
            <li>Enable to reuse code</li>
            <li>Decrease defects</li>
            <li>Expose early in the development lifecycle</li>
            </div>

        </div>

    );
};

export default BLog;