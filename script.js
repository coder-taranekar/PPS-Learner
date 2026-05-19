// --- DATA FOR PRACTICALS ---
// We will load Practicals 1, 2, 3 first to ensure the app works smoothly. 
// I will add the rest in the next step!

const practicalData = [
  {
    id: 1,
    title: "Practical 1: Basic C Programs & Compilers",
    aim: "To learn about how to run basic C programs on windows, Linux and online platforms.",
    co: "CO1, CO2",
    concepts: [
      {
        title: "What is C Programming?",
        icon: "🧠",
        academic: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
        toddler: "Imagine you have a robot friend. C programming is just learning the specific words and rules to talk to your robot so it can do chores for you! A 'compiler' is like a translator that turns your English-like words into robot language (0s and 1s)."
      },
      {
        title: "printf() and scanf()",
        icon: "🗣️",
        academic: "printf() is a formatted output function from <stdio.h> used to write data to the standard output. scanf() is a formatted input function used to read data from the standard input stream.",
        toddler: "When your robot wants to speak to you and show you something on the screen, it uses <code>printf()</code>. When it wants to listen to you and take a number you typed on the keyboard, it uses <code>scanf()</code>."
      }
    ],
    vivaQuestions: [
      { q: "Who developed the C language and when?", a: "C was developed by Dennis Ritchie at Bell Labs in 1972." },
      { q: "What is the use of #include <stdio.h>?", a: "It includes the Standard Input Output header file, which contains declarations for functions like printf() and scanf()." },
      { q: "What is a compiler?", a: "A compiler translates the entire source code written in a high-level language into machine code (0s and 1s) before execution." }
    ],
    programs: [
      {
        id: "1.2",
        desc: "Write a program to display 'Welcome to Ganpat University - U. V. Patel College of Engineering'",
        code: `#include <stdio.h>\n\nint main() {\n    // printf is how we make the computer talk!\n    printf("Welcome to Ganpat University - U. V. Patel College of Engineering\\n");\n    return 0;\n}`,
        output: `Welcome to Ganpat University - U. V. Patel College of Engineering`
      },
      {
        id: "1.3",
        desc: "Print 'Hello World' inside a star box",
        code: `#include <stdio.h>\n\nint main() {\n    printf("**************\\n");\n    printf("* Hello World*\\n");\n    printf("**************\\n");\n    return 0;\n}`,
        output: `**************\n* Hello World*\n**************`
      },
      {
        id: "1.4",
        desc: "Take two input values a and b from keyboard and print Add, Sub, Mul, Div, Mod",
        code: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Ask the user for numbers\n    printf("Enter value of a: ");\n    scanf("%d", &a);\n    printf("Enter value of b: ");\n    scanf("%d", &b);\n\n    // Do the math and print it!\n    printf("a + b = %d\\n", a + b);\n    printf("a - b = %d\\n", a - b);\n    printf("a %% b = %d\\n", a % b);\n    printf("a * b = %d\\n", a * b);\n    printf("a / b = %d\\n", a / b);\n\n    return 0;\n}`,
        output: `Enter value of a: 10\nEnter value of b: 5\na + b = 15\na - b = 5\na % b = 0\na * b = 50\na / b = 2`
      }
    ],
    quiz: {
      question: "Which function does the computer use to 'speak' or print text on the screen?",
      options: [
        { text: "scanf()", isCorrect: false },
        { text: "printf()", isCorrect: true },
        { text: "main()", isCorrect: false }
      ]
    }
  },
  {
    id: 2,
    title: "Practical 2: Data Types, Variables & Operators",
    aim: "To study and implementation of Data type, Variable, Constant, scanf() function & #define directive.",
    co: "CO1, CO2",
    concepts: [
      {
        title: "Variables & Data Types",
        icon: "📦",
        academic: "A variable is a named memory location used to store data. A Data Type defines the size and type of values that can be stored in a variable (e.g., int, float, char).",
        toddler: "A variable is just a magical box where you store things. A 'Data Type' tells the box what kind of thing it can hold. \n- <code>int</code> box holds whole numbers like 5.\n- <code>float</code> box holds numbers with dots like 5.5.\n- <code>char</code> box holds single letters like 'A'."
      },
      {
        title: "Operators",
        icon: "➕",
        academic: "An operator is a symbol that tells the compiler to perform specific mathematical or logical functions. C has arithmetic, relational, logical, bitwise, and assignment operators.",
        toddler: "Operators are action words for math! \n- Arithmetic: +, -, *, / \n- Modulo (%): This is a special one! It gives you the REMAINDER of a division. So 5 % 2 gives you 1 (because 5 divided by 2 is 4, remainder 1). \n- Relational: > (greater than), < (less than), == (is exactly equal to)."
      }
    ],
    vivaQuestions: [
      { q: "What is the difference between = and == ?", a: "'=' is an assignment operator used to assign a value to a variable. '==' is a relational operator used to compare two values for equality." },
      { q: "How many bytes does an 'int' and 'char' take in a 32-bit compiler?", a: "Typically, an 'int' takes 4 bytes and a 'char' takes 1 byte." },
      { q: "What is a constant in C?", a: "A constant is a value that cannot be altered by the program during normal execution. It can be defined using the 'const' keyword or '#define' preprocessor directive." }
    ],
    programs: [
      {
        id: "2.2",
        desc: "Swap values of two variables without using a third variable.",
        code: `#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    printf("Before swap: a=%d b=%d\\n", a, b);\n\n    // Magic math trick to swap without a 3rd box!\n    a = a + b; // a becomes 30\n    b = a - b; // b becomes 30 - 20 = 10\n    a = a - b; // a becomes 30 - 10 = 20\n\n    printf("After swap: a=%d b=%d\\n", a, b);\n    return 0;\n}`,
        output: `Before swap: a=10 b=20\nAfter swap: a=20 b=10`
      },
      {
        id: "2.4",
        desc: "Convert Celsius to Fahrenheit",
        code: `#include <stdio.h>\n#define T 32 // This is a constant! It never changes.\n\nint main() {\n    const float t = 1.8; // Another way to make a constant\n    float c, f;\n\n    printf("Enter Celsius: ");\n    scanf("%f", &c);\n\n    f = (c * t) + T;\n    printf("Fahrenheit: %f\\n", f);\n    \n    return 0;\n}`,
        output: `Enter Celsius: 0\nFahrenheit: 32.000000`
      }
    ],
    quiz: {
      question: "If we have 'int a = 5; int b = 2;', what is the answer to 'a % b'?",
      options: [
        { text: "2", isCorrect: false },
        { text: "2.5", isCorrect: false },
        { text: "1", isCorrect: true }
      ]
    }
  },
  {
    id: 3,
    title: "Practical 3: Type Casting & Precedence",
    aim: "To study about type casting, operator precedence, tricky codes for various operators.",
    co: "CO1",
    concepts: [
      {
        title: "Operator Precedence",
        icon: "🚦",
        academic: "Operator precedence dictates the order in which operators are evaluated in an expression. Associativity determines the evaluation order of operators with the same precedence (usually left-to-right).",
        toddler: "Precedence is like the traffic light for math. It tells the computer which math to do FIRST. Multiplication (*) and Division (/) always go before Addition (+) and Subtraction (-). If they have a tie, they go from left to right!"
      },
      {
        title: "Type Casting",
        icon: "🎭",
        academic: "Type casting is a way to convert a variable from one data type to another data type. It can be implicit (done automatically by the compiler) or explicit (done by the programmer using a cast operator).",
        toddler: "Type casting is like dressing up! Sometimes an 'int' (whole number) needs to dress up as a 'float' (decimal number) so it can do math properly without losing the pieces after the dot."
      }
    ],
    vivaQuestions: [
      { q: "What is explicit type casting?", a: "Explicit type casting is when the programmer forcefully converts a variable's data type, syntax: (data_type)expression; For example: float x = (float)5 / 2;" },
      { q: "Which operator has the highest precedence in C?", a: "The parenthesis () operator has the highest precedence, followed by postfix increment/decrement." },
      { q: "What is the difference between / and % operators?", a: "The '/' operator performs division and returns the quotient, while the '%' operator performs division and returns the remainder. '%' only works on integer types." }
    ],
    programs: [
      {
        id: "3.3(A)",
        desc: "Tricky Code: x = 3 * 4 % 5;",
        code: `#include <stdio.h>\n\nvoid main() {\n    int x;\n    // * and % have same priority, so go left to right\n    // 3 * 4 = 12\n    // 12 % 5 = 2 (remainder of 12 / 5)\n    x = 3 * 4 % 5;\n    printf("x=%d", x);\n}`,
        output: `x=2`
      },
      {
        id: "3.3(I)",
        desc: "Tricky Code: z = x == 5 || y != 4;",
        code: `#include <stdio.h>\n\nvoid main() {\n    int x = 11, y = 6, z;\n    // || means OR. If either side is TRUE (1), the answer is TRUE (1).\n    // x == 5 is false (0)\n    // y != 4 is true (1)\n    // 0 OR 1 = 1\n    z = x == 5 || y != 4;\n    printf("z=%d", z);\n}`,
        output: `z=1`
      }
    ],
    quiz: {
      question: "In the math equation '2 + 3 * 4', what does the computer calculate first?",
      options: [
        { text: "2 + 3", isCorrect: false },
        { text: "3 * 4", isCorrect: true },
        { text: "It goes left to right randomly", isCorrect: false }
      ]
    }
  },
  {
    id: 4,
    title: "Practical 4: Branching Statements",
    aim: "To study about branching statements like if, if else, switch and keywords break, goto.",
    co: "CO2",
    concepts: [
      {
        title: "If & Else",
        icon: "🔀",
        academic: "The if-else statement is a conditional branching statement used to execute a block of code based on whether a specified logical condition evaluates to true or false.",
        toddler: "Imagine you're at a crossroad. IF it's raining, you take an umbrella. ELSE, you wear sunglasses. The computer does the same! It checks a condition (is it true?), and if yes, it does one thing. If no, it does another."
      },
      {
        title: "Switch Case",
        icon: "🕹️",
        academic: "A switch statement allows a variable to be tested for equality against a list of values (cases). Each case is followed by the value to be compared to and a colon.",
        toddler: "Switch is like pushing buttons on a vending machine. You push button 1, you get chips. Button 2, you get soda. You give the computer a value, and it matches it to a specific 'case' and runs that code!"
      }
    ],
    vivaQuestions: [
      { q: "What is the difference between if-else and switch-case?", a: "if-else can check ranges (x > 10) and multiple conditions, whereas switch can only check for equality of integer or character values." },
      { q: "What happens if you forget to write 'break' in a switch case?", a: "It causes 'fall-through', meaning the program will continue executing all subsequent cases until it hits a break or the switch ends." },
      { q: "What is the use of the 'goto' statement?", a: "The goto statement allows for an unconditional jump to another labeled part of the program, though its use is highly discouraged as it makes code hard to read (spaghetti code)." }
    ],
    programs: [
      {
        id: "4.2",
        desc: "Find if number is Negative, Positive or Zero.",
        code: `#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    if (num > 0) {\n        printf("It is POSITIVE!\\n");\n    } else if (num < 0) {\n        printf("It is NEGATIVE!\\n");\n    } else {\n        printf("It is ZERO!\\n");\n    }\n    return 0;\n}`,
        output: `Enter a number: -5\nIt is NEGATIVE!`
      },
      {
        id: "4.4",
        desc: "Check case of entered character",
        code: `#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter any character: ");\n    scanf(" %c", &ch);\n\n    if (ch >= 'a' && ch <= 'z') {\n        printf("Entered character is in lowercase\\n");\n    } else if (ch >= 'A' && ch <= 'Z') {\n        printf("Entered character is in uppercase\\n");\n    } else if (ch >= '0' && ch <= '9') {\n        printf("Entered character is digit\\n");\n    } else {\n        printf("Not an alphanumeric character\\n");\n    }\n    return 0;\n}`,
        output: `Enter any character: A\nEntered character is in uppercase`
      }
    ],
    quiz: {
      question: "If we have 'int money = 10;' and 'if (money > 5) { print('Buy Ice cream'); }', will the computer buy ice cream?",
      options: [
        { text: "Yes, because 10 is bigger than 5!", isCorrect: true },
        { text: "No, 10 is smaller than 5.", isCorrect: false },
        { text: "It will crash.", isCorrect: false }
      ]
    }
  },
  {
    id: 5,
    title: "Practical 5: Looping Structures",
    aim: "To study about looping structures like while, for, do-while, break, continue.",
    co: "CO2",
    concepts: [
      {
        title: "Loops (For, While)",
        icon: "🔁",
        academic: "Loops are iteration statements that execute a block of code repeatedly as long as a specified condition remains true.",
        toddler: "A loop is like a hamster on a wheel. It keeps running in circles doing the same thing over and over until you tell it to stop! \n- 'for' loop is when you know exactly how many times to run (like doing 10 jumping jacks). \n- 'while' loop is when you keep running until you get tired (a condition becomes false)."
      },
      {
        title: "Break and Continue",
        icon: "🛑",
        academic: "The 'break' statement terminates the loop completely. The 'continue' statement skips the current iteration and forces the loop to proceed to the next iteration.",
        toddler: "BREAK means 'Stop the hamster wheel right now and jump off!'. CONTINUE means 'Skip this jump, but keep running on the wheel for the next one!'."
      }
    ],
    vivaQuestions: [
      { q: "What is an infinite loop?", a: "An infinite loop is a loop whose condition never evaluates to false, causing the program to run endlessly." },
      { q: "What is the difference between 'while' and 'do-while' loops?", a: "A 'while' loop checks the condition before executing the block (entry-controlled). A 'do-while' loop executes the block first, then checks the condition, guaranteeing at least one execution (exit-controlled)." },
      { q: "Can we use 'continue' inside a switch statement?", a: "No, 'continue' is only valid inside loops (for, while, do-while). 'break' can be used in both loops and switch statements." }
    ],
    programs: [
      {
        id: "5.4",
        desc: "Calculate sum of all digits of a number.",
        code: `#include <stdio.h>\n\nint main() {\n    int num, sum = 0, remainder;\n    printf("Enter any number: ");\n    scanf("%d", &num);\n\n    while (num != 0) {\n        // Get the last digit\n        remainder = num % 10;\n        // Add it to our sum\n        sum = sum + remainder;\n        // Chop off the last digit\n        num = num / 10;\n    }\n    printf("Sum of digits = %d\\n", sum);\n    return 0;\n}`,
        output: `Enter any number: 456\nSum of digits = 15`
      },
      {
        id: "5.5",
        desc: "Check whether entered number is prime or not.",
        code: `#include <stdio.h>\n\nint main() {\n    int n, i, flag = 0;\n    printf("Enter a positive integer: ");\n    scanf("%d", &n);\n\n    if (n == 0 || n == 1) flag = 1;\n\n    // Try dividing by every number from 2 up to n/2\n    for (i = 2; i <= n / 2; ++i) {\n        if (n % i == 0) {\n            flag = 1;\n            break; // Stop the loop! We found a divisor.\n        }\n    }\n\n    if (flag == 0) printf("%d is a prime number.\\n", n);\n    else printf("%d is not a prime number.\\n", n);\n\n    return 0;\n}`,
        output: `Enter a positive integer: 7\n7 is a prime number.`
      }
    ],
    quiz: {
      question: "Which keyword is used to instantly escape and jump out of a loop?",
      options: [
        { text: "escape", isCorrect: false },
        { text: "continue", isCorrect: false },
        { text: "break", isCorrect: true }
      ]
    }
  },
  {
    id: 6,
    title: "Practical 6: Arrays (1D, 2D)",
    aim: "To study & implement arrays (one and multidimensional).",
    co: "CO3",
    concepts: [
      {
        title: "What is an Array?",
        icon: "🚂",
        academic: "An array is a collection of variables of the same data type that are referenced by a common name and stored in contiguous memory locations.",
        toddler: "Imagine a train with lots of carriages! Instead of having 10 separate toy boxes, an array is one long train where each carriage holds a toy (or a number). You use the carriage number (index) to find your toy!"
      },
      {
        title: "2D Arrays (Matrices)",
        icon: "🏢",
        academic: "A 2D array is an array of arrays, representing a tabular or matrix format consisting of rows and columns.",
        toddler: "A 1D array is a train. A 2D array is like an apartment building! You need two numbers to find someone: the floor number (row) and the room number (column)."
      }
    ],
    vivaQuestions: [
      { q: "What is the starting index of an array in C?", a: "The starting index (or lower bound) of an array in C is always 0." },
      { q: "How is memory allocated for an array?", a: "Memory for an array is allocated sequentially in contiguous blocks." },
      { q: "What happens if you try to access an array element out of bounds?", a: "C does not perform bounds checking. Accessing out-of-bounds elements will lead to undefined behavior, often reading garbage values or causing a segmentation fault." }
    ],
    programs: [
      {
        id: "6.1",
        desc: "Sum and average of any 10-no. using 1-D Array.",
        code: `#include <stdio.h>\n\nint main() {\n    int arr[10];\n    int i, sum = 0;\n    float avg;\n\n    printf("Enter 10 numbers:\\n");\n    for(i=0; i<10; i++) {\n        scanf("%d", &arr[i]);\n        sum = sum + arr[i];\n    }\n\n    avg = sum / 10.0;\n    printf("Sum = %d\\n", sum);\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}`,
        output: `Enter 10 numbers:\n1 2 3 4 5 6 7 8 9 10\nSum = 55\nAverage = 5.50`
      },
      {
        id: "6.3",
        desc: "Find maximum element from 1D array.",
        code: `#include <stdio.h>\n\nint main() {\n    int arr[5] = {12, 45, 2, 78, 34};\n    int i, max;\n\n    // Assume the first train carriage has the biggest number\n    max = arr[0];\n\n    // Check the other carriages\n    for(i=1; i<5; i++) {\n        if(arr[i] > max) {\n            max = arr[i]; // Found a bigger one!\n        }\n    }\n    \n    printf("Maximum element is: %d\\n", max);\n    return 0;\n}`,
        output: `Maximum element is: 78`
      }
    ],
    quiz: {
      question: "If I have an array 'int toys[5]', what is the carriage number (index) of the FIRST toy?",
      options: [
        { text: "1", isCorrect: false },
        { text: "0", isCorrect: true },
        { text: "A", isCorrect: false }
      ]
    }
  },
  {
    id: 7,
    title: "Practical 7: User Defined Functions",
    aim: "To study & implement concepts of user defined functions and parameter passing.",
    co: "CO3, CO6",
    concepts: [
      {
        title: "Functions",
        icon: "🛠️",
        academic: "A function is a self-contained block of code that performs a specific task. Functions provide modularity and code reusability.",
        toddler: "A function is like a special tool you build. If you need to make 10 sandwiches, instead of writing 'get bread, get jam' 10 times, you build a 'MakeSandwich()' robot tool. Then you just say 'MakeSandwich()' whenever you are hungry!"
      },
      {
        title: "Recursion",
        icon: "🪞",
        academic: "Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem, until it reaches a base case.",
        toddler: "Recursion is when a function looks in a mirror and calls ITSELF! It keeps asking itself for help until it reaches a super simple stopping point."
      }
    ],
    vivaQuestions: [
      { q: "What are the three aspects of a function?", a: "1) Function Declaration (Prototype), 2) Function Definition (the actual code), and 3) Function Call." },
      { q: "What is a Base Case in recursion?", a: "A base case is the condition that stops the recursive function from calling itself infinitely. Without it, the program will crash with a stack overflow." },
      { q: "What is the difference between Call by Value and Call by Reference?", a: "In Call by Value, a copy of the data is passed; changes inside the function don't affect the original variable. In Call by Reference, the memory address is passed, so changes do affect the original variable." }
    ],
    programs: [
      {
        id: "7.1",
        desc: "Function Prototype, Definition, and Calling (Prime check).",
        code: `#include <stdio.h>\n\n// 1. Prototype (Telling the computer: "Hey, a tool named isPrime is coming!")\nint isPrime(int n);\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    // 3. Calling the tool\n    if(isPrime(num)) {\n        printf("%d is Prime!\\n", num);\n    } else {\n        printf("%d is NOT Prime!\\n", num);\n    }\n    return 0;\n}\n\n// 2. Definition (Actually building the tool)\nint isPrime(int n) {\n    if (n <= 1) return 0;\n    for (int i = 2; i <= n/2; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}`,
        output: `Enter a number: 11\n11 is Prime!`
      },
      {
        id: "7.4",
        desc: "Find Factorial using Recursion",
        code: `#include <stdio.h>\n\n// The tool that calls itself!\nint factorial(int n) {\n    // The stopping point\n    if (n == 0 || n == 1) {\n        return 1;\n    }\n    // Calling itself!\n    return n * factorial(n - 1);\n}\n\nint main() {\n    int num = 5;\n    printf("Factorial of %d is %d\\n", num, factorial(num));\n    return 0;\n}`,
        output: `Factorial of 5 is 120`
      }
    ],
    quiz: {
      question: "What are the 3 main steps to create your own function?",
      options: [
        { text: "Prototype, Calling, Output", isCorrect: false },
        { text: "Prototype, Definition, Calling", isCorrect: true },
        { text: "Writing, Erasing, Running", isCorrect: false }
      ]
    }
  },
  {
    id: 8,
    title: "Practical 8: Strings",
    aim: "To study about strings and its Library Functions.",
    co: "CO3",
    concepts: [
      {
        title: "What is a String?",
        icon: "🧶",
        academic: "A string in C is a one-dimensional array of characters which is terminated by a null character '\\0'.",
        toddler: "A string is just an Array (a train) where every carriage holds exactly one letter, and the very last carriage holds a special invisible ghost '\\0' to say 'The word is finished!'."
      },
      {
        title: "String Functions",
        icon: "🧰",
        academic: "The <string.h> library provides standard functions for string manipulation, such as strlen() for length, strcpy() for copying, and strcat() for concatenation.",
        toddler: "C gives us magic tools for words! \n- strlen(): counts letters \n- strcpy(): copy-pastes a word \n- strcat(): glues two words together \n- strrev(): writes the word backwards!"
      }
    ],
    vivaQuestions: [
      { q: "What is the role of the null character '\\0'?", a: "It marks the end of a string in memory so that string-handling functions know where to stop reading." },
      { q: "What is the difference between char str[] = 'A' and char str = 'A'?", a: "The first creates an array (string) containing 'A' and '\\0' (2 bytes). The second creates a single character variable holding 'A' (1 byte)." },
      { q: "Which function is used to compare two strings?", a: "strcmp(str1, str2). It returns 0 if they are identical, and a non-zero integer if they are different." }
    ],
    programs: [
      {
        id: "8.1",
        desc: "Use strlen(), strcpy(), strcat(), strrev()",
        code: `#include <stdio.h>\n#include <string.h> // Magic string tools!\n\nint main() {\n    char word[20] = "Hello";\n    char word2[20];\n\n    printf("Length of Hello is: %lu\\n", strlen(word));\n\n    strcpy(word2, word);\n    printf("Copied word: %s\\n", word2);\n\n    strcat(word, " World");\n    printf("Glued word: %s\\n", word);\n\n    strrev(word);\n    printf("Backwards: %s\\n", word);\n\n    return 0;\n}`,
        output: `Length of Hello is: 5\nCopied word: Hello\nGlued word: Hello World\nBackwards: dlroW olleH`
      }
    ],
    quiz: {
      question: "Which magic tool glues two strings together?",
      options: [
        { text: "strlen()", isCorrect: false },
        { text: "strcpy()", isCorrect: false },
        { text: "strcat()", isCorrect: true }
      ]
    }
  },
  {
    id: 9,
    title: "Practical 9: Structures, Unions & Pointers",
    co: "CO4, CO5",
    aim: "Structure and union concept. Pointers, Call by value/reference, malloc.",
    concepts: [
      {
        title: "Pointers",
        icon: "👉",
        academic: "A pointer is a variable whose value is the memory address of another variable. Pointers allow for dynamic memory allocation and efficient array/structure manipulation.",
        toddler: "A pointer is a variable that doesn't hold a number... it holds a TREASURE MAP! It holds the 'address' of where another variable lives in the computer's memory."
      },
      {
        title: "Structures",
        icon: "🎒",
        academic: "A structure is a user-defined data type in C that allows combining data items of different kinds (data types) under a single name.",
        toddler: "An array holds many of the SAME toys. A Structure is like a backpack! You can put a book (string), a pencil (int), and an apple (float) all inside one backpack and give the backpack a name!"
      }
    ],
    vivaQuestions: [
      { q: "What is the difference between a Structure and a Union?", a: "In a structure, memory is allocated for all members individually. In a union, memory is allocated only for the largest member, and all members share that same memory space." },
      { q: "What does the malloc() function do?", a: "malloc() stands for memory allocation. It dynamically allocates a single large block of memory of the specified size and returns a pointer to it." },
      { q: "What is the size of a pointer variable?", a: "The size of a pointer depends on the system architecture (e.g., 4 bytes on a 32-bit system, 8 bytes on a 64-bit system), regardless of the data type it points to." }
    ],
    programs: [
      {
        id: "9.1",
        desc: "Structure to read student data",
        code: `#include <stdio.h>\n\n// Creating the Backpack design\nstruct Student {\n    int roll;\n    char name[50];\n    float marks1;\n    float marks2;\n};\n\nint main() {\n    // Making a backpack named 's1'\n    struct Student s1;\n\n    s1.roll = 101;\n    s1.marks1 = 85.5;\n    s1.marks2 = 90.0;\n    \n    float total = s1.marks1 + s1.marks2;\n    float percent = (total / 200.0) * 100;\n\n    printf("Roll: %d\\n", s1.roll);\n    printf("Total: %.2f\\n", total);\n    printf("Percent: %.2f%%\\n", percent);\n\n    return 0;\n}`,
        output: `Roll: 101\nTotal: 175.50\nPercent: 87.75%`
      },
      {
        id: "9.5",
        desc: "Change value using pointer",
        code: `#include <stdio.h>\n\nint main() {\n    int box = 10;\n    // pointer map pointing to the box's address (&)\n    int *map = &box;\n\n    printf("Box originally had: %d\\n", box);\n\n    // Go to where map points (*) and change it!\n    *map = 99;\n\n    printf("Box magically changed to: %d\\n", box);\n    return 0;\n}`,
        output: `Box originally had: 10\nBox magically changed to: 99`
      }
    ],
    quiz: {
      question: "If a variable holds an 'address' to another variable, what is it called?",
      options: [
        { text: "A Function", isCorrect: false },
        { text: "A Pointer", isCorrect: true },
        { text: "A Structure", isCorrect: false }
      ]
    }
  },
  {
    id: 10,
    title: "Practical 10: File Handling",
    co: "CO5, CO6",
    aim: "Concepts to learn: file handling and Management.",
    concepts: [
      {
        title: "File Handling",
        icon: "📁",
        academic: "File handling allows data to be permanently stored on a secondary storage device. It involves operations like opening, reading, writing, and closing files using functions like fopen(), fprintf(), and fclose().",
        toddler: "Usually, when you close a program, all your data vanishes. Poof! File handling is like writing on a piece of paper and saving it in a real folder on your computer so it's still there tomorrow!"
      }
    ],
    vivaQuestions: [
      { q: "What are the different modes to open a file in C?", a: "Common modes are 'r' (read), 'w' (write, overwrites existing), 'a' (append, adds to end), 'r+' (read/update), and 'w+' (write/update)." },
      { q: "What does fopen() return if a file cannot be opened?", a: "It returns a NULL pointer." },
      { q: "Why is it important to use fclose()?", a: "fclose() flushes the buffers and releases the memory/file-handlers back to the operating system. Not closing files can lead to memory leaks and corrupted data." }
    ],
    programs: [
      {
        id: "10.1",
        desc: "Create a file and write to it.",
        code: `#include <stdio.h>\n\nint main() {\n    // A pointer specially for files\n    FILE *myFile;\n\n    // Open a file named 'diary.txt' in 'w' (write) mode\n    myFile = fopen("diary.txt", "w");\n\n    if (myFile == NULL) {\n        printf("Uh oh, file error!\\n");\n        return 1;\n    }\n\n    // Write some words in it\n    fprintf(myFile, "Hello File! This is my secret diary.\\n");\n\n    // Always close the file when done!\n    fclose(myFile);\n    \n    printf("Successfully wrote to diary.txt!\\n");\n    return 0;\n}`,
        output: `Successfully wrote to diary.txt!`
      }
    ],
    quiz: {
      question: "Which function do we use to open a file in C?",
      options: [
        { text: "open()", isCorrect: false },
        { text: "fopen()", isCorrect: true },
        { text: "file()", isCorrect: false }
      ]
    }
  }
];

// --- APP LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const homePracticalGrid = document.getElementById('home-practical-grid');
  const viewHome = document.getElementById('view-home');
  const viewPractical = document.getElementById('view-practical');
  const backToHome = document.getElementById('back-to-home');

  // Toggle mobile sidebar
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Render Sidebar and Home Grid
  practicalData.forEach((prac, index) => {
    // Sidebar link
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = `<a class="nav-link" data-id="${prac.id}">P${prac.id}: ${prac.title.split(':')[0]}</a>`;
    navMenu.appendChild(li);

    // Home Grid Card
    const card = document.createElement('div');
    card.className = 'practical-card';
    card.innerHTML = `
      <h3>${prac.title}</h3>
      <p class="desc">${prac.aim}</p>
      <div style="margin-top:1rem;">
        <span class="badge">${prac.co}</span>
      </div>
    `;
    card.addEventListener('click', () => openPractical(prac.id));
    homePracticalGrid.appendChild(card);
  });

  // Handle Navigation clicks
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
      
      const targetId = e.target.getAttribute('data-id');
      if(targetId) {
        openPractical(parseInt(targetId));
      } else {
        // Go home
        viewPractical.classList.remove('active');
        viewHome.classList.add('active');
      }
      if(window.innerWidth <= 768) sidebar.classList.remove('open');
    });
  });

  backToHome.addEventListener('click', () => {
    viewPractical.classList.remove('active');
    viewHome.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[data-target="home"]').classList.add('active');
  });

  function openPractical(id) {
    const prac = practicalData.find(p => p.id === id);
    if(!prac) return;

    viewHome.classList.remove('active');
    viewPractical.classList.add('active');

    // Render Title Area
    document.getElementById('practical-content-container').innerHTML = `
      <h1>${prac.title}</h1>
      <p><strong>Aim:</strong> ${prac.aim}</p>
      <div style="margin-bottom: 2rem;"><span class="badge">${prac.co}</span></div>
    `;

    // Render Concepts (Dual Pane)
    let conceptHTML = '<h2>Concepts Explained 📚</h2>';
    prac.concepts.forEach(c => {
      conceptHTML += `
        <div class="concept-card">
          <div class="concept-header">
            <span class="concept-icon">${c.icon}</span>
            <h3 class="concept-title">${c.title}</h3>
          </div>
          <div class="concept-body">
            <div class="academic-def">
              <div class="def-title">🎓 University Definition</div>
              ${c.academic}
            </div>
            <div class="toddler-def">
              <div class="def-title">🧸 Simply Put</div>
              ${c.toddler}
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById('concepts-container').innerHTML = conceptHTML;

    // Render Codes (Using Prism.js)
    let codeHTML = '<h2>Code Solutions 💻</h2>';
    prac.programs.forEach(prog => {
      codeHTML += `
        <div style="margin-bottom: 2rem;">
          <p><strong>${prog.id}:</strong> ${prog.desc}</p>
          <div class="code-wrapper">
            <div class="code-header">
              <span class="code-lang">C</span>
              <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${prog.code.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\`)">📋 Copy</button>
            </div>
            <pre><code class="language-c">${prog.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
          <div class="output-box">
            <div class="output-header">▶ Expected Output</div>
            ${prog.output.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    });
    document.getElementById('codes-container').innerHTML = codeHTML;

    // Render Viva Questions
    let vivaHTML = '';
    if (prac.vivaQuestions && prac.vivaQuestions.length > 0) {
      vivaHTML = `
        <div class="viva-section">
          <h2>🗣️ Viva Prep</h2>
          <p>Common questions asked by professors during Viva exams.</p>
          <div class="accordion">
            ${prac.vivaQuestions.map(v => `
              <div class="accordion-item" onclick="this.classList.toggle('active')">
                <div class="accordion-header">${v.q}</div>
                <div class="accordion-body">${v.a}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Render Quiz
    let quizHTML = `
      ${vivaHTML}
      <div class="quiz-section" id="quiz-block">
        <h3>🧠 Quick Check!</h3>
        <p class="quiz-question">${prac.quiz.question}</p>
        <div class="quiz-options">
          ${prac.quiz.options.map((opt, i) => `
            <div class="quiz-option" onclick="checkAnswer(this, ${opt.isCorrect})">
              ${opt.text}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    document.getElementById('quiz-container').innerHTML = quizHTML;
    
    // Trigger Prism.js to highlight the new code blocks
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }
});

// No highlightC function anymore! Prism.js handles it.

window.checkAnswer = function(elem, isCorrect) {
  // Reset siblings
  Array.from(elem.parentElement.children).forEach(child => {
    child.classList.remove('selected', 'correct', 'wrong');
  });
  
  elem.classList.add('selected');
  
  if (isCorrect) {
    elem.classList.add('correct');
    elem.innerHTML += ' ✅ Correct!';
  } else {
    elem.classList.add('wrong');
    elem.innerHTML += ' ❌ Oops, try again!';
  }
}
