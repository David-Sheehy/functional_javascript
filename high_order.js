function repeat(funct, num) {
    if(num <= 0) {
        return;
    }
    funct;
    return repeat(funct, num-1);
}

module.exports = repeat;
