/*1.Constructors are special member functions whose task is to initialize the objects of its class. 
2.cannot be private., cannot return a value.,do not have a return type; not even void,can be overloaded.
3.Constructors name must be similar to that of the class name inside which it resides.
4.Constructors are automatically called when an object is created.
5.constructor cannot be abstract, static, final, native, strictfp, or synchronized
Two Types >>>
1.Default 2.parameterised
*/

// Eg: default Constructors
// import java.util.*;
// import java.lang.*;
// import java.io.*;

// class Constructors{
//     int roll = 101;
//     String grade="Manager";
//     void display(){
//         System.out.println(roll+" "+grade);
//     }
    
//     public static void main(String args[]){
//         Constructors c1 = new Constructors();
//         Constructors c2 = new Constructors();
//         c1.display();
//         c2.display();
//     }
// }

//2.Parameterised
import java.util.*;
import java.lang.*;
import java.io.*;

class Constructors{
    Constructors(int a, int b){
        System.out.print("Parameterized Constructor");
        System.out.println(" having Two parameters");
    }
    
    Constructors(int a, int b, int c){
        System.out.print("Parameterized Constructor");
        System.out.println(" having Three parameters");
    }

    public static void main(String args[]){
        Constructors pc1 = new Constructors(12, 12);
        Constructors pc2 = new Constructors(1, 2, 13);
    }
}