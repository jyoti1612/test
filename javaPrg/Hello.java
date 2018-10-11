public class Hello {
 public static void main(String[] args) {

 // autoboxin & unboxing
    // Integer==wrapper class
    System.out.println("\n[+++] autoboxing and unboxing"); 
    Integer j = 6; // autoboxing of int to Integer wrapper object
    System.out.println(j);
    j =  j - 2;   // unboxing done, where the Integer object value back to int
    System.out.println(j); 
  //Variables Definition and Initialization
  //  ArithMatic oprators+++++++++++++++++++++++++++++ 
   System.out.println("\n[+++] ArithMatic oprators");
   int number1 = 12, number2 = 4;

  //Addition Operation
  int sum = number1 + number2;
  System.out.println("Sum is: " + sum);

  //Subtraction Operation
  int dif = number1 - number2;
  System.out.println("Difference is : " + dif);

  //Multiplication Operation
  int mul = number1 * number2;
  System.out.println("Multiplied value is : " + mul);

  //Division Operation
  int div = number1 / number2;
  System.out.println("Quotient is : " + div);

  //Modulus Operation
  int rem = number1 % number2;
  System.out.println("Remainder is : " + rem);

  //Unary oprators+++++++++++++++++++++++++++++
    System.out.println("\n[+++] Unary oprators");
  int r = 6;
  System.out.println("r=: " + r++);
  System.out.println("r=: " + r);
  
  int x = 6;
  System.out.println("x=: " + x--);
  System.out.println("x=: " + x);
  
  int y = 6;
  System.out.println("y=: " + ++y);

  int p = 6;
  System.out.println("p=: " + --p);

  // End ++++++++++++++++++++++++++++++++++
  System.out.println("\n[+++] BitWise oprators");
  //BitWise operators-It can be applied to integer types and bytes
  int num1 = 30, num2 = 30, num3 =0;

  //Bitwise AND
  System.out.println("num1 & num2 = " + (num1 & num2));
  
  //Bitwise OR
  System.out.println("num1 | num2 = " + (num1 | num2) );
  
  //Bitwise XOR
  System.out.println("num1 ^ num2 = " + (num1 ^ num2) );
  
  //Binary Complement Operator
  System.out.println("~num1 = " + ~num1 );

  //Binary Left Shift Operator
  num3 = num1 <<  2;
  System.out.println("num1 << 1 = " + num3 );

  //Binary Right Shift Operator
  num3 = num1 >>  2;
  System.out.println("num1 >> 1  = " + num3 );

  //Shift right zero fill operator
  num3 = num1 >>> 2;
  System.out.println("num1 >>> 1 = " + num3 ); 

// Compound assignment ++++++++++++++++++++++++++++++++++++
System.out.println("\n[+++] Compound assignment");
  //Simple assigns
  byte bt = 24;
  System.out.println("bt: " + bt);
  
  //Increments then assigns
  bt += 10; //same as bt=bt+10
  System.out.println("bt: " + bt);
  
  //Decrements then assigns
  bt -= 2;
  System.out.println("bt: " + bt);
  
  //Multiplies then assigns
  bt *= 2;
  System.out.println("bt: " + bt);
  
  //Divides then assigns
  bt /= 2;
  System.out.println("bt: " + bt);
  
  //Modulus then assigns
  bt %= 7;
  System.out.println("bt: " + bt);
  
  //Binary Left Shift  and assigns
  bt <<= 3;
  System.out.println("bt: " + bt);

  //Binary Right Shift and assigns
  bt >>= 4;
  System.out.println("bt: " + bt);
  
  //Shift right zero fill and assigns
  bt >>>= 1;
  System.out.println("bt: " + bt);
  
  //Binary AND assigns
  bt &= 4;
  System.out.println("bt: " + bt);

  //condition oprartor+++++++++++++++++++
  System.out.println("\n[+++] condition oprartor");
  String out;
  int  a = 6, b = 12;
  out = a==b ? "Yes":"No";
  System.out.println("Ans: "+out);

  //Java methods and their uses
  System.out.println("\n[+++] Java methods and their use");
  Integer g = 6;
  Integer d = 4;
  Double c = Double.valueOf(5);
  Float fl = Float.valueOf("62");
  System.out.println(g.compareTo(6));
  System.out.println(g.compareTo(4));

  System.out.println(g.equals(d));
  System.out.println(c);
  System.out.println(fl);

  Integer h = 22;
  System.out.println(h.toString());
  System.out.println(Integer.toString(22));

  Integer val = -5;
  System.out.println(Math.abs(val));

  double val2 = -200.456;
  System.out.println(Math.ceil(val2));
  System.out.println(Math.floor(val2));

  //Predefined methods and charecter classes +++++++++++++++++++++++
  Character letterFour = new Character('d');
  Character letter = 'g';
  System.out.println("\n[+++] Predefined methods and charecter classes");
   System.out.println(Character.isLetter('g')); // true
  System.out.println(Character.isLetter('6')); // false
  System.out.println(Character.isDigit('8')); // true
  System.out.println(Character.isWhitespace('\t')); // true
  System.out.println(Character.isUpperCase('k')); // false
  System.out.println(Character.isLowerCase('G')); // false
  System.out.println(Character.toUpperCase('d')); // C
  System.out.println(Character.toLowerCase('K')); // c
  System.out.println(Character.toString('S')); // C

  //arrays +++++++++++++++++++++++
  System.out.println("\n[+++] Java arrays");
    int[] newArray = new int[5]; // same as int age[5]={22,25,30,32,35};

    // Initializing elements of array seperately
    for (int n = 0; n < newArray.length; n++) {
        newArray[n] = n;
    }
    System.out.println(newArray[2]); // Assigning 2nd element of array value
    }
}