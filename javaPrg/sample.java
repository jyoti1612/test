//super keyword
/* 1.Super variables refer to the variable of a variable of the parent class.
2.Super() invokes the constructor of immediate parent class.
3.Super refers to the method of the parent class.*/

// class employee {
//  int wt = 8;
// }

// class sample extends employee {
//  int wt = 10;  //work time
//  void display() {
//   System.out.println(super.wt); //will print work time of sample
//  }

//  public static void main(String args[]) {
//   sample c = new sample();
//   c.display();
//  }
// }
//  +++++++++++++++++++++++++++++++++++++

//Final keyword
/* 1.Final is a keyword in Java that is used to restrict the user and can be used in many respects.
2. Final can be used with: 
Class: When a class is declared as final, it cannot be extended further. ,
Methods: A method declared as final cannot be overridden;this means even when a sample class can call the final method of parent class without any issues, but the overriding will not be possible. ,
Variables:it always contains the same exact value. ,*/


// Polymorphism
/* Polymorphism: single interface with multiple implementations
Polymorphism can be achieved in two of the following ways:
1.Method Overloading(Compile time Polymorphism)
2.Method Overriding(Run time Polymorphism)*/

// 1.Method Overloading
// class Mltply {
//     void mul(int a, int b) {
//     System.out.println("Sum of two=" + (a * b));
//     }
//     void mul(int a, int b, int c) {
//     System.out.println("Sum of three=" + (a * b * c));
//     }
// }
// class sample {
//  public static void main(String args[]) {
//   Mltply m = new Mltply();
//   m.mul(6, 10);
//   m.mul(10, 6, 5);
//  }
// }

// 2.Method Overriding

// class parent {
//  public void work() {
//   System.out.println("Parent is under retirement from work.");
//  }
// }
// class sample extends parent {
//  public void work() {
//   System.out.println("sample(child) has a job");
//   System.out.println("He is doing it well");
//  }
//  public static void main(String argu[]) {
//   sample c1 = new sample();
//   c1.work();
//  }
// }

//Abstarction
// 1.abstraction is a process of hiding the implementation details from the user, only the functionality will be provided to the user.
// 2.Abstract method does not contain any method body
// abstract class cycle {
//  abstract void work();
// }

// class sample extends cycle {
//  void work() {
//   System.out.println("Selling good");
//  }
 
//  public static void main(String argu[]) {
//   cycle o = new sample();
//   o.work();
//   System.out.println("Code executed");
//  }
 
// }

//Encapsulation
/*1.encapsulation is a way of packaging data and methods together into one unit
2.. Encapsulation gives us the ability to make variables of a class keep hidden from all other classes of that program or namespace. Hence, this concept provides programmers to achieve data hiding.*/