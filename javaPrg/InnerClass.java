
// Local Method Inner Classes
/* Java programmers have provision to create or define a class inside a method,
 and its type will be local. Like that of local variables, 
 the inner class has a scope restricted within the curly braces of the method. */

// public class InnerClass {
//     void fun() {
//         int val = 84;
//         // local-method inner class
//         class InnerMeth {
//             public void disp() {
//                 System.out.println("Inner class method: "+val);   
//             }
//         } // end of inner class   
//         // Accessing the inner class
//         InnerMeth in = new InnerMeth(); in .disp();
//     }

//     public static void main(String argu[]) {
//         InnerClass out = new InnerClass();
//         out.fun();
//         System.out.println("Program done….");
//     }
// }


// Anonymous Inner Class
/* An inner class having no class name of its own is termed as an anonymous inner class. 
For anonymous inner classes, you have to state them, i.e.define and instantiate these classes at the same time.
These type of anonymous classes comes handy where programmers need to override methods of a class or interface within a program.*/

abstract class anonInner {
 public abstract void fun();
}

public class InnerClass {
 public static void main(String argu[]) {
  anonInner in = new anonInner() {
   public void fun() {
    System.out.println("Anonymous Inner class executed….");
   }
  }; in .fun();
 }
}