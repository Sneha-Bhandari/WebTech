try {
   // Window.printme();

   console.log("log after error");
} catch (error) {
    console.log("========================="+error);
    throw new Error(error);
} finally {
    console.log("This is finally block");
}

