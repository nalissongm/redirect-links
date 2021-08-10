$(window).on('load',function(){

    class Links{
        constructor(){
            this.Lwhatsapp();
            this.Lmessenger();
            this.Ltelegram();
            this.Ltelegram();
            this.Lemail();
            this.Lfacebook();
            this.Linsta();
            this.Llinkedin();
        }
        
        Lwhatsapp(){
            var phone = "+558881896397";
            var msg = "Oi! Quero mudar a forma que me encontram na internet!";

            var whatsapp = $('#whatsapp');
            whatsapp.click(function(){
                let msg_encode = encodeURI(msg);
                location.href = "https://web.whatsapp.com/send?phone="+phone+"&text="+msg_encode;
            })
        }

        Lmessenger(){
            var chat = "nalisson.gomes.94";

            var messenger = $('#messenger');
            messenger.click(function(){
                location.href = "https://m.me/"+chat;
            })
        }

        Ltelegram(){
            var userT_me = "NalissonGM";

            var telegram = $('#telegram');
            telegram.click(function(){
                location.href = "https://t.me/"+userT_me;
            })
        }

        Lemail(){
            var userEmail = "nalissongm.pro@gmail.com";
            var assuntoE = "Assunto do email";
            var bodyE = "Olá! Estou entrando em contato, pois...";

            let ass_encode = encodeURI(assuntoE);
            let body_encode = encodeURI(bodyE);
            var link = "mailto:"+userEmail+"?Subject="+ass_encode+"&Body="+body_encode;
            
            var getElement = document.getElementById("email");
            getElement.setAttribute("href",link);
            
        }

        Lfacebook(){
            var userFace = "nalisson.gomes.94";

            var facebook = $("#facebook");
            facebook.click(function(){
                location.href = "https://www.facebook.com/"+userFace;
            })
        }

        Linsta(){
            var userInsta = "nalissongomes.dev";

            var insta = $("#insta");
            insta.click(function(){
                location.href = "https://www.instagram.com/"+userInsta;
            })
        }

        Llinkedin(){
            var userLi = "nalisson-gomes-87a6991a7";

            var linkedin = $("#linkedin");
            linkedin.click(function(){
                location.href = "https://www.linkedin.com/in/"+userLi;
            })
        }
    }

    new Links();
})
