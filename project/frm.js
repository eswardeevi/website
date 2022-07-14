     function validate()
        {
            var fn=document.getElementById("fn").value;
            var patn=/^[a-z|A-Z]*$/;
            if(fn.length<4)
            {
                document.getElementById("fn").style.border="4px Solid red";
                document.getElementById("i1").style.visibility="visible";
                return false;
            }
            if(!patn.test(fn)){
                document.getElementById("fn").style.border="4px Solid red";
                document.getElementById("i1").style.visibility="visible";
                return false;
            }
             var mn=document.getElementById("mn").value;
             if(mn!=null){
                if(!patn.test(mn))
                { document.getElementById("i3").style.visibility="visible";
                 return false;}

               
             }
             else{return true;}
            var ln=document.getElementById("ln").value;
            if(ln.length<4)
            {
                document.getElementById("ln").style.border="2px Solid red";
                document.getElementById("i3").style.visibility="visible";
                return false;
            }
            var mail=document.getElementById("email").value;
            var patem=/^[a-z|A-Z|0-9]*\.?([a-z|A-Z|0-9]*)@[a-z]{2,7}(\.[a-z]{2})?\.[a-z]{2,3}$/;
            if(!patem.test(mail))
            {
                document.getElementById("email").style.border="4px Solid red";
                document.getElementById("i8").style.visibility="visible";
                return false;
            }
            
            var c=document.getElementById("country").value;
            var PH=document.getElementById("phn").value;
            var patph1=/^[0-9]{10}$/;
            var patph2=/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
            if(c==document.getElementById("ind").value)
            {
                if(!patph1.test(PH))
                {
                    document.getElementById("phn").style.border="4px Solid red";
                    document.getElementById("i5").style.visibility="visible";
                    return false;
                }
            }
            if(c==document.getElementById("usa").value)
            {
                if(!patph2.test(PH))
                {
                    document.getElementById("phn").style.border="4px Solid red";
                    document.getElementById("i5").style.visibility="visible";
                    return false;   
                }
            }
        } 
        function fullName()
        {
            var f=document.getElementById("fn").value;
            var l=document.getElementById("ln").value;
            document.getElementById("Fn").value=f+l;
        }
        function show()
        {
            if(document.getElementById("psw").type=="password")
            {
                document.getElementById("psw").type="text";
                document.getElementById("eye").src="https://th.bing.com/th/id/R.ef061ba1cadcab70cd23185dfe100b3e?rik=q6pDZPgm64IuVg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_326005.png&ehk=goSMlHLB66IeXFd6eKkjjRjAveJld8cs35TqqpJ%2bqWw%3d&risl=&pid=ImgRaw&r=0";
           
            }
            else
            {
                document.getElementById("psw").type="password";
           
                document.getElementById("eye").src="https://th.bing.com/th/id/OIP.V3pwYP1jK0L2sL54ZZax-QAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7";
                
            }
        }