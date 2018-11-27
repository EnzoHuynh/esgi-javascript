function type_check_v1(arg1, arg2) {

    if (typeof(arg1) === typeof(arg2) || typeof(arg2) === null || typeof(arg1) === 'object' ) {
        return true;
    } else if (typeof(arg1) && typeof(arg2)) {
       return true;
    } else {
        return false;
    }
}

console.log(type_check_v1(null, 'object'));