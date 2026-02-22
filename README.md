1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    ans:

 a.   getElementById ---> একটি ID দিয়ে শুধু একটি element ফেরত দেয় |

    b. getElementsByClassName----> class নাম দিয়ে একাধিক element ফেরত দেয় |

 c.querySelector ----> প্রথম matching element ফেরত  দেয় |

    d. querySelectorAll---> সব matching element ফেরত - দেয়, যেটা NodeList আকারে থাকে |



2. How do you create and insert a new element into the DOM?

    ans:
    
      আমরা document.createElement() ব্যবহার করি। তারপর সেই element এ content যোগ করে appendChild()  দিয়ে DOM এ 
      
      বসাই |

 3. What is Event Bubbling? And how does it work?

    ans:

    ইভেন্ট বাবলিং হলো JavaScript এর একটি মেকানিজম, যেখানে কোনো child element এ event ঘটলে সেই event ধাপে ধাপে তার parent element পর্যন্ত উপরে 
    
    propagate হয় |

    #########  Event বাবলিং মানে হলো event নিচ থেকে উপরে ওঠা |


    কাজ করে :

     তোমার কাছে একটা parent <div> আছে, তার মধ্যে একটা child <button> আছে। যদি তুমি দুটোতেই click event বসাও, তাহলে যখন child এ click 
       
       করবে, প্রথমে child এর event trigger হবে, তারপর সেই event parent এ চলে যাবে |


 4. What is Event Delegation in JavaScript? Why is it useful?

    ans:
        Event Delegation: হলো JavaScript এর একটি technique যেখানে আমরা parent element এ event listener বসাই, আর সেই listener child elements এর event ধরতে পারে।

    কাজ করে:

 তোমার কাছে একটা <ul> আছে, তার মধ্যে অনেকগুলো <li> আছে। যদি প্রতিটি <li> তে আলাদা আলাদা click listener বসাও, তাহলে কোড অনেক বড় হয়ে যাবে। কিন্তু Event Delegation ব্যবহার করলে শুধু parent <ul> এ listener বসালেই সব <li> এর click event ধরা যাবে |


5.  What is the difference between preventDefault() and stopPropagation() methods?

    ans:
        preventDefault() → browser এর default কাজ বন্ধ করে (যেমন link এ click করলে redirect না হওয়া, form submit না হওয়া)।
        
        stopPropagation() → event parent element এ bubble হওয়া বন্ধ করে




     


