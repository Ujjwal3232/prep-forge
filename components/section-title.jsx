 import React from 'react';
 import { cn } from '@/lib/utils';
 
 export const SectionTitle = ({ children , className}) => {
    return (
        
            <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold ", className)}>
                {children}
            </h2>
        
    );
 };
 
 /*{ children , className} this have following meaning in small bullets:
     -this is a destructuring assignment in JavaScript, which allows you to extract values from objects or arrays and assign them to variables in a more concise way.
     -In this case, it is used to extract the children and className properties from the props object that is passed to the SectionTitle component.
     -children refers to the content that is nested inside the SectionTitle component when it is used in JSX. It can be any valid React element or text.
     -className is a prop that allows you to pass additional CSS classes to the component for styling purposes. It can be a string containing one or more class names.
     -By using destructuring assignment, you can directly access these properties without having to reference props.children or props.className, making the code cleaner and easier to read.
 */
