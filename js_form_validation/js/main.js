 document.querySelector('#signup').onclick = function () {
                var name = document.querySelector('#name').value;
                var email = document.querySelector('#email').value;
                var pass = document.querySelector('#pass').value;
                var confirm_pass = document.querySelector('#confirm_pass').value;
                checkk = document.querySelector('#agree-term');
                //           document.querySelector('pre').innerHTML = name.concat(' ', email, ' ', confirm_pass);
                if (name == '' || email == '' || pass == '' || confirm_pass === null ||checkk.checked==false){
                    document.querySelector('pre').textContent = 'Fields must not be empty';
                }
                else if (pass.length < 6) {
                    document.querySelector('pre').textContent = 'Password length is too small   ';
                }
                else if (pass != confirm_pass) {
                    document.querySelector('pre').textContent = 'Passwords must match';
                }
                else{
                    document.querySelector('pre').textContent = 'successfully Registered';
                }
            }
            
            document.querySelector('#signin').onclick = function (){
                users =['charles','chinonso', 'victor', 'onyedikachi'];
                passes =[1234, 4321, 5678, 8765];
                var username = document.querySelector('#your_name').value.toLowerCase();
                var password = Number(document.querySelector('#your_pass').value);
                if(users.includes(username) && passes.includes(password)){
                    if(users.indexOf(username)== passes.indexOf(password)){
                        alert('welcome back!');
                    }
                     else{
                    alert('Wrong details');
                }
                }
            }
