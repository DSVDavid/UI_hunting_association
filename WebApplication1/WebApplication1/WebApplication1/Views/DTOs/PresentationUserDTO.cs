using System.Collections.Generic;

namespace WebApplication1.Views.DTOs
{
    public class PresentationUserDTO
    {
        public int Id{get;set;}
        public string Name{get;set;}
        public string Surname{get;set;}

        public string Password{get;set;}

        public string Email{get;set;}

        public string Insurance{get;set;}

        public string Cnp{get;set;}

        public string License{get;set;}

        public List<AssocMemberDTO> asociations;


    }
}