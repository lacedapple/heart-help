using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Mvc;

public class InicioController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Registro()
    {
        return View();
    }

     public IActionResult AcercaDe()
    {
        return View();
    }

    public IActionResult Principal()
    {
        return View();
    }
    public IActionResult ChatBot()
    {
        return View();
    }

    public IActionResult Calendario()
    {
        return View();
    }
    public IActionResult Finalizado()
    {
        return View();
    }
}