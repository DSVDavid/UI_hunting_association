// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
 });

 $(document).ready(function(){
    $('select').formSelect();
  });

  

  function clearRows(){
    var trs=document.getElementsByTagName('TR');
    const l=trs.length;

    for(var i=0;i<l;i++){
        // console.log(trs[i]);
        trs[i].classList.remove("grey");
        trs[i].classList.remove("lighten-1");
    }

    

  }

  function selectItem(currentEl){
      var el =document.getElementById("newUserBtn");
      var myForm = document.getElementById("userDetailsForm");
      el.classList.remove("darken-3");
      el.classList.add("darken-4");
      
      clearRows();

      currentEl.classList.add("grey");
      currentEl.classList.add("lighten-1");

        for(var i=0; i<currentEl.childNodes.length;i++){
            var userId;
            switch(currentEl.childNodes[i].className){
                case "user-username":
                    console.log(currentEl.childNodes[i].innerHTML);
                    break;
                case "user-email":
                    document.getElementById("email").value=currentEl.childNodes[i].innerHTML;
                    break;
                case "user-cnp":
                    document.getElementById("cnp").value=currentEl.childNodes[i].innerHTML;
                    break;
                case "user-name":
                    document.getElementById("first_name").value=currentEl.childNodes[i].innerHTML;
                    break;
                case "user-surname":
                    document.getElementById("last_name").value=currentEl.childNodes[i].innerHTML;
                    break;
                case "user-userid":
                    document.getElementById("userid").value=currentEl.childNodes[i].innerHTML; 
                    console.log(currentEl.childNodes[i].innerHTML);
                    userId= currentEl.childNodes[i].innerHTML; 
                    break;
                case "user-license":
                    document.getElementById("license").value=currentEl.childNodes[i].innerHTML;  
                    break;
                case "user-insurance":
                    document.getElementById("insurance").value=currentEl.childNodes[i].innerHTML;      
                    break;
                case "user-pass":
                    document.getElementById("password").value=currentEl.childNodes[i].innerHTML;     
                    break;
                
            }
            console.log(userId);
            var asocs=document.getElementById(`user-asoc-${userId}`);
            
            var asocNames=[];
            var asocFuncts=[]; 

            for(var j=0;j<asocs.childNodes.length;j++){
                    var findId=asocs.childNodes[i].className;
                    switch(findId){
                        case "user-asoc-name":
                            asocNames.push(asocs.childNodes[i].innerHTML);
                            break;
                        case "user-asoc-function":
                            asocFuncts.push(asocs.childNodes[i].innerHTML);
                            break;
                    }
            }
            console.log(asocNames);
            console.log(asocFuncts);
            
        }

      
        $(function() {
            M.updateTextFields();
        });

      myForm.action="/update_user/id"
      
  }

  function newUser(){
        var el =document.getElementById("newUserBtn");
        el.classList.add("darken-3");
        el.classList.remove("darken-4");
        clearRows();

        var myForm = document.getElementById("userDetailsForm");
        
        myForm.reset();
        myForm.action="/create_new_user"

  }

  var previousValues=[]

  document.getElementById('association_select').addEventListener("change",function(e){
    
      const parentEl=document.getElementById("assoc_functions");
      var values = $('#association_select').val();
      
    //   console.log(values);

      var child = parentEl.lastElementChild;  

      while (child) { 
          parentEl.removeChild(child); 
          child = parentEl.lastElementChild; 
      } 

      
      values.forEach(v=>{
        console.log(v);
        
        const idName=`function_select_${v}`;
       
        
        const labelAssoc=`<label class="black-text">Functie ${v} :</label>`;
        var selectOptionTemplate;
        selectOptionTemplate=`<div id="div_select_${v}" class="input-field col">`+
        `<select id="function_select_${v}" name="function_select_${v}" class=" lime darken-3" >`+
        `<option value="" disabled>Select functie</option>`;

        

        functions.forEach(f=>{
            const val=f[0];
            const name=f[1];
            const optionTemplate=`<option value="${f[0]}" >${f[1]}</option>`;
            selectOptionTemplate+=optionTemplate;
            
        });
        
        selectOptionTemplate+='</select>';
         selectOptionTemplate+=labelAssoc;
        selectOptionTemplate+='</div>'


        parentEl.innerHTML+=selectOptionTemplate;

       
        

      })
      
      $('select').formSelect();
     
      
      
  })
 
  