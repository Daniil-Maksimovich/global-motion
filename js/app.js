$(function () {
    // AOS

    AOS.init()

    $("img").on('mousedown', function(){
        return false
    })

    // form validation

    const inputs = document.querySelectorAll('form input[name="name"], form input[name="phone"]');
    const submitBtn = document.querySelector('form button[type="submit"]');

    const checkInputValidation = () => {
        let flag = false;
        inputs.forEach(input => {
            input.className === 'valid' ? flag = true : flag = false;
        });
        return flag
    }
    inputs.forEach(input => {
        input.addEventListener('input', e => {
            const {
                value,
                pattern
            } = e.target;
            if (value.match(pattern)) {
                e.target.className = "valid";
            } else {
                e.target.className = "invalid";
            }
            if (!pattern) {
                if (value.length >= 3) {
                    e.target.className = "valid";
                } else {
                    e.target.className = "invalid";
                }
            }
            if (checkInputValidation()) {
                submitBtn.disabled = false;
            }
        });
    });

    const forms = document.querySelectorAll('form');
    

    // submit form
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
    
            // button animation
            const submitBtnText = form.querySelector('form button span');
            const submitBtnImg = form.querySelector('form button img');

            submitBtn.disabled = true;
            submitBtn.style.opacity = "1";
            submitBtnText.classList.remove('active');
            setTimeout(() => {
                submitBtnText.style.display = 'none';
                submitBtnImg.style.display = 'inline-block';
                submitBtnImg.classList.add('active');
            }, 200);
    
            // collecting input values
    
            const leadForm = e.target;
            const leadFormElements = leadForm.elements;
    
            // sending data
    
            // $.ajax({
            //     method: $(this).attr('method'),
            //     url: $(this).attr('action'),
            //     type: "POST",
            //     dataType: 'json',
            //     data: {name: leadFormElements[0].value, phone: leadFormElements[1].value, index: 9}, // index is for google sheets sheet index
            //     success: (res) => {
            //         if (res.status) {
            //             submitBtnText.innerText = 'Спасибо!';
            //             submitBtnImg.style.display = 'none';
            //             submitBtnText.style.transform = 'scale(1)';
            //             submitBtnText.style.display = 'inline';
            //         } else {
            //             submitBtnText.innerText = 'Повторите попытку позже';
            //             submitBtnImg.style.display = 'none';
            //             submitBtnText.style.display = 'inline';
            //             submitBtnText.style.transform = 'scale(1)';
            //         }
            //     }
            //   });
        });
    });
});