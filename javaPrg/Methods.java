// Pass by refference
public class Methods {
    public void printOut(StringBuffer str2) {
        str2.append("Reference");
        System.out.println(str2); // prints passBy reference
    }
    public static void main(String argu[]) {
        Methods newMethod = new Methods();
        StringBuffer str1 = new StringBuffer("passBy ");
        newMethod.printOut(str1);
        System.out.println(str1); // prints passBy reference
    }
}

// Pass by value
// public class Methods {
//  public static void main(String argu[]) {
//   int val1 = 62;
//   int val2 = 8;
//   int res = fun(val1, val2);
//   System.out.println("Addition is: " + res);
//  }

//  public static int fun(int g1, int g2) {
//   int ans;
//   ans = g1 + g2;
//   return ans;
//  }
// }