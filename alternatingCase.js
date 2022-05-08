String.prototype.toAlternatingCase = function () {
    return Array.from(this).map(c => c === c.toLowerCase() ? c.toUpperCase(): c.toLowerCase()).join('');
}