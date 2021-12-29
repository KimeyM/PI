export default function validate(input) {
    let errors = {}
    if(!/^.{0,32}$/.test(input.name)){
        errors.name = "The name should be less than 32 characters";
    }
    if(!/^.{0,16}$/.test(input.duration)){
        errors.duration = "The duration should be less than 16 characters"
    }

    return errors
}