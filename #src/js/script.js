"use strict";
$('.burger__icon').on('click', function () {
    $(this).toggleClass('active');
    $('.header-mobile').slideToggle();
    $('body').toggleClass('overley')
});
// range-input
let sliderQuantity = document.querySelector('#quantity-pay');
let sliderTerm = document.querySelector('#term-pay');
let enterItem = $('.enter__item-flex ');

if (sliderQuantity) {
    let inputTextValue = $('#input-quantity')
    noUiSlider.create(sliderQuantity, {
        start: 4,
        step: 1,
        connect: [true, false],
        animate: false,
        range: {
            min: 0,
            max: 14
        },
    });
    inputTextValue.on('change', function () {
        let val = +inputTextValue.val()
        sliderQuantity.noUiSlider.set([val, null])
    })
    sliderQuantity.noUiSlider.on('update', function (values, handle) {
        inputTextValue.val(+values[handle])
    })
}
if (sliderTerm) {
    let inputTextValue = $('#input-term')
    noUiSlider.create(sliderTerm, {
        start: 90,
        step: 5,
        connect: [true, false],
        animate: false,
        range: {
            min: 10,
            max: 115
        }
    });
    inputTextValue.on('change', function () {
        let val = +inputTextValue.val()
        sliderTerm.noUiSlider.set([val, null])
    })
    sliderTerm.noUiSlider.on('update', function (values, handle) {
        inputTextValue.val(+values[handle])
    })
}
if (enterItem) {
    enterItem.on('click', function (event) {
        event.preventDefault()
        $(this).parent().toggleClass('active')
        if ($(this).parent().hasClass('enter__item--camera')) {
            startCamera()
        }
    })
    $('#photo-new').on('click', function () {
        $('.enter-photo__done').hide()
        $('#photo-do').show()
        startCamera()
    })
}

// range-input end

// show more

let showMore = $('.buy-choose__showMore')

showMore.on('click', function () {
    $(this).toggleClass('active')

    if ($(this).data('type') === 'full-buy') {
        $('.all-payments').slideToggle()
    } else if ($(this).data('type') === 'credit-buy') {
        $('.parts-payments').slideToggle()
    } else {
        $(this).parents('.buy-choose__head').next().slideToggle()
    }
})


// show more end

// questions
let questionItem = $('.item-question');
let questionItemHead = $('.item-question__head');
let questionAsideItem = $('.questions-aside__elem')
let questionContentItem = $('.questions-content__block')

questionItemHead.on('click', function () {
    $(this).parent().toggleClass('active')
})
questionAsideItem.on('click', function () {
    questionAsideItem.removeClass('active')
    questionContentItem.removeClass('active')
    $(this).addClass('active')
    let index = $(this).index()
    questionContentItem.eq(index).addClass('active')
})

// questions end

// forms
$('input[name="phone"]').mask("+380(ZZ)ZZZ-ZZ-ZZ", {
    translation: {
        'Z': {
            pattern: /[0-9]/,
            optional: true
        },
        '0': { pattern: /\d/ },
    },
    placeholder: "+380(_ _) _ _ _-_ _-_ _"
});
$('input[name="sms-code"]').mask("0000");
$('input[name="date-day"]').mask("00");
$('input[name="date-mouth"]').mask("00");
$('input[name="date-year"]').mask("0000");
let form2Step = document.querySelector('#step2-form');
let documentChoosen = $('.document-choosen')
let formSetting = $('#form-setting')
let formPersonal = $('#form-personal')
documentChoosen.on('change', function () {
    if ($(this).val() === 'passport') {
        $('.form-questionnaire__pasports').show()
        $('.form-questionnaire__idCard').hide()
    } else {
        $('.form-questionnaire__idCard').show()
        $('.form-questionnaire__pasports').hide()
    }
})
if (form2Step) {
    let nextStepBtn = $('.next-step');
    let formStep = document.querySelectorAll('.form-step2__item');
    let count = 1;
    let acceptCheck_1 = $('#accept_1')
    let acceptCheck_2 = $('#accept_2')
    let stepPagination = document.querySelectorAll('.step-pagination__item')

    let formSubmitBtn = $('#form2-submit-btn')
    $('.accept-checkboxes').on('change', function () {
        if (acceptCheck_1.is(':checked') && acceptCheck_2.is(':checked')) {
            formSubmitBtn.removeAttr('disabled')
        } else {
            formSubmitBtn.prop('disabled', true)
        }
    })
    documentChoosen.on('change', function () {
        if ($(this).val() === 'passport') {
            $('.form-questionnaire__pasports').show()
            $('.form-questionnaire__idCard').hide()
        } else {
            $('.form-questionnaire__idCard').show()
            $('.form-questionnaire__pasports').hide()
        }
    })
    formSubmitBtn.on('click', function (e) {
        e.preventDefault()
        if (formSubmitBtn.data('btn') === 'next') {
            $('.form-questionnaire').show();
            formSubmitBtn.data('btn', 'submit')
        } else if (formSubmitBtn.data('btn') === 'submit') {
            $('#step2-form').submit();
        }
    })
    const steps = {
        nextStep() {
            if (count != 3) {
                count++
                return count
            }
        },
        prevStep() {
            if (count != 1) {
                count--
                return count
            }
        },
        renderStep() {
            stepPagination.forEach(el => {
                let stepCount = +el.dataset.step
                if (stepCount == count) {
                    el.classList.add('active')
                }
            })
            formStep.forEach(function (el) {
                let stepCount = +el.dataset.step
                if (stepCount == count) {
                    el.classList.add('active')
                } else {
                    el.classList.remove('active')
                }
            })
        },
    }
    $('#step2-form').validate({
        rules: {
            phone: {
                required: true,
                minlength: 7,
            },
            'sms-code': {
                required: true,
            },
            'date-day': {
                required: true,
            }, 'date-mouth': {
                required: true,
            }, 'date-year': {
                required: true,
            },
            surname: {
                required: true
            },
            name: {
                required: true,
            },
            'father-name': {
                required: true,
            },
            IPN: {
                required: true,
            },
            'passport-ser': {
                required: true,
            },
            'passport-num': {
                required: true,
            },
            'passport-day': {
                required: true,
            },
            'passport-mouth': {
                required: true,
            },
            'passport-year': {
                required: true,
            },
            'idCard-num': {
                required: true,
            },
            'idCard-day': {
                required: true,
            },
            'idCard-mouth': {
                required: true,
            },
            'idCard-year': {
                required: true,
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            phone: {
                required: '',
                minlength: ''
            },
            'sms-code': {
                required: '',
            },
            'date-day': {
                required: '',
            }, 'date-mouth': {
                required: '',
            }, 'date-year': {
                required: '',
            },
            'surname': {
                required: 'Має бути заповнено, кирилицею'
            },
            'name': {
                required: 'Має бути кирилицею'
            },
            'father-name': {
                required: 'Має містити лише кирилицю, без спец символів та цифр'
            },
            IPN: {
                required: ''
            },
            'passport-ser': {
                required: ''
            },
            'passport-num': {
                required: ''
            },
            'passport-day': {
                required: 'Має бути заповнено'
            },
            'passport-mouth': {
                required: ''
            },
            'idCard-num': {
                required: ''
            },
            'idCard-day': {
                required: ''
            },
            'idCard-mouth': {
                required: ''
            },
            'idCard-year': {
                required: ''
            },
            'passport-year': {
                required: ''
            },
            email: {
                required: 'Введіть дійсний e-mail'
            }
        }
    })
    nextStepBtn.on('click', e => {
        e.preventDefault();
        if (!$("#step2-form").valid()) {
            return
        }
        steps.nextStep()
        steps.renderStep()
    })

}
if (formPersonal) {
    $('#form-personal').validate({
        rules: {
            surname: {
                required: true
            },
            name: {
                required: true,
            },
            'father-name': {
                required: true,
            },
            IPN: {
                required: true,
            },
            'passport-ser': {
                required: true,
            },
            'passport-num': {
                required: true,
            },
            'passport-day': {
                required: true,
            },
            'passport-mouth': {
                required: true,
            },
            'passport-year': {
                required: true,
            },
            'idCard-num': {
                required: true,
            },
            'idCard-day': {
                required: true,
            },
            'idCard-mouth': {
                required: true,
            },
            'idCard-year': {
                required: true,
            },
        },
        messages: {
            'surname': {
                required: 'Має бути заповнено, кирилицею'
            },
            'name': {
                required: 'Має бути кирилицею'
            },
            'father-name': {
                required: 'Має містити лише кирилицю, без спец символів та цифр'
            },
            IPN: {
                required: ''
            },
            'passport-ser': {
                required: ''
            },
            'passport-num': {
                required: ''
            },
            'passport-day': {
                required: 'Має бути заповнено'
            },
            'passport-mouth': {
                required: ''
            },
            'idCard-num': {
                required: ''
            },
            'idCard-day': {
                required: ''
            },
            'idCard-mouth': {
                required: ''
            },
            'idCard-year': {
                required: ''
            },
            'passport-year': {
                required: ''
            },
        }
    })
}
if (formSetting) {
    $('#form-setting').validate({
        rules: {
            phone: {
                required: true,
                minlength: 7,
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            phone: {
                required: '',
                minlength: ''
            },
            email: {
                required: 'Введіть дійсний e-mail'
            }
        }
    })
}
// forms end

// step3
let checkboxMore = $('.buy-choose__showMore')
checkboxMore.on('click', function () {
    $(this).parents('.review-form__checkbox').toggleClass('showMore')
})
let reviewForm = $('#review-form')
if (reviewForm) {
    reviewForm.validate({
        rules: {
            'sms-code': {
                required: true
            }
        },
        messages: {
            'sms-code': {
                required: ''
            }
        }
    })
}
// step3 end