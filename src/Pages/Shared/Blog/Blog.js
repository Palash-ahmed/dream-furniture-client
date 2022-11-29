import React from 'react';

const Blog = () => {
    return (
        <div className='px-20 mt-12'>
            <div className='my-4'>
                <h1 className='text-3xl font-bold my-4 underline underline-offset-8 '>Q.1 What are the different ways to manage a state in a React application?</h1>
                <p className='text-2xl, font-bold'>URL</p> <br />
                <p>We can use URL to store some data e.g. The id of the current item, being viewed Filter parameters Pagination offset and limit Sorting data Keeping such data in the URL  allows users to share deep links with others. It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change React Router is a great tool to handle routes and manage the params.</p> <br />
                <br />
                <p className='text-2xl, font-bold'>Web Storage</p> <br />
                <p >The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold my-4 underline underline-offset-8 '>Q.2 How does prototypical inheritance work?</h1>
                <p className='text-2xl, font-bold'>Prototypical</p> <br />
                <p>JavaScript inheritance is more widely known as “prototypal inheritance.” Prototypal inheritance uses the concept of prototype chaining, and it refers to the linking of objects via the prototype property. When a constructor function creates an object, it does not create it based on the constructor’s prototype; instead, it creates an object linked to the constructor’s prototype object.</p> <br />
                <br />
                <p className='text-2xl, font-bold'>Constructor Functions</p> <br />
                <p >The built-in Object function is one of JavaScript’s fundamental objects. It has a prototype property on it that points to its prototype object—Object.prototype. Object.prototype is a prototypal JavaScript object and it is at the top of the prototype chain, so its [[Prototype]] internal slot is null.

                    Object.prototype contains a bunch of internal methods that are available to all objects (like .toString() and valueOf()). All built-in objects (string, function, etc.) in JavaScript descend from the Object.prototype object, and every object’s prototype chain ultimately links back to Object.prototype.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold my-4 underline underline-offset-8 '>Q.3 What is a unit test? Why should we write unit tests?</h1>
                <p className='text-2xl, font-bold'>Unit test</p> <br />
                <p >A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p> <br />

                <p >Write unit tests</p>
                <p className='text-2xl, font-bold'>They enable you to catch bugs early in the  <br />development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
            </div>
            <div>
                <h1 className='text-3xl font-bold my-4 underline underline-offset-8 '>Q.4 React vs. Angular vs. Vue?</h1>
                <p className='text-2xl, font-bold'>Angular vs React</p> <br />
                <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                    React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p> <br />

                <p className='text-2xl, font-bold'>React vs Vue</p> <br />
                <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p> <br />

                <p className='text-2xl, font-bold'>Angular vs Vue</p> <br />
                <p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                    It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
            </div>

        </div>
    );
};

export default Blog;