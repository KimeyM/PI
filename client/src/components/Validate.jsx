export default function validate(input) {
    let errors = {};
    if(!/^.{3,32}$/.test(input.name)){
        errors.name = "The name should be 3-32 characters";
    };
    if(!/^.{3,16}$/.test(input.duration)){
        errors.duration = "The duration should be 3-16 characters"
    };
    return errors;
};