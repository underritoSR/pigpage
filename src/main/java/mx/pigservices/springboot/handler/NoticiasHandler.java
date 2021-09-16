package mx.pigservices.handler;
import java.lang.*;
import java.io.*;
public class NoticiasHandler
{
    public boolean NoticiaSalvar(String llave,String contenido)
    {
        boolean resultado=false;
        try {
            ClassLoader classLoader = getClass().getClassLoader();
            File file = new File(classLoader.getResource(".").getFile() + "/test.xml");
            if (file.createNewFile())
                System.out.println("Archivo Creado!");
            else System.out.println("El archivo ya existe.");
            resultado=true;
        }
        catch(Exception error)
        {
            resultado=false;
        }
        return resultado;
    }
}