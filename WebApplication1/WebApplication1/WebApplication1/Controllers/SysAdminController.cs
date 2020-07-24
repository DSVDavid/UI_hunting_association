using System;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using HuntingAssociation.Models;
using WebApplication1.Views.DTOs;

namespace HuntingAssociationUI.Controllers
{
    public class SysAdminController:Controller
    {
        public IActionResult Index(){
            List<UserFunction> functions=new List<UserFunction>();
            List<Association> associatinos=new List<Association>();


            UserFunction f1=new UserFunction();
            f1.FunctionName="Director";
            f1.Id=1;

            UserFunction f2=new UserFunction();
            f2.FunctionName="Sef";
            f2.Id=2;

            functions.Add(f1);
            functions.Add(f2);

            Association a1=new Association();
            a1.Name="Rad SRL";
            a1.Id=1;
            associatinos.Add(a1);

            Association a2=new Association();
            a2.Name="Voicu Sabie SA";
            a2.Id=2;
            associatinos.Add(a2);

            Association a3=new Association();
            a3.Name="Gion SRL";
            a3.Id=3;
            associatinos.Add(a3);


            PresentationUserDTO p1=new PresentationUserDTO();
            p1.Id=1;
            p1.Name="Ionut";
            p1.Surname="Gion";
            p1.Email="aaa@yahoo.com";
            p1.Password="123456";
            p1.Cnp="123456789";
            p1.Insurance="987654321";
            p1.License="222222222";
            
            AssocMemberDTO as1=new AssocMemberDTO();
            AssocMemberDTO as2=new AssocMemberDTO();

            as1.Function=1;
            as1.AssocName="Rad Horatiu SRL";
            
            as2.Function=2;
            as2.AssocName="Voicu Sabie SA";

            p1.asociations=new List<AssocMemberDTO>();
            p1.asociations.Add(as1);
            p1.asociations.Add(as2);


            List<PresentationUserDTO> presentationUsers=new List<PresentationUserDTO>();
            presentationUsers.Add(p1);

            ViewBag.UserName="Admin Bo$$";
            ViewBag.Role="SysAdmin";
            
            ViewData["Functions"]=functions;
            ViewData["Associations"]=associatinos;

            
            ViewData["Users"]=presentationUsers;

            return View();
        }
    }
}