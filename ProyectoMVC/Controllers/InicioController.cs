using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Mvc;

public class InicioController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Hola()
    {
        return View();
    }
    public IActionResult Registro()
    {
        return View();
    }
}