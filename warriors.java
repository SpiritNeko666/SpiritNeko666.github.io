import java.util.Scanner;
 class Main {
public static void main(String[] args)
{
// Using Scanner, define the variables below with user input Strings for each word. 
Scanner myObj = new Scanner(System.in); // Create a Scanner object
System.out.println("Name Your Charater");
String name =myObj.nextLine();
System.out.println("Name Your Clan");
String clan = myObj.nextLine();
System.out.println("Name Your Rank");
String rank =myObj.nextLine();


System.out.println("Your Cat Is:");
System.out.println(name);
System.out.println(rank + " of " + clan );

}
}
