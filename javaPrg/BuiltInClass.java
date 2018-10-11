import java.util.Date;
import java.text.*;

public class BuiltInClass {

    public static void main(String args[]) {
        char[] nameArray = {'A', 'l', 'e', 'x'};
        String name = new String(nameArray);
        System.out.println(name);

        String str1 = "Hello ", str2 = "World!";
        System.out.println(str1.concat(str2));

        Date date = new Date();
        // display current timestamp
        System.out.println(date.getTime());
        SimpleDateFormat dateFormat = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        System.out.println("Current Date: " + dateFormat.format(date));
    }
}