// public class egStatic {
//  static int x = 60;
//  static void fun() {
//   System.out.println("Within Static");
//  }
//  public static void main(String[] args) {
//   egStatic.fun();
//   System.out.println(egStatic.x);
//   egStatic S1 = new egStatic();
//   egStatic S2 = new egStatic();
//   System.out.println(S1.x);
//   S1.fun();
//  }
// }

class egStatic {
 int e_id;
 String name;

 egStatic(int e_id, String name) {
  this.e_id = e_id;
  this.name = name;
 }
 void show() {
  System.out.println(e_id + " " + name);
 }
 public static void main(String args[]) {
  egStatic e1 = new egStatic(1006, "Karlos");
  egStatic e2 = new egStatic(1008, "Ray");
  e1.show();
  e2.show();
 }
}